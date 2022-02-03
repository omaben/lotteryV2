<template>
  <div>
    <van-nav-bar
      left-text
      left-arrow
      class="header_blue"
      :fixed="fixed"
      :class="{ HomePage: HomePage, scroll: scroll }"
    >
      <template #title>
        <div v-if="msg">
          <span> {{ msg }}</span>
        </div>
        <div v-else class="game-nav">
          <van-dropdown-menu
            :close-on-click-overlay="false"
            :class="getLanguage === 'en' ? 'eng-lang' : null"
          >
            <van-dropdown-item
              v-model="value"
              :options="[]"
              :title="currGame ? $t(`message['${currGame}']`) : ''"
              z-index="1000"
              ref="item"
            >
              <div class="drop-down-box-content">
                <div class="box-content-wrapper" v-if="gameTypeList.length > 0">
                  <div
                    class="per-type-box"
                    v-for="(gameType, gameTypeKey) in gameTypeList"
                    :key="gameTypeKey"
                  >
                    <van-divider
                      :style="{
                        color: '#e63333',
                        borderColor: '#e63333',
                        padding: '0 16px',
                        margin: '5px 0px 10px',
                      }"
                    >
                      <!-- {{ gameType.name }} -->
                      {{ $t(`message['${gameType.mark}']`) }}
                    </van-divider>
                    <div class="list-button">
                      <van-button
                        v-for="(item, key) in gameList[gameType.id]"
                        :key="key"
                        @click="selectItem(item)"
                        type="default"
                        size="normal"
                      >
                        {{ $t(`message['${item.name}']`) }}
                      </van-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="close-drop-down">
                <div @click="hideDropDown()">{{ $t("message.putAway") }}</div>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </template>
      <template #left>
        <div v-if="showDropOut" class="drop-out">
          <span @click="logout()">
            {{ $t("message.logout") }}
          </span>
        </div>
        <div v-if="notifIcon" class="notif-icon" :class="{ hasNotif: true }">
          <!-- <van-image
                  width="17"
                  height="17"
                  fit="contain"
                  :src="require('@/assets/home/menu_notification.png')"/> -->
        </div>
        <van-icon v-if="back" name="arrow-left" @click="onClickLeft" />
        <span v-if="back" @click="onClickLeft">{{ $t("message.back") }}</span>
      </template>
      <template #right>
        <div v-if="accInfo" class="infoLogin" :class="{ text: isLogin }">
          <div v-if="isLogin" @click="goPage(goToURL)">
            <span>{{ userInfo.name }}</span>
            <span class="money">{{ "¥" + userInfo.money + "元" }}</span>
            <van-image
              width="17"
              height="17"
              fit="contain"
              :src="require('@/assets/home/menu.png')"
            />
          </div>
          <div v-else style="display: flex">
            <div @click="goPage('Login')" style="margin-right: 10px">
              {{ $t("message.login") }}
            </div>
            <div @click="goPage('Register')">{{ $t("message.registered") }}</div>
          </div>
        </div>
        <p v-if="rightText" class="right-text" @click="goPage(goToURL)">
          {{ rightText }}
        </p>
        <p v-else-if="showFilter" class="right-text" @click="showFilterDate()">
          {{ $t("message.filter") }}
        </p>
        <p v-else-if="saveUser" class="right-text" @click="saveUserDetail()">
          {{ $t("message.save") }}
        </p>
        <p v-else-if="showSwitchLang" @click="showDropdownLangFn">
          {{ getLanguage }}
        </p>
        <!-- <van-icon
          v-if="!back"
          size="19"
          :name="iconRight"
          @click="goPage(goToURL)"
        /> -->
      </template>
    </van-nav-bar>
    <van-action-sheet class="lang-sheet" v-model="showDropdownLang" :title="$t('message.language')">
      <van-cell v-for="item in langList" :key="item.name" :title="item.title" @click="changeLang(item.name)" :class="{'active-lang' : item.title === getLanguage}"/>
    </van-action-sheet>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { GameClassificationCoreService } from "@/core/GameCore/Service/GameClassificationCoreService";
import { GameClassificationSearchCoreMessage } from "@/core/GameCore/Message/GameClassificationSearchCoreMessage";
import { GameInfoCoreService } from "@/core/GameCore/Service/GameInfoCoreService";
import { GameInfoSearchCoreMessage } from "@/core/GameCore/Message/GameInfoSearchCoreMessage";
import { myFn } from "@/utils/fn";

@Component({
  components: {},
})
export default class Header extends Vue {
  @Prop({ type: String, default: "" }) private msg?: string;
  @Prop({ type: String, default: "ellipsis" }) private iconRight?: string;
  @Prop({ type: String, default: "" }) private rightText?: string;
  @Prop({ type: String, default: "Home" }) private goToURL?: string;
  @Prop({ type: String, default: "" }) private leftText?: string;
  @Prop({ type: Boolean, default: false }) private back?: boolean;
  @Prop({ type: Boolean, default: false }) private HomePage?: boolean;
  @Prop({ type: Boolean, default: false }) public readonly notifIcon?: boolean;
  @Prop({ type: Boolean, default: false }) public readonly accInfo?: boolean;
  @Prop({ type: Boolean, default: false }) public readonly showFilter?: boolean;
  @Prop({ type: Boolean, default: false })
  public readonly showDropOut?: boolean;
  @Prop({ type: Boolean, default: false })
  public readonly showSwitchLang?: boolean;
  @Prop({ type: Function }) public readonly saveUser?: Function;
  private scroll: any = null;
  private userBalance = this.$store.state.userBalance;
  private value1: any = 0;
  private option1: any = [
    { text: "Option1", value: 0 },
    { text: "Option2", value: 1 },
    { text: "Option3", value: 2 },
  ];
  private value?: boolean = false;
  private fixed: boolean = true;
  private hasNotif?: boolean = true;
  private gameTypeList?: any = [];
  private gameList?: any = {};
  private currGame: any = "";
  private showDropdownLang: boolean = false

  private langList: any = [
    {
      title: this.$t("message.chinese"),
      name: "zn",
    },
    {
      title: this.$t("message.english"),
      name: "en",
    },
  ];

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: get current language
   */
  get getLanguage() {
    // return this.$store.state.currLang;
    return this.langList.find(
      (lang: any) => lang.name === this.$store.state.currLang
    ).title;
  }

  /*
   * @Author: null
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: go back previous page
   */
  private onClickLeft() {
    this.$router.back();
  }

  /*
   * @Author: null
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: jump page
   */
  private goPage(url: string) {
    if (url) {
      if (this.$route.name === url) return;
      else {
        this.$router.push({ name: url });
      }
    }
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: hide drop down
   */
  private hideDropDown() {
    let _item = this.$refs.item as any;
    _item.toggle();
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: select game item
   */
  private selectItem(val: any) {
    this.currGame = val.name;
    if (this.$route.params.gameid != val.id) {
      this.$router.replace({
        name: "Lucky",
        params: {
          gameid: val.id,
          gameclass: val.classificationModel.mark.replace(/\s+/g, ""),
        },
      });
    }
    this.hideDropDown();
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: filter game by game id
   */
  private filterGameByGameID(arr: any, id: any) {
    return arr.filter((val: any) => {
      if (val.id == id) {
        return val;
      }
    });
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: filter game classification
   */
  private filterGameByClassification(arr: any, id: any) {
    return arr.filter((val: any) => {
      if (val.classification == id) {
        return val;
      }
    });
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: get game classification data
   */
  private async GameClassification() {
    let params: any = new GameClassificationSearchCoreMessage();
    await GameClassificationCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.gameTypeList = data;
        this.GameInfo();
      }
    });
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: get game info data
   */
  private async GameInfo() {
    let params: any = new GameInfoSearchCoreMessage();
    await GameInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        for (var i = 0; i < this.gameTypeList.length; i++) {
          // property id equal to classification
          this.gameList[
            `${this.gameTypeList[i].id}`
          ] = this.filterGameByClassification(data, this.gameTypeList[i].id);
        }
        this.currGame = this.filterGameByGameID(
          data,
          this.$route.params.gameid
        )[0].name;
      }
    });
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: show filter data
   */
  @Emit("showFilterDate") sendFilter() {}
  private showFilterDate() {
    this.sendFilter();
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: save user detail
   */
  @Emit("saveUserDetail") saveDetail() {}
  private saveUserDetail() {
    this.saveDetail();
  }

  private doSomething(scrollPos: any) {
    if (scrollPos >= 40) {
      this.scroll = "scroll";
    } else {
      this.scroll = "";
    }
  }

  /*
   * @Author: reggie
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: scroll handler to show the header background
   */
  private scrollHeader() {
    const doc = document;
    let lastKnownScrollPosition = 0;
    let ticking = false;
    let that = this;

    doc.addEventListener("scroll", function (e) {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          that.doSomething(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: check user has login
   */
  get isLogin() {
    if (this.userInfo) {
      return true;
    } else {
      return false;
    }
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: get current user info
   */
  get userInfo() {
    let item: any = localStorage.getItem("UserInfo");
    return JSON.parse(item);
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: null
   * @Date: 2021-04-06 12:12:15
   * @Description: logout user
   */
  private logout() {
    localStorage.removeItem("UserInfo");
    this.$router.push({ name: "Login" });
    myFn.clearCookie();
  }

  private showDropdownLangFn() {
    this.showDropdownLang = true
  }

  private changeLang(val : any) {
    this.showDropdownLang = false
    this.$store.dispatch('setLangauge',  val)
    window.location.reload()
  }

  private created() {
    // this.scrollHeader();
  }

  private mounted() {
    if (this.$route.name == "Lucky") {
      this.GameClassification();
    }
  }
}
</script>
<style>
.lang-sheet {
  max-height: 40% !important;
}
.lang-sheet .active-lang {
  color: #B88330;
}
.theme-color.theme-color-classic-red .header_blue.van-nav-bar {
  background-image: linear-gradient(180deg, #fc9c5d 0%, #ee7656 0%, #e04f4f 62%),
    linear-gradient(#e04f4f, #e04f4f);
  background-blend-mode: normal, normal;
  border-image-source: linear-gradient(0deg, #cf4343 0%, #eb7e50 100%);
  border-image-slice: 1;
}

.theme-color.theme-color-classic-blue .game-nav .close-drop-down > div {
  background: #2e83fb;
}

.theme-color.theme-color-classic-blue .game-nav .per-type-box .van-divider {
  border-color: #2d86fb !important;
  color: #2d86fb !important;
}

.theme-color.theme-color-simple-platinum .game-nav .per-type-box .van-divider {
  border-color: #575656 !important;
  color: #575656 !important;
}

.theme-color.theme-color-simple-platinum .game-nav .close-drop-down > div {
  background: linear-gradient(0deg, #4f4f4f 0%, #a4a19b 100%),
    linear-gradient(#363636, #363636) !important;
}

.van-nav-bar .game-nav {
  min-width: 120px;
}

.van-nav-bar .game-nav .van-dropdown-menu__bar {
  height: 45px;
  background: transparent;
}

.van-nav-bar .game-nav .van-dropdown-item__content {
  max-height: 95%;
}

.van-nav-bar .game-nav .van-popup--top {
  left: 10px;
  width: calc(100% - 20px);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.van-nav-bar .game-nav .drop-down-box-content {
  display: flex;
  flex-direction: column;
  /* height: calc(100vh - 105px); */
  height: auto;
  max-height: calc(100vh - 105px);
  overflow: hidden;
}

.van-nav-bar .game-nav .van-dropdown-menu__title {
  color: #fff;
}

.van-nav-bar .game-nav .drop-down-box-content .list-button {
  padding-left: 10px;
}

.van-nav-bar .game-nav .drop-down-box-content .list-button button {
  float: left;
  width: calc(33.3333% - 10px);
  margin-right: 10px;
  margin-bottom: 10px;
  height: 32px;
  background: #edf1f6;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.van-nav-bar .game-nav .close-drop-down > div {
  height: 28px;
  line-height: 28px;
  background: linear-gradient(180deg, #fc9c5d 0%, #ee7656 0%, #e04f4f 62%),
    linear-gradient(#e04f4f, #e04f4f);
  color: #fff;
  position: relative;
}

.van-nav-bar .game-nav .close-drop-down > div::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 42%;
  margin-top: 0px;
  border: 3px solid;
  border-color: transparent transparent #dcdee0 #dcdee0;
  transform: rotate(135deg);
}

.van-nav-bar {
  background: linear-gradient(to right, #e63333, #ff6363);
}

.header_blue .van-icon {
  color: #fff;
  font-size: 16px;
}

.header_blue.van-nav-bar {
  height: 45px;
  z-index: 4;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  /* background: rgb(224,79,79); */
  /* background: linear-gradient(180deg, rgba(180,43,43,1) 0%, rgba(252,53,83,1) 100%); */
}

.header_blue .van-nav-bar__title {
  color: #fff;
  font-size: 18px;
}

.header_blue .infoLogin {
  margin: 0;
  /* display: flex; 
  justify-content: center;
  align-items: center; */
  position: relative;
  padding-right: 15px;
}

.header_blue .infoLogin .van-image {
  position: absolute;
  top: 5px;
  right: -5px;
}

.header_blue .infoLogin .van-image img {
  width: 17px;
  height: 17px;
}

.header_blue .infoLogin span {
  color: #fff;
  font-size: 12px;
  display: block;
  line-height: 1.2;
}

.header_blue .van-nav-bar__left {
  color: #fff;
  margin: 0px 10px;
  padding: 0px;
  text-align: left;
}

.header_blue .van-nav-bar__right {
  text-align: right;
  color: #fff;
  margin: 0px 10px;
  padding: 0px;
}

.header_blue .van-nav-bar__right .infoLogin {
  padding: 0px;
}

.header_blue .van-nav-bar__right .infoLogin .money {
  color: gold;
}
.header_blue .van-nav-bar__right .infoLogin.text {
  padding-right: 12px;
}

.header_blue .notif-icon {
  display: flex;
  align-items: center;
}

.header_blue .notif-icon.hasNotif .van-image {
  position: relative;
  /* padding-right: 10px; */
}

.header_blue .notif-icon.hasNotif .van-image::after {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  background: #ff4e4e;
  box-shadow: 0px 0px 3px 1px #fff;
  /* background: url("../assets/home/notification.png"); */
  top: -2px;
  right: -2px;
}

.header_blue .right-text {
  color: #fff;
}

.eng-lang .van-dropdown-menu__title::after {
  right: 1px;
}

.eng-lang .van-ellipsis,
.eng-lang .van-button__text {
  font-size: 11px;
  white-space: break-spaces;
  line-height: 12px;
}
</style>
