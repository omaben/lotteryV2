<template>
  <div class="live_gift_popup">
    <van-popup
      v-model="showGame"
      position="bottom"
      class="live-popup"
      closeable
      @close="onClickCloseIcon()"
    >
      <div class="pop-up-container">
        <div class="top_game">
          <p class="left">白人牛牛截至：<span class="yellew">06秒</span></p>
          <p class="right">
            <span>历史投注</span>
            <span>上期开奖</span>
          </p>
        </div>
        <div class="pocker_game">
          <span class="left_title"><b>胜</b></span>
          <van-grid :border="false" :column-num="2">
            <van-grid-item class="blue_game">
              <p>蓝</p>
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
            </van-grid-item>
            <van-grid-item class="red_game">
              <p>红</p>
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
              <img src="@/assets/live/pocker.png" alt="" />
            </van-grid-item>
          </van-grid>
        </div>
        <van-tabs v-model="activeName">
          <van-tab title="猜红方牛" name="a">
            <div class="item_tab_game">
              <div class="info">无牛</div>
              <p>2.70</p>
            </div>
            <div class="item_tab_game">
              <div class="info">牛一</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛二</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛三</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛四</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛五</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛六</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛七</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛八</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛九</div>
              <p>13.60</p>
            </div>
          </van-tab>
          <van-tab title="猜蓝方牛" name="b">
            <div class="item_tab_game">
              <div class="info">无牛</div>
              <p>2.70</p>
            </div>
            <div class="item_tab_game">
              <div class="info">牛一</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛二</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛三</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛四</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛五</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛六</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛七</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛八</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛九</div>
              <p>13.60</p>
            </div>
          </van-tab>
          <van-tab title="猜蓝方牛" name="c">
            <div class="item_tab_game">
              <div class="info">无牛</div>
              <p>2.70</p>
            </div>
            <div class="item_tab_game">
              <div class="info">牛一</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛二</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛三</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛四</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛五</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛六</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛七</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛八</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛九</div>
              <p>13.60</p>
            </div>
          </van-tab>
          <van-tab title="猜龙虎 牌1VS牌5" name="d">
            <div class="item_tab_game">
              <div class="info">无牛</div>
              <p>2.70</p>
            </div>
            <div class="item_tab_game">
              <div class="info">牛一</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛二</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛三</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛四</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛五</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛六</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛七</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛八</div>
              <p>13.60</p>
            </div>

            <div class="item_tab_game">
              <div class="info">牛九</div>
              <p>13.60</p>
            </div>
          </van-tab>
        </van-tabs>
        <van-grid :column-num="2" class="bottom_game">
          <van-grid-item text class="left_bottom_game">
            <img src="@/assets/img/promotion/icon_bonus_classic-blue.png" alt="" />
            <span>0.00</span>
            <van-button round type="info">充值</van-button>
          </van-grid-item>
          <van-grid-item text class="right_bottom_game">
            <img src="@/assets/img/game/ic_chip_8.png" alt="" />
            <van-button round type="info">投注</van-button>
          </van-grid-item>
        </van-grid>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
@Component({
  components: {},
})
export default class nameInfo extends Vue {
  @Prop({ type: Boolean, default: false }) private showGame?: Boolean
  private activeName: string = "a"
  onClickCloseIcon() {
    this.$emit("closeGame", false)
  }
}
</script>
<style>
.top_game {
  display: flow-root;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  /* width: 100%; */
}

.top_game p.left {
  float: left;
  font-size: 10pt;
}

.top_game p.right {
  float: right;
  font-size: 10pt;
}

.top_game p.right span {
  margin-left: 5px;
  margin-right: 5px;
}

.top_game p.left span.yellew {
  color: #f7cb2e;
}

.pocker_game img {
  width: 24px;
  margin-left: 5px;
  margin-right: 5px;
}

.live_gift_popup {
  width: 100vw;
}

.pocker_game {
  position: relative;
  margin-bottom: 15px;
}

.pocker_game span.left_title {
  position: absolute;
  top: 0;
  left: 0;
  /* background: #f7cb2e; */
  z-index: 1;
  color: #c3421a;
  /* transform: rotate(316deg); */
}

.pocker_game span.left_title:before {
  content: "";
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 30px solid #f7cb2e;
  position: absolute;
  transform: rotate(135deg);
  top: -4px;
  left: -19px;
  z-index: 1;
}

.pocker_game span.left_title b {
  z-index: 2;
  position: relative;
  font-weight: normal;
  padding-left: 4px;
}

.blue_game.van-grid-item {
  background: #232e7d;
}

.pocker_game .van-grid-item__content {
  background: transparent;
  display: inline-block;
}

.pocker_game .van-grid-item__content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  padding-bottom: 3px;
}

.red_game.van-grid-item {
  background: #671311;
}
.live_gift_popup .van-tabs .van-tabs__nav {
  background: #232323;
  color: #fff;
}

.live_gift_popup .van-tabs .van-tabs__nav .van-tab {
  color: #fff;
}

.live_gift_popup .van-tabs .van-tabs__nav .van-tab.van-tab--active {
  background: #8b2df5;
}

.live_gift_popup .van-tabs__line {
  display: none;
}

.item_tab_game {
  display: inline-block;
}

.item_tab_game .info {
  background: #fff;
  margin: 5px;
  width: 65px;
  height: 45px;
  border-radius: 7px;
  font-size: 16pt;
  vertical-align: middle;
  color: #fe316c;
  padding-top: 20px;
}
.live_gift_popup .van-tabs {
  margin-bottom: 15px;
}
.item_tab_game p {
  margin: 0;
  color: #fff;
  font-weight: normal;
  font-size: 10pt;
}
.left_bottom_game.van-grid-item {
  text-align: left;
}

.left_bottom_game.van-grid-item .van-grid-item__content {
  background: transparent;
  display: inherit;
}

.left_bottom_game.van-grid-item img {
  width: 38px;
  display: inline-block;
  position: relative;
  top: 7px;
}

.left_bottom_game.van-grid-item span {
  color: #fff;
}

.right_bottom_game.van-grid-item {
  background: transparent;
}

.right_bottom_game.van-grid-item .van-grid-item__content {
  background: transparent;
  display: inherit;
  text-align: right;
}

.right_bottom_game.van-grid-item img {
  width: 40px;
  position: relative;
  top: 8px;
  margin-right: 14px;
}
.bottom_game.van-hairline--top::after {
  border: none;
}
.bottom_game .van-grid-item__content::after {
  border: none;
}
.right_bottom_game.van-grid-item button.van-button {
  background: #fe316c;
  height: initial;
  padding-top: 6px;
  padding-bottom: 6px;
  border-color: transparent;
  position: relative;
  top: -6px;
}

.left_bottom_game.van-grid-item button.van-button {
  background: #302007;
  height: initial;
  padding-top: 6px;
  padding-bottom: 6px;
  border-color: #f7cb2e;
  /* position: relative; */
  /* top: -6px; */
  margin-left: 10px;
}
</style>
