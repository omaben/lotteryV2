<template>
  <div class="main-detail-recharge">
    <Header :msg="$t('message.bankCardDetails')" :leftText="$t('message.back')" :back="back" />
    <van-cell center title class="header_visa">
      <template #right-icon>
        <van-icon name="arrow" class="arrow" />
      </template>
      <template #title>
        <p>{{ $t('message.receivingAcc') }}：{{ $t('message.beijingConstructionBank') }} <span>**** 8326</span></p>
      </template>
    </van-cell>
    <div class="visa_card">
      <img alt="user_avatar" src="@/assets/recharge/visa1.png" />
      <div class="info_visa_card">
        <h2>{{ accountInfo.bankName}}</h2>
        <van-cell
          :title= "this.$t('message.cardHolder')" :value="accountInfo.name"
        >
          <template #right-icon>
            <van-button
              type="primary"
              size="mini"
              class="dark copy-btn"
              v-on:click="copy(accountInfo.name)"
              >{{ $t('message.copy') }}</van-button
            >
          </template>
        </van-cell>
        <van-cell
          :title= "this.$t('message.bankAddress')" :value="accountInfo.bankAddress"
        >
          <template #right-icon>
            <van-button
              type="primary"
              size="mini"
              class="dark copy-btn"
              v-on:click="copy(accountInfo.bankAddress)"
              >{{ $t('message.copy') }}</van-button
            >
          </template>
        </van-cell>
        <van-cell
          :title= "this.$t('message.bankCardNo')" :value="accountInfo.bankCardNum"
        >
          <template #right-icon>
            <van-button
              type="primary"
              size="mini"
              class="dark copy-btn"
              v-on:click="copy(accountInfo.bankCardNum)"
              >{{ $t('message.copy') }}</van-button
            >
          </template>
        </van-cell>
      </div>
    </div>
    <van-form @submit="onSubmit">
      <van-cell center title class="top_user">
        <template #right-icon>
          <van-icon name="arrow" class="arrow" />
        </template>
        <template #title>
        <!-- /*
          * @Author: chase 
          * @LastAuthor: null
          * @Param null
          * @Return null
          * @Date: 2021/04/14
          * @Description: change value and label 
        */ -->
          <van-field
            v-model="transferMethod"
            readonly
            clickable
            :label="$t('message.receivingAcc') + ': '"
            :placeholder="$t('message.selectTransferMethod')"
            :rules="[{ required: true }]"
            @click="showTransferMethod = true"
          />
        </template>
      </van-cell>
      <van-cell center title class="top_user">
        <template #right-icon> </template>
        <template #title>
          <van-field
            type="digit"
            v-model="rechargeAmount"
            :label="$t('message.rechargeAmount')"
            :placeholder="$t('message.enterRechargeAmount')"
            :rules="[{ required: true }]"
          />
        </template>
      </van-cell>

      <van-cell center title class="top_user">
        <template #right-icon> </template>
        <template #title>
          <van-field
            v-model="depositName"
            :label="$t('message.depositName') + ': '" 
            :placeholder="$t('message.enterName')"
            :rules="[{ required: true }]"
          />
        </template>
      </van-cell>
      <!-- /*
        * @Author: chase 
        * @LastAuthor: null
        * @Param null
        * @Return null
        * @Date: 2021/04/10
        * @Description: made number only validation
      */ -->
      <van-cell center title class="top_user">
        <template #right-icon> </template>
        <template #title>
          <van-field
            v-model="bankCardNumber"
            :label="$t('message.bankCardNo') + '：'"
            type="number"
            :placeholder="$t('message.enterDebitCard')"
            :rules="[{ required: true }]"
          />
        </template>
      </van-cell>

      <van-cell center title class="top_user">
        <template #right-icon>
          <van-icon name="arrow" class="arrow" />
        </template>
        <template #title>
          <van-field
            readonly
            clickable
            v-model="transferBank"
            :label="$t('message.transferBank') + '：'"
            :placeholder="$t('message.selectTransferBank')"
            :rules="[{ required: true }]"
            @click="showTransferBank = true"
          />
        </template>
      </van-cell>

      <van-cell center title class="top_user">
        <template #right-icon>
          <van-icon name="arrow" class="arrow" />
        </template>
        <template #title>
          <van-field
            readonly
            clickable
            v-model="discount"
            :label="$t('message.applyDiscount') + '：'"
            :placeholder="$t('message.notParticipating')"
            :rules="[{ required: true }]"
            @click="showDiscount = true"
          />
        </template>
      </van-cell>
      <div class="button_visa_detail">
        <van-button :class="'theme-button-color'" native-type="submit" type="danger" block
          >{{ $t('message.confirmSubmission') }}</van-button
        >
      </div>
    </van-form>
    <van-popup v-model="showTransferMethod" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onTransferMethod"
        @cancel="showTransferMethod = false"
        :confirm-button-text="$t('message.confirm')"
        :cancel-button-text="$t('message.cancel')"
      />
    </van-popup>
    <van-popup v-model="showTransferBank" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirmTransferBank"
        @cancel="showTransferBank = false"
        :confirm-button-text="$t('message.confirm')"
        :cancel-button-text="$t('message.cancel')"
      />
    </van-popup>
    <van-popup v-model="showDiscount" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirmDiscount"
        @cancel="showDiscount = false"
        :confirm-button-text="$t('message.confirm')"
        :cancel-button-text="$t('message.cancel')"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from 'vue-property-decorator'
import { Toast } from 'vant'
import {AccountInfoCoreService} from "@/core/AccountCore/Service/AccountInfoCoreService";
import {AccountInfoSearchCoreMessage} from "@/core/AccountCore/Message/AccountInfoSearchCoreMessage";

@Component({
  components: {
    Header,
  },
})
export default class DetailRecharge extends Vue {
  private back: boolean = true
  private accountInfo: any = {};
  private bankCardNumber: string = ''
  private depositName: string = ''
  private transferMethod: any =  this.$t('message.beijingConstructionBank') 
  private transferBank: string = ''
  private rechargeAmount: string = ''
  private discount: string = ''
  private showDiscount: boolean = false
  private showTransferBank: boolean = false
  private showTransferMethod: boolean = false
  private columns = [this.$t('message.bankCard'), this.$t('message.alipay'), this.$t('message.Wechat')]
  /*private visaInfo?: any = [
    { label: this.$t('message.cardHolder'), val: this.$t('liErmao') },
    { label: this.$t('message.bankAddress'), val: this.$t('message.shangdiWest') },
    { label: this.$t('message.bankCardNo'), val: '8888 8888 8888 8888 8888' },
  ]*/
  private visaInfo?: any = []

  onSubmit() {
    this.$store.commit('addToBalance', Number(this.rechargeAmount))
    this.$router.go(-2)
    Toast(
      this.$t('message.transferMethod') + '：' +
        this.transferMethod +
        this.$t('message.rechargeAmount') +
        this.rechargeAmount +
        this.$t('message.depositName') + '：' +
        this.depositName +
        this.$t('message.bankCardNo') + '：' +
        this.bankCardNumber +
        this.$t('message.transferBank') + '：' +
        this.transferBank +
        this.$t('message.applyDiscount') + '：' +
        this.discount
    )
  }
  onTransferMethod(value: string) {
    this.transferMethod = value
    this.showTransferMethod = false
  }
  onConfirmDiscount(value: string) {
    this.discount = value
    this.showDiscount = false
  }
  onConfirmTransferBank(value: string) {
    this.transferBank = value
    this.showTransferBank = false
  }

  private copy(val: any) {
    const clipboard = new Vue.prototype.clipboard('.copy-btn', {
      text: () => val,
    })
    clipboard.on('success', (e: any) => {
      Toast(this.$t('message.copySuccess'))
    })
    clipboard.on('error', () => {
      Toast(this.$t('message.copyFailed'))
    })
  }

  private async AccountInfo() {
    let params: any = new AccountInfoSearchCoreMessage();
    params.equal_id_accountInfo = this.$route.params.bankid;
    await AccountInfoCoreService.Search(params).then((data: any) => {
      this.accountInfo = data[0];
      console.log(data[0])
    })
  }
  
  private created () {
    this.AccountInfo();
  }
  
}
</script>
<style lang="less" scoped>
/* Theme color */
@import "./../../assets/css/detailrecharge.less";

.main-detail-recharge {
  min-height: calc(100vh - (45px + 10px));
  background: #fff;
  padding-bottom: 10px;

  ::v-deep.info_visa_card {
    position: absolute;
    top: 10px;
    width: calc(100% - 40px);
    padding: 0px 10px;
  }

  ::v-deep.info_visa_card h2 {
    position: relative;
    text-align: left;
    width: 100%;
    left: initial;
    top: initial;
  }

  /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-12
    * @Description: fix design for Visa Card text conflict
  */
  ::v-deep.info_visa_card .van-cell {
    background: transparent;
    padding: 0;
    text-align: left;
    color: #fff;
    margin-bottom: 3px;
    font-size: 13px;
  }
  ::v-deep.info_visa_card .van-cell__value {
    background: transparent;
    padding: 0;
    text-align: right;
    color: #fff;
    margin-bottom: 4px;
    margin-left: -1px;
    margin-right: 5px;
  }

  ::v-deep.header_visa.van-cell {
    text-align: left;
    box-shadow: 0px 0px 3px 0px rgba(176, 175, 175, 0.6);
  }

  ::v-deep.header_visa.van-cell p {
    margin: 0;
  }

  ::v-deep.info_visa_card .van-cell ::after {
    display: none;
  }

  ::v-deep.info_visa_card .van-cell::after {
    opacity: 0;
  }

  .top_user {
    padding: 0px 10px 0px 13px;
  }

  .top_user ::v-deep.van-cell__title {
    padding-left: 0px;
  }

  .top_user ::v-deep.van-cell__title p span {
    color: #c1c1c1;
  }

  .top_user::after {
    display: block;
  }

  ::v-deep.button_visa_detail {
    width: 90%;
    margin: 33px auto 0px;
    border-radius: 5px;
    background: #ed5153;
    border-color: #ed5053;
    padding: 0px;
    button {
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
    }
  }

  ::v-deep.info_visa_card .van-cell button.dark.van-button {
    background: #303030;
    border-color: #303030;
  }

  ::v-deep.top_user .van-cell__title.van-cell__title.van-field__label {
    padding-left: 0;
    margin: 0;
  }

  .top_user .van-cell__title > div {
    margin: 0;
    color: #959595;
    text-align: left;
    padding-left: 0;
  }

  ::v-deep.visa_card {
    position: relative;
    padding: 10px;
    background: transparent;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
  }

  ::v-deep.visa_card img {
    width: 100%;
    box-shadow: 0px 0px 3px 0px rgba(176, 175, 175, 0.6);
    border-radius: 10px;
  }

  ::v-deep.visa_card h2 {
    position: relative;
    text-align: left;
    width: 100%;
    left: auto;
    top: auto;
    color: #fff;
    font-size: 12pt;
  }

  .visa_card h2 span {
    font-size: 7pt;
    font-weight: normal;
  }

  ::v-deep.visa_card h5 {
    position: absolute;
    top: 41px;
    left: 25px;
    color: #fff;
    font-size: 8pt;
    font-weight: normal;
  }

  ::v-deep.visa_card p {
    position: absolute;
    bottom: 15px;
    left: 25px;
    color: #fff;
  }
}
</style>
