<template>
  <div class="dragon-luzhu" :class="'game-type-'+gameType">
    <div class="dragon-luzhu-wrapper">
      <van-tabs v-model="activeTab" @click="changeTab(activeTab)">
        <van-tab v-for="(item, key) in tabItems" :key="key" :title="item">
          <div v-if="activeTab == 0">
            <div class="luzhu">
              <van-tabs v-model="activeSubTab" @click="changeSubTab(activeSubTab)">
                <van-tab v-for="(subItem, subKey) in luzhuItems" :key="subKey" :title="subItem">
                  <RoadBeads />
                </van-tab>
              </van-tabs>
            </div>
          </div>
          <div v-if="activeTab == 1"></div>
          <div v-if="activeTab == 2"></div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import RoadBeads from '@/components/GameIframe/GameContent/RoadBeads.vue';

@Component({
  components: {
    RoadBeads
  }
})

export default class DragonLuzhu extends Vue {
  @Prop({type: String, default: 'PK10' }) public readonly gameType!: string;
  @Prop({type: Object, default: () => { {} } }) public readonly data!: object;
  private activeTab?: number = 0;
  private activeSubTab?: number = 0;

  private tabItems?: any[] = [
    this.$t('message.luzho'),
  ];
  private luzhuItems?: any[] = [
    this.$t('message.champSize'),
    this.$t('message.champOdd'),
    this.$t('message.guanYahe'),
    this.$t('message.crownSize'),
    this.$t('message.guanYaheOdd'),
  ];
  private changeTab(index: number) {
    this.activeTab = index;
  }
  private changeSubTab(index: number) {
    this.activeSubTab = index;
  }
}
</script>

<style>
.dragon-luzhu .van-tabs .van-tabs__wrap {
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
  height: 27px;
}

.dragon-luzhu .van-tabs .van-tabs__wrap .van-tab.van-tab--active{
  color: #f14848;
}

.dragon-luzhu .van-tabs .van-tabs__wrap .van-tabs__line{
  background-color: #f14848;
  height: 2px;
  width: 80px;
}

.dragon-luzhu .luzhu .van-tabs__wrap {
	box-shadow: none;
  height: 30px;
}

.dragon-luzhu .luzhu .van-tabs .van-tabs__wrap .van-tabs__line{
  display: none;
}

.dragon-luzhu .luzhu .van-tabs .van-tabs__wrap .van-tab.van-tab--active{
  background: #fff;
}

.dragon-luzhu .luzhu .van-tabs .van-tabs__wrap .van-tab {
  background: #f2f4f8;
}
</style>