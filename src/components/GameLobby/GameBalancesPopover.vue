<template>
  <van-popup
    v-model="isShow"
    :style="popUpStyle"
    :get-container="getContainer"
    position="'right'"
    :overlay="false"
    :overlay-style="{ backgroundColor: 'transparent' }"
    :round="true"
    :close-on-click-overlay="false"
  >
    <div class="pop-up-wrapper">
      <div class="pop-up-con text">
        <span>{{ $t('message.totalAssets') }}：</span>
        <span>{{ getValue(money) + '元' }}</span>
      </div>
      <div class="pop-up-con text">
        <span>{{ $t('message.walletBal') }}：</span>
        <span>{{ getValue(walletBalance) + '元' }}</span>
      </div>
      <div class="pop-up-con button">
        <van-button
          :class="'theme-button-color-small'"
          type="default"
          size="small"
          :text="$t('message.recharge')"
          :color="'#bfc3cf'"
          @click="$router.push({ name: 'Recharge' })"
        />
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class GameBalancesPopover extends Vue {
  @Prop({ type: Boolean, default: false }) public isShow!: boolean;
  @Prop({ type: String, default: '0.00' }) public walletBalance!: string;
  @Prop({ type: String, default: '0.00' }) public money!: string;
  private popUpStyle?: object = {
    height: 'auto',
    width: '173px',
    borderRadius: '5px',
    top: '84px',
    boxShadow: '0 0 1px #888',
    // left: '73%',
    right: '10px'
  }

  /*
    * @Author: reggie 
    * @LastAuthor: null
    * @Param: null
    * @Return: Number value
    * @Date: 2021-04-12 11:41:00
    * @Description: Convert string balance into number with two decimal.
  */
  private getValue (val: any) {
    if (typeof(val) === 'string') {
      val = +val;
    }
    return val.toFixed(2);
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: document
    * @Date: 2021-04-08 15:06:21
    * @Description: Get position where to attach the popup component
  */
  private getContainer() {
    return document.querySelector('.user-balance')
  }

}
</script>

<style></style>
