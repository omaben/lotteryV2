<template>
  <div class="com-wrapper">
    <Header :msg="$t('message.myComment')" :back="true" />
    <van-tabs v-model="activeTab" animated>
      <van-tab :title="$t('message.video')">
      <PullRefresh
        @refreshData="onRefresh"
        @loadData="loadData()"
        :refreshing="refreshing"
        :finished="finished"
        :loading="loading">
          <div v-if="videoCommentList.length > 0" slot="list-content" class="tabContent">
            <div class="list" v-for="(item, recKey) in videoCommentList" :key="recKey">
              <div class="list-block">
                <div class="list-block-wrapper">
                  <div>
                    <div class="interior-left">
                      <div class="interior-issue sub">
                        {{ $t("message.myComment") }}:&nbsp;
                        <span class="c-color-sub">{{ item.content }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-middle">
                    <div class="interior-left">
                      <div class="interior-issue sub">
                        {{ $t("message.videoName") }}:&nbsp;
                        <span class="c-color-sub">
                          {{
                            item.videoInfoModel
                              ? item.videoInfoModel.name
                              : ""
                          }}</span
                        >
                      </div>
                      <div class="interior-bet-number sub ">
                        {{ $t("message.videoId") }}:&nbsp;
                        <span class="c-color-sub">{{ item.id }}</span>
                      </div>
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
      <van-tab :title="$t('message.shortVideo')">
        <PullRefresh
          @refreshData="onRefresh"
          @loadData="loadData()"
          :refreshing="refreshing"
          :finished="finished"
          :loading="loading">
            <div v-if="shortVidCommentList.length > 0" slot="list-content" class="tabContent">
              <div
                class="list"
                v-for="(item, recKey) in shortVidCommentList"
                :key="recKey"
              >
                <div class="list-block">
                  <div class="list-block-wrapper">
                    <div>
                      <div class="interior-left">
                        <div class="interior-issue sub">
                          {{ $t("message.myComment") }}:&nbsp;
                          <span class="c-color-sub">{{ item.content }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="block-middle">
                      <div class="interior-left">
                        <div class="interior-issue sub">
                          {{ $t("message.videoName") }}:&nbsp;
                          <span class="c-color-sub">{{
                            item.shortVideoInfoModel
                              ? item.shortVideoInfoModel.name
                              : ""
                          }}</span>
                        </div>
                        <div class="interior-bet-number sub ">
                          {{ $t("message.videoId") }}:&nbsp;
                          <span class="c-color-sub">{{ item.id }}</span>
                        </div>
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
    </van-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/Header.vue"
import PullRefresh from '@/components/common/PullRefresh.vue'
import { ShortVideoCommentSearchCoreMessage } from "@/core/ShortVideoCore/Message/ShortVideoCommentSearchCoreMessage"
import { ShortVideoCommentCoreService } from "@/core/ShortVideoCore/Service/ShortVideoCommentCoreService"
import { VideoCommentSearchCoreMessage } from "@/core/VideoCore/Message/VideoCommentSearchCoreMessage"
import { VideoCommentCoreService } from "@/core/VideoCore/Service/VideoCommentCoreService"

@Component({
  components: {
    Header,
    PullRefresh
  },
})
export default class MyComments extends Vue {
  private activeTab: number = 0;
  private shortVidCommentList: any = [];
  private videoCommentList: any = [];
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-07 10:31:54
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
    * @Date: 2021-04-07 10:33:22
    * @Description: Load the data on van-list component
  */
  private loadData(): void {
    if (this.activeTab == 0) {
      this.VideoComment();
    } else {
      this.ShortVideoComment();
    }
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-07 10:33:22
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
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-07 10:35:47
    * @Description: Get all my video comment data
  */
  private async VideoComment() {
    let params = new VideoCommentSearchCoreMessage()
    params.equal_userInfo_videoComment = this.userDetails.id;
    await VideoCommentCoreService.Search(params).then((data: any) => {
      this.videoCommentList = data;

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
    * @Return: array || []
    * @Date: 2021-04-07 10:39:06
    * @Description: Get all my short video comment data
  */
  private async ShortVideoComment() {
    let params = new ShortVideoCommentSearchCoreMessage()
    params.equal_userInfo_shortVideoComment = this.userDetails.id;
    await ShortVideoCommentCoreService.Search(params).then((data: any) => {
      this.shortVidCommentList = data;

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
    * @Param: [index: number]
    * @Return: null
    * @Date: 2021-04-07 10:41:12
    * @Description: Select tab item to get data
  */
  private SelectCurrentCollection(index: number) {
    this.activeTab = index;
    if (this.activeTab == 0) {
      this.VideoComment();
    } else {
      this.ShortVideoComment();
    }
  }

  private created() {
    // this.SelectCurrentCollection(this.activeTab);
  }
  
}
</script>
<style lang="less" scoped>
.theme-color.theme-color-classic-blue
  .com-wrapper
  ::v-deep.van-tabs__wrap
  .van-tabs__line {
  background-color: #11548f;
}

.theme-color.theme-color-simple-platinum
  .com-wrapper
  ::v-deep.van-tabs__wrap
  .van-tabs__line {
  background-color: #ababab;
}

.card {
  border-radius: 6px;
  box-shadow: 1px 1px 4px 2px rgba(207, 207, 207, 0.5);
  width: calc(100% - 20px);
  margin: 15px auto;
  background-color: #fff;
  height: 137px;
}
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

.main-bet-record ::v-deep .van-tabs .van-tabs__wrap .van-tabs__line {
  z-index: unset;
}

.com-wrapper .def-height {
  min-height: calc(100vh - (45px + 44px));
}

.com-wrapper .no-data-box {
  min-height: calc(100vh - (45px + 44px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
