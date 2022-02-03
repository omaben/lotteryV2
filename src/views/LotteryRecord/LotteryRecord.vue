<template>
  <div class="lottery-records">
    <Header
      :msg="$t('message.lotteryRecord')"
      :back="true"
      :leftText="$t('message.back')"
      :showFilter="true"
      @showFilterDate="showFilterDate()"
    />
    <div class="lottery-records-wrapper">
      <FilterRecord
        v-if="showFilter"
        :showCheckBox="false"
        @cancel-filter-data="cancelFilter"
        @filter-data="confirmFilter"
      />
      <PullRefresh
        @refreshData="onRefresh"
        @loadData="loadData()"
        :refreshing="refreshing"
        :finished="finished"
        :loading="loading"
      >
        <div
          v-if="betReportListFiltred.length > 0"
          slot="list-content"
          class="record-list"
        >
          <div
            class="tnq-list-item"
            v-for="(item, key) in betReportListFiltred"
            :key="key"
            @click="selectItem(item)"
          >
            <div class="left">
              <div class="top">
                <span>{{
                  item.gamePlayingModel ? item.gamePlayingModel.name : ""
                }}</span>
                <span>未开奖</span>
              </div>
              <div class="body">
                <span>{{ $t("message.issue") }}: {{ item.currentIssue }}</span>
                <span>{{ $t("message.betNum") }}:{{ item.content }}</span>
                <span
                  >{{ $t("message.betAmount") }}: {{ item.betMoney }}元</span
                >
                <span
                  >{{ $t("message.awardAmount") }}:{{
                    item.gamePlayingModel ? item.gamePlayingModel.bonus : ""
                  }}</span
                >
                <span class="date">{{ item.insertTime }}</span>
                <span class="play-count"
                  >{{ $t("message.howToPlay") }}: {{ item.gamePlaying }}</span
                >
              </div>
            </div>
            <div class="right">
              <van-icon name="arrow" class="arrow" />
            </div>
          </div>
        </div>
        <div v-else slot="list-content" class="def-height no-data-box">
          <van-empty :description="$t('message.noData')" />
        </div>
      </PullRefresh>
      <!--  <van-tabs v-model="activeTab">
        <van-tab
          v-for="(tabItem, tabKey) in tabList"
          :key="tabKey"
          :name="tabKey"
          :title="tabItem">
          <div class="top-panel">
            <div class="panel-header">
              <div>{{ $t('message.betting') }}</div>
              <div>{{ $t('message.winALottery') }}</div>
              <div>{{ $t('message.profit') }}</div>
            </div>
            <div class="panel-body">
              <div class="color">4.0</div>
              <div class="color">0.0</div>
              <div class="color">-4.0</div>
            </div>
          </div>
        </van-tab>
      </van-tabs> -->
    </div>

    <PurchaseDetails
      :isShow="showPurchase"
      :itemData="itemData"
      @hide-popup="closePurchasePopup()"
    />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";
import FilterRecord from "@/components/common/FilterRecord.vue";
import PurchaseDetails from "@/components/LotteryRecord/PurchaseDetails.vue";
import PullRefresh from "@/components/common/PullRefresh.vue";

import { GameBetCoreService } from "@/core/GameCore/Service/GameBetCoreService";
import { GameBetSearchCoreMessage } from "@/core/GameCore/Message/GameBetSearchCoreMessage";

@Component({
  components: {
    Header,
    FilterRecord,
    PurchaseDetails,
    PullRefresh,
  },
})
export default class LotteryRecord extends Vue {
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private showPurchase: boolean = false;
  private itemData: any = {};
  private showFilter: boolean = false;
  private activeTab: number = 0;
  private tabList: any = [
    this.$t("message.all"),
    this.$t("message.noPrize"),
    this.$t("message.hasWon"),
    this.$t("message.not"),
  ];
  private betReportList?: any = [];
  get betReportListFiltred() {
    if (this.filterDate === "") {
      return this.betReportList;
    } else {
      return this.betReportList.filter((betReport: any) => {
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
  private filterDate?: any = "";

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: object || {}
   * @Date: 2021-04-08 16:08:02
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
   * @Date: 2021-04-08 10:04:13
   * @Description: Get betting record data
   */
  private async UserBetReport() {
    let params: any = new GameBetSearchCoreMessage();
    params.equal_userInfo_gameBet = this.userDetails.id;
    params.count = 100;
    params.page = 1;
    await GameBetCoreService.Search(params).then((data: any) => {
      this.betReportList = data.reverse();

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
   * @Date: 2021-04-08 10:04:13
   * @Description: Load the data on van-list component
   */
  private loadData(): void {
    this.UserBetReport();
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: null
   * @Date: 2021-04-08 10:04:13
   * @Description: refresh data on pull refresh component
   */
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.refreshing = true;
    this.loadData();
  }

  private changeTab(val: any) {
    console.log(val);
  }

  private showFilterDate() {
    this.showFilter = !this.showFilter;
  }

  private closePurchasePopup() {
    this.showPurchase = false;
  }

  private selectItem(item: any) {
    // this.showPurchase = true;
    // this.itemData = item;
  }

  private cancelFilter() {
    this.filterDate = "";
  }

  private confirmFilter(date: any) {
    this.filterDate = date;
  }

  private mounted() {}
}
</script>

<style scoped lang="less">
@import "./../../assets/css/lottery-record.less";

.record-list {
  min-height: calc(100vh - 45px);
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