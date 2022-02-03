<template>
  <div class="bet-list">
    <Header :leftText="'返回'" :msg="$t('message.lotteryList') + '('+ $t(`message['${gameBet.playGroup.name}']`) +')'" :back="true" :style="getThemeColor.headerBackground" />
    <div class="bet-list-content">
      <div class="content-wrapper">
        <div class="content-top">
          <div class="top-wrapper">
            <div>
              <van-icon name="plus" :color="getThemeColor.plusIconColor"/>
              <span style="color: #000">{{ $t('message.anotherBet') }}</span>
            </div>
            <div>
              <van-icon name="plus" :color="getThemeColor.plusIconColor"/>
              <span style="color: #000">{{ $t('message.machineSelected') }}</span>
            </div>
          </div>
        </div>
        <div class="content-bottom">
          <div class="content-bottom-wrapper">
            <van-notice-bar  v-if="gameBet.playGroup.playName" :text="gameBet.playGroup.playName" :color="getThemeColor.titleColor" :background="getThemeColor.titleBackground" class="bottom-header"/>
            <div class="bottom-items">
              <div v-if="gameBet.bet.length > 0" class="bottom-items-wrapper">
                <div class="item" v-for="(betItem, betKey) in gameBet.bet" :key="betKey">
                  <div class="item-wrapper">
                    <div class="row left">
                      <div style="color: #000">{{ betItem.odds.numName }}</div>
                      <div style="color: #000">{{ gameBet.playGroup.playName + '-' + betItem.name }}</div>
                    </div>
                    <div class="row right">
                      <div>
                        <van-field
                          :value="gameBet.amount"
                          type="number"
                          readonly
                          input-align="center"
                          label=""
                          placeholder=""/>
                      </div>
                      <div style="color: #000">元</div>
                      <div>
                        <van-icon @click="removeBet(betKey)" name="clear" size="22" color="#acacac"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bet-list-footer">
      <div class="bet-list-footer-wrapper">
        <div class="info-row">
          <div class="row reset">
            <van-button size="large" class="reset-button">{{ $t('message.reset') }}</van-button>
          </div>
          <div class="row number-input">
            <van-field v-model="betAmount" type="number" label="" :placeholder="$t('message.enterBetAmount')"/>
          </div>
          <div class="row bet">
            <van-button size="large" class="betting-button" :color="getThemeColor.buttonColor" @click="bet()">{{ $t('message.betting') }}</van-button>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from '@/components/Header.vue'
import { Dialog, Toast } from 'vant';

@Component({
  components: {
    Header
  }
})

export default class BetList extends Vue {
  private pageTitle?: string = '北京赛车';
  private betAmount?: any = '';
  private dialogOptions?: object | any = {
    title: '温馨提示',
    message: '大手笔一定音, 恭喜您成功下注, 赶快开始新一轮游戏吧!',
    theme: 'round-button',
    cancelButtonText: '查看结果',
    showCancelButton: true,
    confirmButtonText: '前去下注',
    lockScroll: true,
    overlayStyle: { backgroundColor:'rgba(0, 0, 0, 0.2)' },
    cancelButtonColor: '#fff',
    confirmButtonColor: '#fff',
    className: 'betlist-dialog-box',
    width: '75%'
  };
  get gameBet() {
    return this.$store.state.gameBet;
  }
  private bet() {
    let betInfo = {
      amount: this.gameBet.amount,
      betTime: this.getCurrentDateTime(),
      playGroup: this.gameBet.playGroup,
    };
    this.$store.dispatch('setBetInfo', betInfo )
    Dialog.alert(this.dialogOptions).then(() => {
      this.$router.back();
    }).catch(() => {
      setTimeout(() => {
        this.$router.push({ name: 'BetRecord' });
      }, 225)
    });
  }

  get getThemeColor() {
    console.log(this.$store.state.themeColor)

    switch(this.$store.state.themeColor){
      case "noble-black-gold":
        return {
          titleColor: "#865920",
          titleBackground: "#f6e0a5",
          buttonColor: "#865920",
          plusIconColor: "#865920",
          headerBackground: "background: linear-gradient(#ecd48a, #e9cf85)"
        }
      case "classic-red":
        return {
          titleColor: "#fff",
          titleBackground: "red",
          buttonColor: "red",
          plusIconColor: "red",
          headerBackground: "background: linear-gradient(-6deg, #ff6363 0%, #d71616 100%), linear-gradient(#ea2626, #ea2626)"
        }
      case "classic-blue":
        return {
          titleColor: "#2c6297",
          titleBackground: "#7fc8f3",
          buttonColor: "#2d86fb",
          plusIconColor: "#2c6297",
          headerBackground: "background: linear-gradient(#2797ff, #4d2fe9)"
        }
      case "simple-platinum":
        return {
          titleColor: "#4f4f4f",
          titleBackground: "#d5d5d5",
          buttonColor: "#4f4f4f",
          plusIconColor: "#4f4f4f",
          headerBackground: "background: linear-gradient(#e9e9e9, #d5d5d5)"
        }
    }
  }
  private getCurrentDateTime() {
    let today = new Date();
    let currdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let currHour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
    let currMinutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    let currSeconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
    let currtime = currHour + ":" + currMinutes + ":" + currSeconds;
    return `${currdate} ${currtime}`;
  }
  private removeBet(index: any) {
    this.$store.dispatch('removeBet', index);
  }
}
</script>

<style>

.bet-list {
  margin-top: 46px;
}

.bet-list-content {
  height: calc(100vh - 46px - 55px);
  overflow: hidden;
}

.bet-list-content .content-top {
  padding: 10px 20px;
  background: #fff;
}

.bet-list-content .content-top .top-wrapper {
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 3px;
}

.bet-list-content .content-top .top-wrapper div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 40px;
}

.bet-list-content .content-top .top-wrapper div .van-icon {
  margin-right: 6px;
}

.bet-list-content .content-top .top-wrapper div:first-child {
  position: relative;
}

.bet-list-content .content-top .top-wrapper div:first-child::after {
  content: '';
  position: absolute;
  right: -1px;
  top: 5px;
  width: 1px;
  height: 75%;
  background: #dbdbdb;
}

.bet-list-content .content-bottom {
  height: calc(100vh - 46px - 55px - 62px);
  overflow: hidden;
}

.bet-list-content .content-bottom .content-bottom-wrapper {
  height: 100%;
  overflow-y: auto;
}
.bet-list-content .content-bottom .bottom-header {
  text-align: left;
  background: #ffecec;
  padding: 5px 10px;
  color: #f14848;
  font-size: 14px;
  height: 25px;
  line-height: 25px;
}

.bet-list-content .bottom-items .item {
  background: #fff;
}

.bet-list-content .bottom-items .item .item-wrapper {
  display: flex;
  flex-direction: row;
  padding: 10px 10px 5px;
}

.bet-list-content .bottom-items .item .item-wrapper .left {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.bet-list-content .bottom-items .item .item-wrapper .left div {
  text-align: left;
}

.bet-list-content .bottom-items .item .item-wrapper .left div:first-child {
  margin-bottom: 5px;
}

.bet-list-content .bottom-items .item .item-wrapper .left div:last-child {
  font-size: 13px;
}

.bet-list-content .bottom-items .item .item-wrapper .right {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
}

.bet-list-content .bottom-items .item .item-wrapper .right>div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bet-list-content .bottom-items .item .item-wrapper .right div:first-child {
  flex: 2;
}

.bet-list-content .bottom-items .item .item-wrapper .right div:first-child .van-cell {
  padding: 3px 0px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  font-size: 15px;
}

.bet-list-content .bottom-items .item .item-wrapper .right div:last-child {
  justify-content: flex-end;
}

.bet-list-content .bottom-items .item:not(:last-child) {
  border-bottom: 1px solid #dbdbdb;  
}

.bet-list-footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  display: inline;
}

.bet-list-footer .bet-list-footer-wrapper {
  padding: 8px 10px 7px;
  background: #fff;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.12);
}

.bet-list-footer .row button {
  height: 40px;
  width: 50px;
  color: #fff;
}

.bet-list-footer .row .reset-button {
  background-color: #ababab;
  border-radius: 2px;
  border: solid 1px #8d8d8d;
}

.bet-list-footer .row .betting-button {
  background-color: #2d86fb;
  border-radius: 2px;
  border: solid 1px #114993;
}

.bet-list-footer .info-row {
  display: flex;
  flex-direction: row;
}

.bet-list-footer .info-row .row {
  flex: 1;
  font-size: 15px;
}

.bet-list-footer .info-row .row.number-input {
  flex: 4;
}

.bet-list-footer .info-row .row.number-input .van-cell {
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 40px;
  padding: 8px 10px;
  font-size: 15px;
}

.bet-list-footer .info-row .reset {
  display: flex;
  justify-content: flex-start;
}

.bet-list-footer .info-row .bet {
  display: flex;
  justify-content: flex-end;
}

.betlist-dialog-box .van-dialog__header {
  padding-top: 15px;
  font-size: 15px;
  color: #f14848;
}

.betlist-dialog-box .van-dialog__content .van-dialog__message {
  padding: 10px 10px 20px;
  text-align: left;
  font-size: 15px;
}

.betlist-dialog-box .van-dialog__footer {
  border-top: 1px solid #dbdbdb;
  padding: 0px;
}

.betlist-dialog-box .van-dialog__footer button {
  height: 40px;
  border-radius: 0;
}

.betlist-dialog-box .van-dialog__footer button:first-child {
  border-right: 1px solid;
  border-color: #dbdbdb !important;
  color: #939393 !important;
}

.betlist-dialog-box .van-dialog__footer button:last-child {
  color: #f14848 !important;
}
</style>