<template>
  <div class="bet-record">
    <Header :msg="$t('message.betRecord')" :leftText="$t('message.back')" :back="true" />
    <div class="bet-record-content">
      <div class="record-picker">
        <van-dropdown-menu>
          <van-dropdown-item :title="currGameTitle" ref="gametitle">
            <div class="picker-list">
              <div
                v-for="(titleItem, titleKey) in gameTitleItems"
                :key="titleKey"
                @click="selectGameTitle(titleKey, titleItem)"
                :class="activeGameTitle == titleKey ? 'item-active' : null"
                class="picker-item"
              >
                <van-button size="normal">
                  {{ titleItem }}
                </van-button>
              </div>
            </div>
          </van-dropdown-item>
          <van-dropdown-item :title="currDateTitle" ref="datetitle">
            <div class="picker-list">
              <div
                v-for="(dateItem, dateKey) in dateTitleItems"
                :key="dateKey"
                @click="selectDateTitle(dateKey, dateItem)"
                :class="activeDateTitle == dateKey ? 'item-active' : null"
                class="picker-item"
              >
                <van-button size="normal">
                  {{ dateItem }}
                </van-button>
              </div>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
      <div class="record-list">
        <div
          v-if="this.filterData().length > 0"
          class="record-list-container"
        >
          <van-list
            v-model="loading"
            :finished="finished"
            :inished-text="$t('message.loaded')"
            @load="onLoad"
          >
            <div
              class="record-list-item"
              v-for="(item, key) in this.filterData()"
              :key="key"
            >
              <div class="list-item-header">
                <!--<div class="date">
                  <span>{{ item.BetTime[5] }}{{ item.BetTime[6] }}日</span>
                  <span>{{ item.BetTime[8] }}{{ item.BetTime[9] }}月</span>
                  
                </div>-->
                <div class="details">
                  <div>{{ $t('message.numTransaction') }}: {{ item.entries }}</div>
                  <div>{{ $t('message.runningWater') }}: {{ item.turnOver }}</div>
                  <div>{{ $t('message.winLose') }}: {{ item.winLose }}</div>
                </div>
              </div>
              <div class="list-item-content">
                <div class="content-header">
                  <div>{{ item.gameType }}</div>
                </div>
                <div class="content-body">
                  <div class="row1">{{ item.gameName }}</div>
                  <div class="row2">{{ $t('message.odds') }}: {{ item.odds }}</div>
                  <div class="row3">
                    <div>{{ $t('message.runningWater') }}: <span class="c-color">{{ item.totalTurnOver }}</span></div>
                    <div>{{ $t('message.winLose') }}: <span class="c-color">{{ item.totalWinLose }}</span></div>
                  </div>
                </div>
                <div class="content-footer">
                  <div>{{ $t('message.betTime') }}: {{ item.betTime }}</div>
                </div>
              </div>
            </div>
          </van-list>
        </div>
        <div v-else class="no-data">
          <div>{{ $t('message.noBetRecord') }}</div>
        </div>
      </div>
    </div>
    <van-popup
      v-model="showSelectDate"
      round
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-datetime-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showSelectDate = false"
        type="date"
        :title="$t('message.customColumnSort')"
        :columns-order="['year', 'month', 'day']"
        :cancel-button-text="$t('message.cancel')"
        :confirm-button-text="$t('message.confirm')"
        @confirm="selectDate"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from 'vue-property-decorator'


@Component({
  components: {
    Header,
  },
})
export default class AllBetRecord extends Vue {
  private currGameTitle?: any = this.$t('message.all')
  private currDateTitle?: any = this.$t('message.today')
  private activeGameTitle?: number = 0
  private activeDateTitle?: number = 0
  private loading?: boolean = false
  private finished?: boolean = false
  private showSelectDate?: boolean = false
  private currentDate?: any = new Date()
  private minDate?: any = new Date(1970, 0, 1)
  private maxDate?: any = new Date()
  private gameTitleItems?: any = [this.$t('message.all'), this.$t('message.aaLottery')]
  private dateTitleItems?: any = [
    this.$t('message.today'), 
    this.$t('message.yesterday'), 
    this.$t('message.nearly7days'), 
    this.$t('message.nearly30days'), 
    this.$t('message.custom')
  ]
  private customDateFilter?: String = this.currentDate.toISOString().split('T')[0] //today's date
  private betRecordData?: any = [];
  private date?: any=[] 
    /*{
      date: ['01', '29'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: 'AA彩票',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: '2020-03-19 19:30:45',
    },
    {
      date: ['01', '29'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: 'AA彩票',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: '2020-03-19 19:30:45',
    },
    {
      date: ['03', '11'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: 'AA彩票',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: "2021-03-19 19:30:45",
    },
        {
      date: ['01', '29'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: 'AA彩票',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: '2020-03-19 19:30:45',
    },
        {
      date: ['03', '11'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: 'AA彩票',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: '2021-03-19 19:30:45',
    },
        {
      date: ['03', '11'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: 'AA彩票',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: "2021-03-22 19:30:45",
    },
            {
      date: ['03', '11'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: '全部',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: "2021-03-21 19:30:45",
    },
            {
      date: ['03', '11'],
      entries: '24',
      turnOver: '1126',
      winLose: '-5020.40',
      gameType: '全部',
      gameName: '幸运飞艇',
      odds: '1.84',
      totalTurnOver: '500',
      totalWinLose: '-500',
      betTime: "2021-03-22 19:30:45",
    },
  ]*/
  private onLoad(): void {
    setTimeout(() => {
      this.loading = false
      this.finished = true
    }, 1000)
  }
  private onRefresh(): void {
    this.finished = false
    this.loading = true
    this.onLoad()
  }
  private selectGameTitle(index: number, title: string) {
    this.activeGameTitle = index
    this.currGameTitle = title
    let _gametitle = this.$refs.gametitle as any
    _gametitle.toggle()
  }
  private selectDateTitle(index: number, title: string) {
    let _datetitle = this.$refs.datetitle as any
    _datetitle.toggle()
    this.customDateFilter = ''
    if (title == this.$t('message.custom')) {
      this.showSelectDate = true
    } else {
      switch(title){
        case '今日': // today
          let today = new Date()
          this.customDateFilter = today.toISOString().split('T')[0]
          break
        case '昨日': //yesterday
          let yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          this.customDateFilter = yesterday.toISOString().split('T')[0]
          break
        case '近7日': //last 7 days
          let lastWeek = new Date()
          lastWeek.setDate(lastWeek.getDate() - 7)
          this.customDateFilter = lastWeek.toISOString().split('T')[0]
          break
        case '近30日': // last 30 days
          let lastMonth = new Date()
          lastMonth.setDate(lastMonth.getDate() - 7)
          this.customDateFilter = lastMonth.toISOString().split('T')[0]
          break
      }
      this.currDateTitle = title
      this.activeDateTitle = index
    }
  }

  private selectDate(val: any) {
    this.showSelectDate = false
    this.activeDateTitle = 4
    this.currDateTitle = '自定义'
    console.log(val)
    val.setDate(val.getDate() + 1)
    let customDate = val.toISOString().split('T')[0]
    console.log(customDate)
    this.customDateFilter = customDate
  }

  private filterData() {
    if (this.customDateFilter && (this.currDateTitle == '今日' || this.currDateTitle == '昨日' || this.currDateTitle == '自定义')){
      if(this.currGameTitle == 'AA彩票'){
        return this.betRecordData.filter((x: { betTime: string, gameType: String }) => (x.betTime.split(' ')[0] === this.customDateFilter && x.gameType === 'AA彩票'))
      }
      else {
        return this.betRecordData.filter(
        (x: { betTime: string }) => x.betTime.split(' ')[0] === this.customDateFilter
        )
      }
    }
    else if(this.currDateTitle == '近7日' || this.currDateTitle == '近30日' ){
      let filterDate = new Date(this.customDateFilter as string)
      if(this.currGameTitle == 'AA彩票'){
        return this.betRecordData.filter((x: { betTime: string, gameType: String }) => new Date(x.betTime.split(' ')[0]) >= filterDate && x.gameType == 'AA彩票')
      }
      else {
        return this.betRecordData.filter((x: { betTime: string }) => new Date(x.betTime.split(' ')[0]) >= filterDate)
      }

    }
    else return ''
  }
private async AllBetReportInfo() {
    await this.$http.get(this.$api.BetOrder)
      .then((res: any) => {
        console.log(res)
       this.betRecordData = res.data.data[0].bets;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  private created () {
    this.AllBetReportInfo();
    
  }
  
}
</script>
<style lang="less" scoped>
/* Theme color */
@import "./../../assets/css/allbetrecord.less";

.bet-record-content {
  // margin-top: 46px;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__bar {
  height: 45px;
  padding: 0px 10px;
  align-items: center;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__item {
  flex: none;
  min-width: 90px;
  height: 35px;
  line-height: 35px;
  border-radius: 28px;
  background: #f2f4f8;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__item:not(:last-child) {
  margin-right: 10px;
}

.record-picker ::v-deep.van-dropdown-menu .van-dropdown-menu__title::after {
  border-color: transparent transparent #2c3e50 #2c3e50;
}

.record-picker .picker-list {
  display: block;
  padding: 10px 0px 0px 10px;
}

.record-picker .picker-list .picker-item {
  float: left;
  width: calc(25% - 10px);
  margin: 0px 10px 10px 0px;
}

.record-picker .picker-list ::v-deep.picker-item .van-button {
  width: 100%;
  padding: 0px 5px;
  height: 40px;
  border-radius: 8px;
}

.record-picker .picker-list ::v-deep.picker-item.item-active .van-button {
  background: rgb(237, 64, 64);
  color: #fff;
}

.record-list {
  height: calc(100vh - 91px);
  overflow: hidden;
}

.record-list .record-list-container {
  height: 100%;
  overflow-y: scroll;
  padding: 12px 10px 10px;
}

.record-list-item:not(:first-child) {
  margin-top: 10px;
}

.record-list-item .list-item-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px 0px;
}

.record-list-item .list-item-header .date {
  width: 32%;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
}

.record-list-item .list-item-header .details {
  width: 68%;
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #939393;
}

.record-list-item .list-item-header .details div:not(:last-child) {
  margin-right: 5px;
}

.record-list-item .list-item-content {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
}

.list-item-content .content-header {
  height: 20px;
  line-height: 20px;
  text-align: left;
  padding: 14px 0px 6px 18px;
  border-bottom: 1px solid #dbdbdb;
}

.list-item-content .content-body {
  padding: 10px 10px 10px 28px;
  border-bottom: 1px solid #dbdbdb;
}

.list-item-content .content-body > div {
  text-align: left;
  padding: 2px 0px;
  font-size: 14px;
}

.list-item-content .content-body .row1 {
  position: relative;
}

.list-item-content .content-body .row1::after {
  content: '';
  position: absolute;
  top: 2px;
  left: -8px;
  height: 80%;
  width: 1px;
  background: rgb(237, 64, 64);
}

.list-item-content .content-body .row2 {
  display: flex;
  flex-direction: row;
  color: #939393;
}

.list-item-content .content-body .row3 {
  display: flex;
  flex-direction: row;
}

.list-item-content .content-body .row3 div {
  flex: 1;
}

.list-item-content .content-body .row3 div:last-child {
  text-align: right;
  padding-right: 20px;
}

.list-item-content .content-footer {
  padding-left: 28px;
  text-align: left;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  padding: 10px 0px 10px 28px;
  color: #939393;
}

.record-list .no-data {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
