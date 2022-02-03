<template>
  <div class="rg-register-agent">
    <Header :msg="pageTitle" :back="true" :HomePage="false" :iconRight="''"/>
    <div class="page-content">
      <div>
        <div class="rg-wrapper">
          <van-form @submit="onSubmit" class="rg-reg-form">
            <div class="form-group">
              <div class="rg-heading">{{ $t('message.accInfo') }}</div>
              <div class="rg-form-group">
                <label>
                  <span>{{ $t('message.proxyAcc') }}：</span>
                </label>
                <van-field
                  v-model="account.value"
                  type="input"
                  name="vAccount"
                  :rules="[{ validator: vAccount, message: $t('message.enterCorrectAcc') }]"
                />
              </div>
              <div class="rg-form-group">
                <label>
                  <span>{{ $t('message.loginPass') }}：</span>
                </label>
                <van-field
                  v-model="password.value"
                  type="password"
                  name="vPassword"
                  :rules="[{ validator: vPassword, message: $t('message.mustLetterNumber') }]"
                />
              </div>
              <div class="rg-form-group">
                <label>
                  <span>{{ $t('message.confirmPass') }}：</span>
                </label>
                <van-field
                  v-model="confirmPassword.value"
                  type="password"
                  name="vConfirmPassword"
                  :rules="[{ validator: vConfirmPassword, message: $t('message.mustLetterNumber') }]"
                />
              </div>
              <div class="rg-heading acct-info">{{ $t('message.userInfo') }}</div>
              <div>
                <div class="rg-form-group">
                  <label>
                    <span>{{ $t('message.actualName') }}：</span>
                  </label>
                  <van-field
                    v-model="name.value"
                    type="string"
                    name="vName"
                    :rules="[{ validator: vName, message: $t('message.validationDesc') }]"
                  />
                </div>
              </div>
              <div>
                <div class="rg-form-group">
                  <label>
                    <span>{{ $t('message.mobilePhoneNumber') }}：</span>
                  </label>
                  <van-field
                    v-model="phoneNumber.value"
                    type="tel"
                    name="vNumber"
                    :rules="[{ validator: vNumber, message: 'Wrong Number' }]"
                  />
                </div>
              </div>
              <div>
                <div class="rg-form-group">
                  <label>
                    <span>{{ $t('message.mailbox') }}：</span>
                  </label>
                  <van-field
                    v-model="emailAddress.value"
                    type="input"
                    name="vEmail"
                    :rules="[{ validator: vEmail, message: 'Wrong Email' }]"
                  />
                </div>
              </div>
              <div>
                <div class="rg-form-group">
                  <label>
                    <span>QQ：</span>
                  </label>
                  <van-field
                    v-model="qq.value"
                    type="input"
                    name="vQQ"
                    :rules="[{ validator: vQQ, message: $t('message.qqIsIllegal') }]"
                  />
                </div>
              </div>
              <div class="rg-heading acct-info">{{ $t('message.bankInfo') }}</div>
              <div>
                <div class="rg-form-group">
                  <label>
                    <span>{{ $t('message.payoutBank') }}：</span>
                  </label>
                  <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="value"
                    :placeholder="$t('message.selectBank')"
                    @click="showPicker = true"
                  />
                  <van-popup v-model="showPicker" position="bottom">
                    <van-picker
                      show-toolbar
                      :columns="columns"
                      @confirm="onConfirm"
                      @cancel="showPicker = false"
                      :cancel-button-text="$t('message.cancel')"
                      :confirm-button-text="$t('message.confirm')"
                    />
                  </van-popup>
                </div>
                <div class="rg-form-group">
                  <label>
                    <span>{{ $t('message.bankAcc') }}：</span>
                  </label>
                  <van-field
                    v-model="bankCardNumber.value"
                    type="input"
                    name="vBankCardNumber"
                    :rules="[{ validator: vBankCardNumber, message: 'Wrong Bank Card Number' }]"
                  />
                </div>
                <div class="rg-form-group">
                  <label>
                    <span>{{ $t('message.bankAddressLabel') }}：</span>
                  </label>
                  <van-field
                    v-model="bankAddress.value"
                    type="input"
                    name="vBankAddress"
                    :rules="[{ validator: vBankAddress, message: 'Wrong Bank Address' }]"
                  />
                </div>
              </div>
            </div>
          </van-form>
          <van-form>
            <div class="rg-reg-btn">
              <van-button
                @click="goPage('ProxyReview')"
                class="rg-submit-btn"
                >{{ $t('message.becomeAnAgent') }}</van-button
              >
            </div>
            <div class="rg-existing">
              <p>
                {{ $t('message.alreadyHaveAcc') }}
                <span class="rg-login">{{ $t('message.signInNow') }}!</span>
              </p>
            </div>
          </van-form>
        </div>
      </div>
    </div>
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

export default class RegisterAgent extends Vue {
  private pageTitle?: any = this.$t('message.agencyCenter');
  private value?: any = '';
  private columns?: any = [
    this.$t('message.constructionBank'), 
    this.$t('message.chinaMerchantsBank'), 
    this.$t('message.icbc'), 
    this.$t('message.abc'), 
    this.$t('message.bankOfChina')
  ];
  private showPicker?: Boolean = false
  private account?: any = {
    value: ""
  }
  private password?: any = {
    value: ""
  }
  private confirmPassword?: any = {
    value: ""
  }
  private name?: any = {
    value: ""
  }
  private phoneNumber?: any = {
    value: "",
  }
  private qq?: any = {
    value: "",
  }
  private emailAddress?: any = {
    value: "",
  }
  private selectBank?: any = {
    value: "",
    data: [],
  }
  private bankCardNumber?: any = {
    value: ""
  }
  private bankAddress?: any = {
    value: ""
  }

  private vAccount(val:any) {
    return /^[a-zA-Z][0-9a-zA-Z]{3,14}$/;
  }

  private vPassword(val:any) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
  }

  private vConfirmPassword(val:any) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
  }

  private vName(val:any) {
    return /^[\u4E00-\u9FA5\uF900-\uFA2D|·]+$/;
  }

  private vNumber(val:any) {
    return /^1[3456789]\d{9}$/;
  }

  private vQQ(val:any) {
    return /^[1-9][0-9]{5,10}$/;
  }

  private vEmail(val:any) {
    return undefined;
  }

  private vSelectBank(val:any) {
    return undefined;
  }

  private vBankCardNumber(val:any) {
    return undefined;
  }

  private vBankAddress(val:any) {
    return undefined;
  }

  private onConfirm(value:any) {
    this.value = value;
    this.showPicker = false;
  }

  private onSubmit(values:any) {
    console.log('submit', values);
  }

  private goPage(name: string) {
    this.$router.push({name: name});
  }
};
</script>

<style lang="less">
.rg-register-agent {
  padding-top: 50px;
  .page-content {
    background-image: url("../../assets/agent/reg-agent-bg.png");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    > div {
      padding-bottom: 10px;
    }
  }

  .rg-wrapper {
    margin:15px 25px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 5px;
  }
  
  .rg-reg-form {
    color: #363636;
    font-size: 12px;
    line-height: 8px;
    letter-spacing: 1px;
    padding: 0px 10px;
    .acct-info {
      margin-top: 20px;
    }
    .border-bottom-1px::after {
      border-bottom: 1.5px solid #363636;
    }
  }

  .rg-form-group {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #363636;
    height: 40px;
    font-size: 12px;
    margin: 5px auto 7px;
    .van-field {
      position: relative;
      width: 70%;
      background: transparent;
    }
    label {
      padding-left: 5px;
      white-space: pre;
    }
  }

  .rg-select-bank {
    width: 80%;
  }

  .rg-heading {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    margin: 15px 0px 5px 10px;
    padding-top: 5px;
    background: linear-gradient(to top, #fc9e19 0%, #ec1c1c 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 14px;
  }

  .rg-reg-btn {
    border-radius: 3px;
    margin: 15px 0px 10px;
    .rg-submit-btn {
      padding: 0;
      background-image: linear-gradient(180deg, #2797ff 30%, #3b60f3 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      border: none;
      width: 90%;
      color: #fff;
      height: 50px;
      margin: 0 auto;
    }
  }

  .rg-existing {
    margin: 30px 20px 0;
    padding-bottom: 5px;
    text-align: right;
    font-size: 11px;
    line-height: 8px;
    letter-spacing: 1px;
    .rg-login{
      color: #ef3030;
    }
  }

  .form-group {
    padding-bottom: 10px;
    padding-toP: 10px;
  }

  .van-ellipsis {
    line-height: initial;
  }
}
</style>
