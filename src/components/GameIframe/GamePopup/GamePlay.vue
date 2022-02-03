<template>
  <van-popup
    v-model="isShow"
    :style="popUpStyle"
    :get-container="getContainer"
    position="left"
    :overlay="false"
    :overlay-style="{ backgroundColor: 'transparent' }"
    :round="true"
    :close-on-click-overlay="false"
    class="gameplay-popup">
    <div class="pop-up-wrapper">
      <div
        v-for="(game, key) in games"
        :key="key"
        class="pop-up-con"
        @click="selectGamePlay(game)"
        :class="currentGameType == game ? 'active-game' : null">
        <span>{{ game }}</span>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class GamePlay extends Vue {
  private currentGameType?: string = '';
  private games?: any[] = [
    this.$t('message.officialGame'),
    this.$t('message.creditGame'),
  ];
  private popUpStyle?: object = { 
    height: 'auto',
    minWidth: '100px',
    width: 'auto',
    borderRadius: '5px',
    top: '113px',
    left: '10px',
    boxShadow: '0 0 1px #888'
  };
  @Prop({ type: Boolean, default: false }) public isShow!: boolean;
  private getContainer() {
    return document.querySelector('.current-user-info-wrapper');
  }
  @Emit('selectGamePlay') send(value: any) {};
  private selectGamePlay(value: any) {
    this.$store.dispatch('setGamePlayType', value);
    this.currentGameType = this.$store.state.gamePlayType;
    this.send(!this.isShow)
  }
  private mounted() {
    this.currentGameType = this.$store.state.gamePlayType;
  }
}
</script>

<style>
.gameplay-popup .pop-up-con.active-game span {
  color: #f73d3d;
}

.gameplay-popup .pop-up-con {
  padding: 0px 10px;
}

.gameplay-popup .pop-up-con span {
  color: #939393;
  font-size: 13px;
}
</style>