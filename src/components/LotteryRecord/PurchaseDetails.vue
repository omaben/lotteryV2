<template>
  <div class="pl-popup">
    <van-popup
      v-model="isShow" 
      get-container="#app"
      class="pl-popup"
      :style="{ width: '80%', height: 'auto'}"
      :close-on-click-overlay="false"
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('message.lotteryDetails') }}
        </div>
        <div class="popup-content">
          <p>{{ $t('message.orderNo') }} : C21030400001</p>
          <p>{{ $t('message.singleBetAmount') }} : 2.00{{ $t('message.yuan') }}</p>
          <p>{{ $t('message.betTime') }} : 2021-03-04 15:47:11</p>
          <p>{{ $t('message.noBets') }} : 1</p>
          <p>{{ $t('message.colorKind') }} : 澳洲五分彩[官]</p>
          <p>{{ $t('message.multiple') }}: 2倍</p>
          <p>{{ $t('message.singleBetBonus') }}: 6066.667{{ $t('message.yuan') }}</p>
          <p>{{ $t('message.doubleColorMode') }}: {{ $t('message.yuan') }}</p>
          <p>{{ $t('message.issue') }}: 20210304191</p>
          <p>{{ $t('message.totalBet') }}: 4{{ $t('message.yuan') }}</p>
          <p>{{ $t('message.howToPlay') }}: 组选30</p>
          <p>{{ $t('message.betNum') }}: 7,8|1</p>
          <p>{{ $t('message.rebate') }}: 未返水(0%)</p>
          <p>{{ $t('message.status') }}: 未开奖</p>
        </div>
        <div class="popup-btn">
          <div @click="hidePopOver()">{{ $t('message.cancelOrder') }}</div>
          <div @click="hidePopOver()">{{ $t('message.keepBetting') }}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ChasePopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: boolean;
  @Prop({ type: Object, default: () => {} }) private itemData?: object;
  
  @Emit('hide-popup') sendClose() {};
  private hidePopOver() {
    this.sendClose();
  }
}
</script>
<style lang="less" scoped>
@import "./../../assets/css/purchase-details.less";
</style>