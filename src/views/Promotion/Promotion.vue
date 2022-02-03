<template>
  <div class="promotion">
    <Header
      :msg="$t('message.promotions')"
      :back="false"
      :HomePage="true"
      :accInfo="false"
      :notifIcon="true"
      :showSwitchLang="false"
      :iconRight="''" />
    <div class="promotion-con">
      <PullRefresh
        @refreshData="onRefresh"
        @loadData="loadData()"
        :refreshing="refreshing"
        :finished="finished"
        :loading="loading">
        <div v-if="responseData.length > 0" slot="list-content" class="promotion-list">
          <PromotionListItem
            v-for="(item, key) in responseData"
            :key="key"
            :itemData="item" />
        </div>
        <div v-else slot="list-content" class="def-height no-data-box">
            <van-empty :description="$t('message.noData')" />
        </div>
      </PullRefresh>
    </div>
    <Footer :activeTabs="1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import PromotionListItem from "@/components/Promotion/PromotionListItem.vue"
import PullRefresh from '@/components/common/PullRefresh.vue'
import { AnchorInfoSearchCoreMessage } from "@/core/AnchorCore/Message/AnchorInfoSearchCoreMessage"
import { AnchorInfoCoreService } from "@/core/AnchorCore/Service/AnchorInfoCoreService"

@Component({
  components: {
    Header,
    Footer,
    PromotionListItem,
    PullRefresh
  },
})
export default class Promotion extends Vue {
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private responseData: any[] = [];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 11:44:56
    * @Description: load data
  */
  private loadData(): void {
    this.AnchorInfo();
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 11:44:56
    * @Description: refreshes all data
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
    * @Date: 2021-04-09 11:44:56
    * @Description: get anchor info data
  */
  private async AnchorInfo() {
    let params: any = new AnchorInfoSearchCoreMessage()
    await AnchorInfoCoreService.Search(params).then((data) => {
      this.responseData = [];
      this.responseData = data;

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;

    })
  }

  private created() {
    this.AnchorInfo();
  }
}
</script>

<style lang="less">
/* Theme color */
@import "./../../assets/css/promotion.less";

.promotion {
  background: transparent;
}

.promotion-list {
  display: inline-block;
  margin-left: 5px;
  padding-bottom: 50px;
  padding-top: 5px;
  min-height: calc(100vh - 105px);
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
