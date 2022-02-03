<template>
  <div class="agent-single">
    <Header
      :msg="pageTitle"
      :back="true"
      :leftText="$t('message.back')"
      :HomePage="false"
      :iconRight="''"
    />
    <div class="agent-content">
      <div class="agent-con">
        <div class="info-card">
          <div class="info-name">
            <div class="icon">
              <van-icon
                name="user-circle-o"
                size="42"
                :color="themeColor[getThemeColor]"
              />
            </div>
            <div class="name">
              <span> {{ agentName }} </span>
              <span>上次登陆时间: {{ landingTime }} </span>
            </div>
          </div>
          <van-divider
            :style="{
              borderColor: '#fff',
              padding: '0px',
              margin: '19px 0px 20px 0px',
            }"
          />
          <div class="info-balance">
            <van-grid
              :border="false"
              :column-num="isMultiLevel.value"
              :clickable="false"
            >
              <van-grid-item v-if="isMultiLevel.bool">
                <span> {{ "100" }} </span>
                <span>{{ $t("message.subordinate") }}</span>
              </van-grid-item>
              <van-grid-item>
                <span> {{ "7.8" }} </span>
                <span>{{ $t("message.rebate") }}</span>
              </van-grid-item>
              <van-grid-item>
                <span> {{ "￥ 4663" }} </span>
                <span>{{ $t("message.balance") }}</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div class="header-link" v-if="isMultiLevel.bool">
          <van-cell-group>
            <van-cell :title="$t('message.fundingRecords')" />
          </van-cell-group>
        </div>
        <div class="btn-group" v-if="!isMultiLevel.bool">
          <van-button
            @click="isActive = 1"
            type="default"
            class="fr-btn"
            :class="{ active: isActive == 1 }"
            >资金记录</van-button
          >
          <van-button
            @click="isActive = 2"
            type="default"
            class="tf-btn"
            :class="{ active: isActive == 2 }"
            >团队资金</van-button
          >
        </div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="加载完毕"
            @load="onLoad"
          >
            <van-cell v-for="item in list" :key="item" class="list-item">
              <div class="label">
                {{ $t("message.withdrawal") }}
                <span class="date">2020.02.01 13:59:01</span>
              </div>
              <div class="amount">
                +6888
              </div>
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/Header.vue"
import AgentExclusiveList from "@/components/Agent/AgentExclusiveList.vue"

@Component({
  components: {
    Header,
    AgentExclusiveList,
  },
})
export default class Agent extends Vue {
  private pageTitle?: any = this.$t("message.agencyCenter")
  private agentName?: String = "anxin520"
  private landingTime?: String = " 2020.02.01 13:59:01"
  private list?: any = []
  private loading?: Boolean = false
  private finished?: Boolean = false
  private refreshing?: Boolean = false
  private isActive?: any = 1
  private isMultiLevel?: any = {
    bool: true,
    value: 3,
  }
  private themeColor: any = {
    "classic-red": "#2c3e50",
    "classic-blue": "#fff",
    "noble-black-gold": "#fff",
    "simple-platinum": "#2c3e50",
  }

  get getThemeColor() {
    return this.$store.state.themeColor
  }
  private addClass() {
    this.isActive = !this.isActive
  }

  private onLoad() {
    setTimeout(() => {
      if (this.refreshing) {
        this.list = []
        this.refreshing = false
      }

      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1)
      }
      this.loading = false

      if (this.list.length >= 40) {
        this.finished = true
      }
    }, 1000)
  }
  private onRefresh() {
    this.finished = false
    this.loading = true
    this.onLoad()
  }
  private async Acount() {
    await this.$http
      .get(this.$api.AccountDetail)
      .then((res: any) => {
        if (res.status === 200) {
          // console.log(res)
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  private created() {
    this.Acount()
  }
}
</script>

<style lang="less">
/* Theme color */
@import "./../../assets/css/singleagent.less";
.agent-single {
  padding-top: 10px;
  background: #fff;

  .list-item > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      display: flex;
      flex-direction: column;
    }

    .date {
      color: #ccc;
      font-size: 12px;
      line-height: 12px;
    }
  }

  .btn-group {
    position: relative;
    display: flex;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 3px;

    .fr-btn,
    .tf-btn {
      color: #3d3c3c;
      width: 50%;
      bottom: 0;
      left: 0;
      right: 0;
      border: none;
    }

    button {
      &.active {
        background-image: linear-gradient(to right, #e63333, #ff6363);
        color: #fff;
      }
    }
  }

  .header-link .van-cell {
    text-align: left;
    height: 40px;
    line-height: 20px;

    .van-cell__title {
      position: relative;
      margin-left: 12px;

      &::after {
        content: "";
        height: 100%;
        width: 2px;
        background-image: linear-gradient(
            180deg,
            #e5ceb1 0%,
            #f0dbc4 50%,
            #fae8d6 100%
          ),
          linear-gradient(#adadad, #adadad);
        left: -12px;
        position: absolute;
        border-radius: 2px;
      }
    }
  }
}

.info-card {
  margin: 0px 10px;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0px 3px 11px 0px rgba(148, 148, 148, 0.36);
  background-image: linear-gradient(
      -69deg,
      #ecd4b8 0%,
      #f5e0ca 50%,
      #fdecdc 100%
    ),
    linear-gradient(#ffffff, #ffffff);

  .info-name {
    display: flex;
    align-items: center;
    position: relative;
    height: 42px;

    .icon {
      margin-right: 10px;
      display: flex;
    }

    .name span {
      display: block;
      text-align: left;

      &:last-child {
        color: #797979;
        font-size: 11px;
      }
    }

    button {
      border-radius: 5px;
      position: absolute;
      right: 0;
      top: 5px;
      box-shadow: 0px 2px 15px 0px rgba(187, 165, 138, 0.66);

      .van-button__content span {
        color: rgba(#ffe0b8, #a28052, 148, 0.36);
      }
    }
  }

  .info-balance .van-grid .van-grid-item .van-grid-item__content {
    background: transparent;
    padding: 0px;

    > span {
      color: #3d3c3c;

      &:first-child {
        font-weight: 15px;
        letter-spacing: -1px;
      }

      &:last-child {
        font-size: 11px;
      }
    }
  }
}
</style>
