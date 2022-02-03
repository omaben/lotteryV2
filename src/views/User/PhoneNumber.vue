<template>
  <div class="phone-number">
    <Header
      :msg="$t('message.mobilePhoneNumber')"
      :leftText="$t('message.back')"
      :back="true"
    />
    <div class="phone-number-content">
      <div class="input input-top">
        <van-cell center :title="$t('message.mobilePhoneNumber')">
          <template #label>
            <van-field
              v-model="phoneNumber"
              type="text"
              label=""
              :placeholder="$t('message.mobilePhoneNumberPlaceholder')"
            />
          </template>
        </van-cell>
      </div>
      <div class="row">
        <div class="input">
          <van-cell center :title="$t('message.phoneVerificationCode')">
            <template #label>
              <van-field
                v-model="code"
                type="number"
                label=""
                :placeholder="$t('message.phoneVerificationCodePlaceholder')"
              />
            </template>
          </van-cell>
        </div>
        <div class="button">
          <van-button
            @click="getVerificationCode"
            type="primary"
            :class="'theme-button-color-small'"
            class="button_submit"
            :disabled="!showGetVerificationCodeBtn"
            >{{
              showGetVerificationCodeBtn
                ? $t("message.getVerificationCode")
                : $t("message.resendAfter", { secondes: intervalAmount })
            }}</van-button
          >
          <van-popup
            :style="{ width: '80%', padding: '10px 20px' }"
            v-model="showPoup"
          >
            <p>{{ popupMessageContent }}</p>
            <van-button @click="hidePopup" type="primary" class="theme-button-color-small button_submit">{{
              $t("message.cancel")
            }}</van-button>
          </van-popup>
        </div>
      </div>
    </div>
    <van-cell center title class="footer_condition">
      <template #title>
        <!-- 
        /*
        * @Author: chase 
        * @LastAuthor: null
        * @Param null
        * @Return null
        * @Date: 2021-04-13
        * @Description: change button position
        */ -->
        <van-button
          @click="updatePhone"
          type="primary"
          :class="'theme-button-color'"
          class="button_submit confirm-message"
          :disabled="!showConfirmSubmissionBtn"
          >{{ $t("message.confirmSubmission") }}</van-button
        >
        <p class="safetyMessage">
          {{ $t("message.forSafety")
          }}<span>{{ $t("message.contactCustomerService") }}</span>
        </p>
      </template>
    </van-cell>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";
import { UserInfoCoreService } from "@/core/UserCore/Service/UserInfoCoreService";
import { UserInfoUpdateCoreMessage } from "@/core/UserCore/Message/UserInfoUpdateCoreMessage";

import { Toast } from "vant";
import { Dialog } from "vant";
import { validators } from "@/utils/validators";

@Component({
  components: {
    Header,
  },
})
export default class PhoneNumber extends Vue {
  private patern: any = "";
  private phoneNumber?: any = "";
  private code?: any = "";
  private correctCode: any = "";
  private showGetVerificationCodeBtn: boolean = true;
  private initialIntervalAmount: number = 39;
  private intervalAmount: number = 0;
  private showPoup: boolean = false;
  private popupMessageContent: any = "";
  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: object || {}
   * @Date: 2021-04-14 09:41:55
   * @Description: Get current user info
   */
  get userDetails() {
    let item: any = localStorage.getItem("UserInfo");
    item = JSON.parse(item);
    return item;
  }

  get showConfirmSubmissionBtn() {
    return this.code !== "" && this.phoneNumber !== "";
  }

  /*
   * @Author: keanu
   * @LastAuthor: keanu
   * @Param: null
   * @Return: null
   * @Date: 2021-04-14 10:20:12
   * @Description: update phone number
   */
  private updatePhone() {
    if (this.phoneNumber == "") {
      Toast(this.$t("message.phoneCantEmpty"));
    } else if (this.code == "") {
      Toast(this.$t("message.phoneVerificationCodePlaceholder"));
    } else {
      if (this.code.toString() !== this.correctCode.toString()) {
        this.showPoup = true;
        this.popupMessageContent = this.$t("message.verificationCodeError");
      } else if (validators.checkMobile(this.phoneNumber)) {
        let params: any = new UserInfoUpdateCoreMessage();
        params.equal_id_userInfo = this.userDetails.id;
        params.tel = this.phoneNumber;
        UserInfoCoreService.Update(params).then((data: any) => {
          Dialog.alert({
            message: this.$t("message.bindPhone") as any,
            confirmButtonText: this.$t("message.confirm") as any,
          }).then(() => {
            this.$router.back();
          });
        });
      } else {
        Toast.fail(this.$t("message.validPhone"));
      }
    }
  }

  private setCounterDown() {
    this.showGetVerificationCodeBtn = false;
    this.intervalAmount = this.initialIntervalAmount;
    var Countdown = setInterval(() => {
      this.intervalAmount--;
      if (this.intervalAmount === 0) {
        clearInterval(Countdown);
        this.showGetVerificationCodeBtn = true;
      }
    }, 1000);
  }

  private getVerificationCode() {
    this.setCounterDown();
    // get code from api
    this.correctCode = "0000";
  }

  private hidePopup() {
    this.showPoup = false
    this.code = ''
  }
}
</script>
<style scoped lang="less">
/* Theme Change */
@import "../../../src/assets/css/LotteryPersonal.less";
.phone-number-content {
  background: #fff;
  padding: 0px 10px;
  width: 90%;
  margin: 10px auto;
}

.phone-number-content .input-top {
  border-bottom: 1px solid #d8dade;
  padding: 5px 0px;
}

.phone-number-content .input .van-cell {
  padding: 0px;
  text-align: left;
}

.phone-number-content .row {
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
}

.phone-number-content .row > div {
  flex: 1;
}

.phone-number-content .row .button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.phone-number-content .row .button .van-button {
  margin-bottom: 0px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  padding: 0px 10px;
}

/*
* @Author: chase 
* @LastAuthor: null
* @Param null
* @Return null
* @Date: 2021-04-13
* @Description: fix position for safety message
*/
.safetyMessage {
  padding-top: 20px;
}

.footer_condition {
  font-size: 13px;
  padding: 17px 10px 0px;
}

.footer_condition .confirm-message {
  width: 90%;
  height: 45px;
}

.footer_condition .van-cell__title p {
  margin: 0px;
  line-height: 15px;
}
</style>