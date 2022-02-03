<template>
  <div class="deposit">
    <Header :msg="pageTitle" :back="true" :leftText="$t('message.back')" :HomePage="false" :iconRight="''"/>
    <div class="page-content">
      <div class="page-title">
        {{ $t('message.pleaseSelectPaymentMethod') }}
      </div>
      <van-grid :border="false" :column-num="4" :clickable="false" class="bank-details-wrap">
        <van-grid-item
          class="wrapper"
          v-for="(item, index) in bankDetails"
          :key="index"
          @click="selectBank(index)"
          :class="{'active':currBankIndex === index}">
          <van-image width="25px" height="25px" fit="contain"
            :src="item.name ? require('@/assets/deposit/'+$t(`message['${item.name}-icon']`)+'.png') : ''" />
          <span class="label">{{$t(`message['${item.name}']`)}}</span>
        </van-grid-item>
      </van-grid>
      <div class="page-title">
        {{ $t('message.selectBank') }}
      </div>
      <van-cell @click="showBankPopup = true" class="sb-wrap">
        <template #right-icon>
            <!-- <van-image src="" class="bank-icon"/> -->
            <van-field
              readonly
              clickable
              :value="bankName"
              @click="showBankPopup = true"
              class="bank-name"
            />
            <van-icon name="arrow" class="arrow" />
        </template>
      </van-cell>
      <van-action-sheet v-model="showBankPopup" class="select-bank">
        <van-picker
          show-toolbar
          :title="$t('message.pleaseSelectBank')"
          :columns="columns"
          @cancel="showBankPopup = false"
          @change="onChange"
          :cancel-button-text="$t('message.cancel')"
          :confirm-button-text="$t('message.confirm')"
        />
      </van-action-sheet>
      <div class="page-title">
        {{ $t('message.depositAmount') }}
      </div>
      <div class="deposit-wrap">
        <div class="input-wrap">
          <span>¥</span>
          <!-- 
          /*
            * @Author: chase 
            * @LastAuthor: none
            * @Param null
            * @Return null
            * @Date: 2021-04-10 
            * @Description: add validation, only numbers input
          */ -->
          <van-field
            v-model="amount"
            :value="amount"
            class="amount"
            type="number"
            :placeholder="$t('message.pleaseEnterDepositAmount')"
            :rules="[{ required: true, message: $t('message.pleaseEnterDepositAmount') }]"
          />
        </div>
        <van-grid :border="false" :column-num="5" :clickable="false" class="amount-details">
          <van-grid-item
            class="wrapper-yen"
            v-for="(item, index) in depositAmounts"
            :key="index"
            @click="selectAmount(item)">
            ¥<span class="label">{{item}}</span>
          </van-grid-item>
        </van-grid>
      </div>
      <van-button
        @click="deposit()"
        :class="'theme-button-color'"
        class="deposit-btn"
        type="default">{{ $t('message.depositNow') }}</van-button>
    </div>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";
import { Toast } from 'vant';
import {RechargeClassificationCoreService} from "@/core/RechargeCore/Service/RechargeClassificationCoreService";
import {RechargeClassificationSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationSearchCoreMessage";

@Component({
  components: {
    Header
  }
})
 
export default class Deposit extends Vue {
  private currBankIndex: number = 0;
  private showBankPopup?: Boolean = false;
  private pageTitle?: any = this.$t('message.deposit');
  private bankName?: any = this.$t('message.bankName');
  private amount?: any = ''
  private bankDetails?: any = [
    // { img: 'OnlineBankingToPay', label: this.$t('message.onlineBankingToPay') },
    // { img: 'BankCardTransfer', label: this.$t('message.bankCardTransfer') },
    // { img: 'Alipay', label: this.$t('message.alipay') },
    // { img: 'UnionPay', label: this.$t('message.unionPay') },
    // { img: 'WechatH5', label: this.$t('message.wechat') },
    // { img: 'Wechat', label: this.$t('message.wechatPay') },
    // { img: 'QQWalletH5', label: this.$t('message.hqWallet') },
    // { img: 'QuickPay', label: this.$t('message.quickPayment') },
    // { img: 'AlipayBarCode', label: this.$t('message.alipayScanCode') },
    // { img: 'AlipayH5', label: this.$t('message.alipayH5') },
  ]
  private depositAmounts?: any = [
    '107',
    '502',
    '1008',
    '2001',
    '4999'
  ]

  private columns?: any = [
    this.$t('message.constructionBank'), 
    this.$t('message.chinaMerchantsBank'), 
    this.$t('message.icbc'), 
    this.$t('message.abc'), 
    this.$t('message.bankOfChina')
  ]

  private selectBank(index: number) {
    this.currBankIndex = index;
  }

  private selectAmount(val: any) {
    this.amount = val;
  }
  private onChange(picker:any, value:any, index:any) {
    console.log(`Value: ${value}, Index: ${index}`)
    this.bankName = value
    this.showBankPopup = false
  }

  private onSelect(item:any) {
    this.showBankPopup = false;
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
        this.bankDetails = data;
      })
    }

    private deposit() {
      if (this.amount == '') {
        Toast(this.$t('message.pleaseEnterDepositAmount'));
      } else {
        // deposit API
      }
    }
    private async created() {
      await this.RechargeClassification();
    }

}
</script>

<style lang="less" scoped>
/* Theme Change */
@import "../../../src/assets/css/deposit.less";

.deposit{
  .page-content {
    background: #fff;
  }
  .page-title{
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .bank-details-wrap {
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
    .label {
      font-size: 12px;
    }
  }
  .van-image__error, .van-image__loading{
    position: relative;
  }
  .van-grid-item {
    // height: 100%;
    height: auto;
    padding-bottom: 5px;
    ::v-deep.van-grid-item__content {
      border: 1px solid #eee;
      border-radius: 5px;
      margin: 5px 3.5px;
      padding: 5px 2px;
    }
  }
  ::v-deep .van-grid-item.active .van-grid-item__content{
    position: relative;
  }
  .van-picker__confirm {
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
  }
  .select-bank {
    border-radius: 0;
    .van-picker__toolbar {
      border-bottom: 1px solid #eee;
      flex-direction: row-reverse;
    }
  }
  .sb-wrap{
    .van-cell__value {
      display: flex;
      border-radius: 5px;
    }
    .van-image,
    .van-field {
      padding: 5px;
      background: #f2f4f8;
    }
    .arrow {
      display: flex;
      align-items: center;
      background: #f2f4f8;
      padding: 5px;
    }
  }
  .deposit-wrap {
    padding-bottom: 40px;
    .amount-details {
      padding: 3px 6px;
      display: flex;
    }
    .input-wrap {
      display: flex;
      padding: 15px 0;
      justify-content: center;
      align-items: center;
      span {
        font-size: 40px;
      }
      > .van-cell {
        width:  80%;
        input {
          font-size: 13px;
        }
      }
    }
    .wrapper > div {
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.1);
      span {
        padding-left: 5px;
        font-size: 13px;
      }
    }
    .wrapper-yen{
       > div {
        display: flex;
        flex-direction: row;
        padding: 1px 0;
        box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.1);
        span {
          padding-left: 5px;
          font-size: 13px;
        }
      }
      ::v-deep.van-grid-item__content{
        padding: 5px 6px;
        margin: 2px 2px;
        display: inline;
        /* border: 1px solid; */
        color: black;
        // filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.2));
      }
    }
    
  }
  .deposit-btn {
    width: 90%;
    background-image: linear-gradient(0deg, #df4f4f 0%, #fc8686 100%);
    color: #fff;
    border-radius: 8px;
    margin-bottom: 20px;
  }
}
</style>