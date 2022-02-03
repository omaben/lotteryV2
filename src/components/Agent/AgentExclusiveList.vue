<template>
  <div class="agent-exc-list-content">
    <div class="header-link">
      <van-cell-group>
        <van-cell :title="headerText" :is-link="isLink" :value="linkText" :to="toPath"/>
      </van-cell-group>
    </div>
    <div class="item-list">
      <van-grid :border="false" :column-num="2" :clickable="false">
        <van-grid-item>
          <div class="item-wrapper">
              <van-icon name="cash-back-record" size="35"/>
            <div>
              <span> {{ '50' }} </span>
              <span>{{ $t('message.rebate') }}</span>
            </div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="item-wrapper">
            <van-icon name="idcard" size="35"/>
            <div>
              <span> {{ '3' }} </span>
              <span>{{ $t('message.dailyWithdrawals') }}</span>
            </div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="item-wrapper">
            <van-icon name="balance-pay" size="35"/>
            <div>
              <span> {{ '100,000.00' }} </span>
              <span>{{ $t('message.dailyWithdrawalsLimit') }}</span>  
            </div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="item-wrapper">
            <van-icon name="balance-o" size="35"/>
            <div>
              <span> {{ '50' }} </span>
              <span>{{ $t('message.relegationBonus') }}</span>            
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})

export default class Agent extends Vue {
  @Prop({ type: String, default: '' }) public readonly headerText!: string;
  @Prop({ type: Boolean, default: false }) public readonly isLink!: boolean;
  @Prop({ type: String, default: '' }) public readonly linkText!: string;
  @Prop({ type: Array, default: [] }) public readonly itemData!: any[];
  @Prop({ type: String, default: '' }) public readonly toPath!: string;
}

</script>

<style>

</style>