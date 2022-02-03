<template>
  <div class="game-lobby">
    <Header
      :msg="$t('message.gameLobby')"
      :back="true"
      :HomePage="false"
      :leftText="'返回'"
      :iconRight="''"
    />
    <div class="game-lobby-content">
      <div class="top-content">
        <div class="user-info">
          <div class="user-info-con">
            <div class="user-name">
              <span>{{$t('message.username')}}：{{ UserData ? UserData.name : '' }} </span>
            </div>
            <div class="user-balance">
              <span class="refresh-bal" @click="refreshBal()"></span>
              <!-- 
              /*
                * @Author: chase 
                * @LastAuthor: null
                * @Param null
                * @Return null
                * @Date: 2021-04-11
                * @Description: Decimal
              */ -->
              <span>{{$t('message.balance')}}：{{ UserData.money ? UserData.money : '0.00' }} </span>
              <span @click="showBalPopOver()" class="arrow-down"
                ><van-icon name="arrow-down" size="18" />
              </span>
            </div>
            <GameBalancesPopover
              v-if="show"
              :isShow="show"
              :money="UserData.money"
              :walletBalance="UserData.walletBalance"/>
          </div>
        </div>
        <div class="recent-game-list">
          <div class="recent-game-list-con">
            <div class="recent-picker">
              <span @click="selectFeaturedGame()">
                {{ isRecent ? $t('message.recentGames') : $t('message.myCollection') }}
              </span>
              <div class="arrow">
                <span class="up" :class="isRecent ? 'active' : null"></span>
                <span class="down" :class="isRecent ? null : 'active'"></span>
              </div>
            </div>
            <div class="recent-games">
              <!-- RECENT GAMES -->
              <div class="recent-games-wrapper" v-if="isRecent">
                <van-grid
                  v-if="recentGameList.length > 0"
                  :border="false"
                  :column-num="4"
                  :clickable="true"
                >
                  <van-grid-item
                    v-for="(recentItem, recentKey) in recentGameList"
                    :key="recentKey"
                  >
                    <van-image
                      @click="goPage('GameIframe', recentItem)"
                      width="50px"
                      height="50px"
                      fit="contain"
                      :src="require(`@/assets/gamelobby/tianjin-times.png`)"
                    />
                    <!-- <span> {{ recentItem.name }} </span> -->
                    <span> {{ recentItem.id }} </span>
                  </van-grid-item>
                </van-grid>
                <div v-else class="no-data">
                  {{ $t('message.noCollection') }}
                </div>
              </div>
              <!-- END RECENT GAMES -->

              <!-- COLLECTION GAMES -->
              <div v-else class="recent-games-wrapper">
                <van-grid
                  v-if="myCollection.length > 0"
                  :border="false"
                  :column-num="4"
                  :clickable="true"
                >
                  <van-grid-item
                    v-for="(collectionItem, collectionKey) in myCollection"
                    :key="collectionKey"
                  >
                    <van-image
                      @click="goPage('GameIframe', collectionItem)"
                      width="50px"
                      height="50px"
                      fit="contain"
                      :src="
                        require(`@/assets/gamelobby/${collectionItem.img}.png`)
                      "
                    />
                    <span> {{ collectionItem.name }} </span>
                  </van-grid-item>
                </van-grid>
                <div v-else class="no-data">
                  {{ $t('message.noCollection') }}
                </div>
              </div>
              <!-- END COLLECTION GAMES -->
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-content">
        <div class="bottom-content-wrapper">
          <van-tabs @click="selectGameType">
            <van-tab
              class="theTabs"
              v-for="(gameTypeItem, gameTypeKey) in gameTypeList"
              :key="gameTypeKey"
              :title="$t(`message['${gameTypeItem.mark}']`)"
            >
              <van-list
                v-model="loading"
                :finished="finished"
                @load="loadData"
                :loading-text="$t('message.loading')"
                :error-text="$t('message.loading')">
                <GameList :itemData="gameList" />
              </van-list>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import GameList from '@/components/GameLobby/GameList.vue'
import GameBalancesPopover from '@/components/GameLobby/GameBalancesPopover.vue'

import {GameClassificationCoreService} from "@/core/GameCore/Service/GameClassificationCoreService";
import {GameClassificationSearchCoreMessage} from "@/core/GameCore/Message/GameClassificationSearchCoreMessage";
import { GameInfoCoreService } from "@/core/GameCore/Service/GameInfoCoreService"
import { GameInfoSearchCoreMessage } from "@/core/GameCore/Message/GameInfoSearchCoreMessage"
import { GameCollectCoreService } from "@/core/GameCore/Service/GameCollectCoreService"
import { GameCollectSearchCoreMessage } from "@/core/GameCore/Message/GameCollectSearchCoreMessage"
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage"
import {UserInfoCoreService} from "@/core/UserCore/Service/UserInfoCoreService"
import { myFn } from "@/utils/fn";

@Component({
  components: {
    Header,
    GameList,
    GameBalancesPopover,
  },
})
export default class GameLobby extends Vue {
  private gameList?: any = [];
  private loading?: boolean = false
  private finished?: boolean = false
  private refreshing?: boolean = false
  private show?: boolean = false
  private isRecent?: boolean = true
  private recentGameList?: any = []
  private myCollection?: any[] = [];
  private gameTypeList?: any = [];
  private UserData: any = {};

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-08 14:36:45
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
    * @Date: 2021-04-14 15:37:45
    * @Description: get the latest user info data
  */
  private refreshBal() {
    this.UserInfo();
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-08 15:10:36
    * @Description: Get user info data
  */
  private UserInfo() {
    let params: any = new UserInfoSearchCoreMessage();
    params.equal_id_userInfo = this.userDetails.id;
    UserInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.UserData = data[0];
        this.UserData.money = myFn.formatDecimal(this.UserData.money)
      }
    })
  }
  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-08 14:36:13
    * @Description: Load the data on van-list component
  */
  private loadData(): void {
    this.GameInfo(this.gameTypeList[0].id);
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-08 14:37:06
    * @Description: Show/close the user balance popover
  */
  private showBalPopOver() {
    this.show = !this.show
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-08 14:38:22
    * @Description: Switch data between game collection and my collection
  */
  private selectFeaturedGame() {
    this.isRecent = !this.isRecent
    if (this.isRecent) {
      this.GameCollect();
    }
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: [name: string, item: any]
    * @Return: null
    * @Date: 2021-04-08 14:39:55
    * @Description: Jump page to game iframe
  */
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

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: val: any
    * @Return: null
    * @Date: 2021-04-08 14:40:03
    * @Description: Select tab item and get data
  */
  private selectGameType(val: any) {
    this.GameInfo(val + 1);
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: val: any
    * @Return: array || []
    * @Date: 2021-04-08 14:59:15
    * @Description: Get game collect data
  */
  private async GameCollect(){
   let params: any = new GameCollectSearchCoreMessage();
   params.equal_userInfo_gameCollect = this.userDetails.id;
    await GameCollectCoreService.Search(params).then((data: any) => {
      this.recentGameList = data;
    })
  } 

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: val: any
    * @Return: array || []
    * @Date: 2021-04-08 14:59:15
    * @Description: Get game classification list
  */
  private async GameClassification(){
   let params: any = new GameClassificationSearchCoreMessage();
    await GameClassificationCoreService.Search(params).then((data: any) => {
      this.gameTypeList = data;
    })
  } 

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: val: any
    * @Return: array || []
    * @Date: 2021-04-08 14:59:15
    * @Description: Get game info list
  */
  private async GameInfo(id: any) {
    let params: any = new GameInfoSearchCoreMessage()
    params.equal_classification_gameInfo = id;
    await GameInfoCoreService.Search(params).then((data: any) => {
      this.gameList = data;
      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    })
  }

  private created () {
    this.GameClassification();
    this.GameCollect();
    this.UserInfo();
  }
}
</script>

<style lang="less" scoped>
/* Theme color */
@import "./../../assets/css/gamelobby.less";

/*
* @Author: Chase 
* @LastAuthor: null
* @Param null
* @Return null
* @Date: 2021-04-04 18:53:09
* @Description: modify Gamelobby CSS
*/

.game-lobby {
  position: absolute;
  top: 46px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  // overflow: hidden;
}

.top-content {
  margin-bottom: 10px;
  padding: 10px 10px 0px 10px;
}

.top-content .user-info {
  display: flex;
  margin-bottom: 15px;
}

.top-content .user-info .user-info-con {
  display: inline-block;
  width: 100%;
}

.top-content .user-info .user-info-con .user-name,
.top-content .user-info .user-info-con .user-balance {
  color: #e32f2f;
  display: flex;
  align-items: center;
}

.top-content .user-info .user-info-con .user-name span,
.top-content .user-info .user-info-con .user-balance span {
  font-size: 15px;
  display: flex;
}

.top-content .user-info .user-info-con .user-name {
  float: left;
}

.top-content .user-info .user-info-con .user-balance {
  float: right;
}

.top-content .user-info .user-info-con .user-balance .refresh-bal {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background: url('../../assets/gamelobby/refresh-balance_classic-red.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.theme-color.theme-color-simple-platinum .top-content .user-info .user-info-con .user-balance .refresh-bal {
  width: 18px;
  height: 18px;
  background: url('../../assets/gamelobby/refresh-balance_simple-platinum.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.top-content .user-info .user-info-con .user-balance .arrow-down {
  margin-left: 3px;
}

.top-content .user-info .user-info-con .user-balance ::v-deep.text {
  color: #333;
  display: inline-block;
  width: 100%;
  font-size: 11px;
}

.top-content .user-info .user-info-con .user-balance ::v-deep.text span {
  font-size: 12px;
}

.top-content .user-info .user-info-con .user-balance ::v-deep.text span:first-child {
  color: #939393;
  float: left;
}

.top-content .user-info .user-info-con .user-balance ::v-deep.text span:last-child {
  float: right;
}

.top-content .user-info .user-info-con .user-balance ::v-deep.pop-up-wrapper {
  padding: 15px 10px;
}

.top-content
  .user-info
  .user-info-con
  .user-balance
  ::v-deep.pop-up-wrapper
  .button
  button {
  width: 95%;
  height: 25px;
  margin-top: 10px;
}

.top-content
  .user-info
  .user-info-con
  .user-balance
  ::v-deep.pop-up-wrapper
  .button
  button
  span {
  font-size: 13px;
}

.top-content .recent-game-list {
  background: #fff;
  border-radius: 5px;
  padding: 9px 8px;
  height: 105px;
  max-height: 105px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.26);
  overflow: hidden;
}

.top-content .recent-game-list .recent-game-list-con .recent-picker {
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
}

.top-content .recent-game-list .recent-game-list-con .recent-picker span {
  font-size: 14px;
  color: #363636;
  float: left;
}

.top-content .recent-game-list .recent-game-list-con .recent-picker .arrow {
  position: relative;
  height: 15px;
  margin-left: 4px;
  width: 10px;
  float: left;
}

.top-content .recent-game-list .recent-game-list-con .recent-picker .arrow .up {
  position: absolute;
  top: 1px;
  width: 0;
  height: 0;
  border-right: 2.875px solid transparent;
  border-bottom: 4.875px solid #dbdbdb;
  border-left: 2.875px solid transparent;
}

.top-content
  .recent-game-list
  .recent-game-list-con
  .recent-picker
  .arrow
  .up.active {
  border-bottom-color: #f14848;
}

.top-content
  .recent-game-list
  .recent-game-list-con
  .recent-picker
  .arrow
  .down {
  position: absolute;
  bottom: 1px;
  width: 0;
  height: 0;
  border-top: 4.875px solid #dbdbdb;
  border-right: 2.875px solid transparent;
  border-left: 2.875px solid transparent;
}

.top-content
  .recent-game-list
  .recent-game-list-con
  .recent-picker
  .arrow
  .down.active {
  border-top-color: #f14848;
}

.top-content .recent-game-list .recent-game-list-con .recent-games .no-data {
  margin: 25px 0px 0px;
  font-size: 14px;
}

.top-content ::v-deep.van-grid .van-grid-item .van-grid-item__content {
  background: transparent;
  padding: 0px;
}

.top-content ::v-deep.van-grid .van-grid-item .van-grid-item__content .van-image {
  margin-bottom: 5px;
}

.top-content ::v-deep.van-grid .van-grid-item .van-grid-item__content span {
  color: #7c7c7c;
  font-size: 12px;
}


.bottom-content .bottom-content-wrapper .van-tabs .van-tabs__wrap {
  border-top: solid 1px #dbdbdb;
  border-bottom: solid 1px #dbdbdb;
  height: 30px;
}

.bottom-content
  .bottom-content-wrapper
  ::v-deep.van-tabs
  .van-tabs__wrap
  .van-tabs__nav {
  padding-left: 0px;
  padding-right: 0px;
  background: linear-gradient(179deg, #fff, #d5d5d5);
}


.bottom-content
  .bottom-content-wrapper
  ::v-deep.van-tabs
  .van-tabs__wrap
  .van-tabs__nav
  .van-tab {
    span {
      word-wrap: break-word;
      text-overflow: clip;
      overflow: visible;
      display: block;
      line-height: 12px;
    }
    color: #ababab;
    font-size: 12px;
    position: relative;
    min-width: 60px;
    padding: 0px;
}

.bottom-content
  .bottom-content-wrapper
  ::v-deep.van-tabs
  .van-tabs__wrap
  .van-tabs__nav
  .van-tab:not(:nth-last-of-type(2))::after {
  content: '';
  position: absolute;
  right: 0;
  height: 70%;
  background-color: #cccccc;
  box-shadow: inset 0px 0px 0px 0px #ffffff;
  width: 1px;
}

.bottom-content
  .bottom-content-wrapper
  ::v-deep.van-tabs
  .van-tabs__wrap
  .van-tabs__nav
  .van-tab--active {
  background-image: linear-gradient(180deg, #fc9c5d 0%, #ee7656 0%, #e04f4f 62%), 
	linear-gradient(#e04f4f, #e04f4f);
  color: #fff;
}

.bottom-content
  .bottom-content-wrapper
  ::v-deep.van-tabs
  .van-tabs__wrap
  .van-tabs__nav
  .van-tab--active::after {
  display: none;
}

.bottom-content
  .bottom-content-wrapper
  ::v-deep.van-tabs
  .van-tabs__wrap
  .van-tabs__nav
  .van-tabs__line {
  display: none;
}

.game-list {
  padding: 10px 0px 0px;
  overflow: scroll;
}

.game-list ::v-deep.game-list-con {
  // padding-bottom: 120px;
  padding-bottom: 10px;
}

.game-list  ::v-deep.game-list-con.van-grid {
  padding-bottom: 10px;
}

.game-list ::v-deep.van-grid-item .van-grid-item__content {
  background: transparent;
  padding: 0px;
  height: 86px;
  overflow: hidden;
}

.game-list ::v-deep.van-grid-item .van-grid-item__content .detail-box {
  display: flex;
  width: 100%;
  padding-top: 20px;
}

.game-list ::v-deep.van-grid-item .van-grid-item__content .detail-box .detail-text {
  width: calc(58% - 10px);
  padding: 7px 0px 0px 10px;
}

.game-list ::v-deep.van-grid-item .van-grid-item__content .detail-box .detail-img {
  width: 42%;
  margin: auto;
}

.game-list
  ::v-deep.van-grid-item
  .van-grid-item__content
  .detail-box
  .detail-text
  span {
  display: block;
  color: #fff;
}

.game-list
  ::v-deep.van-grid-item
  .van-grid-item__content
  .detail-box
  .detail-text
  span:first-child {
  font-size: 15px;
  font-weight: bold;
}

.game-list
  ::v-deep.van-grid-item
  .van-grid-item__content
  .detail-box
  .detail-text
  span:last-child {
  margin-top: 3px;
  padding: 1px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, 0.3);
  font-size: 12px;
  margin: 3px auto 0px;
  width: 70px;
  min-width: 70px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 15px;
  line-height: 16px;
}
</style>
