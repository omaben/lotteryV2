<template>
  <div class="tracking-num-query">
    <Header
      :msg="$t('message.trackingQueryNum')"
      :back="true"
      :leftText="$t('message.back')"
      :showFilter="true"
      @showFilterDate="showFilterDate()"/>
    <div class="tnq-content">
      <FilterRecord v-if="showDropdown"/>

      <div class="tnq-list">
        <div v-if="tnqData.length > 0" class="tnq-list-container">
          <van-list
            v-model="loading"
            :finished="finished"
            :finished-text="$t('message.finished')"
            @load="onLoad">
              <div class="tnq-list-item" v-for="(item, key) in tnqData" :key="key" @click="showPopup">
                <div class="left">
                  <div class="top">
                    <span>{{item.title}}</span>
                    <span>未开奖</span>
                  </div>
                  <div class="body">
                    <span>{{ $t('message.issue') }}: {{ item.issueNumber }}</span>
                    <span>{{ $t('message.betNum') }}:{{ item.betNum }}</span>
                    <span>{{ $t('message.betAmount') }}: {{ item.betAmount }}元</span>
                    <span>{{ $t('message.awardAmount') }}:{{ item.bonusAmount }}</span>
                    <span class="date">{{ item.date }}</span>
                  </div>
                </div>
                <div class="right">
                  <van-icon name="arrow" class="arrow" />
                </div>
              </div>
          </van-list>
        </div>
        <div v-else class="no-data">
          <div>{{ $t('message.noBetRecord') }}</div>
        </div>
      </div>
    </div>
    <ChasePopup
      :isShow="showChasePopup"
      v-if="showChasePopup"
      @hide-popup="showChasePopup = false"
    />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";
import ChasePopup from '@/components/TrackingQueryNumber/ChasePopup.vue'
import FilterRecord from '@/components/common/FilterRecord.vue'

@Component({
  components: {
    Header,
    ChasePopup,
    FilterRecord
  }
})
export default class FundRecords extends Vue {
  private showDropdown?: boolean = false;
  private username?: any = '';
  private showChasePopup?: boolean = false
  private beginDate?: any = '';
  private endDate?: any = '';
  private showBeginDate?: boolean = false;
  private showEndDate?: boolean = false;
  private minDate?: any = new Date(2020, 0, 1);
  private maxDate?: any = new Date(2025, 10, 1);
  private currentDate?: any = new Date();
  private loading?: boolean = false;
  private finished?: boolean = false;
  private colorType?: any =  0;
  private colorOptions?: any = [
    { text: 'All', value: 0 },
    { text: 'Red', value: 1 },
    { text: 'Green', value: 2 },
    { text: 'Blue', value: 3 }
  ];
  private tnqData?: any = [
    {
      title: '重庆时时彩[官]',
      issueNumber: 20210224056,
      betNum: '7.8|1',
      betAmount: 2,
      bonusAmount: 0,
      date: '2021-02-24 22:34:00'
    },
    {
      title: '重庆时时彩[官]',
      issueNumber: 20210224056,
      betNum: '7.8|1',
      betAmount: 2,
      bonusAmount: 0,
      date: '2021-02-24 22:34:00'
    },
    {
      title: '重庆时时彩[官]',
      issueNumber: 20210224056,
      betNum: '7.8|1',
      betAmount: 2,
      bonusAmount: 0,
      date: '2021-02-24 22:34:00'
    },
    {
      title: '重庆时时彩[官]',
      issueNumber: 20210224056,
      betNum: '7.8|1',
      betAmount: 2,
      bonusAmount: 0,
      date: '2021-02-24 22:34:00'
    },
  ];
  private showPopup() {
    this.showChasePopup = true
  }
  private onLoad(): void {
    setTimeout(() => {
      this.loading = false;
      this.finished = true;
    }, 1000);
  }
  private selectBeginDate(val: any) {
    let month = (val.getMonth() + 1) < 10 ? `0${(val.getMonth() + 1)}` : (val.getMonth() + 1);
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate();

    let newDOB = `${val.getFullYear()}.${month}.${date}`;
    this.beginDate = newDOB;
    this.showBeginDate = false;
  }
  private selectEndDate(val: any) {
    let month = (val.getMonth() + 1) < 10 ? `0${(val.getMonth() + 1)}` : (val.getMonth() + 1);
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate();

    let newDOB = `${val.getFullYear()}.${month}.${date}`;
    this.endDate = newDOB;
    this.showEndDate = false;
  }

  private showFilterDate() {
    this.showDropdown = !this.showDropdown;
  }

}
</script>
<style lang="less">
.tnq-content {
  // margin-top: 45px;

  .tnq-list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px 10px 20px;
    justify-content: space-between;
    background: white;
    border-bottom: 1px solid #ccc;

    .left {
      width: 100%;
      padding-right: 15px;
    }

    .top {
      justify-content: space-between;
      display: flex;
      padding-bottom: 10px;
    }

    .body {
      position: relative;
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        padding-bottom: 5px;
      }

      .date {
        position: absolute;
        bottom: 20px;
        right: 0;
      }
    }

    &:nth-last-child(2) {
      border-bottom: none;
    }
  }
}

.tnq-list .no-data {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

// Dropdown Styles
.tnq-dropdown {
  background: white;
  .top-input {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
    
    &::after {
      display: none;
    }

    .separator {
      padding: 0 3px;
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

    button {
      margin-left: 10px;
      height: 28px;
      border-radius: 3px;
    }
  }

  .custom-dd {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 20px;

    .van-dropdown-menu__bar {
      border: 1px solid #ccc;
      border-radius: 3px;
      height: 23px;
      width: calc(100% - 120px);

      > div {
        justify-content: flex-start;
      }
    }
  }

  .username {
    margin-bottom: 5px;
    text-align: right;
    padding-right: 20px;

    input { 
      width: calc(100% - 143px);
      border: 1px solid #ccc;
      height: 23px;
      text-align: left;
      border-radius: 3px;;
    }
  }
}


// General styles
.tnq-label {
  padding-right: 20px;
  white-space: nowrap;
}
</style>