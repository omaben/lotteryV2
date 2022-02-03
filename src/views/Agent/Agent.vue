<template>
  <div class="agent">
    <Header
      :msg="$t('message.agentCenter')"
      :back="true"
      :leftText="$t('message.back')"
      :HomePage="false"
    />
    <div class="agent-content">
      <div class="agent-con">
        <div class="info-card">
          <div class="info-name">
            <div class="icon">
              <van-icon name="user-circle-o" size="38" />
            </div>
            <div class="name">
              <span> {{ AgencyInfo.name }} </span>
              <span>{{ $t("message.agentLevel") }}: {{ agencyLevel }} </span>
            </div>
            <van-button type="default" size="mini" @click="goPage('Pinces')">{{
              $t("message.promAgent")
            }}</van-button>
          </div>
          <van-divider
            :style="{
              borderColor: '#fff',
              padding: '0px',
              margin: '19px 0px 20px 0px',
            }"
          />
          <div class="info-balance">
            <van-grid :border="false" :column-num="3" :clickable="false">
              <van-grid-item>
                <span>
                  ￥ {{ AgencyInfo.length > 0 && typeof(AgencyInfo[0].Commission) != "undefined"  ? AgencyInfo[0].Commission : 0 }}
                </span>
                <span>{{ $t("message.myComm") }}</span>
              </van-grid-item>
              <van-grid-item>
                <span>
                  ￥
                  {{
                     AgencyInfo.length > 0 && typeof(AgencyInfo[0].yesterdayCommission) != "undefined"
                      ? AgencyInfo[0].yesterdayCommission
                      : 0
                  }}
                </span>
                <span>{{ $t("message.yesterdayComm") }}</span>
              </van-grid-item>
              <van-grid-item>
                <span>
                  ￥
                  {{
                     AgencyInfo.length > 0 && typeof(AgencyInfo[0].todayCommission) != "undefined"
                      ? AgencyInfo[0].todayCommission
                      : 0
                  }}
                </span>
                <span>{{ $t("message.todayComm") }}</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div class="team-mngt">
          <div class="team-mngt-content">
            <div
              class="mngt"
              v-for="(teamItem, teamKey) in teamList"
              :key="teamKey"
              @click="goPage(teamItem.path)"
            >
              <div class="mngt-wrapper">
                <div class="icon">
                  <van-icon :name="teamItem.icon" size="28" />
                </div>
                <div class="name">
                  <span>
                    {{
                      teamKey == 0
                        ? $t("message.teamMember")
                        : $t("message.teamOverview")
                    }}
                  </span>
                  <span> {{ teamItem.subTitle }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="agent-exc-list">
          <AgentExclusiveList
            v-for="(item, key) in exclusiveListData"
            :key="key"
            :headerText="item.title"
            :isLink="item.isLink"
            :linkText="item.linkText"
            :itemData="item.data"
            :toPath="item.path"
          />
        </div>
      </div>
    </div>
    <!-- <Footer :activeTabs="3" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import AgentExclusiveList from "@/components/Agent/AgentExclusiveList.vue"

import {AgencyReportSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyReportSearchCoreMessage";
import {AgencyReportCoreService} from "@/core/AgencyCore/Service/AgencyReportCoreService";

@Component({
  components: {
    Header,
    Footer,
    AgentExclusiveList,
  },
})
export default class Agent extends Vue {
  private agentName?: any = "anxin520"
  private agencyLevel?: any = this.$t("message.juniorAgent")
  private teamList?: any[] = [
    {
      icon: "friends",
      title: this.$t("message.teamMember"),
      subTitle: this.$t("message.currentMembers"),
      path: "TeamMember",
    },
    {
      icon: "balance-list",
      title: this.$t("message.teamMember"),
      subTitle: this.$t("message.viewReport"),
      path: "TeamOverview",
    },
  ]
  private AgencyInfo: any[] = []
  private AgencyMember?: any[] = []
  private AgencyReport?: object = {}
  private exclusiveListData?: any[] = [
    {
      title: this.$t("message.juniorAgentExclusive"),
      isLink: false,
      linkText: "",
      path: "",
      data: [],
    },
    {
      title: this.$t("message.promotionalAgentExclusive"),
      isLink: false,
      linkText: "",
      path: "",
      data: [],
    },
  ]

  private goPage(name: string) {
    if (name) this.$router.push({ name: name })
  }
  
  private agencyReportCore(){
    let params: any = new AgencyReportSearchCoreMessage();
    params.like_id_agencyReport = 1;

    AgencyReportCoreService.Search(params).then((data) => {
      this.AgencyInfo=data;
    })
  }

  private created() {
    // this.agency()
    this.agencyReportCore()
  }
}
</script>

<style lang="less">
/* Theme color */
@import "../../../src/assets/css/agent.less";

.agent {
  display: flex;
  /* background: #f3f4f8; */
  .agent-content {
    padding-bottom: 60px;
    width: 100%;
    // margin-top: 45px;
  }
  .info-card {
    margin: 10px;
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
  }

  .info-card .info-name {
    display: flex;
    align-items: center;
    position: relative;
    height: 42px;
  }

  .info-card .info-name .icon {
    margin-right: 10px;
    display: flex;
  }

  .info-card .info-name .name span {
    display: block;
    text-align: left;
  }

  .info-card .info-name .name span:last-child {
    color: #797979;
    font-size: 9px;
  }

  .info-card .info-name button {
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 5px;
    box-shadow: 0px 2px 15px 0px rgba(187, 165, 138, 0.66);
  }

  .info-card .info-name button .van-button__content span {
    color: rgba(#ffe0b8, #a28052, 148, 0.36);
  }

  .info-card .info-balance .van-grid .van-grid-item .van-grid-item__content {
    background: transparent;
    padding: 0px;
  }

  .info-card
    .info-balance
    .van-grid
    .van-grid-item
    .van-grid-item__content
    > span {
    color: #3d3c3c;
  }

  .info-card
    .info-balance
    .van-grid
    .van-grid-item
    .van-grid-item__content
    > span:first-child {
    font-weight: 15px;
    letter-spacing: -1px;
  }

  .info-card
    .info-balance
    .van-grid
    .van-grid-item
    .van-grid-item__content
    > span:last-child {
    font-size: 11px;
  }

  .team-mngt {
    display: flex;
    margin-bottom: 10px;
  }

  .team-mngt .team-mngt-content {
    margin: 0px 10px;
    width: 100%;
    display: inline-block;
  }

  .team-mngt .team-mngt-content > div {
    display: inline-block;
    width: calc(50% - 5px);
    box-shadow: 0px 1px 5px 0px rgba(148, 148, 148, 0.36);
    border-radius: 5px;
    background: #fff;
  }

  .team-mngt .team-mngt-content > div:not(:last-child) {
    margin-right: 10px;
  }

  .team-mngt .team-mngt-content .mngt-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 25px;
    height: 60px;
  }

  .team-mngt .team-mngt-content .mngt-wrapper .icon {
    display: flex;
  }

  .team-mngt .team-mngt-content .mngt-wrapper .name {
    margin-left: 10px;
  }

  .team-mngt .team-mngt-content .mngt-wrapper .name > span {
    display: block;
    text-align: left;
    color: #3d3c3c;
    white-space: nowrap;
  }

  .team-mngt .team-mngt-content .mngt-wrapper .name > span:first-child {
    font-size: 11px;
  }

  .team-mngt .team-mngt-content .mngt-wrapper .name > span:last-child {
    color: #bdbec0;
    font-size: 9px;
  }

  .agent-exc-list > div:not(:last-child) {
    margin-bottom: 10px;
  }

  .agent-exc-list
    .agent-exc-list-content
    .header-link
    .van-cell-group
    .van-cell {
    text-align: left;
    height: 40px;
    line-height: 20px;
    display: block;
  }

  .agent-exc-list
    .agent-exc-list-content
    .header-link
    .van-cell-group
    .van-cell
    .van-cell__title {
    position: relative;
    margin-left: 12px;
  }

  .agent-exc-list
    .agent-exc-list-content
    .header-link
    .van-cell-group
    .van-cell
    .van-cell__title::after {
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

  .agent-exc-list .agent-exc-list-content .item-list {
    padding: 0px 15px;
    background: #fff;
  }

  .agent-exc-list
    .agent-exc-list-content
    .item-list
    .van-grid
    .van-grid-item
    .van-grid-item__content {
    padding: 0;
    justify-content: flex-start;
  }

  .agent-exc-list
    .agent-exc-list-content
    .item-list
    .van-grid
    .van-grid-item
    .van-grid-item__content
    .item-wrapper {
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    padding-left: 15px;
  }

  .agent-exc-list
    .agent-exc-list-content
    .item-list
    .van-grid
    .van-grid-item
    .van-grid-item__content
    .item-wrapper
    > div {
    margin-left: 10px;
  }

  .agent-exc-list
    .agent-exc-list-content
    .item-list
    .van-grid
    .van-grid-item
    .van-grid-item__content
    .item-wrapper
    > div
    span {
    display: block;
    text-align: left;
  }

  .agent-exc-list
    .agent-exc-list-content
    .item-list
    .van-grid
    .van-grid-item
    .van-grid-item__content
    .item-wrapper
    > div
    span:first-child {
    font-size: 16px;
    font-weight: bold;
    color: #363636;
  }

  .agent-exc-list
    .agent-exc-list-content
    .item-list
    .van-grid
    .van-grid-item
    .van-grid-item__content
    .item-wrapper
    > div
    span:last-child {
    color: #a1a3a6;
    font-size: 11px;
  }
}
</style>
