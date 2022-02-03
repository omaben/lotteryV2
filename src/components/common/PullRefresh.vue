<template>
  <van-pull-refresh
    v-model="isRefreshing"
    @refresh="onRefresh">

    <template #success>
      <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.refressSucess') }}</span>
    </template>
    
    <template #loosing>
      <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.looseRefresh') }}</span>
    </template>

    <template #loading>
      <van-loading :color="themeColor[getThemeColor]">
        <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.loading') }}</span>
      </van-loading>
    </template>

    <van-list
      v-model="isLoading"
      :finished="isFinished"
      :loading-text="$t('message.loading')"
      :error-text="$t('message.loading')"
      @load="load()">

    <template #loading>
      <van-loading :color="themeColor[getThemeColor]">
        <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.loading') }}</span>
      </van-loading>
    </template>
      <slot name="list-content"></slot>
    </van-list>
  </van-pull-refresh>
</template>

<script lang="ts">

import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator';

@Component({})

export default class PullRefresh extends Vue {
  @Prop({ type: Boolean, default: false }) readonly refreshing!: false;
  @Prop({ type: Boolean, default: false }) readonly finished!: false;
  @Prop({ type: Boolean, default: false }) readonly loading!: false;
  private isRefreshing: boolean = false;
  private isFinished: boolean = false;
  private isLoading: boolean = false;

  private themeColor: any = {
    "classic-red": "#646566",
    "classic-blue": "#fff",
    "noble-black-gold": "#865920",
    "simple-platinum": "##797676",
  }

  get getThemeColor() {
    return this.$store.state.themeColor
  }

  @Watch('refreshing')
  private onChangeShowLive(newVal: any, oldVal: any) {
    this.isRefreshing = newVal;
  }

  @Watch('finished')
  private onChangeFinished(newVal: any, oldVal: any) {
    this.isFinished = newVal;
  }

  @Watch('loading')
  private onChangeLoading(newVal: any, oldVal: any) {
    this.isLoading = newVal;
  }

  @Emit('loadData') sendLoad() {};
  private load() {
    this.sendLoad();
  }

  @Emit('refreshData') sendRefresh() {};
  private onRefresh() {
    this.sendRefresh();
  }

}
</script>