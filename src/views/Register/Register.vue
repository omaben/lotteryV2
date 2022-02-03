<template>
  <div class="rg-register">
    <Header
      :msg="this.$t('message.registered')"
      :back="true"
      :HomePage="false"
      :iconRight="''"
      :accInfo="false"
    />
    <div class="page-content">
      <div class="theLogo">
        <img
          class="lotteryLogo"
          src="@/assets/login/lazy-panda.png"
          alt="a sample logo"
        />
        <div class="marquee-wrapper">
          <p>
            <img
              class="soundLogo"
              src="@/assets/login/sound.png"
              alt="a sound"
            />
          </p>
          <div class="marquee">
            <div class="track">
              <div class="content">
                {{ $t("message.loginGreet") }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="rg-wrapper">
          <van-form @submit="register" class="rg-reg-form">
            <div class="form-group">
              <!-- /**
                   * @Author: Chase 
                   * @LastAuthor: null
                   * @Param null
                   * @Return null
                   * @Date: 2021-04-04 18:53:09
                   * @Description: modify Register CSS and added new items in asset, added internationalize
                   */ -->
              <div class="rg-heading">{{ $t("message.accInfo") }}</div>

              <div class="rg-form-group">
                <van-field
                  :placeholder="$t('message.enterUsername')"
                  v-model="userDetail.username"
                  type="input"
                  left-icon="friends"
                  name="username"
                  :rules="[{ pattern, message: $t('message.unConsists') }]"
                />
              </div>
              <div class="rg-form-group">
                <van-field
                  :placeholder="$t('message.enterPass')"
                  v-model="userDetail.password"
                  :type="showPassword ? 'text' : 'password'"
                  left-icon="lock"
                  name="password"
                  :rules="[
                    { pattern, message: $t('message.mustLetterNumber') },
                  ]"
                >
                  <template #button>
                    <van-icon
                      :name="showPassword ? 'eye-o' : 'eye'"
                      @click="showPassword = !showPassword"
                    />
                  </template>
                </van-field>
              </div>
              <div class="rg-form-group">
                <van-field>
                  <template #input>
                    <van-radio-group
                      v-model="terms"
                      direction="horizontal"
                      icon-size="15px"
                      checked-color="#e63333"
                    >
                      <van-radio name="true">
                        {{ $t("message.iAgree") }}
                        <span
                          class="registrationAgreement"
                          @click="showAgreement = true"
                        >
                          « {{ $t("message.registrationAgreement") }} »
                        </span>
                      </van-radio>
                    </van-radio-group>
                  </template>
                </van-field>
              </div>

              <!-- <div class="rg-form-group">
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
              </div> -->
            </div>
            <div class="theButton">
              <div class="rg-reg-btn">
                <van-button
                  :disabled="!(terms === 'true')"
                  :class="'theme-button-color'"
                  class="rg-submit-btn"
                >
                  {{ $t("message.becomeAnAgent") }}</van-button
                >
              </div>
              <div class="rg-existing">
                <p>
                  {{ $t("message.alreadyHaveAcc") }}
                  <span
                    class="rg-login"
                    @click="$router.push({ name: 'Login' })"
                    >{{ $t("message.signInNow") }}!</span
                  >
                </p>
              </div>
            </div>
          </van-form>
          <captcha
            :show-captcha="showCaptcha"
            @onSuccess="onCaptchaSuccess"
            @onFailed="onCaptchaFailed"
          />
        </div>
      </div>
    </div>
    <Agreement :show="showAgreement" @closed="onAgreementClosed" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import * as EmailValidator from "email-validator";
import { Dialog, Toast } from "vant";

import { UserService } from "@/application/User/Service/UserService";
import { UserRegisterMessage } from "@/application/User/Message/UserRegisterMessage";

import Captcha from "@/components/Captcha.vue";
import Agreement from "@/components/Agreement.vue";
@Component({
  components: {
    Header,
    Captcha,
    Agreement,
  },
})
export default class Register extends Vue {
  private pattern: any = /^[a-zA-Z][0-9a-zA-Z]{3,14}$/;
  private showCaptcha: boolean = false;
  private CaptchaSucces: boolean = false;
  private showAgreement: boolean = false;
  private userDetail: any = {
    introducer: "",
    username: "",
    password: "",
  };
  private terms: boolean = false;
  private value?: any = "";
  private columns?: any = [
    this.$t("message.constructionBank"),
    this.$t("message.chinaMerchantsBank"),
    this.$t("message.icbc"),
    this.$t("message.abc"),
    this.$t("message.bankOfChina"),
  ];
  
  private showPicker?: Boolean = false;
  private showPassword: boolean = false;
  private account?: any = {
    value: "",
  };
  private password?: any = {
    value: "",
  };
  private confirmPassword?: any = {
    value: "",
  };
  private name?: any = {
    value: "",
  };
  private phoneNumber?: any = {
    value: "",
  };
  private qq?: any = {
    value: "",
  };
  private emailAddress?: any = {
    value: "",
  };
  private selectBank?: any = {
    value: "",
    data: [],
  };
  private bankCardNumber?: any = {
    value: "",
  };
  private bankAddress?: any = {
    value: "",
  };

  private vAccount(val: any) {
    if (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(val) && val != "") {
      return true;
    }
    return false;
  }

  private vPassword(val: any) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,20}$/.test(val) && val != "";
  }
  private vConfirmPassword(val: any) {
    return (
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/.test(val) &&
      val === this.password.value
    );
  }

  private vName(val: any) {
    return !/[^a-z]/i.test(val) && val != "";
  }

  private vNumber(val: any) {
    return /^[0-9]+$/.test(val) && val != "";
  }

  private vQQ(val: any) {
    return /^[1-9][0-9]{5,10}$/.test(val) && val != "";
  }

  private vEmail(val: any) {
    return EmailValidator.validate(val) && val != "";
  }

  private vSelectBank(val: any) {
    return val.length > 0;
  }

  private vBankCardNumber(val: any) {
    return val.length == 14;
  }

  private vBankAddress(val: any) {
    return val != "";
  }
  private validate(): boolean {
    if (
      this.account.value != "" &&
      this.name.value != "" &&
      this.password.value != "" &&
      this.confirmPassword.value != "" &&
      this.phoneNumber.value != "" &&
      this.qq.value != "" &&
      this.emailAddress.value != "" &&
      this.bankAddress.value != "" &&
      this.bankCardNumber.value != " "
    ) {
      return true;
    }
    return false;
  }

  private onConfirm(value: any) {
    this.value = value;
    this.showPicker = false;
  }

  private register(values: any) {
    if (this.showCaptcha && this.CaptchaSucces) {
      let params: any = new UserRegisterMessage();
      params.userName = values.username;
      params.userPassword = values.password;
      params.agencyUser = 1;

      UserService.UserRegisterMessage(params)
        .then((data: any) => {
          if (data.status == true) {
            this.userDetail.username = "";
            this.userDetail.password = "";
            Toast(data.message);
          } else {
            Toast(data.message);
          }
        })
        .finally(() => {
          this.showCaptcha = false;
        });
    } else {
      this.showCaptcha = true;
    }
  }

  private onCaptchaSuccess() {
    this.CaptchaSucces = true;
    this.register({
      username: this.userDetail.username,
      password: this.userDetail.password,
    });
  }

  private onCaptchaFailed() {
    Toast(this.$t("message.CaptchaNotValid"));
  }

  private onAgreementClosed() {
    this.showAgreement = false
  }
}
</script>

<style lang="less">
.marquee-wrapper {
  display: flex;
  width: 90%;
  margin: 0 auto;
}
.marquee {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 30px;
  overflow-x: hidden;
}

.marquee .track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.registrationAgreement {
  color: #e63333;
}

.theme-color.theme-color-classic-red .rg-register .rg-reg-btn .rg-submit-btn {
  background: linear-gradient(0deg, #d13a3a 0%, #fc4646 100%, #fd094e 80%);
  border-color: #e63333;
  border-radius: 5px;
}

.theme-color.theme-color-classic-blue .rg-register .rg-reg-btn .rg-submit-btn {
  background: linear-gradient(#197acf, #3a98ea);
  border-color: #0092e8;
}

.theme-color.theme-color-simple-platinum
  .rg-register
  .rg-reg-btn
  .rg-submit-btn {
  background: linear-gradient(#949393, #bebdbd);
  border-color: #d3d4d6;
}

.rg-register {
  .van-field__error-message {
    line-height: 12px;
  }
  // padding-top: 50px;
  .page-content {
    background: white;
    height: calc(100vh - 45px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      width: 90%;
    }
  }

  .theLogo {
    .lotteryLogo {
      height: 120px;
      width: 120px;
    }
    p {
      position: relative;
      margin-top: 0px;
      font-size: 12px;
      margin-left: 10px;
      .soundLogo {
        height: 18px;
        width: 18px;
        position: absolute;
        margin-left: -20px;
        margin-top: -3px;
      }
    }
  }
  .rg-wrapper {
    background-color: #fff;
    border-radius: 5px;
  }
  .theButton {
    margin-top: 15px;
  }

  .rg-reg-form {
    color: #363636;
    font-size: 12px;
    line-height: 8px;
    letter-spacing: 1px;
    border-radius: 5px;
    box-shadow: 1px 1px 14px -7px #484848;
    padding: 0px 10px;
    .acct-info {
      margin-top: 20px;
    }
    .border-bottom-1px::after {
      border-bottom: 1.5px solid #363636;
    }
  }

  .rg-form-group {
    .van-field__label {
      // line-height: 14px;
      font-size: 14px;
      color: #cfcfcf;
      width: auto;
      min-width: 60px;
    }
    position: relative;
    display: flex;
    align-items: center;
    // border-bottom: 1px solid #363636;
    // height: 40px;
    font-size: 12px;
    margin: 10px 0px 0px;
    height: 50px;
    .van-field {
      position: relative;
      // width: 70%;
      background: transparent;
      padding: 0px;
      height: 100%;
      color: #d4d6d6;
    }

    .van-cell::before {
      content: "";
      width: 100%;
      position: absolute;
      border-bottom: 1px solid #d4d6d6;
      top: 23px;
    }

    label {
      padding-left: 5px;
      white-space: pre;
      line-height: 12px;
    }
  }

  .rg-select-bank {
    width: 80%;
  }

  .rg-heading {
    text-align: left;
    font-size: 24px;
    // font-weight: bold;
    // margin: 15px 0px 5px 10px;
    padding-top: 10px;
    padding-bottom: 20px;
    // background: linear-gradient(to top, #fc9e19 0%, #ec1c1c 60%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    height: 14px;
  }

  .rg-reg-btn {
    border-radius: 3px;
    margin: 0px 0px 20px;
    .rg-submit-btn {
      padding: 0;
      background-image: linear-gradient(180deg, #2797ff 30%, #3b60f3 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      border: none;
      width: 100%;
      color: #fff;
      height: 40px;
      margin: 0 auto;
    }
  }

  .rg-existing {
    margin: 0px 0px 0;
    padding-bottom: 5px;
    text-align: right;
    font-size: 12px;
    line-height: 8px;
    letter-spacing: 1px;
    .rg-login {
      letter-spacing: 0.3px;
      color: #ef3030;
    }
  }

  .form-group {
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .van-ellipsis {
    line-height: initial;
  }
  .van-icon-friends,
  .van-icon-lock {
    line-height: 16px;
  }
}
</style>
