<template>
  <div class="home">
    <Header
      :msg="$t('message.entertainmentHall')"
      :HomePage="HomePage"
      :accInfo="false"
      :notifIcon="true"
      :showSwitchLang="true"
    />

  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <template #success>
      <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.refressSucess') }}</span>
    </template>
    
    <template #loosing>
      <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.looseRefresh') }}</span>
    </template>

    <template #loading>
      <van-loading :color="themeColor[getThemeColor]">
        <span :style="{ color: themeColor[getThemeColor] }">{{ $t('message.loading') }}</span>
      </van-loading>
    </template>

    <van-swipe
      class="my-swipe"
      :autoplay="5000"
      indicator-color="white"
      style="min-height: 150px"
    >
      <van-swipe-item v-for="(item, index) in advertList" :key="index">
        <img lt="" :src="require(`@/assets/images/banner/${item.mark}.png`)" />
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
      :text="announceText"
      left-icon
      scrollable
      class="notification_top"
      @click="showNoticePopup = true"
    >
      <template #left-icon>
        <img alt src="@/assets/home/notif.png" />
      </template>
    </van-notice-bar>
    <van-grid class="icone_info_user" :column-num="3">
      <van-grid-item
        icon
        :text="$t('message.myPurse')"
        @click="goPage('Wallet')"
      >
        <template #icon>
          <img
            alt="user_avatar"
            :src="require('@/assets/images/common/my-wallet-icon.png')"
          />
        </template>
      </van-grid-item>
      <van-grid-item
        icon
        :text="$t('message.betRecord')"
        @click="goPage('BetRecord')"
      >
        <template #icon>
          <img
            alt="user_avatar"
            :src="require('@/assets/images/common/bet-record.png')"
          />
        </template>
      </van-grid-item>
      <van-grid-item
        icon
        :text="$t('message.transactRecord')"
        @click="goPage('FundRecords')"
      >
        <template #icon>
          <img
            alt="user_avatar"
            :src="require('@/assets/images/common/transaction-record.png')"
          />
        </template>
      </van-grid-item>
      <!-- <van-grid-item
        icon
        :text="$t('message.dailyCheckIn')"
        @click="goPage('DailyCheck')"
      >
        <template #icon>
          <img
            alt="user_avatar"
            :src="
              require(`@/assets/tabsicone/theme/topicon4_${getThemeColor}.png`)
            "
          />
        </template>
      </van-grid-item> -->
    </van-grid>
    <div class="white-background">
      <van-grid class="top_banner_home" :column-num="2" gutter="10">
        <van-grid-item icon text="" @click="goPage('GameLobby')">
          <template #icon>
            <img alt="user_avatar" :src="require(`@/assets/images/banner/${getLanguage}/flying_panda.png`)" />
          </template>
        </van-grid-item>
        <van-grid-item icon text="" @click="goPage('GameLobby')">
          <template #icon>
            <img alt="user_avatar" :src="require(`@/assets/images/banner/${getLanguage}/flying_lion.png`)" />
          </template>
        </van-grid-item>
      </van-grid>
      <div class="lottery-gamelist" v-if="lottery.length > 0">
        <van-grid :column-num="4" class="lottery_home">
          <van-grid-item
            v-for="(item, index) in lottery"
            :key="index"
            icon
            :text="$t(`message['${item.name}']`)"
            @click="goPage('GameIframe', item)"
          >
            <template #icon>
              <!-- <img alt="" src="" width="48" height="48" />	 -->
              <img
                alt="user_avatar"
                width="48"
                height="48"
                :src="require('@/assets/home/' + item.picture + '')"
              />
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </van-pull-refresh>

    <!-- POPUP FOR NEWS START -->
    <!--* @Author: chase 
        * @LastAuthor: null
        * @Param null
        * @Return null
        * @Date: 2021-07-04
        * @Description: add popup for Home page news 
        */  -->
      <NoticePopup
          @hide-popop="hidePopup()"
          v-if="showNoticePopup"
          :isShow="showNoticePopup"
      />
      <NoticePopup
          @hide-popop="hidePopup()"
          v-if="showNoticePopup"
          :isShow="showNoticePopup"
          :noticeText="announceText"
      />
    <!-- POPUP FOR NEWS END -->


    <Footer :activeTabs="0" />
  </div>
</template>
<script lang="ts">
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { Component, Vue } from "vue-property-decorator"
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter

import { GameInfoCoreService } from "@/core/GameCore/Service/GameInfoCoreService"
import { GameInfoSearchCoreMessage } from "@/core/GameCore/Message/GameInfoSearchCoreMessage"
import { AdvertisingInfoCoreService } from "@/core/AdvertisingCore/Service/AdvertisingInfoCoreService"
import { AdvertisingInfoSearchCoreMessage } from "@/core/AdvertisingCore/Message/AdvertisingInfoSearchCoreMessage"
import { AnnouncementInfoCoreService } from "@/core/AnnouncementCore/Service/AnnouncementInfoCoreService"
import { AnnouncementInfoSearchCoreMessage } from "@/core/AnnouncementCore/Message/AnnouncementInfoSearchCoreMessage"
import NoticePopup from "@/components/common/NoticePopop.vue";

@Component({
  components: {
    Header,
    Footer,
    NoticePopup,
  },
})
export default class Home extends Vue {
  private showNoticePopup?: boolean = false;
  private showLivePopup?: boolean = false;
  private announceText: any = "";
  private advertList: any = [];
  private HomePage: boolean = true;
  private show: boolean = false;
  private lottery: any = [];
  private isLoading: boolean = false;
  private themeColor: any = {
    "classic-red": "#646566",
    "classic-blue": "#fff",
    "noble-black-gold": "#865920",
    "simple-platinum": "##797676",
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: string || ""
    * @Date: 2021-04-09 11:03:07
    * @Description: get the current theme color
  */
  get getThemeColor() {
    return this.$store.state.themeColor
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: string || ""
    * @Date: 2021-04-09 11:03:44
    * @Description: get the current language
  */
  get getLanguage() {
    return this.$store.state.currLang;
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 11:31:23
    * @Description: refreshes all data
  */
  private onRefresh() {
    this.isLoading = false;
    this.GameInfo()
    this.AdvertisingInfo()
    this.AnnouncementInfo()
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 11:06:12
    * @Description: jump page
  */
  private goPage(name: string, item: any) {
    if (item) {
        this.$store.dispatch('setPlayGroupName', '');
        this.$router.push(
          {
            name: name,
            params: {
              gameid: item.id,
              gamename: item.mark,
            }
          }
        ).catch( (e: any) => {
        if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
            Promise.reject(e)
        }
      });
    } else {
      this.$router.push({ name: name }).catch( (e: any) => {
        if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
            Promise.reject(e)
        }
      })
    }
  }
  
  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 11:06:55
    * @Description: hide pop up
  */
  private hidePopup(v: boolean) {
    this.showNoticePopup = false;
    this.showLivePopup = false;
  }

  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-09 11:07:13
    * @Description: get game info data
  */
  private async GameInfo() {
    let params: any = new GameInfoSearchCoreMessage()
    await GameInfoCoreService.Search(params).then((data: any) => {
      this.lottery = data
    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-09 11:07:13
    * @Description: get banner advertising info data
  */
  private async AdvertisingInfo() {
    let params: any = new AdvertisingInfoSearchCoreMessage()
    await AdvertisingInfoCoreService.Search(params).then((data: any) => {
      this.advertList = data
    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-09 11:08:13
    * @Description: get announcement data
  */
  private async AnnouncementInfo() {
    let params: any = new AnnouncementInfoSearchCoreMessage()
    await AnnouncementInfoCoreService.Search(params).then((data: any) => {
      this.announceText = data[0].content
    })
  }

  private created() {
    this.GameInfo()
    this.AdvertisingInfo()
    this.AnnouncementInfo()
  }
}
</script>
<style lang="less" scoped>
/* Theme color */
@import "./../assets/css/home.less";

.theme-color.theme-color-classic-blue .home {
  background: #f2f4f8;
}

.home {
  min-height: calc(100vh - 71px);
}

.white-background {
  background: #f2f4f8;
  // padding: 0 0 52%;
}

.van-swipe__track {
  justify-content: center;
}
.home-game {
  overflow-y: auto;
  background: #fff;
  display: flex;
  height: calc(100vh - 345px);
}
.home-game .van-sidebar {
  width: 93px;
}
.home-game .game-nav {
  height: 100%;
  box-shadow: 0.026667rem 0.08rem 0.08rem 0 rgba(0, 0, 0, 0.3);
  overflow: auto;
}
.home-game .game-content {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  display: flex;
}
.home-game .van-sidebar-item {
  color: #363636;
  padding: 18px 12px;
  font-size: 13px;
  background: #fff;
  line-height: 16px;
  transition: background 0.2s ease-out;
}
.home-game .van-sidebar-item::before {
  content: none;
}
.home-game .van-sidebar-item--select {
  background: rgb(237, 64, 64);
  color: #fff;
}
.home-game .game-item {
  display: none;
}
.home-game .game-item img {
  width: 100%;
}
.home-game .game-item.active {
  display: block;
}
.game-Lottery {
  padding: 2px 1px;
}
.game-Casino {
  display: inline-block;
  width: 50%;
  padding: 2px 4px;
  box-sizing: border-box;
}
.game-Egames {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
}
.game-SportsBook,
.game-Fish,
.game-Card {
  padding: 2px 5px;
  box-sizing: border-box;
}
.hot-lottery-container {
  display: block !important;
  margin: 2px 0px;
}
.games-Lottery {
  display: inline-block;
  width: 50%;
}
.game-img-wrap {
  height: 48px;
  width: 48px;
  padding-bottom: 3px;
  padding-right: 3px;
}
.lottery-interval {
  font-size: 8px;
  line-height: 16px;
  width: 57px;
  border-radius: 7px;
  margin: 0 auto;
  background: rgb(255, 255, 255, 0.3);
}
.lottery-interval span {
  color: #ffffff;
}
.game-text {
  padding-right: 3px;
  padding-bottom: 10px;
}
.game-title {
  font-size: 15px;
  line-height: 14px;
  padding-bottom: 3px;
  color: #ffffff;
}
.hot-lottery-container .game-content {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 5px;
  margin: 2.5px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.3);
  height: 68px;
}
.pk10-txt span {
  font-size: 11px;
  line-height: 17px;
  color: #2e83fb;
  border-radius: 1px;
  border: solid 1px #2e83fb;
}
.lh-wrapper {
  display: flex;
  height: 36px;
  align-items: center;
  padding: 3.5px 6px;
}
.lh-wrapper:nth-child(even) {
  background: #f2f4f8;
}
.lh-wrapper .date {
  font-size: 11px;
  line-height: 17px;
  color: #363636;
}
.lottery-details {
  display: flex;
  padding-left: 5px;
  height: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.pk10-wrap {
  display: flex;
}
.pk10-sq {
  position: relative;
  display: inline-block;
  color: #fff;
  background-image: url("./../assets/home/base.png");
  background-size: 169px;
  height: 17px;
  width: 17px;
}
.pk10-num-1 {
  background-position: calc(-1 * (17px * (1 - 1)));
}
.pk10-num-2 {
  background-position: calc(-1 * (17px * (2 - 1)));
}
.pk10-num-3 {
  background-position: calc(-1 * (17px * (3 - 1)));
}
.pk10-num-4 {
  background-position: calc(-1 * (17px * (4 - 1)));
}
.pk10-num-5 {
  background-position: calc(-1 * (17px * (5 - 1)));
}
.pk10-num-6 {
  background-position: calc(-1 * (17px * (6 - 1)));
}
.pk10-num-7 {
  background-position: calc(-1 * (17px * (7 - 1)));
}
.pk10-num-8 {
  background-position: calc(-1 * (17px * (8 - 1)));
}
.pk10-num-9 {
  background-position: calc(-1 * (17px * (9 - 1)));
}
.pk10-num-10 {
  background-position: calc(-1 * (17px * (10 - 1)));
}
.lottery-history .van-cell {
  font-size: 12px;
  line-height: 17px;
  height: 27px;
  display: flex;
  align-items: center;
  margin-left: -1px;
  padding: 0;
  border: solid 1px #dcdcdc;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 225, 225, 0.46) 50%,
    rgba(225, 225, 225, 1) 100%
  );
}
.lottery-history ::v-deep .van-cell div {
  padding-left: 5px;
  color: #2a8efd;
}
::v-deep .top_banner_home.van-grid img {
  width: 100%;
  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 26%);
  border-radius: 5px;
}

::v-deep .top_banner_home.van-grid .van-grid-item__content {
  background: transparent;
  padding: 10px 0px;
}

::v-deep .top_banner_home.van-grid .van-grid-item__content::after {
  content: none;
}

.lottery-gamelist {
  padding: 0px 10px 40px;
  border-radius: 10px;
}

::v-deep.lottery_home.van-grid .van-grid-item:nth-child(4n) .van-grid-item__content::after {
  border-width: 0 0px 1px 0;
}

.home .my-swipe img {
  border-radius: 5px;
  width: calc(100% - 20px);
  height: 130px;
  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 26%);
}

.home .my-swipe .van-swipe-item {
  padding: 10px 0px 5px;
  height: 130px;
  min-height: 130px;
  min-height: 130px;
}

.home ::v-deep .my-swipe .van-swipe__indicators {
  bottom: 12px;
}

.home .notification_top {
  padding: 0px 5px 0px 10px;
  height: 28px;
  margin-bottom: 10px;
  margin-top: 5px;
}

.home .notification_top img {
  width: 15px;
  margin-right: 5px;
}

.home ::v-deep .icone_info_user::after {
  content: none;
}

.home ::v-deep .icone_info_user img {
  width: 27px;
  height: 25px;
}

.home ::v-deep .icone_info_user .van-grid-item__content {
  padding: 0px;
  height: 60px;
}

.home ::v-deep .icone_info_user .van-grid-item__content::after {
  content: none;
}

.home ::v-deep .icone_info_user .van-grid-item__content .van-grid-item__text {
  font-size: 10px;
}

.home ::v-deep .icone_info_user {
  background: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  // box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 26%);
  // margin-bottom: 5px;
}

.home ::v-deep .icone_info_user .van-grid-item__content::after {
  border: none;
}

.home {
  padding-bottom: 20px;
}
</style>
