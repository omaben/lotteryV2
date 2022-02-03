<template>
  <van-popup
    v-model="isShow"
    :style="popUpStyle"
    :get-container="getContainer"
    position="bottom"
    :overlay="false"
    :overlay-style="{ backgroundColor: 'transparent' }"
    :round="true"
    :close-on-click-overlay="false"
    class="mode-popup">
    <div class="pop-up-wrapper">
      <div
        v-for="(mode, key) in modes"
        :key="key"
        class="pop-up-con"
        @click="selectMode(key, mode)"
        :class="currMode === mode ? 'active-mode' : null">
        <span>{{ mode }}</span>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({})

export default class Mode extends Vue {
  private activeMode?: number = 0;
  private modes?: any[] = [
    '元',
    '角',
    '分'
  ];
  private popUpStyle?: object = { 
    position: 'absolute',
    height: 'auto',
    width: '70px',
    borderRadius: '5px',
    bottom: '88px',
    left: '10px',
    boxShadow: '0 0 1px #888'
  };
  @Prop({type: String, default: '元' }) public readonly currMode?: string;
  @Prop({ type: Boolean, default: false }) public isShow!: boolean;
  private getContainer() {
    return document.querySelector('.number-selection-wrapper');
  }
  @Emit('selectMode') send(value: any) {};
  private selectMode(index: number, value: any) {
    this.activeMode = index;
    this.send({ val: value, status: !this.isShow});
  }
}
</script>

<style>
.mode-popup .pop-up-wrapper .pop-up-con {
  padding: 5px 0px;
  font-size: 13px;
}

.mode-popup .pop-up-wrapper .active-mode {
  color: #f73d3d;
}
</style>