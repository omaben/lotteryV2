<template>
  <div class="home main-redeem">
    <div class="header_redeem">
      <van-nav-bar
        :title="$t('message.redeem')"
        left-text
        left-arrow
        class="header_blue"
        :fixed="fixed"
      >
        <template #left>
          <van-icon name="arrow-left" />
          <span @click="onClickLeft">{{ $t('message.back') }}</span>
        </template>
        <template #right>
          <p @click="onPointHistory" class="infoLogin">
            {{ $t('message.pointHistory') }}
          </p>
        </template>
      </van-nav-bar>
    </div>
    <div class="top_info_redeem">
      <p>{{ $t('message.availablePoints') }}</p>
      <h2>2020</h2>
    </div>
    <div class="info_redeem">
      <h2>{{ $t('message.earnPoints') }}</h2>
      <van-grid direction="horizontal" :column-num="2">
        <van-grid-item icon text is-link to="DailyCheck">
          <template #text>
            <div class="text-info">
              <h3>{{ $t('message.dailyCheckIn') }}</h3>
              <p>{{ $t('message.receivePointDaily') }}</p>
            </div>
          </template>
          <template #icon>
            <img alt="user_avatar" height="28" width="29" :src="require(`@/assets/redeem/icon2_${getThemeColor}.png`)" />
          </template>
        </van-grid-item>
        <van-grid-item icon text is-link to="GameIframe">
          <template #text>
            <div class="text-info">
              <h3>{{ $t('message.markingToEarnPoints') }}</h3>
              <p>{{ $t('message.youCanEarnPoints') }}</p>
            </div>
          </template>
          <template #icon>
            <img alt="user_avatar" height="32" width="33" :src="require(`@/assets//redeem/icon1_${getThemeColor}.png`)" />
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="redeem_gift info_redeem">
      <h2>{{ $t('message.redeemGift') }}</h2>
      <van-swipe>
        <van-swipe-item
          v-for="(item, index) in images"
          :key="index"
          @click="showDialog(item.name)">
          <img v-lazy="item.image" />
          <p>
            {{ item.name }} <span>{{ index }}/{{ totalGifts }}</span>
          </p>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { Lazyload } from "vant";
import { Dialog } from 'vant';

Vue.use(Lazyload);
@Component({
  components: {},
})
export default class redeem extends Vue {
  private fixed: boolean = true;
  private dialogOptions?: object | any = {
    title: '',
    message: '您即将花费500积分，兑换价值50 元的【无门槛彩金券】一张，请确 认是否兑换。',
    theme: 'round-button',
    cancelButtonText: this.$t('message.cancel'),
    showCancelButton: true,
    confirmButtonText: this.$t('message.confirmExchange'),
    lockScroll: true,
    overlayStyle: { backgroundColor:'rgba(0, 0, 0, 0.2)' },
    cancelButtonColor: '#fff',
    confirmButtonColor: '#fff',
    className: 'image-dialog-box',
    width: '70%'
  };

  private images = [
    {
      name: this.$t('message.clickToRedeem'),
      image: require("@/assets/redeem/gift.png"),
    },
    {
      name: this.$t('message.clickToRedeem'),
      image: require("@/assets/redeem/gift.png"),
    },
    {
      name: this.$t('message.clickToRedeem'),
      image: require("@/assets/redeem/gift.png"),
    },
  ];
  private totalGifts: number = this.images.length;

  onClickLeft() {
    this.$router.back();
  }

  onPointHistory() {
    console.log("shit");
    this.$router.push({ name: "pointHistory" });
  }

  showDialog(item: any) {
    Dialog.alert(this.dialogOptions).then(() => {
      console.log(item);
    }).catch(() => {});
  }
  
  get getThemeColor() {
      return this.$store.state.themeColor;
  }
}
</script>
<style lang="less">
/* Theme color */
@import "../../../src/assets/css/redeem.less";
.header_redeem {
  background-image: url("../../assets/user/background_head.png");
  background-color: #fff;
}
.tabs_carte_redeem {
  background-color: #fff;
}
.progress_redeem.van-slider {
  background-image: url("../../assets/user/back_progress.png");
}
.progress_redeem.van-slider {
  height: 14px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 5px 12px;
  width: calc(100% - 95px);
  margin-left: 45px;
  margin-right: 40px;
  margin-top: 21px;
  margin-bottom: 20px;
}

.progress_bar {
  position: relative;
}

.progress_bar span.info {
  position: absolute;
  /* left: 4px; */
  font-size: 6pt;
  background: #ddbd93;
  padding: 2px 5px;
  border-radius: 10px;
  color: #794a16;
  font-weight: bold;
  top: 0;
}

.progress_bar span.info.left {
  left: 11px;
}

.progress_bar span.info.right {
  right: 14px;
  color: #717171;
  background: #cfcfcf;
}

.progress_redeem.van-slider .custom-button {
  position: absolute;
  top: -21px;
  font-size: 10pt;
  color: #fff;
  right: 2px;
}

.progress_redeem.van-slider img.icone_progress {
  width: 34px;
  position: relative;
  top: 3px;
}

.progress_redeem.van-slider .custom-button > img {
  width: 9px;
  position: relative;
  top: -4px;
}
ul.redeem_list {
  text-align: left;
  padding-left: 11px;
  color: #fff;
  font-size: 8pt;
  list-style: circle;
  margin-left: 16px;
}
.header_redeem .top_user {
  background: transparent;
}

.header_redeem {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
  min-height: 197px;
}

.header_redeem .top_user .van-cell__title > div {
  color: #ffdcdc;
}
.header_redeem .top_user .van-cell__title {
  color: #fff;
}
.carte_visa_redeem {
  margin: 10px 30px;
  position: relative;
}
.info_redeem .van-grid-item__content {
  text-align: left;
  justify-content: left;
  padding: 10px 10px 10px 15px;
}

.carte_visa_redeem img {
  width: 100%;
}

.carte_visa_redeem h2 {
  position: absolute;
  top: 20px;
  color: #fff;
  left: 20px;
  margin: 0;
  font-size: 18pt;
}

.carte_visa_redeem .van-row {
  position: absolute;
  bottom: 15px;
  width: 100%;
  color: #fff;
  font-size: 10pt;
}
.tabs_carte_redeem .van-tabs__wrap {
  background: transparent;
  background-image: url("../../assets/user/back_tab.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.tabs_carte_redeem .van-tabs__nav.van-tabs__nav--line {
  background: transparent;
}

.tabs_carte_redeem .van-tabs__line {
  opacity: 0;
}

.tabs_carte_redeem span.van-tab__text {
  color: #979797;
  background: #dbdbdb;
  padding: 0px 7px;
  font-size: 8pt;
  border-radius: 18px;
  box-shadow: 9px 6px 26px 6px #e9e9e9;
  border: 1px solid;
  line-height: 1.5;
}

.tabs_carte_redeem .van-tab--active span.van-tab__text {
  background: #303f4f;
  color: #fff;
}
.info_redeem h2 {
  margin: 0;
  text-align: left;
  font-size: 11pt;
  margin-left: 11px;
  border: none;
  font-weight: normal;
}

.info_redeem {
  background: #fff;
}

.info_redeem .van-grid-item {
  border: none;
  background: transparent;
}

.info_redeem .van-grid-item::after {
}

.info_redeem .van-grid-item__content::after {
  border: none;
}

.info_redeem .van-grid.van-hairline--top {
  border: none;
}

.info_redeem .van-hairline--top::after {
  border: none;
}

.info_redeem .van-grid-item .text-info h3 {
  margin: 0;
  font-size: 8pt;
}

.info_redeem .van-grid-item .text-info {
  text-align: left;
  padding-left: 10px;
}

.info_redeem .van-grid-item p {
  margin: 0;
  font-size: 7pt;
  color: #a1a3a6;
}
.header_redeem span {
  color: #fff;
}

.top_info_redeem {
  position: absolute;
  top: 104px;
  width: 100%;
  color: #fff;
}

.top_info_redeem p {
  margin: 0;
  font-size: 10pt;
}

.top_info_redeem h2 {
  margin: 0;
  font-size: 27pt;
}
.redeem_gift {
  margin-top: 10px;
  padding: 10px;
}


.redeem_gift .van-swipe p {
	font-size: 13px;
	line-height: 13px;
	color: #b2b2b2;
}

.redeem_gift .van-swipe .van-swipe__indicators {
  display: none;
}
.redeem_gift .van-swipe .van-swipe__indicators {
  display: none;
}
.redeem_gift .van-swipe p span {
  float: right;
}

.header_redeem .header_blue .van-nav-bar__title {
  font-size: 14pt;
}

.main-redeem .van-swipe {
  margin-top: 10px;
}

.main-redeem .van-swipe .van-swipe__track {
  height: 190px;
}

.image-dialog-box .van-dialog__content .van-dialog__message {
  text-align: left;
}

.image-dialog-box .van-dialog__footer {
  border-top: 1px solid #dedede;
  padding: 0px;
  position: relative;
}

.image-dialog-box .van-dialog__footer::before {
  content: "";
  position: absolute;
  right: 50%;
  height: 100%;
  width: 1px;
  background: #dedede;
  top: 0;
  z-index: 1;
}

.image-dialog-box .van-dialog__footer button {
  border-radius: 0;
}

.image-dialog-box .van-dialog__cancel .van-button__text {
  font-size: 15px;
  line-height: 18px;
  color: #989898;
}

.image-dialog-box .van-dialog__confirm .van-button__text {
  font-size: 15px;
  line-height: 18px;
  color: #ff5151;
}
</style>
