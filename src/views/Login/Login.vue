<template>
  <div class="login">
    <Header
      :msg="$t('message.login')"
      :back="false"
      :HomePage="false"
      :showSwitchLang="true"
    />
    <div class="login-wrapper">
      <div class="form-wrapper">
        <div class="theLogo">
          <img
            class="lotteryLogo"
            src="@/assets/login/lazy-panda.png"
            alt="a sample logo"
          />
        </div>
        <!-- <p><img class="soundLogo" src="@/assets/login/sound.png" alt="a sound"> {{ $t('message.loginGreet') }} </p> -->
        <van-form @submit="login">
          <p class="sign-txt">{{ $t("message.signIn") }}</p>
          <van-field
            v-model="userDetail.username"
            :class="{ 'en-char': getLanguage == 'en' }"
            name="Username"
            left-icon="friends"
            :placeholder="$t('message.enterUsername')"
            autocomplete="false"
            :rules="[
              { pattern, required: true, message: $t('message.unConsists') },
            ]"
          />
          <van-field
            v-model="userDetail.password"
            :class="{ 'en-char': getLanguage == 'en' }"
            :type="showPassword ? 'text' : 'password'"
            name="Password"
            left-icon="lock"
            autocomplete="false"
            :placeholder="$t('message.enterPass')"
            :rules="[
              { pattern, required: true, message: $t('message.pwConsists') },
            ]"
          >
            <template #button>
              <van-icon
                :name="showPassword ? 'eye-o' : 'eye'"
                @click="showPassword = !showPassword"
              />
            </template>
          </van-field>
        </van-form>
        <captcha
          :show-captcha="showCaptcha"
          @onSuccess="onCaptchaSuccess"
          @onFailed="onCaptchaFailed"
        />
        <div class="theButtons">
          <div class="rg-reg-btn">
            <van-button
              type="info"
              :class="'theme-button-color'"
              class="rg-submit-btn"
              @click="login"
            >
              {{ $t("message.signInNow") }}
            </van-button>
          </div>
          <div class="options rg-existing">
            <router-link :to="{ name: 'Home' }" class="text-gradient">{{
              $t("message.backHome")
            }}</router-link>
            <router-link :to="{ name: 'Register' }" class="rg-login"
              >{{ $t("message.signUpNow") }}!
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import { Toast } from "vant";

import { UserService } from "@/application/User/Service/UserService";
import { UserLoginMessage } from "@/application/User/Message/UserLoginMessage";
import { myFn } from "@/utils/fn";
import Captcha from "@/components/Captcha.vue";

@Component({
  components: {
    Header,
    Captcha,
  },
})
export default class Login extends Vue {
  private pattern: any = /^[a-zA-Z][0-9a-zA-Z]{5,14}$/;
  private showCaptcha: boolean = false;
  private CaptchaSucces: boolean = false;
  private userDetail: any = {
    username: "",
    password: "",
  };
  private showPassword: boolean = false;

  get getLanguage() {
    return this.$store.state.currLang;
  }

  private checkDisabled() {
    if (
      this.userDetail.username.match(this.pattern) &&
      this.userDetail.password.match(this.pattern)
    ) {
      return false;
    } else {
      return true;
    }
  }

  private login(values: any) {
    if (this.showCaptcha && this.CaptchaSucces) {
      let params: any = new UserLoginMessage();
      params.userName = this.userDetail.username;
      params.userPassword = this.userDetail.password;

      UserService.UserLoginMessage(params)
        .then((data: any) => {
          if (data.status == true) {
            myFn.setCookie(
              this.userDetail.username,
              this.userDetail.password,
              1
            );
            localStorage.setItem("UserInfo", JSON.stringify(data.data));
            this.$router.push({ name: "Home" });
            this.$store.dispatch("setLoginStatus", true);
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
    this.login({
      username: this.userDetail.username,
      password: this.userDetail.password,
    });
  }

  private onCaptchaFailed() {
    Toast(this.$t("message.CaptchaNotValid"));
  }
}
</script>
<style lang="less" scoped>
@import "./../../assets/css/login.less";
@import "../../assets/css/themVariables.less";

/**
* @Author: Chase 
* @LastAuthor: null
* @Param null
* @Return null
* @Date: 2021-04-04 18:53:09
* @Description: modify Login CSS, added internationalize
*/
.login {
  background: #f2f4f8;
  .login-wrapper {
    // background-image: url(/img/reg-agent-bg.31212d58.png);
    // background-size: cover;
    // background-position: bottom;
    // background-repeat: no-repeat;
    height: calc(100vh - 45px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
  }

  .van-field__control {
    margin-bottom: 7px;
  }

  .form-wrapper {
    display: flex;
    width: 90%;
    flex-direction: column;
  }
  .van-field {
    color: #d4d4d4;
  }
  .form-wrapper .theLogo {
    .lotteryLogo {
      height: 120px;
      width: 120px;
    }
    color: #565656;
    font-weight: bold;
  }
  .form-wrapper p {
    position: relative;
    margin-top: 0px;
    font-size: 12px;
    margin-left: 10px;
  }
  .form-wrapper p .soundLogo {
    height: 18px;
    width: 18px;
    position: absolute;
    margin-left: -20px;
    margin-top: -3px;
  }
  .form-wrapper .van-form {
    .sign-txt {
      text-align: left;
      font-size: 24px;
    }
    padding: 5px 10px 0px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 14px -7px #484848;
    opacity: 1;
    width: 93%;
    margin-bottom: 35px;
  }
  .form-wrapper .theButton {
    margin-top: 20px;
  }

  .form-wrapper .van-form .van-cell {
    margin-bottom: 15px;
    padding: 0px;
    height: 50px;

    &:before {
      content: "";
      width: 100%;
      position: absolute;
      border-bottom: 1px solid #d4d6d6;
      top: 23px;
    }
    &::after {
      content: none;
    }
  }

  .form-wrapper .van-form .van-cell.en-char ::v-deep.van-field__label {
    width: 80px;
    color: #c4c4c4;
  }

  .form-wrapper .van-form .van-cell ::v-deep.van-field__label {
    width: 60px;
  }

  .form-wrapper .btn-login {
    margin-bottom: 20px;
  }

  .form-wrapper .options {
    text-align: right;
  }

  .form-wrapper .options > a {
    color: #565656;
    font-size: 12px;
  }

  .form-wrapper .options > a:last-child {
    margin-left: 10px;
  }

  .rg-reg-btn {
    margin-bottom: 10px;
  }
  .rg-reg-btn .rg-submit-btn {
    width: 100%;
    height: 40px;
  }
}
.round-little {
  border-radius: 5px;
}
/// Thems

.theme-color-classic-red {
  .rg-submit-btn {
    border-radius: 5px;
    background: linear-gradient(0deg, #d13a3a 0%, #fc4646 100%, #fd094e 80%);
    border: none;
  }
  .rg-login {
    color: @red-font;
  }
}
.theme-color-classic-blue {
  .rg-submit-btn {
    background: @blue-back;
    border-color: #0092e8;
  }
  .rg-login {
    color: @blue-font;
  }
}
.theme-color-simple-platinum {
  .rg-submit-btn {
    background: @silver-back;
    border-color: #d3d4d6;
  }
  .rg-login {
    color: @silver-font;
  }
}
.theme-color-noble-black-gold {
  .rg-submit-btn {
    background: @gold-back;
    border-color: #edc14b;
  }
  .rg-login {
    color: @gold-font;
  }
}
</style>
