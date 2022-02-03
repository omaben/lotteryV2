<template>
    <div class="online-recharge">
        <Header :msg="$t('message.onlinePayment')" :back="true" :leftText="$t('message.back')"/>
        <div class="rb-content">
            <!-- <div class="top-label">
                <span>哈哈哈</span>
            </div> -->
            <div class="payment-method van-hairline--bottom">
                <div class="block-title">
                  <span>{{ $t('message.paymentMethod') }}:</span>
                </div>
                <div class="payment-method-group">
                  <div
                    class="payment-item"
                    v-for="(paymentItem,paymentKey) in paymentList"
                    :key="paymentKey"
                    @click="changePaymentItem(paymentKey)"
                    :class="{'active-payment': activePaymentItem === paymentKey}">
                    <van-image width="25" height="25" fit="contain"
                      :src="paymentItem.name ? require('@/assets/deposit/'+$t(`message['${paymentItem.name}-icon']`)+'.png') : ''" />
                    <span>{{ $t(`message['${paymentItem.name}']`) }}</span>
                  </div>
                </div>
            </div>
            <div class="payment-channel">
                <div class="block-title">
                  <span>{{ $t('message.paymentChannel') }}:</span>
                </div>
                <div class="payment-channel-group">
                  <div
                    class="payment-channel-item"
                    v-for="(channelItem, channelKey) in paymentChannelList"
                    :key="channelKey"
                    @click="changePaymentChannelItem(channelKey)"
                    :class="{'active-channel-payment': activePaymentChannelItem === channelKey}">
                    <span>{{ $t(`message['${channelItem.name}']`) }}</span>
                  </div>
                </div>
            </div>
            <div class="recharge-amount">
                <div class="block-title">
                  <span>{{ $t('message.rechargeAmount') }}: {{ currAmount }}</span>
                </div>
                <div class="recharge-group">
                  <div class="amount-list">
                    <div
                      class="amount-item"
                      v-for="(amountItem, amountKey) in amountList"
                      :key="amountKey"
                      @click="changeAmountItem(amountKey)"
                      :class="{'active-amount': activeAmountItem === amountKey}">
                      <span>{{ amountItem + $t('message.yuan') }}</span>
                    </div>
                  </div>
                  <div class="red-text">
                      <p>{{ $t('message.tips') }}: {{ $t('message.onlineRechargeTips') }}</p>
                      <p>{{ $t('message.tips') }}: {{ $t('message.onlineRechargeTips2') }}</p>
                      <van-button
                        @click="recharge()"
                        :class="'theme-button-color'"
                        class="submit-btn"
                        type="danger">{{ $t('message.confirmSubmission') }}</van-button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

import {RechargeClassificationCoreService} from "@/core/RechargeCore/Service/RechargeClassificationCoreService";
import {RechargeClassificationSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationSearchCoreMessage";
import {RechargeChannelCoreService} from "@/core/RechargeCore/Service/RechargeChannelCoreService";
import {RechargeChannelSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelSearchCoreMessage";

@Component({
    components: {
        Header,
    }
})
export default class OnlineRecharge extends Vue {
    private activePaymentItem: any = 0;
    private activePaymentChannelItem: any = 0;
    private activeAmountItem: any = 0;
    private currAmount: any = '0';
    private paymentList: any = [
      // { name: this.$t('message.payByAlipay'), icon: 'Alipay'},
      // { name: this.$t('message.wechatPay'), icon: 'Wechat'},
      // { name: this.$t('message.qqPayment'), icon: 'QQWalletH5'},
      // { name: this.$t('message.unionPayment'), icon: 'UnionPay'},
      // { name: this.$t('message.quickPayment'), icon: 'QuickPay'},
      // { name: this.$t('message.onlineBankingToPay'), icon: 'OnlineBankingToPay'},
      // { name: this.$t('message.wechatPayment'), icon: 'WechatH5'},
      // { name: this.$t('message.barcodePayment'), icon: 'BarcodePayment'},
      // { name: this.$t('message.baiduWallet'), icon: 'BaiduWallet'},
    ];
    private paymentChannelList: any = [
      // { name: this.$t('message.wanpay'), icon: ''},
      // { name: this.$t('message.qualcomPay'), icon: ''},
      // { name: this.$t('message.firstPay'), icon: ''},
      // { name: this.$t('message.wufuPay'), icon: ''},
      // { name: this.$t('message.payJubao'), icon: ''},
      // { name: this.$t('message.qualcomPay'), icon: ''},
      // { name: this.$t('message.profitPayment'), icon: ''},
      // { name: this.$t('message.jifubao'), icon: ''},
      // { name: this.$t('message.beibeiPay'), icon: ''},
      // { name: this.$t('message.wufuPay'), icon: ''},
      // { name: this.$t('message.nineKPayment'), icon: ''},
      // { name: this.$t('message.nineKPayment'), icon: ''},
    ];
    private amountList: any = [
      '10',
      '20',
      '50',
      '100',
      '200',
      '500',
      '1000',
    ];

    private changePaymentItem(index: any) {
      this.activePaymentItem = index;
      this.RechargeChannel(this.paymentList[index].id);
    }

    private changePaymentChannelItem(index: any) {
      this.activePaymentChannelItem = index;
    }

    private changeAmountItem(index: any) {
      this.currAmount = this.amountList[index];
      this.activeAmountItem = index;
    }

    /*
      * @Author: keanu 
      * @LastAuthor: null
      * @Param null
      * @Return array || []
      * @Date: 2021-04-14 11:10:56
      * @Description: get recharge classification data
    */
    private RechargeClassification() {
      let params: any = new RechargeClassificationSearchCoreMessage();
      RechargeClassificationCoreService.Search(params).then((data: any) => {
        this.paymentList = data;
        this.RechargeChannel(this.paymentList[this.activePaymentChannelItem].id);
      })
    }

    /*
      * @Author: keanu 
      * @LastAuthor: null
      * @Param null
      * @Return array || []
      * @Date: 2021-04-14 11:20:12
      * @Description: get recharge channel data
    */
    private async RechargeChannel(index: any) {
      let params: any = new RechargeChannelSearchCoreMessage();
      params.equal_classifiction_rechargeChannel = index;
      await RechargeChannelCoreService.Search(params).then((data: any) => {
        this.paymentChannelList = data;
        this.activePaymentChannelItem = 0;
      })
    }

    /*
      * @Author: keanu 
      * @LastAuthor: null
      * @Param null
      * @Return array || []
      * @Date: 2021-04-14 11:54:31
      * @Description: recharge money
    */
    private recharge() {
      let temp: any = {
        
      };
    }
  
    private async created() {
      await this.RechargeClassification();
    }

    private mounted() {
      this.currAmount = this.amountList[0];
    }

}
</script>

<style lang="less" scoped>
/* Theme Change */
@import "../../../src/assets/css/onlinerecharge.less";

.online-recharge {
  background: #fff;
  margin-top: 5px;
    /* APP CONTENT */
    // .rb-content{
    //     // margin-top: 45px;
    // }
    
    button.button_submit.van-button {
      background: linear-gradient(0deg, #6c1010 0%, #fc4646 100%, #fb2360 100%);
      border: none;
    }
    .rb-content .top-label {
        padding: 10px 15px;
        filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.2));
        background-color: #000000;
        color: #fff;
        font-size: 15px;
        align-items: center;
        display: flex;
    }
    .top-label::before {
        content: '';
        display: block;
        height: 10px;
        width: 10px;
        margin-right: 10px;
        margin-left: 5px;
        background: red;
        border-radius: 50%;
    }

    .block-title {
      height: 30px;
      line-height: 30px;
      padding: 0px 15px;
      font-size: 15px;
      border-top: 1px solid rgb(233, 233, 233);
      border-bottom: 1px solid rgb(209, 209, 209);
    }

    /* PAYMENT METHOD */
    .payment-method{
        // margin: 10px;
        text-align: left;
    }

    .payment-method ::v-deep.van-image__img {
      width: 20px;
      height: 20px;
    }

    .payment-method-group {
        display: flex;
        flex-wrap: wrap;
        padding-left: 10px;
        margin-top: 5px;

        .payment-item.active-payment {
          border: 1px solid #f53939;
          position: relative;
        }

        .payment-item.active-payment::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -2px;
          height: 11px;
          width: 15px;
          background-size: contain;
        }

        .payment-item {
          border: 1px solid rgb(209, 209, 209);
          width: calc(33.3333% - 19px);
          margin: 0px 10px 5px 0px;
          font-size: 10px;
          font-weight: 600;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: 4px;
          overflow: hidden;
          padding: 0px 3px;
          .van-image {
            margin-right: 3px;
            display: flex;
            align-items: center;
          }
        }

        .payment-item img {
          margin-right: 5px;
        }

    }
    .payment-method-button {
        padding: 6px;
        border: 2px solid grey;
        border-radius: 5px;
        margin: 2px 7px;
    }

    /* PAYMENT CHANNEL */
    .payment-channel {
        text-align: left;
        // margin: 10px;
    }
    .payment-channel-group {
        display: flex;
        flex-wrap: wrap;
        padding-left: 10px;
        margin-top: 5px;

        .payment-channel-item.active-channel-payment {
          border: 1px solid #f53939;
          position: relative;
        }

        .payment-channel-item.active-channel-payment::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -2px;
          height: 11px;
          width: 15px;
          background-size: contain;
        }

        .payment-channel-item {
          border: 1px solid rgb(209, 209, 209);
          width: calc(33.3333% - 12px);
          margin: 0px 10px 5px 0px;
          font-size: 10px;
          font-weight: 600;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          overflow: hidden;
        }


    }
    .payment-channel-button {
        padding: 6px 8px;
        border: 2px solid grey;
        border-radius: 5px;
        margin: 2px 5px;
    }

    /* RECHARGE AMOUNT  */
    .recharge-amount {
        text-align: left;
    }
    .recharge-group {
        background-color: #F2F2F9;
        padding-bottom: 30px;

        .amount-list {
          display: flex;
          flex-wrap: wrap;
          padding-left: 10px;
          padding-top: 5px;
        }

        .amount-item.active-amount {
          border: 1px solid #f53939;
          position: relative;
        }

        .amount-item.active-amount::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -2px;
          height: 11px;
          width: 15px;
          background-size: contain;
        }

        .amount-item {
          border: 1px solid rgb(209, 209, 209);
          width: calc(25% - 12px);
          margin: 0px 10px 10px 0px;
          font-size: 14px;
          font-weight: 600;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          overflow: hidden;
        }

    }
    .recharge-button {
        padding: 6px 8px;
        border: 2px solid grey;
        border-radius: 5px;
        margin: 2px 0;
    }

    .red-text > p {
        color: #e04f4f;
        margin: 5px;
        font-size: 16px;
    }

    .red-text p:last-of-type{
        font-size: 12px;
    }

    .submit-btn {
        display: block;
        margin: 15px auto 10px;
        width: 90%;
        text-align: center;
        filter: drop-shadow(3.536px 3.536px 4px rgba(0,0,0,0.4));
        background: linear-gradient(0deg, #e04f4f 0%, #fc8686 100%);
        border: none;
    }
}  
</style>