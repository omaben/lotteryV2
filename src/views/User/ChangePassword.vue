<template>
  <div class="main-detail-recharge">
    <Header :msg="$t('message.changePassword')" :leftText="$t('message.back')" :back="true" />
<!-- 
    /*
    * @Author: chase 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-08-04
    * @Description: create new web page Change Password
    */ -->
    <van-form @submit="changePass">
        <van-cell center title class="top_user">
          <template #right-icon> </template>
          <template #title>
            <van-field
              v-model="changeValue.currentPass"
              name="currentPass"
              :label="$t('message.oldPass') + '：'" 
              :placeholder="$t('message.oldPassLabel')"
              type="password"
              :rules="[{ required: true, message: $t('message.oldPassReq') }]"
            />
          </template>
        </van-cell>
        <van-cell center title class="top_user">
          <template #right-icon> </template>
          <template #title>
            <van-field
              v-model="changeValue.newPass"
              name="newPass"
              :label="$t('message.newPass') + '：'"
              type="password"
              :placeholder="$t('message.newPassLabel')"
              :rules="[{ required: true, message: $t('message.newPassReq') }]"
            />
          </template>
        </van-cell>
        <van-cell center title class="top_user">
          <template #right-icon> </template>
          <template #title>
            <van-field
              v-model="changeValue.confirmPass"
              name="confirmPass"
              :label="$t('message.confirmPass') + ': '" 
              :placeholder="$t('message.confirmPassLabel')"
              type="password"
              :rules="[{ required: true, message: $t('message.newConfirmPassReq') }]"
            />
          </template>
        </van-cell>
     
      <div class="button_password">
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
import { myFn } from "@/utils/fn";

@Component({
  components: {
    Header,
  },
})
export default class changePassword extends Vue {
  private changeValue:any = {
    currentPass: '',
    newPass:'',
    confirmPass:''
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-16 14:00:23
    * @Description: change withdraw password
  */
  private changePass(val: any) {
    console.log(val);
  }

  private created() {
    console.log(myFn.getCookie());
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
  ::v-deep.button_password {
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

  ::v-deep.top_user .van-cell__title.van-cell__title.van-field__label {
    padding-left: 0;
    margin: 0;
    width: 45%;
    line-height: 12px;
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
