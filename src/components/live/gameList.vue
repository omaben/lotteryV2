<template>
  <div class="game_list_popup">
    <van-popup
      v-model="showGame2"
      position="bottom"
      class="game-list-popup"
      closeable
      @close="onClickCloseIcon()"
    >
      <div class="pop-up-container">
        <van-grid :column-num="4" class="gameList">
          <van-grid-item>
            <img src="@/assets/user/face_001.png" alt="" />
            <span>示例文本</span>
          </van-grid-item>
          <van-grid-item>
            <img src="@/assets/user/face_002.png" alt="" />
            <span>示例文本</span>
          </van-grid-item>
          <van-grid-item>
            <img src="@/assets/user/face_003.png" alt="" />
            <span>示例文本</span>
          </van-grid-item>
          <van-grid-item>
            <img src="@/assets/user/face_004.png" alt="" />
            <span>示例文本</span>
          </van-grid-item>
          <van-grid-item>
            <img src="@/assets/user/face_005.png" alt="" />
            <span>示例文本</span>
          </van-grid-item>
          <van-grid-item>
            <img src="@/assets/user/face_006.png" alt="" />
            <span>示例文本</span>
          </van-grid-item>
          <van-grid-item>
            <img src="@/assets/user/face_007.png" alt="" />
            <span>示例文本</span>
          </van-grid-item>
          <van-grid-item>
            <img src="@/assets/user/face_008.png" alt="" />
            <span>示例文本</span>
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
export default class gameList extends Vue {
  @Prop({ type: Boolean, default: false }) private showGame2?: Boolean
  private activeName: string = "a"
  onClickCloseIcon() {
    this.$emit("closeGame", false)
  }
}
</script>
<style lang="less">
.game_list_popup {
  width: 100vw;
  .game-list-popup {
    padding-top: 20px;
    background: black;
  }
  .gameList {
    border: none;
  }
  .van-icon-cross::before {
    content: none;
  }
  .van-tabs .van-tabs__nav {
    background: #232323;
    color: #fff;
    .van-tab {
      color: #fff;
    }
    .van-tab.van-tab--active {
      background: #8b2df5;
    }
  }
  .van-hairline {
    background: #000;
    color: #fff;
    &::after {
      content: none;
    }
  }
  .van-tabs__line {
    display: none;
  }
}
</style>
