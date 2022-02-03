<template>
  <div class="bet-number-info">
    <div class="bet-info">
      <div class="bet-info-wrapper">
        <div class="info-row">
          <div class="row reset">
            <van-button size="large" class="reset-button" @click="reset">{{ $t('message.reset') }}</van-button>
          </div>
          <div class="row bet">
            <!-- 
            /*
              * @Author: chase 
              * @LastAuthor: null
              * @Param null
              * @Return null
              * @Date: 2021-04-11
              * @Description: Modify design for input
            */ -->
            <van-field class="inputNumber" :class="{'en-textSize' : $i18n.locale === 'en'}" v-model="textNumber" type="number" label=""
              :placeholder="$t('message.enterAmount')"
              :rules="[{required: true, message: $t('message.enterAmount') }]"
              />
            <van-button size="large" class="betting-button" @click="bet()">{{ $t('message.betting') }}</van-button>
          </div>
        </div>
      </div>
    </div>
    <ChipPopup :isShow="showPopup" v-if="showPopup" @hide-popup="showPopup = false"/>
  </div>
</template>
<script lang="ts">

import {Component, Vue, Prop, Emit, Watch} from 'vue-property-decorator';
import ChipPopup from "@/components/GameIframe/GamePopup/ChipPopup.vue";
import {GameBetCoreService} from "@/core/GameCore/Service/GameBetCoreService"
import {GameBetCoreModel} from "@/core/GameCore/Model/GameBetCoreModel"
import {Toast} from 'vant';
import {GameService} from '@/application/Game/Service/GameService';
import {GameBetMessage} from "@/application/Game/Message/GameBetMessage";

@Component({
  components: {
    ChipPopup
  }
})

export default class BetInfo extends Vue {
  private isCheck?: boolean = true;
  private betAmount?: any = '';
  private textNumber?: any = '';
  private showPopup?: boolean = false;
  @Prop({type: String, default: '元'}) public readonly mode?: string;
  @Prop({type: Boolean, default: false}) public readonly isShowMode?: boolean;
  private chipButtons?: any[] = [
    '50',
    '100',
    '500',
    '1000',
  ];

  private showChipPopup() {
    this.showPopup = true
  }

  @Emit('showMode') send(value: any) {
  };

  private showMode() {
    this.send(!this.isShowMode);
  }

  private selectBetAmount(val: any) {
    this.betAmount = val;
    this.$store.dispatch('setBetAmount', this.betAmount);
  }


/*
* @Author: chase 
* @LastAuthor: null
* @Param null
* @Return null
* @Date: 2021-04-13
* @Description: added if input is empty and equal to 0
*/
  private bet() {
    let betCount = 0;
    if(parseInt(this.textNumber) > 0 && parseInt(this.textNumber) !== 0 ){
      
      for (let key in this.gameBetOfficial) {
        if (this.gameBetOfficial[key].length > 0) {
          this.gameBetOfficial[key].forEach((item: any) => {
            betCount++;
            let params: any = new GameBetMessage()
            params.betMoney = parseInt(this.textNumber);
            params.content = item.content;
            params.id = item.id;
            GameService.GameBet(params).then((data) => {
              if (data.status) {
                Toast.success(this.$t('message.betSuccess'));
                this.reset();
                this.textNumber = '';
              } else {
                Toast.fail(this.$t(`message['${data.message}']`));
              }

            })
          })
        }
      }
      if (betCount == 0) {
        Toast.fail(this.$t('message.selectBet'));
      }

    } else {
      Toast.fail(this.$t('message.enterAmount'))
    }
  }

  @Watch('betAmount')
  onChangeAmount(newVal: any, oldVal: any) {
    this.betAmount = newVal;
    this.$store.dispatch('setBetAmount', this.betAmount);
  }

  get gamePlayType(): string {
    return this.$store.state.gamePlayType;
  }

  private reset() {
    this.betAmount = '';
    if (this.gamePlayType == '官方玩法' || this.gamePlayType == 'Official gameplay') {
      this.$store.dispatch('removeAllBets');
    } else {
      this.$store.dispatch('resetGameBet');
    }
  }

  get gameBet() {
    return this.$store.state.gameBet;
  }

  get gameBetOfficial() {
    return this.$store.state.gameBetOfficial;
  }
}
</script>

<style>
.number-selection {
  height: 40px;
  display: inline;
}
.number-selection .number-selection-wrapper {
  padding: 5px 10px;
  background-color: #f2f4f8;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.12);
  border: solid 1px #d6d6d6;
}

.number-selection .info-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.number-selection .info-row .van-cell {
  width: 51px;
  padding: 0;
  margin-right: 5px;
}

.number-selection .info-row .number-info,
.number-selection .info-row .number-button {
  width: 80%;
  overflow-x: auto;
}

.number-selection .info-row .row-wrapper {
  display: flex;
  flex-direction: row;
  height: 23px;
  line-height: 23px;
  font-size: 14px;
}

.number-selection .info-row .number-info .van-button {
  height: 23px;
  width: 23px;
  padding: 0;
  margin-right: 5px;
  border-radius: 2px;
}

.number-selection .info-row .number-info .row-wrapper > span:nth-of-type(1) {
  margin-right: 13px;
}

.number-selection .info-row .number-info .row-wrapper > span:nth-of-type(2) {
  margin-right: 10px;
}

/*
* @Author: chase 
* @LastAuthor: null
* @Param null
* @Return null
* @Date: 2021-04-11
* @Description: Modify design for input
*/
.inputNumber{
  background: #cccccc;
  width: 150px; 
  height:40px; 
  margin: auto auto; 
  line-height: 25px;
  padding:7px;
  text-align: center;
  font-size: 16px;
}
.inputNumber.en-textSize {
  font-size: 14px;
}
.inputNumber ::placeholder {
  color: rgb(116, 116, 116);
}
.number-selection .info-row .number-info .row-wrapper .van-field .van-field__control {
  width: 50px;
  text-align: center;
}

.number-selection .info-row .number-info .row-wrapper .info-highlight {
  margin: 0px 5px;
  color: #cccccc;
}

.number-selection .info-row .number-button button {
  width: 50px;
  height: 23px;
  background-image: linear-gradient(0deg, rgba(3, 0, 0, 0.22) 0%, rgba(255, 255, 255, 0.22) 100%),
  linear-gradient(#ffffff, #ffffff);
  border-radius: 2px;
  border: solid 1px #d6d6d6;
}

.number-selection .info-row .number-button button:not(:last-child) {
  margin-right: 5px;
}

.number-selection .info-row .set-chip {
  width: 20%;
}

.number-selection .info-row .set-chip button {
  padding: 0px;
  min-width: 75px;
  width: auto;
  height: 23px;
  border-radius: 2px;
  border: solid 1px #d6d6d6;
  background-image: linear-gradient(0deg, rgba(3, 0, 0, 0.22) 0%, rgba(255, 255, 255, 0.22) 100%), linear-gradient(#ffffff, #ffffff);
}

.bet-info {
  height: 60px;
  display: inline;
}

.bet-info .bet-info-wrapper {
  padding: 8px 10px 7px;
  background: #fff;
}

.bet-info .row button {
  height: 40px;
  width: 55px;
  color: #fff;
}

.bet-info .row .reset-button {
  background-color: #ababab;
  border-radius: 2px;
  border: solid 1px #8d8d8d;
}

.bet-info .row .chase-button {
  background-color: #0abc13;
  border-radius: 2px;
  border: solid 1px #046409;
}
/*
  * @Author: chase 
  * @LastAuthor: null
  * @Param null
  * @Return null
  * @Date: 2021-04-11
  * @Description: Modify design for button
*/
.bet-info .row .betting-button {
  background: linear-gradient(180deg,#fc9c5d,#ee7656 0,#e04f4f 62%),linear-gradient(#fff,#fff);
  border-radius: 2px;
  margin-left: 10px;
  border: none;
}

.bet-info .info-row .row.number-info {
  flex: 3;
}

.bet-info .info-row .number-info {
  color: #363636;
}

.bet-info .info-row .number-info .info-highlight {
  color: #f73d3d;
  margin: 0px 3px;
}

.bet-info .info-row {
  display: flex;
  flex-direction: row;
}

.bet-info .info-row .row {
  flex: 1;
  font-size: 15px;
}

.bet-info .info-row .row.check-box .van-checkbox .van-checkbox__label {
  margin-left: 6px;
}

.bet-info .info-row .row.check-box .van-checkbox .van-checkbox__label span {
  display: block;
}

.bet-info .info-row .row.number-input {
  margin-right: 10px;
  flex: 2;
}

.bet-info .info-row .row.number-input .van-cell {
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 40px;
  padding: 8px 10px;
  font-size: 15px;
}

.bet-info .info-row .reset {
  display: flex;
  justify-content: flex-start;
}

.bet-info .info-row .bet,
.bet-info .info-row .chase {
  display: flex;
  justify-content: flex-end;
}
</style>