<template>
  <div class="device-info">
    <Header :msg="pageTitle" :back="true" :HomePage="false" :leftText="$t('message.back')" />
    <div class="device-info-content">
      <div class="block-item">
        <div class="title">{{ $t('message.memberAcc') }}</div>
        <div class="value">{{ 'anxin' }}</div>
      </div>
      <div class="block-item">
        <div class="title">{{ $t('message.phoneModel') }}</div>
        <div class="value">{{ 'iPhone 11 pro Max' }}</div>
      </div>
      <div class="block-item">
        <div class="title">{{ $t('message.loginPort') }}</div>
        <div class="value">{{ '全站' }}</div>
      </div>
      <div class="block-item">
        <div class="title">{{ $t('message.loginIp') }}</div>
        <div class="value">{{ '120.232.150.98「中国/广东」' }}</div>
      </div>
      <div class="block-item">
        <div class="title">{{ $t('message.phoneSystemV') }}</div>
        <div class="value">{{ '13.3' }}</div>
      </div>
      <div class="block-item">
        <div class="title">{{ $t('message.appCurrV') }}</div>
        <div class="value">{{ 'V3.0' }}</div>
      </div>
      <div class="block-item">
        <div class="title">{{ $t('message.currTime') }}</div>
        <div class="value">{{ '2020年01月21日 18:12:34' }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header
  }
})

export default class DeviceInfo extends Vue {
  private pageTitle?: any = this.$t('message.deviceInfo');
}
</script>

<style lang="less">
/* Theme color */
@import "./../../assets/css/deviceinfo.less";

.device-info {
  height: calc(100vh - 46px);
  // margin-top: 45px;
  overflow: hidden;
}

.device-info .device-info-content {
  background: #fff;
  margin-top: 10px;
  padding: 0px 15px;
}

.device-info .device-info-content .block-item {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f7f7f7;
  padding: 18px 0px;
}

.device-info .device-info-content .block-item div:first-child {
  text-align: left;
  color: #484848;
  font-size: 14px;
  flex: 1;
}

.device-info .device-info-content .block-item div:last-child {
  text-align: right;
  color: #bababa;
  font-size: 14px;
  flex: 2;
}
</style>