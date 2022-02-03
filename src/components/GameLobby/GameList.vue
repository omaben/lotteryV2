<template>
  <div class="game-list" v-if="itemData.length > 0">
    <div class="game-list-con">
      <van-grid :gutter="10" :border="false" :column-num="2" :clickable="true">
        <van-grid-item
          v-for="(item, itemKey) in itemData"
          :key="itemKey"
          :style="getlotteryBg('back5.png')"
          @click="goPage('GameIframe', item)">
          <img class="fix-banner" src="@/assets/images/banner/lazy-panda-icon.png" alt="">
          <div class="detail-box">
            <div class="detail-text">
              <span> {{ $t(`message['${item.name}']`) }} </span>
              <span> {{ item.lotInterval }} </span>
            </div>
            <div class="detail-img">
              <van-image width="60px" height="60px" fit="contain" :src="require(`@/assets/gamelobby/tianjin-times.png`)" />
              <!-- <van-image width="60px" height="60px" fit="contain"
                :src="require(`@/assets/gamelobby/${item.img}.png`)" /> -->
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

export default class GameList extends Vue {
  @Prop({ type: Array, default: [] }) public readonly itemData!: any[];
  private getlotteryBg(img: string): string {
    return `background: url(${require('@/assets/gamelobby/'+img+'')});
            background-repeat: no-repeat;
            background-size: calc(100% - 10px) 100%;`;
  }
  private goPage(name: string, item: any) {
    this.$router.push(
      {
        name: name,
        params: {
          gameid: item.id,
          gamename: item.mark,
         }
      }
    );
  }
}
</script>

<style>

.game-list .van-grid-item__content {
  position: relative;
}

.game-list .fix-banner {
  width: 100px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 0px;
  object-fit: cover;
}
</style>