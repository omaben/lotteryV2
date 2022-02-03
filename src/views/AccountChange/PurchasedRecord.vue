<template>
  <div class="home">
    <Header :msg="pageTitle" :back="true" :HomePage="false" :leftText="$t('message.back')" />
    <van-tabs class="lottery-bets">
        <van-tab v-for="(item, index) in tabsTitle" :key="index" :title="item.title" >
            <van-cell>
                <div class="van-hairline--top">
                    <van-row class="lottery-bets-info" type="flex" justify="space-around">
                        <van-col span="8"><p>{{ $t('message.betting') }}</p><p class="txt-red">4.0</p></van-col>
                        <van-col span="8"><p>{{ $t('message.winALottery') }}</p><p class="txt-green">0.0</p> </van-col>
                        <van-col span="8"><p>{{ $t('message.profit') }}</p><p class="txt-red">-4.00</p></van-col>
                    </van-row>
                </div>
                <div class="van-hairline--top">
                    <van-row class="lottery-bets-info-below" type="flex" justify="space-between">
                        <van-col class="lottery-txt" span="12">
                            <p>澳洲五分彩[ 官 ]</p>
                            <p>{{ $t('message.issue') }} :20210304191</p>
                            <p>{{ $t('message.betNum') }} :7,811</p>
                            <p>{{ $t('message.betAmount') }} :4 {{ $t('message.yuan') }}</p>
                            <p>{{ $t('message.awardAmount') }} :C {{ $t('message.yuan') }}</p>
                        </van-col>
                        <van-col class="lottery-txt" span="12">
                            <p>未开奖</p>
                            <p>.</p>
                            <p>.</p>
                            <p>2021-03-04 15:47:11</p>
                            <p>{{ $t('message.howToPlay') }} : {{ $t('message.selected') }} 30</p>
                        </van-col>
                    </van-row>
                </div>
            </van-cell>
        </van-tab>
    </van-tabs>
    <van-cell is-link @click="showPopup1">{{ $t('message.purchasedRecordDetail') }}</van-cell>
    <van-popup class="purchase-details" v-model="show1">
        <PurchasedRecordDetail/>
    </van-popup>

    <van-cell is-link @click="showPopup3">{{ $t('message.purchasedRecordType') }}</van-cell>
    <van-popup class="account-change" v-model="show3">
        <PurchaseColorRecord/>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import PurchasedRecordDetail from '@/components/AccountChange/PurchasedRecordDetail.vue';

import AccountChangeStatemantType from '@/components/AccountChange/AccountChangeStatemantType.vue';
import PurchaseColorRecord from '@/components/AccountChange/PurchaseColorRecord.vue';

@Component({
  components: {
    Header,
    PurchasedRecordDetail,
    AccountChangeStatemantType,
    PurchaseColorRecord,
  }
})

export default class PurchasedRecord extends Vue {
    private val: any = 0;
    private pageTitle?: any = this.$t('message.lotteryTicket');
    private tabsTitle?: any[] = [
        {
            title: this.$t('message.all')
        },
        {
            title: this.$t('message.noPrize')
        },
        {
            title: this.$t('message.hasWon')
        },
        {
            title: this.$t('message.not')
        },
    ];
    private show1: Boolean = false;
    private show2: Boolean = false;
    private show3: Boolean = false;
    private showPopup1() {
      this.show1 = true;
    }
    private showPopup2() {
      this.show2 = true;
    }
    private showPopup3() {
      this.show3 = true;
    }

}
</script>

<style scope>
.lottery-bets-info{
    margin: auto;
    text-align: center;
}
.lottery-bets-info-below{
    margin: auto;
}
.lottery-bets-info-below .van-col:nth-child(2){
    text-align: right;
}
.lottery-txt p{
    line-height: 5px;
}
.lottery-txt p:nth-child(1){
    margin-bottom: 30px;
}
.lottery-txt p:nth-child(2){
    margin-bottom: 30px;
}
.lottery-txt p:nth-child(3){
    margin-bottom: 30px;
}

.txt-red{
    color: red;
}
.txt-green{
    color: green;
}

.purchase-details {
    height: 90%;
    width: 80%;
}
.account-change {
    height: 40%;
    width: 80%;
}
</style>