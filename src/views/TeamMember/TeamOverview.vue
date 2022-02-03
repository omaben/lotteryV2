<template>
  <div class="team-overview">
    <Header
      :msg="$t('message.teamOverview')"
      :back="true"
      :leftText="$t('message.back')"
      :showFilter="true"
      @showFilterDate="showFilterDate()"
    />
    <div class="to-content">
      <div class="to-top-content" v-if="showDropdown">
        <van-cell-group class="top-input">
          <span class="title">{{ $t("message.date") }}:</span>
          <van-field
            v-model="beginDate"
            placeholder="2021-02-24 00:00:00"
            readonly
            @click="showBeginDate = true"
          />
          <span>--</span>
          <van-field
            v-model="endDate"
            placeholder="2021-02-25 22:19:54"
            readonly
            @click="showEndDate = true"
          />
        </van-cell-group>
        <div class="bottom-btn">
          <van-button size="small">{{ $t("message.cancel") }}</van-button>
          <van-button size="small" type="danger">{{
            $t("message.confirm")
          }}</van-button>
        </div>
      </div>

      <van-popup
        v-model="showBeginDate"
        round
        position="bottom"
        :lock-scroll="true"
        :style="{ height: '320px' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="showBeginDate = false"
          type="date"
          :title="$t('message.customColumnSort')"
          :cancel-button-text="$t('message.cancel')"
          :confirm-button-text="$t('message.confirm')"
          :columns-order="['year', 'month', 'day']"
          @confirm="selectBeginDate"
        />
      </van-popup>

      <van-popup
        v-model="showEndDate"
        round
        position="bottom"
        :style="{ height: '320px' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="showEndDate = false"
          type="date"
          :title="$t('message.customColumnSort')"
          :cancel-button-text="$t('message.cancel')"
          :confirm-button-text="$t('message.confirm')"
          :columns-order="['year', 'month', 'day']"
          @confirm="selectEndDate"
        />
      </van-popup>

      <div class="to-list">
        <div v-if="lists.length > 0" class="to-list-container">
          <div class="to-bal-detail">
            <div class="to-row">
              <div class="to-game" v-for="(list, index) in lists" :key="index">
                <div class="label">{{ list.label }}</div>
                <div class="list-cont">
                  <div v-for="(li, i) in list.list" :key="i">
                    {{ li.Name }}
                    <div class="to-amount">
                      {{ li.Balance }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-data">
          <div>{{ $t("message.noBetRecord") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/Header.vue"
import { Component, Vue } from "vue-property-decorator"

import { AgencyGroupReportSearchCoreMessage } from "@/core/AgencyCore/Message/AgencyGroupReportSearchCoreMessage"
import { AgencyGroupReportCoreService } from "@/core/AgencyCore/Service/AgencyGroupReportCoreService"

@Component({
  components: {
    Header,
  },
})
export default class FundRecords extends Vue {
  private showDropdown?: boolean = false
  private beginDate?: any = ""
  private endDate?: any = ""
  private showBeginDate?: boolean = false
  private showEndDate?: boolean = false
  private minDate?: any = new Date(2020, 0, 1)
  private maxDate?: any = new Date(2025, 10, 1)
  private currentDate?: any = new Date()
  private AgencyInfo: any = []
  private lists?: any = [
    {
      label: this.$t("message.teamDetails"),
      list: [
        { id: 0, Name: this.$t("message.numberTeam"), Balance: "" },
        { id: 1, Name: this.$t("message.currOnline"), Balance: "" },
        { id: 2, Name: this.$t("message.teamBal"), Balance: "" },
        { id: 3, Name: this.$t("message.recharge"), Balance: "" },
        { id: 4, Name: this.$t("message.withdraw"), Balance: "" },
        { id: 5, Name: this.$t("message.numOfBets"), Balance: "" },
        { id: 6, Name: this.$t("message.numRegisteredPeople"), Balance: "" },
        { id: 7, Name: this.$t("message.teamRebate"), Balance: "" },
      ],
    },
    {
      label: this.$t("message.lotteryGames"),
      list: [
        { id: 0, Name: "投注金额", Balance: "0.00元" },
        { id: 1, Name: "净盈利", Balance: "0.00元" },
        { id: 2, Name: "中奖金额", Balance: "0.00元" },
        { id: 3, Name: "投注返水", Balance: "0.00" },
      ],
    },
    // {
    //   label: this.$t("message.sportsComp"),
    //   list: [
    //     { id: 0, Name: "投注金额", Balance: "0.00元" },
    //     { id: 1, Name: "净盈利", Balance: "0.00元" },
    //     { id: 2, Name: "中奖金额", Balance: "0.00元" },
    //     { id: 3, Name: "投注返水", Balance: "0.00" },
    //   ],
    // },
  ]

  private selectBeginDate(val: any) {
    let month =
      val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate()
    let newDOB = `${val.getFullYear()}-${month}-${date} 00:00:00`
    this.beginDate = newDOB
    this.showBeginDate = false
  }
  private selectEndDate(val: any) {
    let month =
      val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate()
    let newDOB = `${val.getFullYear()}-${month}-${date} 00:00:00`
    this.endDate = newDOB
    this.showEndDate = false
  }

  private showFilterDate() {
    this.showDropdown = !this.showDropdown
  }

  private async agencyGroupReportCore() {
    let params: any = new AgencyGroupReportSearchCoreMessage()
    params.equal_id_agencyGroupReport = 1
    await AgencyGroupReportCoreService.Search(params).then((data) => {
      this.AgencyInfo = data
    })
    this.lists[0].list[0].Balance =
      this.AgencyInfo[0].agencyGroupNums + this.$t("message.people")
    this.lists[0].list[1].Balance =
      this.AgencyInfo[0].onlineNum + this.$t("message.people")
    this.lists[0].list[2].Balance =
      this.AgencyInfo[0].teamBalance + this.$t("message.yuan")
    this.lists[0].list[3].Balance = this.AgencyInfo[0].recharge
    this.lists[0].list[4].Balance =
      this.AgencyInfo[0].withdraw + this.$t("message.yuan")
    this.lists[0].list[5].Balance =
      this.AgencyInfo[0].betPeopleNum + this.$t("message.people")
    this.lists[0].list[6].Balance =
      this.AgencyInfo[0].registerNum + this.$t("message.people")
    this.lists[0].list[7].Balance =
      this.AgencyInfo[0].returnMoney + this.$t("message.yuan")
  }

  private created() {
    this.agencyGroupReportCore()
  }
}
</script>
<style lang="less">
.to-content {
  .top-input {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;

    &::after {
      display: none;
    }

    span {
      padding: 0 3px;
      width: 20px;

      &.title {
        padding-right: 20px;
        white-space: nowrap;
      }
    }

    .van-field {
      width: auto;
      padding: 0px;

      input {
        font-size: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        text-align: center;
      }
    }
  }

  .bottom-btn {
    display: flex;
    justify-content: flex-end;
    padding: 0px 20px 10px;
    background: white;

    button {
      margin-left: 10px;
      height: 28px;
      border-radius: 3px;
    }
  }
}
.to-list .no-data {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.to-bal-detail {
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
}

.to-row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .to-game {
    background: #f2f4f8;

    &:last-of-type {
      .list-cont {
        margin-bottom: 0;
      }
    }

    &:last-of-type {
      border-bottom: none;
    }
  }

  .label {
    background: #6d6d6d;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    text-align: left;
  }
}

.list-cont {
  display: flex;
  flex-wrap: wrap;
  background: #f2f4f8;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;

  > div {
    color: #484848;
    font-size: 14px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 55px;
    width: 32.5%;
    margin: 1px;
    background: #fff;
    flex-wrap: wrap;

    .to-amount {
      padding-top: 6px;
      color: #bfbfbf;
      font-size: 13px;
    }
  }
}
</style>
