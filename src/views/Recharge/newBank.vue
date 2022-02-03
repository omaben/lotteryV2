<template>
  <div class="main-detail-recharge">
    <Header :msg="$t('message.bindBankCard')" :leftText="$t('message.back')" :back="back" />
    
    <van-form @submit="onSubmit">
      
      
      <van-cell center title class="top_user">
        <template #right-icon> </template>
        <template #title>
          <van-field
            v-model="depositName"
            :label="$t('message.cardHolder') + ': '" 
            :placeholder="$t('message.enterName')"
            :rules="[{ required: true }]"
          />
        </template>
      </van-cell>
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
        <template #right-icon> </template>
        <template #title>
          <van-field
            v-model="BankName"
            :label="$t('message.bankAccount') + ': '" 
            :placeholder="$t('message.enterName')"
            :rules="[{ required: true }]"
          />
        </template>
      </van-cell>
      <van-cell center title class="top_user">
        <template #right-icon> </template>
        <template #title>
          <van-field
            v-model="bankAddress"
            :label="$t('message.bankAddress') + '：'"
            :placeholder="$t('message.bankAddress')"
            :rules="[{ required: true }]"
          />
        </template>
      </van-cell>
     
      <div class="button_visa_detail">
        <van-button :class="'theme-button-color'" native-type="submit" type="danger" block
          >{{ $t('message.confirmSubmission') }}</van-button
        >
      </div>
    </van-form>
    
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from 'vue-property-decorator'
import { Toast } from 'vant'
import {AccountInfoCoreService} from "@/core/AccountCore/Service/AccountInfoCoreService";
import {AccountInfoInsertCoreMessage} from "@/core/AccountCore/Message/AccountInfoInsertCoreMessage";
@Component({
  components: {
    Header,
  },
})
export default class newBank extends Vue {
  private back: boolean = true
  private accountInfo: any = {};
  private bankCardNumber: string = ''
  private BankName: string = ''
  private bankAddress: string = ''
  
  private depositName: string = ''
  private transferMethod: string = ''
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
    let params = new AccountInfoInsertCoreMessage()
    params.bankCardNum=this.bankCardNumber
    params.name=this.depositName
    params.bankAddress=this.bankAddress
    params.bankName=this.BankName
    params.userInfo=this.userDetails.id;
    AccountInfoCoreService.Insert(params).then((data: any) => {
      this.goPage('Recharge')
    })
   
  }
  private goPage(name: string) {
    this.$router.push(
      {
        name: name,
        
      }
    );
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
  private async DetailRechargeInfo() {
    await this.$http.get(this.$api.AccountInfo)
      .then((res: any) => {
       this.visaInfo = res.data.data;
       console.log(this.visaInfo)
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  
  get userDetails() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  
  private created () {
    // this.DetailRechargeInfo();
    
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
  display: flex;

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

  ::v-deep.info_visa_card .van-cell {
    background: transparent;
    padding: 0;
    text-align: left;
    color: #fff;
    margin-bottom: 4px;
  }
  ::v-deep.info_visa_card .van-cell__value {
    background: transparent;
    padding: 0;
    text-align: left;
    color: #fff;
    margin-bottom: 4px;
    margin-left: -100px;
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
    width: 100%;
  }

  .top_user ::v-deep.van-cell__title p span {
    color: #c1c1c1;
  }

  .top_user::after {
    display: block;
  }
  /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-08-04
    * @Description: Modify design for button
  */
  .van-button{
    background: linear-gradient(0deg, #df4f4f 0%, #fc8686 100%);
    border: none;
    border-radius: 5px;
    filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.4));
  }
  ::v-deep.button_visa_detail {
    width: 90%;
    margin: 33px auto 0px;
    border-radius: 5px;
    background: linear-gradient(0deg, #df4f4f 0%, #fc8686 100%);
    border: none;
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

  /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-14
    * @Description: change width, add font size
  */
  ::v-deep.top_user .van-cell__title.van-cell__title.van-field__label {
    padding-left: 0;
    margin: 0;
    width: 35%;
    line-height: 12px;
    font-size: 13px;
  }

  .top_user .van-cell__title > div {
    margin: 0;
    color: #959595;
    text-align: left;
    padding-left: 0;
    display: flex;
    align-items: center;
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

  .van-form {
    width: 100%;
  }
}
</style>
