<template>
  <div class="items_button">
    <!-- there is 3 buttons but only 2 popup  -->

    <van-button class="button_header" round>月牙 80865 &rsaquo;</van-button>
    <van-button class="button_header" round @click="showViewPopup"
      >守护 &rsaquo;</van-button
    >
    <van-button class="button_header" round @click="showRTList"
      >实时榜单 &rsaquo;</van-button
    >

    <van-popup
      v-model="showPopupList"
      round
      class="viewer-popup"
      closeable
      close-icon="close"
    >
      <div class="pop-up-container">
        <div class="top-wrap">
          <span>样品 (1)</span>
          <div class="image-wrap">
            <div class="prof-img">
              <img class="user" :src="image" />
              <img
                class="bg"
                width="200"
                height="150"
                src="@/assets/live/icon_guard_top_1.png"
              />
            </div>
            <div class="name_description">
              <div class="name">样品样品</div>
              <div class="icon-wrap">
                <img
                  class="gender"
                  width="20"
                  height="20"
                  src="@/assets/user/icon_sex_female_1.png"
                />
                <div class="icon-num">
                  <img
                    class="icone"
                    width="20"
                    height="20"
                    src="@/assets/user/icon_live_func_lm.png"
                  />
                  <p>10</p>
                </div>
              </div>
              <div class="desc">样品样品 <span>0</span> 样品</div>
            </div>
          </div>
        </div>
        <div class="bottom-wrap">
          <div class="btn-bottom">
            <p class="link">样品样品样品样品样品</p>
            <van-button round type="info">样品样品</van-button>
          </div>
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model="showPopup"
      class="realTL-popup"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '75%' }"
    >
      <div class="pop-up-container">
        <div class="top-wrap">
          <span>样品</span>
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          :finished-text="$t('message.finished')"
          @load="onLoad"
        >
          <div class="date">示例文本: 2020-10-23 10:04:28</div>
          <van-cell v-for="(item, index) in list" :key="index">
            <div class="profile">
              {{ item.index }}
              <img :src="require(`@/assets/user/${item.img}.png`)" alt="" />
              <p class="name">{{ item.name }}</p>
            </div>
            <div class="id">
              {{ item.id }}
            </div>
          </van-cell>
        </van-list>
        <div class="bottom-wrap">
          <div class="profile">
            5
            <img src="@/assets/user/icon_video_upload.png" alt="" />
            <p class="name">样品</p>
          </div>
          <div class="id">
            <div class="wrap">
              <p>样品样品样品18084</p>
              <p>样品</p>
            </div>
            <van-button type="info">样品</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
@Component({
  components: {},
})
export default class buttonHeader extends Vue {
  @Prop({
    type: String,
    default: require("@/assets/user/icon_video_upload.png"),
  })
  private image?: string
  showPopup: Boolean = false
  list: any[] = [
    { index: 1, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 2, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 3, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 4, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 5, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 6, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 7, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 8, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 9, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 10, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 11, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 12, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 13, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 14, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 15, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 16, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 17, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 19, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 20, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 21, img: "icon_video_upload", name: "样品", id: "18084样品" },
    { index: 23, img: "icon_video_upload", name: "样品", id: "18084样品" },
  ]
  loading: Boolean = false
  finished: Boolean = false
  showPopupList: boolean = false
  showViewPopup() {
    this.showPopupList = true
  }
  showRTList() {
    this.showPopup = true
  }
  onLoad() {
    setTimeout(() => {
      this.loading = false
      if (this.list.length >= 40) {
        this.finished = true
      }
    }, 1000)
  }
}
</script>
<style lang="less">
.realTL-popup {
  .top-wrap {
    background: #f7f8fc;
    padding: 13px;
  }
  .date {
    text-align: left;
    font-size: 10pt;
    color: #aaa;
  }
  .profile {
    padding: 10px;
    display: flex;
    align-items: center;
    img {
      border-radius: 100%;
      height: 50px;
      width: 50px;
      margin: 0 10px;
    }
  }
  .id {
    color: #ccc;
    display: flex;
    padding: 10px;
    p {
      padding-right: 5px;
      text-align: right;
      font-size: 9pt;
      margin: 0;
    }
  }
  .van-list {
    padding-bottom: 70px;
  }
  .van-cell {
    padding: 0;
    &::after {
      content: none;
    }
    .van-cell__value {
      justify-content: space-between;
      display: flex;
      align-items: center;
    }
  }
  .bottom-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    button {
      background-color: #fe9400;
      border: none;
      height: 30px;
      border-radius: 5px;
    }
  }
}
.viewer-popup {
  width: 80%;
  height: 484px;
  border-radius: 10px;
  .pop-up-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &.van-popup--round {
    border-radius: 5px;
  }
  .top-wrap {
    width: 100%;
    > span {
      padding: 15px 0;
      display: block;
    }
    .image-wrap {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;
    }
    .prof-img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      .user {
        position: absolute;
        border-radius: 50%;
        margin-top: -4px;
      }
      .bg {
        z-index: 1;
        top: -20px;
        position: relative;
      }
    }
    .name_description {
      color: #000;
      .icon-wrap {
        display: flex;
        justify-content: space-evenly;
        padding: 10px 0;
      }
      .desc {
        color: #aaa;
        span {
          color: yellow;
        }
      }
    }
  }
  .bottom-wrap {
    width: 100%;
    border-top: 1px solid #eee;
    padding: 3px 0;
    .btn-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        padding: 15px;
        margin: 0;
      }
      button {
        background: yellow;
        padding: 0px 20px;
        border: none;
        height: 35px;
      }
    }
  }
  .icon-num {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2a74d7;
    width: auto;
    border-radius: 5px;
    padding: 0 4px 0 1px;
    p {
      font-size: 12px;
      margin: 0;
      color: #fff;
    }
  }
  .van-icon-close::before {
    content: "";
  }
}
</style>
