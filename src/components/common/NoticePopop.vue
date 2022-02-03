<template>
  <div class="notice-popup">
    <van-popup
      :close-on-click-overlay="false"
      :overlay-style="{ backgroundColor:'rgba(0, 0, 0, 0.2)' }"
      v-model="isShow"
      round>
      <div class="pop-up-container" style="width: 250px;">
        <div class="pop-up-title">
          <span>{{ $t('message.announcement') }}</span>
        </div>
        <div class="popup-content">
          <div v-if="noticeText">
            {{ noticeText }}
          </div>
        </div>
        <div class="button">
          <van-button type="default"
            size="small"
            @click="closePopover()">
              {{ $t('message.determine') }}
          </van-button>
        </div>
      </div>
      </van-popup>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class NoticePopop extends Vue {
  private showMe?: boolean = false;
  @Prop({ type: Boolean, default: false }) public isShow!: false;
  @Prop({ type: String, default: '' }) public noticeText!: '';
  private closePopover() {
    this.showMe = false
    this.$emit('hide-popop', this.showMe);
  }
}
</script>

<style>
.notice-popup .pop-up-container {
  position: relative;
  color: #000;
}

.notice-popup .pop-up-container .pop-up-title {
  padding: 15px 0px 3px;
  font-weight: bold;
}

.notice-popup .pop-up-container .popup-content {
  padding: 0px 20px;
  text-align: center;
  font-size: 14px;
  min-height: 70px;
}

.notice-popup .pop-up-container .button {
  width: 100%;
  border-top: 1px solid #ebedf0;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notice-popup .pop-up-container .button .van-button {
  width: 70%;
  color: #1989fa;
  border: none;
  font-size: 16px;
}
</style>