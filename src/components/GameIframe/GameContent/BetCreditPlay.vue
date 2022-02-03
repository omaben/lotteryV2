<template>
  <div class="bet-credit-play">
    <div class="bet-credit-play-wrapper">
      <div class="bet-credit-item">
        <div class="bet-credit-item-header">
          <div class="title">
            <div>{{ $t(`message['${betData.name }']`) }}</div>
          </div>
        </div>
        <div class="bet-credit-item-content">
          <div class="bet-credit-content-wrapper">
            <div class="credit">
              <div
                v-for="(oddItem, oddKey) in betData.odds"
                :key="oddKey"
                @click="selectItem(betData.name, oddKey, oddItem)"
                class="item"
                :class="setItemClass(betData.name, oddKey)">
                <div>{{ oddItem.numName }}</div>
                <div v-if="false">input</div>
                <div>{{ oddItem.maxOdds }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class BetCreditPlay extends Vue {
  private activeItem?: number = 0;
  private selectedItems: any[] = [];
  @Prop({type: Object, default: () => { {} }}) public readonly betData!: object;
  private selectItem(oddsName: string, oddsItemIndex: number, oddObj: any) {
    let temp = {
      name: oddsName,
      odds: oddObj,
      oddsItemIndex: oddsItemIndex,
      amount: '',
      betTime: '',
      playGroup: {},
    };
    if (this.gameBet.length == 0) {
      this.$store.dispatch('setBet', temp);
    } else {
      let isBetExist = this.gameBet.findIndex((val: any) => 
        val.name == oddsName && val.oddsItemIndex == oddsItemIndex
      );
      if (isBetExist == -1) {
        this.$store.dispatch('setBet', temp);
      } else {
        this.$store.dispatch('removeBet', isBetExist);
      }
    }
  }
  private setItemClass(oddsName: string, oddsItemIndex: number) {
    let isBetExist = this.gameBet.findIndex((val: any) => 
      val.name == oddsName && val.oddsItemIndex == oddsItemIndex
    );
    if (isBetExist == -1) return '';
    return 'item-active';
  }
  get gameBet() {
    return this.$store.state.gameBet.bet;
  }
}
</script>

<style>
.bet-credit-play {
  background: #f2f4f8;
}

.bet-credit-play .bet-credit-item .bet-credit-item-header {
  margin-bottom: 7px;
}

.bet-credit-play .bet-credit-item .title {
  background: #fff;
  color: #fb2d2d;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
}

.bet-credit-play .bet-credit-content-wrapper {
  padding-left: 6px;
}

.bet-credit-play .bet-credit-item .credit {
  display: inline-block;
  width: 100%;
}

.bet-credit-play .bet-credit-item .credit .item.item-active {
  background: #ffecec;
  border: 1px solid #f53939;
  width: calc(50% - 8px);
  margin: 0px 6px 4px 0px;
  color: #f53939;
}

.bet-credit-play .bet-credit-item .credit .item {
  width: calc(50% - 6px);
  margin: 0px 6px 6px 0px;
  float: left;
  border-radius: 3px;
  background: #fff;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bet-credit-play .bet-credit-item .credit .item div {
  flex: 1;
  height: inherit;
  padding: 0px 12px;
}

.bet-credit-play .bet-credit-item .credit .item div:first-child {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  flex: 2;
  padding-right: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bet-credit-play .bet-credit-item .credit .item div:last-child {
  text-align: right;
  font-weight: 14px;
}
</style>