<template>
    <div class="dailyCheck">
        <Header :msg="$t('message.dailyCheckIn')" :leftText="$t('message.back')" :back="true" :HomePage="false" :rightText="''"/>
        <van-calendar
        :title="$t('message.viewCheckInRecords')"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '250px' }"
        type="range"
        @confirm="onConfirm"
        />
        <div class="infoSelectDays">
            <div class="title">
                    <p>{{ $t('message.signedFor1day') }}  <span>{{text}} </span>  {{ $t('message.day')}}！</p>

            </div>
            <div class="content">
                <van-button type="info" @click="showEnregistrement">{{ $t('message.checkIn') }}</van-button>

            </div>
        </div>
            <van-popup round class="Enregistrement" v-model="showEnregistre" closeable close-icon="close">
                <div class="Enregistrement">
                    <h2>text222</h2>
                    <van-grid direction="horizontal" :column-num="3" class="top_Enregistrement">
                        <van-grid-item  text>
                            <template #text>
                                <p>{{ $t('message.balance') }}</p>
                                <h5>1,174,917{{ $t('message.yuan') }}</h5>
                            </template>
                        </van-grid-item>
                        <van-grid-item  text>
                            <template #text>
                                <p>{{ $t('message.integral') }}</p>
                                <h5>22230{{ $t('message.minute') }}</h5>
                            </template>
                        </van-grid-item>
                        <van-grid-item  text>
                            <template #text>
                                <p>{{ $t('message.consecutiveCheckIn') }}</p>
                                <h5>1{{ $t('message.times') }}</h5>
                            </template>
                        </van-grid-item>
                    </van-grid>
                    <div class="Enregistrement_items">
                        <van-grid direction="horizontal" :column-num="3" class="title_Enregistrement">
                            <van-grid-item :text="$t('message.checkInDate')" />
                            <van-grid-item :text="$t('message.consecutiveCheckInDays')" />
                            <van-grid-item  :text="$t('message.pointsReward')" />
                        </van-grid>
                        <van-grid direction="horizontal" :column-num="3" class="content_Enregistrement" v-for="(item,index) in enregistrements" :key='index'>
                            <van-list
                                v-model="loading"
                                :finished="finished"
                                @load="loadData">
                                <van-grid-item  text>
                                    <template #text>
                                        <p>{{item.date}}</p>
                                        <p>{{item.time}}</p>
                                    </template>
                                </van-grid-item>
                                <van-grid-item  :text="item.day" />
                                <van-grid-item  :text="item.points" />
                            </van-list>
                        </van-grid>
                    </div>
                </div>
            </van-popup> 
    </div>
    
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },

})

export default class dailyCheck extends Vue {
    private date:any
    private text:Number=1
    private showEnregistre:boolean=false
    private loading?: boolean = false;
        private finished?: boolean = false;
        private refreshing?: boolean = false;
        private enregistrements: any[] = [];;
        private loadData(): void {
    setTimeout(() => {
      if (this.refreshing) {
        this.enregistrements = [];
        this.refreshing = false;
      }
      this.enregistrements = [
        {
          date:'2020.08.14',
          time:'23:00:09',
          day:'004' + this.$t('message.day'),
          points:'1' + this.$t('message.minute')
      },
      {
          date:'2020.08.14',
          time:'23:00:09',
          day:'003' + this.$t('message.day'),
          points:'1' + this.$t('message.minute')
      },
      {
          date:'2020.08.14',
          time:'23:00:09',
          day:'002' + this.$t('message.day'),
          points:'1' + this.$t('message.minute')
      },
      {
          date:'2020.08.14',
          time:'23:00:09',
          day:'001' + this.$t('message.day'),
          points:'1' + this.$t('message.minute')
      },
      
    ]
    console.log(this.enregistrements)
      this.loading = false;
      this.finished = true;
    }, 1000);
  }
    formatDate(date:Date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    showEnregistrement(){
        this.loadData()
        this.showEnregistre=true
    }
    onConfirm(date:any) {
      const [start, end] = date;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        
    var Difference_In_Time = end.getTime() - start.getTime(); 
  
// To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.text = Difference_In_Days
    }
}
</script>
<style >
.infoSelectDays {
    border-radius: 5px;
    margin-top: 10px;
      

}

.infoSelectDays .title {
    background: #4b4197;
    color: #fff;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.infoSelectDays .title p {
    margin: 0;
}

.infoSelectDays .title p span {
    font-weight: bold;
    font-size: 16pt;
    color: #f8c145;
}

.infoSelectDays .content {
    background: #9487f9;
    padding: 30px 50px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.infoSelectDays .content button.van-button {
    width: 100%;
    background: #ee5456;
    border-color: #ee5456;
}
.dailyCheck {
    background-image: url('../../assets/back/backDaily.png');
    padding: 20px;
    background-size: cover;
    margin-top: -4px;
    padding-top: 170px;
    min-height: calc(100vh - 186px);
    background-repeat: no-repeat;
}

.dailyCheck .van-calendar {
    background: #4b4197;
    color: #fff;
    position: relative;
    padding: 10px;
    border-radius: 10px;
}

.dailyCheck .van-calendar .van-calendar__header-title {
    position: absolute;
    left: 0;
    top: 0;
    background: #fec00f;
    display: none;
}

.dailyCheck .van-calendar .van-calendar__header-subtitle {
    line-height: 23px;
    height: 25px;
}

.dailyCheck .van-calendar .van-calendar__month-mark {
    display: none;
}

.dailyCheck .van-calendar .van-calendar__day {
    /* background: #fff; */
    height: 38px;
    font-size: 9pt;
    color: #000;
    color: #000;
    position: relative;
    background: transparent;
    z-index: 1;
}

.dailyCheck .van-calendar .van-calendar__day .van-calendar__bottom-info {
    bottom: 0;
}

.dailyCheck .van-calendar__day--end, .van-calendar__day--multiple-middle,.dailyCheck .van-calendar__day--multiple-selected,.dailyCheck .van-calendar__day--start,.dailyCheck .van-calendar__day--start-end {
    background-color: #fec00f!important;
}

.dailyCheck .van-calendar__day.van-calendar__day--middle {
    color: #000;
    background: #fec00f!important;
}

.dailyCheck .van-calendar .van-calendar__day:after {content: '';width: 90%;position: absolute;height: 90%;background: #fff;z-index: -1;}

.dailyCheck .van-calendar__day--end:after, .van-calendar__day--multiple-middle, .dailyCheck .van-calendar__day--multiple-selected, .dailyCheck .van-calendar__day--start:after, .dailyCheck .van-calendar__day--start-end:after {opacity: 0;}

.van-calendar__day.van-calendar__day--end {}
.header_blue .van-nav-bar__right {
    color: #fff;
}

.header_blue .van-nav-bar__left {
    color: #fff;
}
.Enregistrement.van-popup {
    height: 80vh;
    width: 80%;
        border: 6px solid #ffd950;
}

.Enregistrement h2 {
    margin: 0;
    background: #4b4197;
    color: #fff;
    padding: 13px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 11pt;
    font-weight: normal;
}

.Enregistrement .van-popup__close-icon--top-right {
    top: 11px;
    color: #c8c9cc;
}

.top_Enregistrement.van-grid {}

.top_Enregistrement.van-grid p {
    width: 100%;
    display: block;
    margin: 0;
    color: gray;
    font-size: 8pt;
}

.top_Enregistrement.van-grid .van-grid-item__content {
    display: block;
}

.top_Enregistrement.van-grid h5 {
    margin: 0;
    font-size: 9pt;
}
.Enregistrement_items {
    margin: 10px;
}

.title_Enregistrement.van-grid {border-top-left-radius: 7px;}

.title_Enregistrement.van-grid .van-grid-item__content {
    BACKGROUND: #9486ff;
    padding: 8px;
}

.title_Enregistrement.van-grid span.van-grid-item__text {
    color: #fff;
    font-size: 8pt;
}

.title_Enregistrement.van-grid .van-grid-item:first-child .van-grid-item__content {
    border-top-left-radius: 5px;
}

.title_Enregistrement.van-grid .van-grid-item:last-child .van-grid-item__content {
    border-top-right-radius: 5px;
}

.content_Enregistrement.van-grid p {
    font-size: 8pt;
    margin: 0;
}

.content_Enregistrement.van-grid .van-grid-item__content {
    display: block;
    padding: 5px;
}

.content_Enregistrement.van-grid .van-list {
    display: inline-flex;
    width: 100%;
}

.content_Enregistrement.van-grid .van-grid-item__content span.van-grid-item__text {
    position: relative;
    top: 1px;
    font-size: 8pt;
}
</style>