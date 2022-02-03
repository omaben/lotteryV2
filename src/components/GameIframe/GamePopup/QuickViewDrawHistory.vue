<template>
  <div class="quick-view-draw-history-content">
    <van-tabs v-model="tabActive" @click="changeTab(tabActive)" class="quick-view-draw">
      <van-tab v-for="(tabItem, tabKey) in drawTabs[gamePlayType]"
        :key="tabKey"
        :title="tabItem">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="loadData">
            <div v-if="tabActive == 0">
              <DrawNumbers
                v-for="(drawItem, drawKey) in drawInfo"
                :key="drawKey"
                :drawData="drawItem"
                :gameType="gameType"/>
            </div>
            <div v-if="tabActive == 1">
              <DragonLuzhu />            
            </div>
          </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import { GameHistoryCoreService } from "@/core/GameCore/Service/GameHistoryCoreService"
import { GameHistorySearchCoreMessage } from "@/core/GameCore/Message/GameHistorySearchCoreMessage"

@Component({
  components: {
    DrawNumbers: () => import('@/components/GameIframe/GameContent/DrawNumbers.vue'),
    DragonLuzhu: () => import('@/components/GameIframe/GameContent/DragonLuzhu.vue'),
  },
})

export default class QuickViewDrawHistory extends Vue {
  @Prop({type: String, default: 'PK10' }) public readonly gameType?: string;
  @Prop({type: Boolean, default: false }) public readonly isShow?: string;
  private tabActive?: number = 0;
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private drawTabs?: object = {
    '官方玩法': [
      this.$t('message.historicalLottery'),
      // '长龙/路珠',
      // this.$t('message.trend'),
    ],
    'Official gameplay': [
      this.$t('message.historicalLottery'),
      // '长龙/路珠',
      // this.$t('message.trend'),
    ],
    '信用玩法': [
      this.$t('message.historicalLottery'),
      // this.$t('message.dragonLuzho'),
      // this.$t('message.trend'),
    ],
    'Credit game': [
      this.$t('message.historicalLottery'),
      // this.$t('message.dragonLuzho'),
      // this.$t('message.trend'),
    ]
  };
  private drawInfo?: any = [];
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.loadData();
  }

  private loadData(): void {
    setTimeout(() => {
      if (this.refreshing) {
        this.drawInfo = [];
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    }, 1000);
  }

  private changeTab(index: number) {
    this.tabActive = index;
  }

  get gamePlayType(): string {
    return this.$store.state.gamePlayType;
  }

  private async GameHistory(){
   let params: any = new GameHistorySearchCoreMessage();
    params.equal_gameInfo_gameHistory = this.$route.params.gameid;
    params.count = 100;
    params.page = 1;
    await GameHistoryCoreService.Search(params).then((data: any) => {
      this.drawInfo = data.reverse();
    })
  }

  @Watch('isShow')
  onChangeShowVal(newVal: any, oldVal: any) {
    if(newVal) {
      this.GameHistory();
    }
  }

  @Watch("$route", {immediate: true, deep: true})
  onUrlChange(newVal: any) {
    if (this.$route.path != newVal) {
      this.GameHistory();
    }
  }

  private mounted() {}

}
</script>

<style>
.quick-view-draw-history-content {
  height: calc(100vh - (58px + 34px + 55px));
}

.quick-view-draw>.van-tabs__wrap {
  border-top: solid 1px #dbdbdb;
  border-bottom: solid 1px #dbdbdb;
  height: 40px;
}

.quick-view-draw>.van-tabs__content {
  /* height: calc(100vh - 327px); */
  overflow-y: scroll;
    height: calc(100vh - 250px);
}

.quick-view-draw>.van-tabs__wrap .van-tabs__nav {
  padding-left: 0px;
  padding-right: 0px;
  background: linear-gradient(179deg,#fff,#d5d5d5);
}

.quick-view-draw>.van-tabs__wrap .van-tabs__nav .van-tab {
  color: #ababab;
  font-size: 14px;
  position: relative;
  min-width: 60px;
  padding: 0px;
}

.quick-view-draw>.van-tabs__wrap .van-tabs__nav .van-tab:not(:nth-last-of-type(2))::after {
  content: "";
  position: absolute;
  right: 0;
  height: 70%;
  background-color: #cccccc;
	box-shadow: inset 0px 0px 0px 0px #ffffff;
  width: 1px;
}

.quick-view-draw>.van-tabs__wrap .van-tabs__nav .van-tab--active {
  background: linear-gradient(180deg,#fc9c5d,#ee7656 0,#e04f4f 62%),linear-gradient(#e04f4f,#e04f4f);
  color: #fff;
}

.quick-view-draw>.van-tabs__wrap .van-tabs__nav .van-tab--active::after {
  display: none;
}

.quick-view-draw>.van-tabs__wrap .van-tabs__nav .van-tabs__line {
  display: none;
}

.quick-view-draw .draw-numbers:nth-of-type(odd) {
  background: #fff;
}

.quick-view-draw .draw-numbers:nth-of-type(even) {
  background: #f2f4f8;
}
</style>