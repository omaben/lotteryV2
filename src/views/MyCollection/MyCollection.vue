<template>
  <div class="home my-collection main-bet-record">
    <Header
      :msg="$t('message.myCollection')"
      :back="true"
      :leftText="$t('message.back')"
    />
    <van-tabs v-model="activeTab" animated>
      <van-tab :title="$t('message.myFavLottery')">
        <PullRefresh
          @refreshData="onRefresh"
          @loadData="loadData()"
          :refreshing="refreshing"
          :finished="finished"
          :loading="loading">
          <div v-if="GameList.length > 0" slot="list-content" class="tabContent">
            <div class="list" v-for="(recItem, recKey) in GameList" :key="recKey">
              <div class="list-block">
                <div class="list-block-wrapper">
                  <div class="block-top">
                    <div class="interior-left interior-play-name">
                      
                    </div>
                    <div class="interior-right interior-no-draw">未开奖</div>
                  </div>
                  <div class="block-middle">
                    <div class="interior-left">
                      <div class="interior-issue sub">
                        期号:
                        <span class="c-color-sub">{{ recItem.gameInfo }}</span>
                      </div>
                      <div class="interior-bet-number sub ">
                        投注号码:
                        <span class="c-color-sub">{{ recItem.mark  }}</span>
                      </div>
                    </div>
                    <div class="interior-right">
                      <van-icon name="arrow" size="18" />
                    </div>
                  </div>
                  <div class="block-bottom">
                    <div class="interior-left">
                      <div class="interior-bet-amount sub">
                        下注金额:
                        <span class="c-color-sub">{{
                          recItem.betMoney + "元"
                        }}</span>
                      </div>
                      <div class="interior-play sub">
                        派奖金额:
                        <span class="c-color-sub">{{
                          recItem.commission + "元"
                        }}</span>
                      </div>
                    </div>
                    <div class="interior-right">
                      <div class="interior-time">{{ recItem.insertTime }}</div>
                      <div class="interior-name">{{ "玩法: " }}</div>
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
      </van-tab>
      <van-tab :title="$t('message.myFavAnchor')">
        <PullRefresh
          @refreshData="onRefresh"
          @loadData="loadData()"
          :refreshing="refreshing"
          :finished="finished"
          :loading="loading">
          <div v-if="ShortVideoList.length > 0" slot="list-content" class="tabContent">
            <div class="list" v-for="(recItem, recKey) in ShortVideoList" :key="recKey">
              <div class="list-block">
                <div class="list-block-wrapper">
                  <div class="block-top">
                    <div class="interior-left interior-play-name">
                      {{ recItem.anchorInfo }}
                    </div>
                    <div class="interior-right interior-no-draw">未开奖</div>
                  </div>
                  <div class="block-middle">
                    <div class="interior-left">
                      <div class="interior-issue sub">
                        期号:
                        <span class="c-color-sub">{{
                          recItem.shortVideo
                        }}</span>
                      </div>
                      <div class="interior-bet-number sub ">
                        投注号码:
                        <span class="c-color-sub">{{ recItem.shortVideoModel.name }}</span>
                      </div>
                    </div>
                    <div class="interior-right">
                      <van-icon name="arrow" size="18" />
                    </div>
                  </div>
                  <div class="block-bottom">
                    <div class="interior-left">
                      <div class="interior-bet-amount sub">
                        下注金额:
                        <span class="c-color-sub">{{
                          recItem.betMoney + "元"
                        }}</span>
                      </div>
                      <div class="interior-play sub">
                        派奖金额:
                        <span class="c-color-sub">{{
                          recItem.commission + "元"
                        }}</span>
                      </div>
                    </div>
                    <div class="interior-right">
                      <div class="interior-time">{{ recItem.insertTime }}</div>
                      <div class="interior-name">{{ "玩法: " }}</div>
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
      </van-tab>
      <van-tab :title="$t('message.myFavVid')">
        <PullRefresh
          @refreshData="onRefresh"
          @loadData="loadData()"
          :refreshing="refreshing"
          :finished="finished"
          :loading="loading">
          <div v-if="VideoList.length > 0" slot="list-content" class="tabContent">
            <div class="list" v-for="(recItem, recKey) in VideoList" :key="recKey">
              <div class="list-block">
                <div class="list-block-wrapper">
                <!--  <div class="block-top">
                    <div class="interior-left interior-play-name">
                      
                    </div>
                    <div class="interior-right interior-no-draw">未开奖</div>
                  </div> -->
                  <div class="block-middle">
                    <div class="interior-left">
                      <div class="interior-issue sub">
                        期号:
                        <span class="c-color-sub">{{ recItem.videoInfo }}</span>
                      </div>
                      <div class="interior-bet-number sub ">
                        投注号码:
                        <span class="c-color-sub">{{ recItem.videoInfoModel.name  }}</span>
                      </div>
                    </div>
                    <!-- <div class="interior-right">
                      <van-icon name="arrow" size="18" />
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else slot="list-content" class="def-height no-data-box">
            <van-empty :description="$t('message.noData')" />
          </div>
        </PullRefresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator"
import PullRefresh from '@/components/common/PullRefresh.vue'
import Header from "@/components/Header.vue"

import { GameCollectSearchCoreMessage } from "@/core/GameCore/Message/GameCollectSearchCoreMessage"
import { GameCollectCoreService } from "@/core/GameCore/Service/GameCollectCoreService"
import { ShortVideoCollectSearchCoreMessage } from "@/core/ShortVideoCore/Message/ShortVideoCollectSearchCoreMessage"
import { ShortVideoCollectCoreService } from "@/core/ShortVideoCore/Service/ShortVideoCollectCoreService"
import { VideoCollectSearchCoreMessage } from "@/core/VideoCore/Message/VideoCollectSearchCoreMessage"
import { VideoCollectCoreService } from "@/core/VideoCore/Service/VideoCollectCoreService"

@Component({
  components: {
    Header,
    PullRefresh
  },
})
export default class MyCollection extends Vue {
  private activeTab: any = 0;
  private GameList: any[] = [];
  private ShortVideoList: any[] = [];
  private VideoList: any[] = [];
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  // private tabNames: any[] = [
  //   this.$t("message.myFavLottery"),
  //   this.$t("message.myFavAnchor"),
  //   this.$t("message.myFavVid"),
  // ];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-06 19:28:03
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
    * @Return: null
    * @Date: 2021-04-07 11:31:41
    * @Description: Load the data on van-list component
  */
  private loadData(): void {
    if (this.activeTab == 0) {
      this.GameCollect();
    } else if (this.activeTab == 1) {
      this.VideoCollect();
    } else {
      this.ShortVideo();
    }
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-07 11:31:41
    * @Description: refresh data on pull refresh component
  */
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.refreshing = true;
    this.loadData();
  }

  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-06 19:27:41
    * @Description: Get all favorite game data
  */
  private async GameCollect() {
    let params: any = new GameCollectSearchCoreMessage();
    params.equal_userInfo_gameCollect = this.userDetails.id;
    await GameCollectCoreService.Search(params).then((data: any) => {
      this.GameList = data;

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    });
  }

  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-06 19:40:25
    * @Description: Get all short video data
  */
  private async ShortVideo() {
    let params: any = new ShortVideoCollectSearchCoreMessage();
    params.equal_userInfo_shortVideoCollect = this.userDetails.id;
    await ShortVideoCollectCoreService.Search(params).then((data: any) => {
      this.ShortVideoList = data;

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    });
  }

  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-06 19:43:25
    * @Description: Get all video data
  */
  private async VideoCollect() {
    let params: any = new VideoCollectSearchCoreMessage();
    params.equal_userInfo_videoCollect = this.userDetails.id;
    await VideoCollectCoreService.Search(params).then((data: any) => {
      this.VideoList = data;

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    });
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: [index: number]
    * @Return: null
    * @Date: 2021-04-06 19:31:18
    * @Description: Select tab item to get data collection
  */
  private SelectCurrentCollection(index: number) {
    this.activeTab = index;
    if (this.activeTab == 0) {
      this.GameCollect();
    } else if (this.activeTab == 1) {
      this.VideoCollect();
    } else {
      this.ShortVideo();
    }
  }

  private created() {
    // this.SelectCurrentCollection(this.activeTab);
  }
}
</script>

<style scoped lang="less">
/* Theme color */
@import "./../../assets/css/betrecord.less";

.list {
  border-radius: 6px;
  box-shadow: 1px 1px 4px 2px rgba(207, 207, 207, 0.5);
  width: calc(100% - 20px);
  margin: 15px auto;
  position: relative;
  background-color: #fff;
}

.list-block-wrapper > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
}

.list-block-wrapper > div > div {
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
  color: #21201e;
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

.my-collection ::v-deep .van-tabs .van-tabs__wrap .van-tabs__line {
  z-index: unset;
  width: 80px;
}

.my-collection .def-height {
  min-height: calc(100vh - (45px + 44px));
}

.my-collection .no-data-box {
  min-height: calc(100vh - (45px + 44px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
