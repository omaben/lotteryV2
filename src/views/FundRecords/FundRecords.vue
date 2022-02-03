<template>
  <div class="fund-record">
    <Header :msg="$t('message.fundingRecords')" :back="true" :leftText="$t('message.back')"/>
    <div class="fund-record-content">
      <!-- <div class="record-picker">
        <van-dropdown-menu>
          <van-dropdown-item :title="currType" ref="gametitle">
            <div class="picker-title">
              <span>{{ $t('message.typeSelection') }}</span>
            </div>
            <div class="picker-list">
              <div
                v-for="(titleItem, titleKey) in typeSelection"
                :key="titleKey"
                @click="selectGameTitle(titleKey, titleItem)"
                :class="activeType == titleKey ? 'item-active': null"
                class="picker-item">
                <van-button size="normal">
                  {{ titleItem }}
                </van-button>
              </div>
            </div>
          </van-dropdown-item>
          <van-dropdown-item :title="currDateTitle" ref="datetitle">
            <div class="picker-list">
              <div 
                v-for="(dateItem, dateKey) in dateTitleItems"
                :key="dateKey"
                @click="selectDateTitle(dateKey, dateItem)"
                :class="activeDateTitle == dateKey ? 'item-active': null"
                class="picker-item">
                <van-button size="normal">
                  {{ dateItem }}
                </van-button>
              </div>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div> -->
      <div class="fund-record-list">
        <PullRefresh
          @refreshData="onRefresh"
          @loadData="loadData()"
          :refreshing="refreshing"
          :finished="finished"
          :loading="loading">
          <div v-if="fundRecords.length > 0" slot="list-content" class="fund-record-list-container">
            <div class="fund-record-list-item" v-for="(item, key) in fundRecords" :key="key">
              <div class="list-item">
                <div class="type">
                  <div>{{ item.notes }}</div>
                  <div>{{ item.money }}</div>
                </div>
                <div class="time">
                  <div>{{ item.insertTime }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-else slot="list-content" class="def-height no-data-box">
            <van-empty :description="$t('message.noData')" />
          </div>
        </PullRefresh>
      </div>
    </div>

    <!-- <van-popup
      v-model="showSelectDate"
      round position="bottom"
      :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="showSelectDate = false"
          type="date"
          :title="$t('message.customColumnSort')"
          :cancel-button-text="$t('message.cancel')"
          :confirm-button-text="$t('message.confirm')"
          :columns-order="['year', 'month', 'day']"
          @confirm="selectDate" />
      </van-popup> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";
import PullRefresh from '@/components/common/PullRefresh.vue'

import { AccountDetailSearchCoreMessage } from "@/core/AccountCore/Message/AccountDetailSearchCoreMessage";
import { AccountDetailCoreService } from "@/core/AccountCore/Service/AccountDetailCoreService";

@Component({
  components: {
    Header,
    PullRefresh
  }
})
export default class FundRecords extends Vue {
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private fundRecords?: any  = [];
  private titleGameType: string = "";
  private dateTitleFilter:string = "";
  private currType?: any = this.$t('message.all');
  private currDateTitle?: any = this.$t('message.today');
  private activeType?: number = 0;
  private activeDateTitle?: number = 0;
  private showSelectDate?: boolean = false;
  private currentDate?: any = new Date();
  private minDate?: any = new Date(1970, 0, 1);
  private maxDate?: any = new Date();
  private typeSelection?: any = [
    this.$t('message.all'), // All
    this.$t('message.withdrawal'),// Withdrawal
    // this.$t('message.deposit'),// deposit
    // this.$t('message.transferOut'),// Transfer out
    // this.$t('message.transferIn'),// Transfer in
    // this.$t('message.discount'),// Offer
    // this.$t('message.rebate'),// Rebate
    // this.$t('message.jackpot'),// Jackpot
    // this.$t('message.deduction'),// Deduction
    // this.$t('message.recommend'),// recommend
    // this.$t('message.rebate'),// Rebate
    // this.$t('message.withdrawAndReturn'),// Withdrawal and return
    this.$t('message.other')// other
  ];
  private dateTitleItems?: any = [
    this.$t('message.today'),
    this.$t('message.yesterday'),
    this.$t('message.nearly7days'),
    this.$t('message.nearly30days'),
    this.$t('message.custom')
  ];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-08 10:31:02
    * @Description: Get current user info
  */
  get userDetails() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-08 10:29:08
    * @Description: Get account transaction data
  */
   private async accountDetailCore(){
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
    * @Date: 2021-04-08 10:31:02
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
    * @Date: 2021-04-08 10:31:02
    * @Description: refresh data on pull refresh component
  */
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.refreshing = true;
    this.loadData();
  }

  // //SORT FOR GAMETYPE
  // private selectGameTitle(index: number, title: string) {
  //   this.activeType = index;
  //   this.currType = title;
  //   let _gametitle = this.$refs.gametitle as any;
  //   _gametitle.toggle();
  //   this.titleGameType = title;
  // }
  // //FILTER DATE
  // private selectDateTitle(index: number, title: string) {
  //   let _datetitle = this.$refs.datetitle as any;
  //   _datetitle.toggle();
  //   if (index == 4) {
  //     this.showSelectDate = true;
  //   } else {
  //     this.activeDateTitle = index;
  //     this.currDateTitle = title;
  //   }
  //   this.dateTitleFilter = title;
  // }

  // private selectDate(val: any) {
  //   this.showSelectDate = false;
  // }

  // private filterDateNow(item:any){
  //   let d = new Date;
  //   for (let i = 0; i < item.length; i++) {
  //     return item[i].insertTime.split(" ").pop().joins("") == `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  //   }
  // }
  // private filterDateYesterday(item:any){
  //   let d = new Date;
  //   for (let i = 0; i < item.length; i++) {
  //     return item[i].insertTime.split(" ").pop().joins("") == `${d.getFullYear()}-${d.getMonth()>0?d.getMonth()-1:1}-${d.getDate()}`;
  //   }
  // }
  // private filterDate7(item:any){
  //   let d = new Date;
  //   for (let i = 0; i < item.length; i++) {
  //     return item[i].insertTime.split(" ").pop().joins("") >= `${d.getFullYear()}-${d.getMonth()>0?d.getMonth()-7:1}-${d.getDate()}`;
  //   }
  // }
  // private filterDateCus(item:any){
  //   let d = new Date;
  //   for (let i = 0; i < item.length; i++) {
  //     return item[i].insertTime.split(" ").pop().joins("") == `${d.getFullYear()}-${d.getMonth()>0?d.getMonth()-7:1}-${d.getDate()}`;
  //   }
  // }

  // beforeUpdate(){
  //   switch (this.dateTitleFilter) {
  //     case "today": { 
  //         console.log("Date Now Filter")
  //         this.fundRecords?.filter(this.filterDateNow)
  //         break; 
  //     } 
  //     case "Yesterday": { 
  //         console.log("Date Yesterday Filter")
  //         this.fundRecords?.filter(this.filterDateYesterday)
  //         break; 
  //     } 
  //     case "Last  7 days": { 
  //         console.log("Date 7 days ago Filter")
  //         this.fundRecords?.filter(this.filterDate7)
  //         break; 
  //     } 
  //     case "Nearly 30 days": { 
  //         console.log("Date 30 days ago not working yet")
  //         this.fundRecords?.filter(this.filterDate7)
  //         break; 
  //     } 
  //     case "customize": { 
  //         console.log("Custom Date Filter")
  //         this.fundRecords?.filter(this.filterDateCus)
  //         break; 
  //     } 
  //     default:
  //       break;
  //   }


  //   switch(this.titleGameType) {
  //     case "All": { 
  //       this.fundRecords
  //         break; 
  //     } 
  //     case "Withdrawal": {
  //       console.log("Withdraw Sort")
  //       this.fundRecords?.sort((a,b) => (a.withDrew > b.withDrew) ? 1 : ((b.withDrew > a.withDrew) ? -1 : 0))
  //         break; 
  //     } 
  //     case "other": { 
  //       console.log("Other Sort")
  //       this.fundRecords?.sort((a,b) => (a.withDrew > b.withDrew) ? 1 : ((b.withDrew > a.withDrew) ? -1 : 0))
  //         break; 
  //     } 
  //     default: { 
  //       break; 
  //     } 
  //   } 
  // }

  private created() {}
}
</script>
<style scoped lang="less">
/* Theme color */
@import "./../../assets/css/fundrecord.less";

.fund-record-content {
  // margin-top: 45px;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__bar {
  height: 45px;
  padding: 0px 10px;
  align-items: center;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__item {
  flex: none;
  min-width: 90px;
  height: 35px;
  line-height: 35px;
  border-radius: 28px;
  background: #f2f4f8;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__item:not(:last-child) {
  margin-right: 10px;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__title::after {
  border-color: transparent transparent #2c3e50 #2c3e50;
    right: -0px;
}

.record-picker .picker-title {
  text-align: left;
  padding: 0px 10px;
  margin: 10px 0px 0px;
}

.record-picker .picker-title span {
  margin-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
}
.record-picker .picker-title span::before {
  content: "";
  position: absolute;
  left: -10px;
  height: 5px;
  width: 5px;
  background: #2c3e50;
  border-radius: 50%;
}

.record-picker .picker-list {
  display: block;
  padding-left: 10px;
  margin-top: 10px;
}

.record-picker .picker-list .picker-item {
  float: left;
  width: calc(25% - 10px);
  margin: 0px 10px 10px 0px;
}

.record-picker .picker-list .picker-item .van-button {
  width: 100%;
  padding: 0px 5px;
  height: 40px;
  border-radius: 5px;
  color: #939393;
}

.record-picker .picker-list .picker-item.item-active .van-button {
  background: rgb(237, 64, 64);
  color: #fff;
}

// .fund-record-list {
//   height: calc(100vh - 45px);
//   overflow: hidden;
// }

// .fund-record-list .fund-record-list-container {
//   height: 100%;
//   overflow-y: scroll;
// }

.fund-record-list .fund-record-list-container {
  margin-top: 10px;
  // min-height: calc(100vh - 50px);
}

.fund-record-list-item {
  display: flex;
}

.fund-record-list-item .list-item {
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
}

.fund-record-list-item .list-item>div {
  width: 100%;
}

.fund-record-list-item .list-item .type {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
}

.fund-record-list-item .list-item .type div:first-child {
  text-align: left;
  flex: 2;
}

.fund-record-list-item .list-item .type div:last-child {
  text-align: right;
  color: rgb(237, 64, 64);
  flex: 1;
}

.fund-record-list-item .list-item .time {
  text-align: left;
  font-size: 13px;
  color: #939393;
}

.fund-record-list .no-data {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
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