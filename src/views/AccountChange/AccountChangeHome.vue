<template>
  <div class="account-change-home">
    <Header
      :msg="$t('message.accChangeReport')"
      :back="true"
      :HomePage="false"
      :showFilter="true"
      :leftText="$t('message.back')"
      @showFilterDate="showFilterDate()"
    />
    <div class="upper-of-tabs" v-if="showFilter">
      <!-- <van-row class="lottery-bets-info-below" type="flex" justify="space-between">
            <van-col class="lottery-txt" span="12">
                <p>用户名: </p>
                <p>账变类型: </p>
                <p>下级:</p>
                
            </van-col>
            <van-col class="lottery-txt" span="12">
                <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="Username"
                        placeholder="Username"
                    />
                        you can add this inside the username input
                            :rules="[{ required: true, message: 'Username is required' }]"
                </van-form>
                <van-cell is-link @click="showPopup2">所有类型</van-cell>
                <van-popup class="account-change" v-model="show2">
                    <AccountChangeStatemantType/>
                </van-popup>
                <van-checkbox v-model="checked" direction="horizontal"></van-checkbox>
            </van-col>
        </van-row>
        <div class="button-bottom">
            <van-button type="default">取消</van-button>
            <van-button type="danger">确认</van-button>
        </div> -->
      <FilterRecord
        v-if="showFilter"
        :showCheckBox="false"
        @cancel-filter-data="cancelFilter"
        @filter-data="confirmFilter"
      />
    </div>
    <!-- <div class="below-header">
        <p>{{ $t('message.total') }}</p>
        <p>{{ $t('message.totalExpense') }}:4,00{{ $t('message.yuan') }}</p>
        <p>{{ $t('message.totalRevenue') }}:0.00{{ $t('message.yuan') }}</p>
    </div> -->
    <!-- <van-tabs class="AccountChange">
        <van-tab v-for="(item, index) in tabsTitle" :key="index" :title="item.title" >
            <van-cell class="van-cell-user">
                <van-row class="lottery-bets-info-below" type="flex" justify="space-between">
                    <van-col class="account-txt" span="12">
                        <p>wnkjch</p>
                    </van-col>
                    <van-col class="account-txt" span="12">
                        <p>4.00{{ $t('message.yuan') }}</p>
                    </van-col>
                    <van-col class="account-txt" span="12">
                        <p>5039.80{{ $t('message.yuan') }}</p>
                    </van-col>
                </van-row>
            </van-cell>

        </van-tab>
    </van-tabs> -->
    <PullRefresh
      @refreshData="onRefresh"
      @loadData="loadData()"
      :refreshing="refreshing"
      :finished="finished"
      :loading="loading"
    >
      <div
        v-if="fundRecordsFiltred.length > 0"
        slot="list-content"
        class="AccountChange-con"
      >
        <van-cell
          v-for="(item, key) in fundRecordsFiltred"
          :key="key"
          class="van-cell-info"
        >
          <van-row class="lottery-bets-info-below">
            <van-col class="account-txt" span="12">
              <p>{{ $t("message.changeTime") }}: {{ item.insertTime }}</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col class="account-txt hair-line" span="12">
              <p>
                {{ $t("message.accChangeType") }}:
                {{ item.classificationModel.name }}
              </p>
            </van-col>
          </van-row>
          <van-row>
            <van-col class="account-txt hair-line" span="12">
              <p>
                {{ $t("message.remarks") }}: {{ item.mark }}
                {{ "【" + item.notes + "】" }}
              </p>
            </van-col>
          </van-row>
          <van-row>
            <van-col class="account-txt hair-line" span="12">
              <p>{{ $t("message.orderNo") }}: {{ item.transactionNumber }}</p>
            </van-col>
          </van-row>
        </van-cell>
      </div>
      <div v-else slot="list-content" class="def-height no-data-box">
        <van-empty :description="$t('message.noData')" />
      </div>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import PurchasedRecordDetail from "@/components/AccountChange/PurchasedRecordDetail.vue";
import FilterRecord from "@/components/common/FilterRecord.vue";
import AccountChangeStatemantType from "@/components/AccountChange/AccountChangeStatemantType.vue";
import PurchaseColorRecord from "@/components/AccountChange/PurchaseColorRecord.vue";
import PullRefresh from "@/components/common/PullRefresh.vue";

import { AccountDetailSearchCoreMessage } from "@/core/AccountCore/Message/AccountDetailSearchCoreMessage";
import { AccountDetailCoreService } from "@/core/AccountCore/Service/AccountDetailCoreService";

@Component({
  components: {
    Header,
    PurchasedRecordDetail,
    AccountChangeStatemantType,
    PurchaseColorRecord,
    FilterRecord,
    PullRefresh,
  },
})
export default class PurchasedRecord extends Vue {
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private show1: Boolean = false;
  private show2: Boolean = false;
  private show3: Boolean = false;
  private checked: boolean = false;
  private showFilter: boolean = false;
  private username: string = "";
  private val: any = 0;
  private fundRecords?: any = [];
  private filterDate?: any = "";
  private tabsTitle?: any[] = [
    {
      title: this.$t("message.user"),
    },
    {
      title: this.$t("message.income"),
    },
    {
      title: this.$t("message.expenditure"),
    },
    {
      title: this.$t("message.balance"),
    },
  ];

  private showPopup1() {
    this.show1 = true;
  }
  private showPopup2() {
    this.show2 = true;
  }
  private showPopup3() {
    this.show3 = true;
  }

  private onSubmit(values: any) {
    console.log("submit", values);
  }

  private showFilterDate() {
    this.showFilter = !this.showFilter;
  }

  get fundRecordsFiltred() {
    if (this.filterDate === "") {
      return this.fundRecords;
    } else {
      return this.fundRecords.filter((betReport: any) => {
        let betDate: Date = new Date(betReport.insertTime);
        let currentFilter: Date = new Date(this.filterDate);
        return (
          betDate.getFullYear() === currentFilter.getFullYear() &&
          betDate.getDate() === currentFilter.getDate() &&
          betDate.getMonth() === currentFilter.getMonth()
        );
      });
    }
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: object || {}
   * @Date: 2021-04-10 16:34:55
   * @Description: Get current user info
   */
  get userDetails() {
    let item: any = localStorage.getItem("UserInfo");
    item = JSON.parse(item);
    return item;
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: array || []
   * @Date: 2021-04-10 16:34:55
   * @Description: Get account transaction data
   */
  private async accountDetailCore() {
    let params: any = new AccountDetailSearchCoreMessage();
    params.equal_userInfo_accountDetail = this.userDetails.id;
    params.count = 100;
    params.page = 1;
    await AccountDetailCoreService.Search(params).then((data) => {
      this.fundRecords = data.reverse();

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    });
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: null
   * @Date: 2021-04-10 16:34:55
   * @Description: Load the data on van-list component
   */
  private loadData(): void {
    this.accountDetailCore();
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: null
   * @Date: 2021-04-10 16:34:55
   * @Description: refresh data on pull refresh component
   */
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.refreshing = true;
    this.loadData();
  }

  private confirmFilter(date: any) {
    this.filterDate = date;
  }

  private cancelFilter() {
    this.filterDate = "";
  }
}
</script>

<style lang="less" scoped>
@import "./../../assets/css/account-change-home.less";
.AccountChange-con {
  min-height: calc(100vh - 45px);
}

.account-change-home .van-cell-info:not(:last-child) {
  margin-bottom: 10px;
}

.account-change-home .hair-line {
  border: none;
}

.def-height {
  min-height: calc(100vh - (45px + 10px));
  padding-top: 10px;
}

.no-data-box {
  min-height: calc(100vh - (45px + 10px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>