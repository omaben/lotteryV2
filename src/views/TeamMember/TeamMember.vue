<template>
  <div class="tm-info">
    <Header
      :msg="pageTitle"
      :back="true"
      :HomePage="false"
      :leftText="$t('message.back')"
      :iconRight="''"
    />
    <div class="tm-head">
      <van-grid :border="false" :column-num="6" :clickable="false">
        <van-grid-item>
          <span>{{ $t("message.username") }}</span>
        </van-grid-item>
        <van-grid-item>
          <span>{{ $t("message.balance") }}</span>
        </van-grid-item>
        <van-grid-item>
          <span>{{ $t("message.rebate") }}</span>
        </van-grid-item>
        <van-grid-item>
          <span>{{ $t("message.grade") }}</span>
        </van-grid-item>
        <van-grid-item>
          <span></span>
        </van-grid-item>
        <!-- <van-grid-item>
          <span></span>
        </van-grid-item> -->
      </van-grid>
    </div>
    <div class="tm-content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          :finished-text="$t('message.loaded')"
          @load="onLoad"
        >
          <van-grid
            :border="false"
            :column-num="5"
            :clickable="false"
            class="tm-info-grid"
          >
            <van-grid-item
              v-for="(item, index) in list"
              :key="index"
              class="list-item"
            >
              <span>{{ item.userInfo.name }}</span>
              <span>{{ item.userInfo.balance }}</span>
              <span>7.8</span>
              <span>{{
                item.userInfo.grade ? item.userInfo.grade : $t("message.member")
              }}</span>
              <span class="more-info" @click="goToSingleAgent"
                >{{ $t("message.seeDetails") }} <van-icon name="arrow"
              /></span>
            </van-grid-item>
          </van-grid>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/Header.vue"

@Component({
  components: {
    Header,
  },
})
export default class Agent extends Vue {
  private pageTitle?: any = this.$t("message.teamMember")
  private loading?: Boolean = false
  private finished?: Boolean = false
  private refreshing?: Boolean = false
  private list?: any = []

  private onLoad() {
    setTimeout(() => {
      if (this.refreshing) {
        // this.list = []
        this.refreshing = false
      }

      this.loading = false

      this.finished = true
    }, 1000)
  }

  private goToSingleAgent() {
    this.$router.push({ name: "SingleAgent" })
  }

  private onRefresh() {
    this.finished = false
    this.loading = true
    this.onLoad()
  }
  private async Members() {
    await this.$http
      .get(this.$api.AgencyMember)
      .then((res: any) => {
        return (this.list = [...res.data.data])
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
  private created() {
    this.Members()
  }
}
</script>

<style lang="less">
/* Theme color */
@import "../../../src/assets/css/teammember.less";

.tm-info {
  // margin-top: 45px;
  overflow: hidden;

  .tm-head {
    background: #fff;
    height: 40px;
    position: fixed;
    top: 45px;
    width: 100%;
    z-index: 2;

    span {
      font-size: 12px;
    }
    .van-grid {
      box-shadow: 0px 0px 5px 0px rgba(188, 187, 185, 0.5);
      padding: 0px 10px;
      .van-grid-item__content {
        padding: 0px;
        height: 40px;
      }
    }

    .van-grid .van-grid-item {
      flex-basis: unset !important;
    }
    .van-grid .van-grid-item:nth-child(1) {
      width: 22%;
      .van-grid-item__content {
        align-items: flex-start;
        padding-left: 10px;
      }
    }
    .van-grid .van-grid-item:nth-child(2) {
      width: 17%;
    }
    .van-grid .van-grid-item:nth-child(3) {
      width: 15%;
    }
    .van-grid .van-grid-item:nth-child(4) {
      width: 17%;
    }
    .van-grid .van-grid-item:nth-child(5) {
      width: 29%;
    }
  }

  .tm-content {
    margin-top: 43px;
  }

  .tm-info-grid {
    flex-direction: column;
    padding-top: 1px;

    span:nth-child(1) {
      width: 22%;
      text-align: left;
    }
    span:nth-child(2) {
      width: 17%;
    }
    span:nth-child(3) {
      width: 15%;
    }
    span:nth-child(4) {
      width: 17%;
    }
    span:nth-child(5) {
      width: 29%;
    }

    span {
      font-size: 14px;

      &.more-info {
        color: #1b5ece;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .van-icon {
          margin-left: 5px;
        }
      }
    }

    .list-item:nth-child(even) .van-grid-item__content {
      background: #f2f4f8;
    }

    .van-grid-item__content {
      flex-direction: row;
      justify-content: space-between;
      padding: 0px 10px;
      height: 35px;
      line-height: 35px;
    }
  }
}
</style>
