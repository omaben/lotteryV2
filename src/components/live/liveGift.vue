<template>
  <div class="live_gift_popup">
    <van-popup
      v-model="show"
      position="bottom"
      class="live-popup"
      :style="{ height: '62%' }"
      :lock-scroll="true"
      :close-on-click-overlay="true"
      @close="hidePopOver"
    >
      <div class="pop-up-container">
        <div class="top-btn">{{ $t("message.giftList") }}</div>
        <van-grid class="heightgird" :column-num="4">
          <van-grid-item
            v-for="(item, key) in liveGameList"
            :key="key"
            class="grid-item"
            @click="activeClass(key)"
            :class="{ active: selectIndex == key }"
          >
            <div class="main-icon">
              <van-image
                height="68"
                width="68"
                :src="'./resource/live/live_gift_' + item.name + '_tex.png'"
              />
              <!-- <van-image height="68" width="68" :src="imageService+'/live/'+item.mark+'.png'"/> -->
              <!--              <img height="68" width="68" src="@/assets/live/goldbox.png"/>-->
            </div>
            <div class="label">
              <p>{{ $t(`message['${item.name}']`) }}</p>
              <p>{{ getValue(item.price) }}</p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="bal-bottom" :class="{ active: selected }">
          <!-- /*
      * @Author: chase 
      * @LastAuthor: null
      * @Param null
      * @Return null
      * @Date: 2021-04-13
      * @Description: icon for live gift
      */ -->
          <span @click="$router.push({ name: 'Recharge' })">
            <img
              height="20"
              width="25"
              :src="
                require(`@/assets/img/promotion/icon_bonus_${getThemeColor}.png`)
              "
            />
            {{ money }}
          </span>
          <van-dropdown-menu direction="up" class="lg-dropdown">
            <van-dropdown-item v-model="value" :options="option" />
          </van-dropdown-menu>
          <van-button v-show="selected" round type="info" @click="SendGift">{{
            $t("message.giveAway")
          }}</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
import { Toast, Dialog } from "vant";
import { Application } from "@/lib/Application";
import { AnchorGiftCoreService } from "@/core/AnchorCore/Service/AnchorGiftCoreService";
import { AnchorGiftSearchCoreMessage } from "@/core/AnchorCore/Message/AnchorGiftSearchCoreMessage";
import { AnchorSendGiftRecordInsertCoreMessage } from "@/core/AnchorCore/Message/AnchorSendGiftRecordInsertCoreMessage";
import { AnchorSendGiftRecordCoreService } from "@/core/AnchorCore/Service/AnchorSendGiftRecordCoreService";
import { UserInfoSearchCoreMessage } from "@/core/UserCore/Message/UserInfoSearchCoreMessage";
import { UserInfoCoreService } from "@/core/UserCore/Service/UserInfoCoreService";

import { myFn } from "@/utils/fn";

@Component({
  components: {},
})
export default class LiveGift extends Vue {
  @Prop({ type: Boolean, default: false })
  public readonly showLiveGift?: boolean;
  @Prop({ type: Boolean, default: false }) private isPlayAnim?: Boolean;
  @Prop({ type: Function }) private playLiveAnim?: Function;
  @Prop({ type: Function }) private showMsg?: Function;
  @Prop({ type: String, default: "xy小甜" }) private name?: string;
  @Prop({ type: String, default: "ID:73827832" }) private id?: string;
  @Prop({
    type: String,
    default: require("@/assets/user/icon_video_upload.png"),
  })
  private image?: string;
  private imageService: string = Application.domain;
  private selected: boolean = true;
  private selectIndex: number = 0;
  private showPopup?: any = "";
  private playAnim?: any = "";
  private show: any = false;
  private value: any = 1;
  private anchorId?: any = "";
  private img?: any = "";
  private money?: any = "";
  private userid?: any = "";
  private giftId?: any = "";
  private liveGameList: any[] = [];
  private option: any = [
    { text: "1", value: 1 },
    { text: "10", value: 10 },
    { text: "66", value: 66 },
    { text: "88", value: 88 },
    { text: "100", value: 100 },
    { text: "520", value: 520 },
    { text: "1314", value: 1314 },
  ];
  private userData?: any = "";

  /*
   * @Author: chase
   * @LastAuthor: null
   * @Param null
   * @Return null
   * @Date: 2021-04-12
   * @Description: get theme color
   */
  get getThemeColor() {
    return this.$store.state.themeColor;
  }

  @Watch("showLiveGift")
  private onChangeShowLive(newVal: any, oldVal: any) {
    this.show = newVal;
  }

  private SendGift() {
    if (this.userData.money == "0.00") {
      Dialog.confirm({
        title: this.$t("message.insufficientBal").toString(),
        message: "",
        cancelButtonText: this.$t("message.cancel").toString(),
        confirmButtonText: this.$t("message.goToRecharge").toString(),
      })
        .then(() => {
          setTimeout(() => {
            this.$router.push({ name: "Recharge" });
          }, 225);
        })
        .catch(() => {
          this.show = false
        });
    } else {
      let params: any = new AnchorSendGiftRecordInsertCoreMessage();
      params.anchorId = this.$route.params.id;
      // params.userInfo = this.userData.id;
      // params.anchorGift = this.giftId;
      AnchorSendGiftRecordCoreService.Insert(params).then((data) => {
        // @ts-ignore
        this.$parent.playGift(this.liveGameList[this.selectIndex].mark);
        Toast(this.$t('message.succeed'));
          this.show = false;
      });
    }
  }

  @Emit("closeLiveGift") sendCloseGift(val: any) {}

  private hidePopOver() {
    this.sendCloseGift(false);
  }

  private activeClass(index: number) {
    this.selectIndex = index;
    this.giftId = this.liveGameList[index].id;
  }

  private AnchorGift() {
    let params: any = new AnchorGiftSearchCoreMessage();
    AnchorGiftCoreService.Search(params).then((data) => {
      this.liveGameList = data;
      this.activeClass(0);
    });
  }

  get userDetails() {
    let item: any = localStorage.getItem("UserInfo");
    item = JSON.parse(item);
    return item;
  }

  /*
   * @Author: reggie
   * @LastAuthor: null
   * @Param: null
   * @Return: Number value
   * @Date: 2021-04-12 11:41:00
   * @Description: Convert string balance into number with two decimal.
   */
  private getValue(val: any) {
    if (typeof val === "string") {
      val = +val;
    }
    return val.toFixed(2);
  }

  /*
   * @Author: null
   * @LastAuthor: reggie
   * @Param null
   * @Return null
   * @Date: 2021-04-14 15:28:00
   * @Description: get user info data
   */
  private UserInfo() {
    let params: any = new UserInfoSearchCoreMessage();
    params.equal_id_userInfo = this.userDetails.id;
    UserInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.userData = data[0];
        this.userData.money = myFn.formatDecimal(this.userData.money);
      }
    });
  }

  private mounted() {
    this.AnchorGift();
    this.UserInfo();
  }
}
</script>

<style lang="less" scroped>
.heightgird {
  height: 48vh;
  overflow: scroll;
}

.live-popup {
  background: #090806;

  .top-btn {
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    display: flex;
    justify-content: space-between;
    width: 100%;

    img {
      width: 30px;
      height: 15px;

      &.hao {
        width: auto;
      }
    }
  }

  .grid-item {
    padding: 5px;
    height: 160px;
    max-height: 160px;
    width: calc(25% - 10px);

    .van-hairline {
      padding: 4px;

      &::after {
        border-width: 1px;
        z-index: -1;
      }
    }

    &.active {
      > div::after {
        border-color: yellow;
        border-width: 1px;
      }
    }

    > div {
      background-color: transparent;
      color: #fff;
      padding: 0;

      p {
        margin: 0 0 3px;
        font-size: 12px;

        &:last-child {
          margin-bottom: 8px;
          font-size: 9pt;
          color: #aaa;
        }
      }
    }
  }
}

.live-popup .my-swipe {
  padding-bottom: 20px;

  .van-swipe__indicators {
    bottom: 0px;
  }
}

.live-popup .bal-bottom {
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  background: #090806;
  padding: 5px 0px;

  &.active {
    button {
      color: #fff;
      border: 1px solid yellow;
      background: yellow;
    }

    .lg-dropdown {
      right: 50px;
      width: 90px;
    }
  }

  .lg-dropdown {
    transition: right 0.6s ease-out;
    position: absolute;
    right: 1px;
    height: 40px;
    // margin-bottom: 8px;
    width: 78px;
    margin-right: 8px;
    // top: 0px;
    bottom: 8px;

    .van-dropdown-menu__bar {
      border-radius: 24px;
      height: 40px;
      background: transparent;
      border: 1px solid yellow;

      span {
        color: #fff;

        &::after {
          right: 20px;
        }
      }
    }

    .van-cell {
      color: yellow;

      &.van-dropdown-item__option--active {
        color: #ee0a24;
      }
    }

    .van-dropdown-item__content {
      width: 100px;
      border-radius: 5px;
      margin-left: auto;
      right: 50px;
      display: flex;
      flex-direction: column-reverse;
    }

    .van-dropdown-item--up {
      bottom: 55px !important;
    }

    .van-ellipsis {
      margin-right: 25px;
    }
  }

  > span {
    color: yellow;
    padding-left: 7px;
    display: flex;
    align-items: center;

    img {
      padding-right: 7px;
    }

    &::after {
      content: "";
      display: block;
      height: 10px;
      width: 10px;
      border: 1px solid yellow;
      border-left: none;
      border-bottom: none;
      transform: rotate(45deg);
    }
  }

  button {
    opacity: 1;
    background: #282418;
    border: none;
    width: 80px;
    color: #fff;
    margin-right: 8px;
    // margin-bottom: 8px;
  }
}

.live-popup .bal-bottom .lg-dropdown .van-cell {
  color: rgb(88, 86, 86);
  background: yellow;
}

.live-popup .bal-bottom button {
  color: #000000;
}

.live-popup .grid-item.active > div::after {
  border-width: 2px;
}

.van-overlay {
  background: rgba(0, 0, 0, 0.1);
}

.live {
  .footer_icone {
    justify-content: space-between;
    display: flex;
    height: 58px;
    align-items: center;

    > span {
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      margin-left: 5px;
      margin-right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      .icone_left {
        background: none;
        font-size: none;
        float: none;
        padding: 0;
        border-radius: 0;
        top: 2px;
        position: relative;
      }
    }
  }
}
</style>
