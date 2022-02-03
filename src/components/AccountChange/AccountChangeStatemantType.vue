<template>
    <div class="testerr">
        <div class="header">
            <p>{{ pageTitle }}</p>
        </div>
        <div class="content">
            <van-radio-group v-model="radio">
                <van-radio name="1"  checked-color="#ee0a24">{{ $t('message.systemAddon') }}</van-radio>
                <van-radio name="2"  checked-color="#ee0a24">{{ $t('message.onlineWithdrawalFailed') }}</van-radio>
                <van-radio name="3"  checked-color="#ee0a24">{{ $t('message.onlinePayment') }}</van-radio>
                <van-radio name="4"  checked-color="#ee0a24">{{ $t('message.quickDeposit') }}</van-radio>
                <van-radio name="5"  checked-color="#ee0a24">{{ $t('message.genDeposit') }}</van-radio>
                <van-radio name="6"  checked-color="#ee0a24">{{ $t('message.rechargeCardDeposit') }}</van-radio>
            </van-radio-group>
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

export default class AccountChangeStatemantType extends Vue{
    private pageTitle?: any = this.$t('message.accChangeType');
    private radio?: any = 1;
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
    .content .van-radio {
        margin: 10px;
    }
</style>