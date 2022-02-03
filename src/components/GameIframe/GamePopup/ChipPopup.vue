<template>
  <div class="chip-popup">
    <van-popup
      v-model="showPopup"  
      round 
      :overlay-style="{ backgroundColor: 'rgba(0,0,0,0.2)' }"
      :close-on-click-overlay="false"
      class="chip-popup"
      closeable
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('message.setUpChips')}}
        </div>
        <div class="popup-content">
          <van-cell-group>
            <div class="chip-items">
              <van-field v-model="value" class="chip-text-input chip-item-value" :label="$t('message.chipOne')" :placeholder="$t('message.enterAmount')" maxlength="5" />
            </div>
            <div class="chip-items">
              <van-field v-model="value1" class="chip-text-input chip-item-value" :label="$t('message.chipTwo')" :placeholder="$t('message.enterAmount')" maxlength="5" />
            </div>
            <div class="chip-items">
              <van-field v-model="value2" class="chip-text-input chip-item-value" :label="$t('message.chipThree')" :placeholder="$t('message.enterAmount')" maxlength="5" />
            </div>
            <div class="chip-items">
              <van-field v-model="value3" class="chip-text-input chip-item-value" :label="$t('message.chipFour')" :placeholder="$t('message.enterAmount')" maxlength="5" />
            </div>
          </van-cell-group>
        </div>
        <van-button class="chip-btn" size="medium">{{ $t('message.determine')}}</van-button>
        <div class="dialog-btn-restore">{{ $t('message.restoreAmount')}}</div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})

export default class ChipPopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: boolean;
  private showPopup?: any = '';
  private value?: any = '';
  private value1?: any = '';
  private value2?: any = '';
  private value3?: any = '';
  private hidePopOver() {
    this.$emit('hide-popup', false);
  }
  private mounted() {
    this.showPopup = this.isShow
  }
}
</script>

<style lang="less">
.chip-popup {
  width: 70%;
  border-radius: 7px !important;
  .pop-up-container {
    line-height: 40px;
  }
  .popup-header{
    height: 40px;
    background-image: linear-gradient(-6deg, #ff6363 0%, #d71616 100%), linear-gradient(#ea2626, #ea2626);
    color:#fff;
  }
  .van-field__label {
    width: 50px;
  }
  .van-cell {
    padding-bottom: 5px;
    display: flex;
    align-items: center;
  }
  .van-field__control {
    box-shadow: inset 0px 0px 3px 2px rgba(0,0,0,0.3);
    padding: 5px;
    border-radius: 3px;
  }
  .chip-btn {
    width: 80%;
    border-radius: 5px;
    color: #fff;
    margin: 10px 0 5px;
    height: 40px;
    background-image: linear-gradient(-6deg, #ff6363 0%, #d71616 100%), linear-gradient(#ea2626, #ea2626);
  }
  .dialog-btn-restore {
    color: blue;
  }
  .van-icon-cross::before {
    font-size: 10pt;
    background: #fff;
    border-radius: 50%;
    padding: 1px
  }
  .van-popup__close-icon--top-right {
    top: 5px;
  }
}
</style>

