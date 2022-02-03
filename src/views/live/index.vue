<template>
  <div class="live" ref="doc">
    <div ref="hilo" id="hilo-container"></div>
    <van-sticky class="header live">
      <name-info/>
      <!-- <user-image /> -->
      <img class="exitButton" @click="leaveRoom()" src="@/assets/user/icon_live_close.png"/>
    </van-sticky>

    <div class="content">
      <div class="content_video">
        <video
            class="video-fix"
            autoplay
            :src="liveData.url" webkit-playsinline playsinline x5-playsinline>
        </video>
      </div>

      <van-notice-bar
          @click="showNoticePopup = true"
          class="top-marquee"
          scrollable
          :text="newsContent"
          left-icon="volume-o"/>
      <!--            <p class="notitfication" >-->
      <!--                <img src="@/assets/user/speaker.png" />-->
      <!--                江西小模特可纯可欲可撩-->
      <!--            </p>-->
      <!--            <div class="right_content" @click="showgame=true">-->
      <!--                <img src="@/assets/user/icon_live_chat_guard_2.png" />-->
      <!--                <p>02TT</p>-->
      <!--            </div>-->
      <!--            <div class="right_content_bot" @click="showgame2=true">-->
      <!--                <img src="@/assets/user/icon_live_chat_guard_1.png" />-->
      <!--                <p>Game List</p>-->
      <!--            </div>-->

      <div class="description_content">
        <p v-for="(mList, index) in messages" :key="index">
          【{{ mList.name }}】: {{ mList.message }}
        </p>
      </div>
      <NoticePopup
          @hide-popop="hidePopup()"
          v-if="showNoticePopup"
          :isShow="showNoticePopup"
      />
      <NoticePopup
          @hide-popop="hidePopup()"
          v-if="showNoticePopup"
          :isShow="showNoticePopup"
          :noticeText="newsContent"
      />
      <GameList :showGame2="showgame2" @closeGame="showgame2=false"/>
      <LiveGift
          :playLiveAnim="palyAniIn"
          @closeLiveGift="closeLiveGift($event)"
          :showLiveGift="showLivePopup"
      />
      <MessagePopup
          :showMessageBox="showMessagePopup"
          @closeMessage="closeMessage($event)"
          @pass-message="showMes"
          @onChange="onChange"
          @onKeyPress="onKeyPress"
          :input="input"
      />
      <porker-game :showGame="showgame" @closeGame="showgame=false"/>
      <footer-user
          @live-popup="showLivePopup=true"
          @showLive="showlive=true"
          @showMessage="showMessagePopup=true"
      />
    </div>
    <GiftAnimation :name="playGiftAnimation"></GiftAnimation>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import {AnchorInfoCoreService} from "@/core/AnchorCore/Service/AnchorInfoCoreService";
import {AnchorInfoSearchCoreMessage} from '@/core/AnchorCore/Message/AnchorInfoSearchCoreMessage';
import {AnchorFollowCoreService} from "@/core/AnchorCore/Service/AnchorFollowCoreService";
import {AnchorFollowSearchCoreMessage} from '@/core/AnchorCore/Message/AnchorFollowSearchCoreMessage';
import {AnnouncementInfoCoreService} from "@/core/AnnouncementCore/Service/AnnouncementInfoCoreService";
import {AnnouncementInfoSearchCoreMessage} from '@/core/AnnouncementCore/Message/AnnouncementInfoSearchCoreMessage';

/* import { easing, Tween } from "@/ts-tween-master/index";*/

import NameInfo from "../../components/live/nameInfo.vue";
import UserImage from "../../components/live/userImage.vue";
import GiftUser from "../../components/live/giftUser.vue";
import MessagePopup from "../../components/live/message.vue";
import FooterUser from "../../components/live/footerUser.vue";
import PorkerGame from "../../components/live/porkerGame.vue";
import GameList from "../../components/live/gameList.vue";
import LiveGift from "../../components/live/liveGift.vue";
import GiftAnimation from "../../components/live/giftAnimation.vue";
import NoticePopup from "@/components/common/NoticePopop.vue";

@Component({
  components: {
    NameInfo,
    UserImage,
    FooterUser,
    GiftUser,
    MessagePopup,
    PorkerGame,
    NoticePopup,
    GameList,
    LiveGift,
    GiftAnimation
  }
})
export default class extends Vue {
  public playGiftAnimation = "";
  private showLivePopup?: boolean = false;
  private showMessagePopup?: boolean = false;
  private showNoticePopup?: boolean = false;
  private name?: string;
  private uName?: string = "";
  private id?: any;
  private img?: string;
  private showlive: boolean = false;
  private showgame: boolean = false;
  private showgame2: boolean = false;
  private showGC: boolean = false;
  private title: string = "Hello";
  private checkMes: string = "";
  private liveData: any = {};
  private showAni: boolean = false;
  private aniState: number = 0;
  private newsContent?: any = "";
  private data?: any[] = [];
  private userid?: any = "";
  private input?: string = "";
  private Animation: any = {};
  private messages: any[] = [
    {
      name: "充值推荐",
      message: "使用 （银行卡转账）充值加赠3%，成功率100%，同事赠送限量顶级坐骑。"
    },
    {
      name: "官方提示",
      message: "主播不接受任何私下转账，任何要转账的均是骗子，均是骗子，均是骗子，如有损失概不负责！"
    },
    {
      name: "官方招募",
      message: "招小额通道、大额扫码通道，联系飞机 招CDN服务商，联系飞机"
    }
  ];

  get userDetails() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  private playGift(val: string){
    console.log(1234563,val)
    this.playGiftAnimation=val;
    setTimeout( ()=>{
      this.playGiftAnimation="";
    },100)

  }

  private AnnouncementInfo() {
    let params: any = new AnnouncementInfoSearchCoreMessage();
    AnnouncementInfoCoreService.Search(params).then(data => {
      if (data.length > 0) {
        this.newsContent = data[0].content;
      }
    }).catch(error => {
      console.log(error);
    });
  }

  private AnchorInfo() {
    let params: any = new AnchorInfoSearchCoreMessage();
    params.equal_id_anchorInfo = this.$route.params.id
    AnchorInfoCoreService.Search(params).then(data => {
      if (data.length) {
        this.liveData = data[0];
      }
    });
  }

  private AnchorFollow() {
    let params: any = new AnchorFollowSearchCoreMessage();
    params.equal_userId_anchorFollow = this.userDetails.id;
    AnchorFollowCoreService.Search(params).then(data => {
      console.log(data);
    });
  }
  
  private async created() {
    await this.AnchorInfo();
    await this.AnnouncementInfo();
    // await this.AnchorFollow();
  }

  private palyAniIn(count: any) {
    this.Animation.text.text = "x" + count;
    this.Animation.text.color = "#ff0000";
    this.Animation.text.setFont("40px arial");
    this.Animation.text.x =
    this.Animation.stageWidth * 0.5 - this.Animation.text.width - 50;
    this.Animation.text.y = this.Animation.stageHeight * 0.5;
    this.Animation.addChild(this.Animation.text);
    this.Animation.text.cache(true);
    this.Animation.start("Armature", "newAnimation");
    setTimeout(() => {
      this.Animation.stop();
    }, 2000);
  }

  private closeMessage(val: any) {
    this.showMessagePopup = val;
  }

  private closeLiveGift(val: any) {
    this.showLivePopup = val;
  }

  private hidePopup(v: boolean) {
    this.showNoticePopup = false;
    this.showLivePopup = false;
  }

  private leaveRoom() {
    this.$router.back();
  }

  private showGameCont() {
    this.showGC = true;
  }

  private showMes(mes: string) {
    this.messages.push({name: this.userDetails.name, message: mes});
  }

  private onChange(input: any) {
    this.input = input;
  }

  private onKeyPress(button: any) {
    // console.log("button", button);
  }

  private onInputChange(input: any) {
    this.input = input.target.value;
  }

  /*
  * @Author: reggie 
  * @LastAuthor: none
  * @Param null
  * @Return null
  * @Date: 2021-04-15
  * @Description: Hook for message content scroll height
  */
  updated() {
    var elem = document.querySelector('.description_content');
    if (!elem) {
      return;
    }
    elem.scrollTop = elem.clientHeight;
  }
}
</script>
<style>
@import "../../../src/assets/css/live.less";

.theme-color.live {
  height: 100vh;
  margin-top: 0px;
  padding-top: 0px;
  min-height: unset;
  overflow: hidden;
}

.fix-head {
  margin-top: -45px;
}

#hilo-container {
  position: absolute;
  left: 0;
  top: 0;
}

#hilo-continer- > canvas {
  left: 0;
  top: 0;
}

.full-video {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: fill;
}

.header.live {
  position: relative;
}

.ani-image {
  position: fixed;
  transform-origin: 50% 50%;
}

.right_content_bot {
  position: absolute;
  right: 10px;
  bottom: 80px;
  color: #fff;
  font-size: 9pt;
  text-align: center;
}

.footer_icone {
  position: absolute;
  bottom: 0;
  left: 0;
  display: inline-block;
  justify-content: right;
  width: 100%;
  text-align: right;
}

.footer_icone img {
  width: 35px;
  height: 35px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

.footer_icone img.icone_left {
  float: left;
}

/*
  * @Author: chase 
  * @LastAuthor: none
  * @Param null
  * @Return null
  * @Date: 2021-04-10 
  * @Description: Live room redesign
  */
.name_info .button_header.van-button {
  color: #fff;
  margin: 0;
  height: initial;
  background: linear-gradient(0deg, #df4f4f 0%, #fc8686 100%);
  border: none;
  font-size: 12px;
  word-break: keep-all;
  height: 30px;
  padding: 5px 10px;
  min-width: 50px;
}

.items_button {
  display: flex;
  width: 100%;
  overflow-x: auto;
}

.items_button .button_header .van-button {
  color: #fff;
  background: #64605d;
  height: initial;
  padding: 5px 10px;
  font-size: 12pt;
  margin-left: 10px;
}

.gift_user {
  background: #f03820;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  text-align: center;
}

.gift_user h2 {
  color: #f1a502;
  font-size: 13pt;
}

.gift_user p {
  color: #666465;
  margin: 0;
  font-size: 10pt;
  padding-left: 10px;
}

.gift_user .van-radio {
  color: #f5ffff;
  margin-bottom: 15px;
  margin-bottom: 15px;
  width: max-content;
  display: inline-flex;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
}

.gift_user .van-radio .label-class {
  color: #f5ffff;
  font-size: 10pt;
}

.gift_user .van-radio .van-radio__icon--checked .van-icon-success {
  background: transparent;
  border-color: #f1a13f;
  /* width: .7rem; */
  /* height: .7rem; */
}

.gift_user .van-radio .van-radio__icon--checked .van-icon-success:before {
  content: "";
  width: 0.4rem;
  height: 0.4rem;
  background: #f1a640;
  border-radius: 50%;
  top: -6px;
  position: relative;
}

.gift_user .van-radio .van-radio__icon {
  width: 0.7rem;
  height: 0.7rem;
}

.item_gift {
  width: 100%;
  background: #fff;
}

.item_gift.van-row {
  background: #fff;
  margin-bottom: 13px;
  padding: 24px 0px;
  border-radius: 10px;
  font-size: 12pt;
}

.item_gift.van-row .right {
  text-align: right;
  padding-right: 15px;
  color: #666465;
}

.item_gift.last_child.van-row {
  text-align: left;
  padding: 0;
  height: 66px;
  padding-top: 6px;
}

.van-switch__node:before {
  content: "延时3分钟";
}

.van-switch__node {
  width: 116px;
  height: 25px;
  border-radius: 28px;
  font-size: 11pt;
  padding-top: 5px;
  color: #f03820;
  position: relative;
  top: -5px;
  /* left: -96px; */
}

.switch_gift.van-switch.checked .van-switch__node {
  left: 34px;
}

.vant-switch-index.switch_gift {
  position: relative;
  /* left: -41px; */
  /* width: 150px; */
}

.vant-switch-index.switch_gift .van-switch--on {
  background: #d43014;
}

.switch_gift.van-switch {
  width: 149px;
  background: #d43014;
}

.button_gift.van-button--large {
  margin-top: 15px;
  background: #ffd300;
  border: none;
  color: #f03820;
  font-size: 15pt;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 65px;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36 rpx;
  color: #8f8f94;
}

.header .van-sticky {
  display: flex;
  padding: 10px;
  position: absolute;
  z-index: 100;
  width: 100%;
}

.items_button {
  display: flex;
  width: 100%;
  overflow-x: auto;
}

.items_button .button_header.van-button {
  color: #fff;
  background: #64605d;
  height: initial;
  padding: 5px 10px;
  font-size: 12pt;
  margin-left: 10px;
  word-break: keep-all;
}

.description_content {
  position: absolute;
  bottom: 100px;
  color: #fcda4b;
  left: 10px;
  font-size: 10pt;
  background: rgba(0, 0, 0, 0.5);
  width: calc(100% - 80px);
  padding: 1px 5px;
  border-radius: 5px;
  text-align: left;
  height: 200px;
  overflow-y: auto;
}

.description_content > * {
  white-space: normal;
  word-break: break-all;
}

p.notitfication {
  position: absolute;
  top: 10px;
  color: #fff;
  display: inline-block;
  left: 7px;
  background: linear-gradient(to right, #fa8744, #ffdf32);
  padding: 0 10px;
  padding-bottom: 5px;
  border-radius: 16px;
  /* font-size: 10pt; */
}

p.notitfication img {
  width: 25px;
  height: 25px;
  position: relative;
  margin-right: 7px;
  top: 5px;
}

.right_content {
  position: absolute;
  right: 10px;
  top: 80px;
  color: #fff;
  font-size: 9pt;
  text-align: center;
}

.right_content img {
  width: 50px;
  height: 50px;
}

.gift_user .van-radio-group.van-radio-group--horizontal {
  /* text-align: center; */
  display: block;
}

.gift_user .van-radio .van-radio__icon--checked {
  background: transparent;
  border-color: #f1a13f;
  /* width: .7rem; */
  /* height: .7rem; */
}

.gift_user .van-radio .van-radio__icon {
  width: 0.7rem;
  height: 0.7rem;
}

.gift_user .van-radio__icon .van-icon {
  width: 1rem;
  height: 1rem;
  position: relative;
  top: -3px;
}

span.van-.gift_user radio__label {
}

.gift_user span.van-radio__label {
  color: #f5ffff;
}

.gift_user .van-radio-group.van-radio-group--horizontal {
  /* text-align: center; */
  display: block;
}

#hilo-container {
  position: absolute;
  left: 0;
  top: 0;
}

#hilo-continer- > canvas {
  left: 0;
  top: 0;
}

.full-video {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: fill;
  z-index: -22;
}

.header.live {
  position: relative;
}

.ani-image {
  position: fixed;
  transform-origin: 50% 50%;
}

.top-marquee {
  position: absolute;
  top: 0px;
  left: 5px;
  right: 0;
  width: calc(100% - 10px);
  border-radius: 20px;
  height: 30px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  top: 65px;
}

.right_content_bot {
  position: absolute;
  right: 10px;
  bottom: 80px;
  color: #fff;
  font-size: 9pt;
  text-align: center;
  /* img {
      width: 50px;
      height: 50px;
  } */
}
/*
* @Author: chase 
* @LastAuthor: none
* @Param null
* @Return null
* @Date: 2021-04-10 
* @Description: fixed exit button
*/
.exitButton {
  border: 4px solid rgba(0, 0, 0, 0.123);
  background: rgba(0, 0, 0, 0.123);
  border-radius: 50%;
  position: absolute;
  right: 30px;
  top: 15px;
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0;
}

.content_video {
  width: 100%;
  height: calc(100vh - 65px);
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
}

.video-fix {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>