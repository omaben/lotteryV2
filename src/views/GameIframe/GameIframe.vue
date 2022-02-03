<template>
  <div class="game-iframe">
    <GameNav
      @showDropMenu="showDropMenu($event)"
      @onOpenMenu="onOpenMenu($event)"
      @onCloseMenu="onCloseMenu($event)"
      @openDropMenu="openDropMenu($event)"
      @closeDropMenu="closeDropMenu($event)" />
    <GameContent @showOfficialBetSwitch="showOfficialBetSwitch($event)" :hasDropMenu="isShowDropMenu"/>
    <GameFooter :hasDropMenu="isShowDropMenu" :hasMenu="isMenu"/>
    
    <OfficialBetSwitch
      v-if="isOfficialBetSwitch"
      @hideOfficialBetSwitch="hideOfficialBetSwitch($event)"
      :isShow="isOfficialBetSwitch" />
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import GameNav from '@/components/GameIframe/GameNav.vue'
import GameContent from '@/components/GameIframe/GameContent.vue';
import GameFooter from '@/components/GameIframe/GameFooter.vue';
import OfficialBetSwitch from '@/components/GameIframe/GamePopup/OfficialBetSwitch.vue'

@Component({
  components: {
    GameNav,
    GameContent,
    GameFooter,
    OfficialBetSwitch,
  }
})

export default class GameIframe extends Vue {
  private isOfficialBetSwitch?: boolean = false;
  private isShowDropMenu?: boolean = false;
  private count?: number | any = 0;
  private isMenu?: boolean = false;
  private showOfficialBetSwitch(val: any) {
    this.isOfficialBetSwitch = val;
  }
  private hideOfficialBetSwitch(val: any) {
    this.isOfficialBetSwitch = val;
  }
  private openDropMenu(val: any) {
    this.isShowDropMenu = val;
  }
  private closeDropMenu(val: any) {
    this.isShowDropMenu = val;
  }
  private onOpenMenu(val: any) {
    this.isMenu = val;
  }
  private onCloseMenu(val: any) {
    this.isMenu = val;
  }
  get gamePlayType(): string {
    return this.$store.state.gamePlayType;
  }
}
</script>

<style lang="less">
/* Theme color */
@import "./../../assets/css/gameiframe.less";

.theme-color.GameIframe {
  min-height: unset;
}

.game-iframe {
  min-height: calc(100vh - 45px);
  background: #f2f4f8;
}
</style>