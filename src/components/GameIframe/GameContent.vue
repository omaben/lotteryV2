<script src="../../../public/config/config.js"></script>
<template>
  <div class="game-content" :class="hasDropMenu ? 'has-drop-menu' : null">
    <div class="game-content-wrapper">
      <div class="current-info">
        <div class="current-draw-info">
          <DrawNumbers :drawData="drawInfo" :gameType="'PK10'"/>
        </div>
      </div>
      <div class="next-draw-info">
        <div class="next-issue">
          {{ drawInfo.nextIssues ? drawInfo.nextIssues + ":" : "" }}
        </div>
        <div class="draw-time">
          <van-count-down
              v-if="drawInfo.drawTime"
              :time="parseDrawTime(drawInfo.nextDrawTime)"
              format="HH:mm:ss"
              ref="countDown"
          >
            <template #default="timeData">
              <span class="block">{{ splitTime(0, timeData.hours) }}</span>
              <span class="block">{{ splitTime(1, timeData.hours) }}</span>
              <span class="colon">:</span>
              <span class="block">{{ splitTime(0, timeData.minutes) }}</span>
              <span class="block">{{ splitTime(1, timeData.minutes) }}</span>
              <span class="colon">:</span>
              <span class="block">{{ splitTime(0, timeData.seconds) }}</span>
              <span class="block">{{ splitTime(1, timeData.seconds) }}</span>
            </template>
          </van-count-down>
        </div>
        <div class="show-prev-draw-info">
          <div class="arrow-icon" @click="showDrawHistory()">
            <van-icon
                size="14"
                :name="showHistory ? 'arrow-up' : 'arrow-down'"
            />
          </div>
        </div>
      </div>
      <div
          class="quick-view-draw-history"
          :class="showHistory ? 'has-show' : null"
      >
        <QuickViewDrawHistory v-if="true" :isShow="showHistory"/>
      </div>
      <div class="bet">
        <div class="bet-wrapper">
          <div class="bet-content has-bet-header">
            <van-tree-select
                height="100%"
                :items="items"
                animated
                @click-nav="showOfficialBetSwitch(activeIndex)"
                :main-active-index.sync="activeIndex"
            >
              <template #content>
                <div>
                  <BetOfficialPlay
                      v-for="(item, key) in optionTitle"
                      :key="key"
                      :betInfo="item"
                      :optionTitle="$t(`message['${item.mark}']`)"
                      :optionKey="key"
                      :mark="item.mark"
                      :betOptions="betOptions"
                      :indexClassification="activeIndex"
                  />
                </div>
              </template>
            </van-tree-select>
          </div>
        </div>
      </div>
    </div>
    <GamePlay
        v-if="isShowGamePlay"
        :isShow="isShowGamePlay"
        @selectGamePlay="closeGamePlay($event)"
    />
    <GameBalance v-if="isGameBalance" :isShow="isGameBalance"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Emit, Watch} from "vue-property-decorator"
import DrawNumbers from "@/components/GameIframe/GameContent/DrawNumbers.vue"
import BetOfficialPlay from "@/components/GameIframe/GameContent/BetOfficialPlay.vue"
import BetCreditPlay from "@/components/GameIframe/GameContent/BetCreditPlay.vue"
import QuickViewDrawHistory from "@/components/GameIframe/GamePopup/QuickViewDrawHistory.vue"
import GamePlay from "@/components/GameIframe/GamePopup/GamePlay.vue"
import GameBalance from "@/components/GameIframe/GamePopup/GameBalance.vue"
import {bet} from "@/components/GameIframe/bet"

import {GameInfoCoreService} from "@/core/GameCore/Service/GameInfoCoreService"
import {GameInfoSearchCoreMessage} from "@/core/GameCore/Message/GameInfoSearchCoreMessage"
import {GamePlayingClassificationCoreService} from "@/core/GameCore/Service/GamePlayingClassificationCoreService"
import {GamePlayingClassificationSearchCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationSearchCoreMessage"
import {GamePlayingCoreService} from "@/core/GameCore/Service/GamePlayingCoreService"
import {GamePlayingSearchCoreMessage} from "@/core/GameCore/Message/GamePlayingSearchCoreMessage"
import Login from "@/views/Login/Login.vue";

@Component({
  components: {
    DrawNumbers,
    BetOfficialPlay,
    BetCreditPlay,
    QuickViewDrawHistory,
    GamePlay,
    GameBalance,
  },
})
export default class GameContent extends Vue {
  private timeInterval: any = null;
  private userBalance?: String = ""
  private currGameType?: String = "PK10"
  private checked?: boolean = true
  private time?: any = 30 * 60 * 1000
  private showHistory?: boolean = false
  private activeIndex?: number | any = 0
  private optionTitle?: any = [
    // this.$t('message.tenThousands'),
    // this.$t('message.hundreds'),
    // this.$t('message.ten'),
  ]
  private isShowGamePlay?: boolean = false
  private isGameBalance?: boolean = false
  private betData: object = bet
  private items?: object | any = []
  private drawInfo?: any = {}
  private betOptions?: any[] = [
    this.$t("message.betOptionsAll"),
    this.$t("message.betOptionsBig"),
    this.$t("message.betOptionsSmall"),
    this.$t("message.betOptionsOdd"),
    this.$t("message.betOptionsEven"),
    this.$t("message.betOptionsClear"),
  ]
  // private betOptions?: any[] = ["全", "大", "小", "单", "双", "清"]
  // private rankList: any = [
  //   "冠，亚和",
  //   "冠军",
  //   "亚军",
  //   "第三名",
  //   "第四名",
  //   "第五名",
  //   "第六名",
  //   "第七名",
  //   "第八名",
  //   "第九名",
  //   "第十名",
  // ]
  @Prop({type: Boolean, default: false}) public readonly hasDropMenu?: boolean

  get gamePlayType(): string {
    return this.$store.state.gamePlayType
  }

  get playGroupName(): string {
    return this.$store.state.gameBet.playGroup.playName
  }

  get isBetHeader(): boolean {
    return true;
    // return this.$store.state.gamePlayType == "官方玩法" ||
    //   this.$store.state.gamePlayType == "Official gameplay"
    //   ? true
    //   : false
  }

  private showDrawHistory() {
    this.showHistory = !this.showHistory
  }

  private showGamePlay() {
    this.isShowGamePlay = !this.isShowGamePlay
  }

  private closeGamePlay(val: any) {
    this.isShowGamePlay = val
  }

  private showGameBalance() {
    this.isGameBalance = !this.isGameBalance
  }

  @Watch("gamePlayType")
  onChangePlayType(newVal: any, oldVal: any) {
    this.activeIndex = 0
    this.$store.dispatch(
        "setPlayGroupPlayName",
        this.items[this.gamePlayType][0].text
    )
  }

  @Emit("showOfficialBetSwitch") send(value: any) {
  }

  private showOfficialBetSwitch(index: any) {
    this.$store.dispatch("removeAllBets")
    this.$store.dispatch("resetGameBet")
    this.GamePlaying(this.items[index].id)
    //this.GamePlayingClassification(this.items[index].id);
    let playName = this.items[index].text
    this.$store.dispatch("setPlayGroupPlayName", playName)
  }

  private splitTime(type: number, time: any) {
    let _newTIme = time.toString()
    let arrTime = _newTIme.split("")
    switch (type) {
      case 0:
        if (arrTime.length == 2) {
          return arrTime[0]
        } else {
          return 0
        }
        break
      case 1:
        if (arrTime.length == 2) {
          return arrTime[1]
        } else {
          return arrTime[0]
        }
        break
      default:
        console.log("Invalid time")
    }
  }

  private resetTime() {
    let _countDown = this.$refs.countDown as any
    _countDown.reset()
    _countDown.start()
  }

  get userDetails() {
    let item: any = localStorage.getItem("UserInfo")
    item = JSON.parse(item)
    return item
  }

  private async GameInfo(id: any) {
    let params: any = new GameInfoSearchCoreMessage()
    params.equal_id_gameInfo = id
    await GameInfoCoreService.Search(params).then((data: any) => {
      this.drawInfo = data[0]
    })
    await this.GamePlayingClassification(id);
  }

  private async GamePlaying(id: any) {
    let params: any = new GamePlayingSearchCoreMessage()
    params.equal_classification_gamePlaying = id
    await GamePlayingCoreService.Search(params).then((data: any) => {
      this.optionTitle = data
    })
  }

  private async GamePlayingClassification(id: any) {
    let params: any = new GamePlayingClassificationSearchCoreMessage()
    params.equal_gameInfo_gamePlayingClassification=id;
    await GamePlayingClassificationCoreService.Search(params).then(
        (data: any) => {
          this.items=[];
          data.map((val: any) => {
            this.items.push({
              text: this.$t(`message['${val.mark}']`),
              id: val.id,
            })
          })
          this.GamePlaying(data[this.activeIndex].id)
          this.$store.dispatch(
              "setPlayGroupPlayName",
              this.items[this.activeIndex].text
          )
        }
    )
  }

  private parseDrawTime(dtime: any) {
    let num = (new Date(dtime).getTime() - new Date().getTime());
    return num < 0 ? 0 : num;
  }

  @Watch("$route", {immediate: true, deep: true})
  onUrlChange(newVal: any) {
    if (this.$route.path != newVal) {
      this.GameInfo(this.$route.params.gameid)
    }
  }

  private created() {
    //this.GamePlayingClassification()
  }

  private mounted() {
    // if (this.playGroupName == '') {
    //   this.$store.dispatch('setPlayGroupPlayName', this.items[this.gamePlayType][this.activeIndex].text)
    // }

    this.GameInfo(this.$route.params.gameid)
    this.timeInterval = setInterval(() => {
        if(this.parseDrawTime(this.drawInfo.nextDrawTime)==0){
          this.GameInfo(this.$route.params.gameid)
        }
    }, 2000)
    this.$store.dispatch("removeAllBets")
    this.$store.dispatch("resetGameBet")
  }

  private destroyed() {
    clearInterval(this.timeInterval)
  }
}
</script>

<style>
/*
  * @Author: reggie 
  * @LastAuthor: reggie
  * @Param null
  * @Return null
  * @Date: 2021-04-07 12:15:00
  * @Description: Styles for GameContent component.
*/
.game-content.has-drop-menu .van-popup {
  z-index: 1 !important;
}

.game-content {
  min-height: calc(100vh - 150px);
  /* margin-top: 44px; */
}

.game-content .current-info {
  background: #fff;
}

.game-content .current-user-info-wrapper {
  display: flex;
  flex-direction: row;
  background: #ffecec;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
}

.game-content .current-user-info-wrapper .row {
  flex: 1;
  display: inherit;
  align-items: center;
  color: #f14848;
  font-size: 14px;
  line-height: 14px;
}

.game-content .current-user-info-wrapper .row .refresh-bal {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background: url("../../assets/gamelobby/refresh-balance.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.theme-color.theme-color-classic-blue
.game-content
.current-user-info-wrapper
.row
.refresh-bal {
  width: 18px;
  height: 18px;
  background: url("../../assets/gamelobby/refresh-balance_classic-blue.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.theme-color.theme-color-classic-red
.game-content
.current-user-info-wrapper
.row
.refresh-bal {
  width: 18px;
  height: 18px;
  background: url("../../assets/gamelobby/refresh-balance_classic-red.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.theme-color.theme-color-simple-platinum
.game-content
.current-user-info-wrapper
.row
.refresh-bal {
  width: 18px;
  height: 18px;
  background: url("../../assets/gamelobby/refresh-balance_simple-platinum.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.game-content .current-user-info-wrapper .row .arrow-down {
  display: flex;
  margin-left: 5px;
}

.game-content .current-user-info-wrapper .left {
  padding-left: 10px;
}

.game-content .current-user-info-wrapper .right {
  /* padding-right: 10px; */
  padding: 0px 10px;
}

.game-content .current-user-info-wrapper .right span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.game-content .show-prev-draw-info .arrow-icon {
  width: 72px;
  margin: 0 auto;
  position: relative;
  height: 14px;
  overflow: hidden;
  background: #ffecec;
}

.game-content .show-prev-draw-info .arrow-icon::before {
  content: "";
  position: absolute;
  left: -2px;
  bottom: -1px;
  width: 0;
  height: 0;
  border-top: 14px solid transparent;
  border-bottom: 0px solid transparent;
  border-right: 18px solid #fff;
  transform: rotate(90deg);
}

.game-content .show-prev-draw-info .arrow-icon::after {
  content: "";
  position: absolute;
  right: -2px;
  bottom: -1px;
  width: 0;
  height: 0;
  border-top: 14px solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 18px solid #fff;
  transform: rotate(270deg);
}

.game-content .next-draw-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  padding: 5px 10px 5px;
  margin-bottom: 10px;
}

.game-content .next-draw-info .next-issue {
  flex: 1;
  font-size: 14px;
  margin-right: 5px;
  text-align: left;
}

.game-content .next-draw-info .draw-time {
  flex: 3;
}

.game-content .next-draw-info .draw-time .van-count-down {
  text-align: left;
  display: flex;
  flex-direction: row;
  font-size: 18px;
}

.game-content .next-draw-info .draw-time .van-count-down .block {
  height: 24px;
  line-height: 24px;
  width: 19px;
  border-radius: 3px;
  text-align: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
  font-weight: 600;
}

.game-content
.next-draw-info
.draw-time
.van-count-down
.block:not(:last-child) {
  margin-right: 3px;
}

.game-content .next-draw-info .draw-time .van-count-down .colon {
  line-height: 24px;
  height: 24px;
  margin-right: 3px;
}

.game-content .next-draw-info .check-shortcut {
  flex: 2;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
}

.game-content .next-draw-info .check-shortcut .van-icon {
  position: relative;
  background-color: #fff;
  border-color: #f14848;
}

.game-content
.next-draw-info
.check-shortcut
.van-checkbox__icon--checked
.van-icon::before {
  content: "";
  top: 1px;
  right: 1px;
  width: 14px;
  height: 14px;
  position: absolute;
  background: #f14848;
  border-radius: 100%;
}

.game-content .next-draw-info .check-shortcut .van-checkbox__label {
  color: #f14848;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.game-content .quick-view-draw-history {
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  z-index: 1;
  margin-top: -1px;
}

.game-content .quick-view-draw-history.has-show {
  /* max-height: calc(100vh - 280px); */
  /* max-height: calc(100vh - 273px); */
  max-height: calc(100vh - 207px);
  transition: max-height 0.2s ease-in;
}

.game-content .bet .bet-top {
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 25px;
  line-height: 25px;
  border-bottom: 1px solid #dbdbdb;
  font-size: 14px;
}

.game-content .bet-top .left {
  flex: 1;
  background: #363636;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.48);
  color: #fff;
}

.game-content .bet-top .left div {
  position: relative;
  padding-right: 10px;
}

.game-content .bet-top .left div::before {
  content: "";
  position: absolute;
  top: 45%;
  right: 9%;
  margin-top: 0px;
  border: 3px solid;
  border-color: transparent transparent #dcdee0 #dcdee0;
  transform: rotate(135deg);
}

.game-content .bet-top .right {
  flex: 3;
}

.bet .bet-content {
  height: calc(100vh - 287px);
}

.bet .bet-content.has-bet-header {
  /* height: calc(100vh - 312px); */
  height: calc(100vh - 207px);
}

.bet .bet-content .van-tree-select .van-tree-select__nav {
  flex: 1;
  background-color: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  /* box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.48); */
}

.bet .bet-content .van-tree-select .van-tree-select__content {
  flex: 3;
  background: #f2f4f8;
}

.bet .bet-content.has-bet-header .van-tree-select .van-tree-select__content {
  flex: 3;
  background: #fff;
}

.bet .bet-content .van-tree-select .van-tree-select__nav-item {
  padding: 10px 0px;
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
}

.bet .bet-content .van-tree-select .van-sidebar-item--select {
  background: linear-gradient(180deg,#fc9c5d,#ee7656 0,#e04f4f 62%),linear-gradient(#e04f4f,#e04f4f);
  color: #fff;
  border-bottom: none;
}

.bet .bet-content .van-tree-select .van-sidebar-item--select::before {
  display: none;
}
</style>
