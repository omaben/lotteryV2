<template>
  <div class="home my-present main-bet-record">
    <Header
      :msg="$t('message.myPresent')"
      :back="true"
      :leftText="$t('message.back')"
    />
    <van-tabs v-model="active" animated>
      <van-tab
        v-for="(tabName, index) in tabNames"
        :key="index"
        :title="tabName"
      >
        <PullRefresh
          @refreshData="onRefresh"
          @loadData="loadData()"
          :refreshing="refreshing"
          :finished="finished"
          :loading="loading">
          <div v-if="sendGiftRecord.length > 0" slot="list-content" class="tabContent">
            <div class="list" v-for="(item, key) in sendGiftRecord" :key="key">
              <div class="list-block">
                <div class="list-block-wrapper">
                  <div class="block-top">
                    <div class="interior-left interior-play-name">
                      {{ item.name }}
                    </div>
                  </div>
                  <div class="block-middle">
                    <div class="interior-left">
                      <div class="interior-issue sub">
                        {{ $t('message.money') }}:
                        <span class="c-color-sub">
                          {{ item.price }}</span>
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
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator"
import PullRefresh from '@/components/common/PullRefresh.vue'
import Header from "@/components/Header.vue"

import { AnchorSendGiftRecordSearchCoreMessage } from "@/core/AnchorCore/Message/AnchorSendGiftRecordSearchCoreMessage"
import { AnchorSendGiftRecordCoreService } from "@/core/AnchorCore/Service/AnchorSendGiftRecordCoreService"

@Component({
  components: {
    Header,
    PullRefresh
  },
})
export default class MyPresent extends Vue {
  private active: Number = 0;
  private sendGiftRecord: any = [];
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private tabNames: any[] = [
    this.$t('message.myCollect'),
  ];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-06 18:51:09
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
    * @Date: 2021-04-07 11:06:30
    * @Description: Load the data on van-list component
  */
  private loadData(): void {
    this.AnchorSendGiftRecord();
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-07 11:07:58
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
    * @Date: 2021-04-06 18:48:09
    * @Description: Get all user send gift record
  */
  private async AnchorSendGiftRecord() {
    let params: any = new AnchorSendGiftRecordSearchCoreMessage();
    params.equal_userInfo_anchorSendGiftRecord = this.userDetails.id;
    await AnchorSendGiftRecordCoreService.Search(params).then((data: any) => {
      this.sendGiftRecord = data;

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    });
  }

  private created() {
    this.AnchorSendGiftRecord();
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

.my-present .def-height {
  min-height: calc(100vh - (45px + 44px));
}

.my-present .no-data-box {
  min-height: calc(100vh - (45px + 44px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
