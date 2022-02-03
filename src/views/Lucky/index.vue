<template>
  <div class="lucky">
    <Header
      :msg="''"
      :leftText="$t('message.back')"
      :back="false"
      :HomePage="false"
      :rightText="''"
    />
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <template #success>
      <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.refressSucess') }}</span>
    </template>
    
    <template #loosing>
      <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.looseRefresh') }}</span>
    </template>

    <template #loading>
      <van-loading :color="themeColor[getThemeColor]">
        <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.loading') }}</span>
      </van-loading>
    </template>
    <div class="lucky_tabs">
        <LotteryHistory
          :lotteryHistoryData="rankList[$route.params.gameclass][0].data"/>
    </div>
      <!-- <van-tabs v-model="activeRank" class="lucky_tabs" @click="changeTab">
        <van-tab
          :title="rankItem.title"
          v-for="(rankItem, rankKey) in rankList[$route.params.gameclass]"
          :key="rankKey"
        >
            <LotteryHistory
              v-if="rankKey === 0"
              :lotteryHistoryData="rankItem.data"
            />
            <Champion
              v-if="rankKey > 0"
              :championData1="rankItem.data"
              :rank="activeRank - 1"
            />

        </van-tab>
      </van-tabs> -->
    </van-pull-refresh>
    <Footer :activeTabs="2" />
  </div>
</template>
<script lang="ts">
import Header from "@/components/Header.vue"
import LotteryHistory from "@/components/Lucky/lotteryHistory.vue"
import Champion from "@/components/Lucky/champion.vue"
import {GameInfoCoreService} from "@/core/GameCore/Service/GameInfoCoreService";
import {GameInfoSearchCoreMessage} from "@/core/GameCore/Message/GameInfoSearchCoreMessage";
import { GameHistoryCoreService } from "@/core/GameCore/Service/GameHistoryCoreService"
import { GameHistorySearchCoreMessage } from "@/core/GameCore/Message/GameHistorySearchCoreMessage"

import Footer from "@/components/Footer.vue"
import { Component, Vue, Watch } from "vue-property-decorator"

@Component({
  components: {
    Header,
    Footer,
    LotteryHistory,
    Champion,
  },
})
export default class Lucky extends Vue {
  private isLoading: boolean = false;
  private activeRank?: any = 0;
  private lotteryHistoryData: any = [];
  private championData1?: any = [];
  private championData?: any = [];
  private runnerUpData?: any = [];
  private thirdPlace?: any = [];
  private fourthPlace?: any = [];
  private fifthPlace?: any = [];
  private sixthPlace?: any = [];
  private seventhPlace?: any = [];
  private eigthPlace?: any = [];
  private ninthPlace?: any = [];
  private tenthPlace?: any = [];
  private themeColor: any = {
    "classic-red": "#646566",
    "classic-blue": "#fff",
    "noble-black-gold": "#865920",
    "simple-platinum": "##797676",
  }
  private rankList?: any = {
    EveryColor: [
      {
        title: this.$t("message.historicalLottery"),
        data: this.lotteryHistoryData,
      },
      {
        title: this.$t("message.champion"),
        data: this.championData,
      },
      {
        title: this.$t("message.runnerUp"),
        data: this.runnerUpData,
      },
      {
        title: this.$t("message.thirdPlace"),
        data: this.thirdPlace,
      },
      {
        title: this.$t("message.fourthPlace"),
        data: this.fourthPlace,
      },
      {
        title: this.$t("message.fifthPlace"),
        data: this.fifthPlace,
      },
    ],
    CarRace: [
      {
        title: this.$t("message.historicalLottery"),
        data: this.lotteryHistoryData,
      },
      {
        title: this.$t("message.champion"),
        data: this.championData,
      },
      {
        title: this.$t("message.runnerUp"),
        data: this.runnerUpData,
      },
      {
        title: this.$t("message.thirdPlace"),
        data: this.thirdPlace,
      },
      {
        title: this.$t("message.fourthPlace"),
        data: this.fourthPlace,
      },
      {
        title: this.$t("message.fifthPlace"),
        data: this.fifthPlace,
      },
      {
        title: this.$t("message.sixthPlace"),
        data: this.sixthPlace,
      },
      {
        title: this.$t("message.seventhPlace"),
        data: this.seventhPlace,
      },
      {
        title: this.$t("message.eigthPlace"),
        data: this.eigthPlace,
      },
      {
        title: this.$t("message.ninthPlace"),
        data: this.ninthPlace,
      },
      {
        title: this.$t("message.tenthPlace"),
        data: this.tenthPlace,
      },
    ],
    AirshipRace: [
      {
        title: this.$t("message.historicalLottery"),
        data: this.lotteryHistoryData,
      },
      {
        title: this.$t("message.champion"),
        data: this.championData,
      },
      {
        title: this.$t("message.runnerUp"),
        data: this.runnerUpData,
      },
      {
        title: this.$t("message.thirdPlace"),
        data: this.thirdPlace,
      },
      {
        title: this.$t("message.fourthPlace"),
        data: this.fourthPlace,
      },
      {
        title: this.$t("message.fifthPlace"),
        data: this.fifthPlace,
      },
      {
        title: this.$t("message.sixthPlace"),
        data: this.sixthPlace,
      },
      {
        title: this.$t("message.seventhPlace"),
        data: this.seventhPlace,
      },
      {
        title: this.$t("message.eigthPlace"),
        data: this.eigthPlace,
      },
      {
        title: this.$t("message.ninthPlace"),
        data: this.ninthPlace,
      },
      {
        title: this.$t("message.tenthPlace"),
        data: this.tenthPlace,
      },
    ],
    '11Choose5': [
      {
        title: this.$t("message.historicalLottery"),
        data: this.lotteryHistoryData,
      },
      {
        title: this.$t("message.champion"),
        data: this.championData,
      },
      {
        title: this.$t("message.runnerUp"),
        data: this.runnerUpData,
      },
      {
        title: this.$t("message.thirdPlace"),
        data: this.thirdPlace,
      },
      {
        title: this.$t("message.fourthPlace"),
        data: this.fourthPlace,
      },
      {
        title: this.$t("message.fifthPlace"),
        data: this.fifthPlace,
      },
    ],
    Quick3: [
      {
        title: this.$t("message.historicalLottery"),
        data: this.lotteryHistoryData,
      },
      {
        title: this.$t("message.champion"),
        data: this.championData,
      },
      {
        title: this.$t("message.runnerUp"),
        data: this.runnerUpData,
      },
      {
        title: this.$t("message.thirdPlace"),
        data: this.thirdPlace,
      },
    ],
  }

    /*
      * @Author: keanu 
      * @LastAuthor: null
      * @Param: null
      * @Return: string || ""
      * @Date: 2021-04-09 11:53:15
      * @Description: get the current theme color
    */
    get getThemeColor() {
      return this.$store.state.themeColor
    }

    /*
      * @Author: keanu 
      * @LastAuthor: null
      * @Param: null
      * @Return: null
      * @Date: 2021-04-09 11:45:23
      * @Description: refreshes all data
    */
    private onRefresh() {
      let rankArr = this.rankList[this.$route.params.gameclass];
      for (var i = 0; i < rankArr.length; i++) {
        this.rankList[this.$route.params.gameclass][i].data = [];
      }
      this.LotteryInfo(this.$route.params.gameid)
    }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: index: number
    * @Return: array || []
    * @Date: 2021-04-08 16:11:22
    * @Description: set active item
  */
  private changeTab(index: number) {
    this.activeRank = index
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: gameid: any
    * @Return: array || []
    * @Date: 2021-04-08 16:07:39
    * @Description: Get lottery draw history
  */
  private async LotteryInfo(gameid: any) {
    let that = this
    let params: any = new GameHistorySearchCoreMessage();
    params.equal_gameInfo_gameHistory = gameid;
    params.count = 100;
    params.page = 1;
     await GameHistoryCoreService.Search(params).then((data: any) => {
        this.isLoading = false;
        that.lotteryHistoryData = [];
        
        that.championData = [];
        that.runnerUpData = [];
        that.thirdPlace = [];
        that.fourthPlace = [];
        that.fifthPlace = [];
        that.sixthPlace = [];
        that.seventhPlace = [];
        that.eigthPlace = [];
        that.ninthPlace = [];
        that.tenthPlace = [];
        data = data.reverse();
        data.forEach((element: any) => {
          let DataAll = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(','),
          }
          let DataFirst = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[0] || '',
          }
          let DataSecond = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[1] || '',
          }
          let DatathirdPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[2] || '',
          }
          let DatafourthPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[3] || '',
          }
          let DatafifthPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[4] || '',
          }
          let DatasixthPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[5] || '',
          }
          let DataseventhPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[6] || '',
          }
          let DataeigthPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[7] || '',
          }
          let DataninthPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[8] || '',
          }
          let DatatenthPlace = {
            date: element.currentIssue,
            nums: element.winningNumbers.split(',')[9] || '',
          }


          that.lotteryHistoryData?.push(DataAll)
          
          that.championData?.push(DataFirst)
          that.runnerUpData?.push(DataSecond)
          that.thirdPlace?.push(DatathirdPlace)
          that.fourthPlace?.push(DatafourthPlace)
          that.fifthPlace?.push(DatafifthPlace)
          that.sixthPlace?.push(DatasixthPlace)
          that.seventhPlace?.push(DataseventhPlace)
          that.eigthPlace?.push(DataeigthPlace)
          that.ninthPlace?.push(DataninthPlace)
          that.tenthPlace?.push(DatatenthPlace)

          let rankArr = this.rankList[this.$route.params.gameclass];
          for (var i = 0; i < rankArr.length; i++) {
            if (i == 0) {
              this.rankList[this.$route.params.gameclass][i].data = that.lotteryHistoryData;
            } else if (i == 1) {
              this.rankList[this.$route.params.gameclass][i].data = that.championData;
            } else if (i == 2) {
              this.rankList[this.$route.params.gameclass][i].data = that.runnerUpData;
            } else if (i == 3) {
              this.rankList[this.$route.params.gameclass][i].data = that.thirdPlace;
            } else if (i == 4) {
              this.rankList[this.$route.params.gameclass][i].data = that.fourthPlace;
            } else if (i == 5) {
              this.rankList[this.$route.params.gameclass][i].data = that.fifthPlace;
            } else if (i == 6) {
              this.rankList[this.$route.params.gameclass][i].data = that.sixthPlace;
            } else if (i == 7) {
              this.rankList[this.$route.params.gameclass][i].data = that.seventhPlace;
            } else if (i == 8) {
              this.rankList[this.$route.params.gameclass][i].data = that.eigthPlace;
            } else if (i == 9) {
              this.rankList[this.$route.params.gameclass][i].data = that.ninthPlace;
            } else if (i == 10) {
              this.rankList[this.$route.params.gameclass][i].data = that.tenthPlace;
            }
          }

        })
        
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: newVal: any
    * @Return: null
    * @Date: 2021-04-08 15:51:08
    * @Description: Watch URL if changing
  */
  @Watch("$route", {immediate: true, deep: true})
  private onUrlChange(newVal: any) {
    if (this.$route.path != newVal) {
      let rankArr = this.rankList[this.$route.params.gameclass];
      for (var i = 0; i < rankArr.length; i++) {
        this.rankList[this.$route.params.gameclass][i].data = [];
      }
      this.LotteryInfo(this.$route.params.gameid)
    }
  }

  private created() {
    // this.LotteryInfo(this.$route.params.gameid)
  }
}
</script>
<style lang="less">
/* Theme color */
@import "./../../assets/css/lucky.less";

.van-swipe__track {
  justify-content: center;
}
.home-game {
  background: #fff;
  display: flex;
}
.home-game .van-sidebar {
  width: 93px;
}
.scrollable-wrapper {
  height: calc(100vh - (45px + 37px + 50px));
  overflow: hidden;
  overflow-y: auto;
  /* padding-bottom: 20px; */
  // .championNbr .nbr {
  //   width: 26.81px;
  // }
  .right {
    .lh-wrapper {
      display: block;
    }
  }
}
.home-game .game-nav {
  height: 100%;
  box-shadow: 0.026667rem 0.08rem 0.08rem 0 rgba(0, 0, 0, 0.3);
  overflow: auto;
}
.home-game .hist-game-content {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  display: flex;
}
.home-game .van-sidebar-item {
  color: #363636;
  padding: 18px 12px;
  font-size: 13px;
  background: #fff;
  line-height: 16px;
  transition: background 0.2s ease-out;
}
.home-game .van-sidebar-item::before {
  content: none;
}
.home-game .van-sidebar-item--select {
  background: rgb(237, 64, 64);
  color: #fff;
}
.home-game .game-item img {
  width: 100%;
}
.home-game .game-item.active {
  display: block;
}
.game-Lottery {
  padding: 2px 1px;
}
.game-Casino {
  display: inline-block;
  width: 50%;
  padding: 2px 4px;
  box-sizing: border-box;
}
.game-Egames {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
}
.game-SportsBook,
.game-Fish,
.game-Card {
  padding: 2px 5px;
  box-sizing: border-box;
}
.hot-lottery-container {
  display: block !important;
  margin: 2px 0px;
}
.games-Lottery {
  display: inline-block;
  width: 50%;
}
.game-img-wrap {
  height: 48px;
  width: 48px;
  padding-bottom: 3px;
  padding-right: 3px;
}
.lottery-interval {
  font-size: 8px;
  line-height: 16px;
  width: 57px;
  border-radius: 7px;
  margin: 0 auto;
  background: rgb(255, 255, 255, 0.3);
}
.lottery-interval span {
  color: #ffffff;
}
.game-text {
  padding-right: 3px;
  padding-bottom: 10px;
}
.game-title {
  font-size: 15px;
  line-height: 14px;
  padding-bottom: 3px;
  color: #ffffff;
}
.hot-lottery-container .hist-game-content {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 5px;
  margin: 2.5px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.3);
  height: 68px;
}
.pk10-txt span {
  font-size: 11px;
  line-height: 17px;
  color: #2e83fb;
  border-radius: 1px;
  border: solid 1px #2e83fb;
}
.lh-wrapper {
  display: flex;
  align-items: center;
  padding: 3.5px 6px;
  height: 30px;
  line-height: 30px;
}
.lh-wrapper:nth-child(odd) {
  background: #f2f4f8;
}
.lh-wrapper .date {
  font-size: 12px;
  color: #252525;
  width: 80px;
}
.lottery-details {
  display: flex;
  padding-left: 5px;
  align-content: center;
  height: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  position: relative;
}

.pk10-wrap {
  display: flex;
}
.pk10-sq {
  position: relative;
  display: inline-block;
  color: #fff;
  background-image: url("../../assets/home/base.png");
  background-size: 169px;
  height: 21px;
  width: 21px;
}

.number-0 {
  background: url('../../assets/game/base_zero.png');
  background-repeat: repeat;
  background-size: cover;
  width: 21.5px;
}

.number-1 {
  background: url("../../assets/game/base.png");
  background-position: 0;
  background-size: 210px;
}

.number-2 {
  background: url("../../assets/game/base.png");
  background-position: -21px;
  background-size: 210px;
}

.number-3 {
  background: url("../../assets/game/base.png");
  background-position: -42px;
  background-size: 210px;
}

.number-4 {
  background: url("../../assets/game/base.png");
  background-position: -63px;
  background-size: 210px;
}

.number-5 {
  background: url("../../assets/game/base.png");
  background-position: -84px;
  background-size: 210px;
}

.number-6 {
  background: url("../../assets/game/base.png");
  background-position: -105px;
  background-size: 210px;
}

.number-7 {
  background: url("../../assets/game/base.png");
  background-position: -126px;
  background-size: 210px;
}

.number-8 {
  background: url("../../assets/game/base.png");
  background-position: -147px;
  background-size: 210px;
}
.number-9 {
  background: url("../../assets/game/base.png");
  background-position: -168px;
  background-size: 210px;
}

.number-10 {
  background: url("../../assets/game/base.png");
  background-position: -189px;
  background-size: 210px;
}

/* .pk10-num-1 {
  background-position: calc(-1 * (17px * (1 - 1)));
}
.pk10-num-2 {
  background-position: calc(-1 * (17px * (2 - 1)));
}
.pk10-num-3 {
  background-position: calc(-1 * (17px * (3 - 1)));
}
.pk10-num-4 {
  background-position: calc(-1 * (17px * (4 - 1)));
}
.pk10-num-5 {
  background-position: calc(-1 * (17px * (5 - 1)));
}
.pk10-num-6 {
  background-position: calc(-1 * (17px * (6 - 1)));
}
.pk10-num-7 {
  background-position: calc(-1 * (17px * (7 - 1)));
}
.pk10-num-8 {
  background-position: calc(-1 * (17px * (8 - 1)));
}
.pk10-num-9 {
  background-position: calc(-1 * (17px * (9 - 1)));
}
.pk10-num-10 {
  background-position: calc(-1 * (17px * (10 - 1)));
} */
.lottery-history .van-cell {
  font-size: 12px;
  line-height: 17px;
  height: 27px;
  display: flex;
  align-items: center;
  margin-left: -1px;
  padding: 0;
  border: solid 1px #dcdcdc;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 225, 225, 0.46) 50%,
    rgba(225, 225, 225, 1) 100%
  );
}
.lottery-history .van-cell div {
  padding-left: 5px;
  color: #2a8efd;
}
.header_blue .van-nav-bar__left {
  color: #fff;
}
.lottery-history {
  width: 100%;
}

.lh-wrapper.title .lottery-details {
  text-align: center;
  display: block;
  color: #2d86fb;
  top: 0;
  font-size: 12px;
}

.lh-wrapper.title {
  background: #e6ebf5;
}
// .lucky_tabs .van-tab.van-tab--active {
//     background: #e63333;
//     color: #fff;
// }

.lucky_tabs .van-tab {
  line-height: inherit;
}

.lucky_tabs .van-tabs__wrap {
  height: 40px;
  background-image: linear-gradient(0deg, #cbcbcb 0%, #e5e5e5 40%, #ffffff 100%),
    linear-gradient(#f5f5f5, #f5f5f5);
  background-blend-mode: normal, normal;
  box-shadow: 0px 1px 2px 0px rgba(167, 167, 167, 0.6);
}

.lucky_tabs .van-tabs__wrap .van-tabs__nav {
  padding: 0px;
}
.lucky_tabs .van-tabs__line {
  display: none;
}

.championNbr .nbr {
  width: 30px;
  height: 30px;
  border-right: 1px solid #eee;
  display: table-cell;

  @media(min-width:575px) {
    // border: none;
    width: calc((100vw - 80px) / 11);
  }
}

.hist-game-content.champion .lh-wrapper {
  padding: 0;
}

.championNbr .nbr > div {
  font-size: 8pt;
  width: 20px;
  height: 16px;
  margin: 0 auto;
  position: relative;
  top: 1px;
  padding-top: 2.5px;
}
.left-champion {
  width: 80px;
  float: left;
}

.left-champion .date {
  font-size: 12px;
}

.lh-wrapper.title .championNbr .nbr {
  line-height: 28px;
  text-align: center;
}
.right-champion .scrollable-wrapper {
  width: 300px;
}
.right-champion {
  width: calc(100% - 80px);
  overflow-x: auto;
}

.championNbr .nbr div.tringle {
  border-radius: 0;
  background: transparent;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1px 1px 30px 120px;
  border-color: transparent transparent #e63333 transparent;
  position: relative;
  position: absolute;
  top: -25px;
  left: 15px;
  z-index: 1;
}
.championNbr .nbr div.tringle .inside {
  // content: '';
  height: 0;
  border-style: solid;
  border-width: 1px 1px 30px 120px;
  border-color: transparent transparent #fff transparent;
  position: absolute;
  right: -2px;
  border-radius: initial;
  background: transparent;
  width: 0;
  top: 0;
}
.championNbr .nbr div.numberLucky {
  background: transparent;
  padding: initial;
  top: initial;
}
.championNbr .nbr div.numberLucky {
  background: transparent;
  padding: initial;
  top: initial;
  z-index: 3;
  background: #e63333;
  color: #fff;
  font-size: 12px;
  width: 22px;
  height: 19px;
  position: relative;
  line-height: 1.6;
  padding-top: 2.5px;
  border-radius: 50%;
  display: block;
}
</style>
