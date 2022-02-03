<template>
  <div class="home main-bet-record">
    <Header :msg="$t('message.bettingRecord')" :back="true" :leftText="'返回'"/>
      <PullRefresh
        @refreshData="onRefresh"
        @loadData="loadData()"
        :refreshing="refreshing"
        :finished="finished"
        :loading="loading">
        <div v-if="betReportList.length > 0"  slot="list-content" class="tabContent def-height">
            <div class="list" v-for="(recItem, recKey) in betReportList" :key="recKey">
                <div class="list-block">
                  <div class="list-block-wrapper">
                    <div class="block-top">
                      <div v-if="recItem.gamePlayingModel" class="interior-left interior-play-name">
                        {{ recItem.gamePlayingModel.name }}
                      </div>
                      <div class="interior-right interior-no-draw">{{ $t('message.noPrize')}}</div>
                    </div>
                    <div class="block-middle">
                      <div class="interior-left">
                        <div class="interior-issue sub">{{ $t('message.issue') }}:<span class="c-color-sub">{{ recItem.currentIssue }}</span></div>
                        <div class="interior-bet-number sub ">
                             {{ $t('message.betNum') }}: <span class="c-color-sub">{{recItem.content }}</span>
                        </div>
                      </div>
                      <div class="interior-right">
                        <van-icon name="arrow" size="18"/>
                      </div>
                    </div>
                    <div class="block-bottom">
                      <div class="interior-left">
                        <div class="interior-bet-amount sub">  
                            {{ $t('message.betAmount')}}: <span class="c-color-sub">{{ recItem.betMoney }}</span>
                        </div>
                        <div class="interior-play sub" style="min-height: 20px;">
                            <!-- {{ $t('message.gameName') }} <span class="c-color-sub">{{ recItem.commission}}</span> -->
                        </div>
                      </div>
                      <div class="interior-right">
                        <div class="interior-time">{{ recItem.insertTime }}</div>   
                        <div class="interior-name">{{ $t('message.howToPlay')  }}:{{ recItem.gamePlaying}}</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div v-else slot="list-content" class="def-height no-data-box">
          <van-empty :description="$t('message.noData')" />
        </div>
      </PullRefresh>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";
import PullRefresh from '@/components/common/PullRefresh.vue'

import {UserBetReportCoreService} from "@/core/UserCore/Service/UserBetReportCoreService";
import {UserBetReportSearchCoreMessage} from "@/core/UserCore/Message/UserBetReportSearchCoreMessage";
import {GameBetCoreService} from "@/core/GameCore/Service/GameBetCoreService";
import {GameBetSearchCoreMessage} from "@/core/GameCore/Message/GameBetSearchCoreMessage";

@Component({
    components: {
        Header,
        PullRefresh
    }
})
export default class BetRecord extends Vue {
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private active: Number = 0;
  private betReportList:any[] = []
  // private tabNames: any[] = [
  //   this.$t('message.noPrize'),
  //   this.$t('message.hasWon'),
  //   this.$t('message.not'),
  //   this.$t('message.tie'),
  //   this.$t('message.order'),
  // ]

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-08 10:08:23
    * @Description: Get current user info
  */
  get userDetails() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-08 10:04:13
    * @Description: Get betting record data
  */
  private async UserBetReport() {
    let params: any = new GameBetSearchCoreMessage();
    params.equal_userInfo_gameBet = this.userDetails.id;
    params.count = 100;
    params.page = 1;
    await GameBetCoreService.Search(params).then((data: any) => {
      this.betReportList = data.reverse();

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;

    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-08 10:04:13
    * @Description: Load the data on van-list component
  */
  private loadData(): void {
    this.UserBetReport();
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-08 10:07:58
    * @Description: refresh data on pull refresh component
  */
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.refreshing = true;
    this.loadData();
  }


  private created () {
    // this.UserBetReport();
  }
}
</script>

<style scoped lang="less">
/* Theme color */
@import "./../../assets/css/betrecord.less";

.list {
  border-radius: 6px;
  box-shadow: 1px 1px 4px 2px rgba(207,207,207,.5);
  width: calc(100% - 20px);
  margin: 0 auto;
  position: relative;
  background-color: #fff;
}

.list:not(:last-child) {
  margin-bottom: 10px;
}

.list-block-wrapper>div {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
}

.list-block-wrapper>div>div {
  flex: 1;
}

.list-block-wrapper .block-top {
  margin: 5px 0px 10px;
}

.list-block-wrapper .block-middle {
  margin-bottom: 6px;
}

.list-block {
  padding: 5px 10px;
  color: #21201E;
}

.interior-left {
  text-align: left;
}

.interior-right {
  text-align: right;
}

.interior-play-name {
  color: #f14848;
  font-size: 16px;
}

.interior-left .interior-issue {
  margin-bottom: 6px;
}

.main-bet-record ::v-deep .van-tabs .van-tabs__wrap .van-tabs__line {
  z-index: unset;
}

.def-height {
  min-height: calc(100vh - (45px + 10px));
  padding-top: 10px;
}

.no-data-box {
  min-height: calc(100vh - (45px + 10px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>