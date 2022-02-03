<template>
    <div class="testerr">
        <div class="header">
            <p>{{ pageTitle }}</p>
        </div>
        <div class="content">
            <p>{{ $t('message.orderNo') }} : C21030400001</p>
            <p>{{ $t('message.singleBetAmount') }} : 2.00 {{ $t('message.yuan') }}</p>
            <p>{{ $t('message.betTime') }} : 2021-03-04 15:47:11</p>
            <p>{{ $t('message.noBets') }} : 1</p>
            <p>{{ $t('message.colorKind') }} : 澳洲五分彩 [ 官 ]</p>
            <p>{{ $t('message.multiple') }} : 2 倍</p>
            <p>{{ $t('message.singleBetBonus') }} : 6066.667 {{ $t('message.yuan') }}</p>
            <p>{{ $t('message.doubleColorMode') }} : {{ $t('message.yuan') }}</p>
            <p>{{ $t('message.issue') }} : 20210304191</p>
            <p>{{ $t('message.totalBet') }} : 4 {{ $t('message.yuan') }}</p>
            <p>{{ $t('message.howToPlay') }} : 组选 30</p>
            <p>{{ $t('message.betNum') }} : 7,8|1</p>
            <p>{{ $t('message.rebate') }} : 未返 水 (0%)</p>
            <p>{{ $t('message.status') }} : 未开奖</p>
        </div>
        <div class="footer">
            <div class="footer-content">
                <p>{{ $t('message.cancelOrder') }}</p>
                <p>{{ $t('message.keepBetting') }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Footer,
  }
})

export default class PurchasedRecordDetail extends Vue{
    private pageTitle?: any = this.$t('message.lotteryDetails');
}
</script>

<style scoped>
    .tester {
        position: relative;
    }
    .header{
        height: 30px;
        width: 100%;
        background: linear-gradient(to right, #e63333, #ff6363);
        text-align: left;
        display: flex;
        align-items: center;
        color: white;
    }
    .header p{
        margin-left: 10px;
    }
    .content p {
        text-align: left;
        line-height: 12px;
        margin-left: 10px;
    }

    .footer {
        background: linear-gradient(to right, #e63333, #ff6363);
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .footer .footer-content {
        color: white;
        display: flex;
        justify-content: space-around;

    }
    .footer .footer-content p {
        padding: 0px;
        margin: 8px 0;
    }
</style>