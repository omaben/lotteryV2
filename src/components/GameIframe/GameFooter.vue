<template>
  <div class="game-footer" :class="hasDropMenu || hasMenu ? 'has-drop-menu' : null">
    <div class="game-footer-wrapper">
      <BetInfo @showMode="showMode($event)" :mode="selectedMode" :isShowMode="isShowMode" />
    </div>
    <Mode v-if="isShowMode" :isShow="isShowMode" :currMode="selectedMode" @selectMode="selectMode($event)"/>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import BetInfo from '@/components/GameIframe/GameFooter/BetInfo.vue';
import Mode from '@/components/GameIframe/GamePopup/Mode.vue';

@Component({
  components: {
    BetInfo,
    Mode,
  }
})

export default class GameFooter extends Vue {
  private isShowMode?: boolean = false;
  private selectedMode?: string = '元';
  @Prop({type: Boolean, default: false }) public readonly hasDropMenu?: boolean;
  @Prop({type: Boolean, default: false }) public readonly hasMenu?: boolean;
  private showMode(val: any) {
    this.isShowMode = val;
  }
  private selectMode(data: any) {
    this.selectedMode = data.val;
    this.isShowMode = data.status;
  }
}
</script>

<style>
.game-footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  border-top: 1px solid #dbdbdb;
}

.game-footer.has-drop-menu {
  z-index: 1;
}
</style>