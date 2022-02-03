<template>
  <div class="pl-popup">
    <van-popup
      v-model="showPopup"  
      class="pl-popup"
      :style="{ width: '70%', height: '40%'}"
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('message.promote') }}1
        </div>
        <div class="popup-content">
          <van-cell-group>
            <div class="pl-items">
              <van-field v-model="value" class="pl-text-input pl-item-value" :label="$t('message.buildTime') + ':'" />
            </div>
            <div class="pl-items">
              <van-field v-model="value1" class="pl-text-input pl-item-value" :label="$t('message.totalVisit') + ':'" />
            </div>
            <div class="pl-items">
              <van-field v-model="value2" class="pl-text-input pl-item-value" :label="$t('message.numRegisteredPeople') + ':'"/>
            </div>
            <div class="pl-items">
              <van-field v-model="value3" class="pl-text-input pl-item-value" :label="$t('message.lotteryRebates') + ':'"/>
            </div>
            <div class="pl-items">
              <van-field v-model="value4" class="pl-text-input pl-item-value" :label="$t('message.sportsRebate') + ':'"/>
            </div>
            <div class="pl-items">
              <van-field v-model="value5" class="pl-text-input pl-item-value" :label="$t('message.encryptLink') + ':'"/>
            </div>
            <div class="pl-items">
              <van-field v-model="value6" class="pl-text-input pl-item-value" :label="$t('message.sabahSportsRebate') + ':'"/>
            </div>
          </van-cell-group>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class UserplPopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: boolean;
  private showPopup?: any = ''
  private value?: any = '2019-07-01 14:11:50'
  private value1?: any = 0
  private value2?: any = 0
  private value3?: any = '2.0%。'
  private value4?: any = '1.9%。'
  private value5?: any = '1.9%。'
  private value6?: any = ''
  
  private mounted() {
    this.showPopup = this.isShow
  }
  private hidePopOver() {
    this.$emit('hide-popup', false);
  }
}
</script>
<style lang="less">
.pl-popup{
  .popup-header {
    background: blue;
    color: #fff;
    text-align: left;
    padding: 5px 20px;
  }
  .pl-items { 
    box-shadow: 0px 0.5px 0px 0px rgba(0,0,0,0.1);
    margin: 0 20px 1px;
    .pl-text-input {
      padding: 10px 0;
    }
    .van-field__label {
      width: 5em;
    }
  }
  @media(max-height:650px) {
    top: calc(100% - 60%);
  }
}
</style>