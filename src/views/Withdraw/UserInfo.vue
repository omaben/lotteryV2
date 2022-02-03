<template>
  <div class="withdraw-user-info">
    <Header
      :msg="$t('message.userInformation')"
      :back="true"
      :leftText="$t('message.back')"
    />
    <!-- 
/*
 * @Author: chase 
 * @LastAuthor: null
 * @Param null
 * @Return null
 * @Date: 2021-07-04
 * @Description: change design for Withdrawal/UserInfo page
 */ 
 -->
    <div class="withdraw-user-info-wrapper">
      <van-cell-group>
        <van-cell title="Title" class="user-circle" icon="user-circle-o">
          <template #title>
            <span class="custom-title">
              {{ $t("message.userNickname") }}:
              {{ userData ? userData.name : "testNickName" }}
            </span>
          </template>
        </van-cell>

        <van-cell title="Title" class="manager-o" icon="manager-o">
          <template #title>
            <span class="custom-title">
              {{ $t("message.actualName") }}:
              {{ userData ? userData.name : "testName" }}
            </span>
          </template>
        </van-cell>

        <van-cell title="Title" class="phone" icon="phone">
          <template #title>
            <span class="custom-title">
              {{ $t("message.userPhone") }}:
              {{ userData ? userData.tel : "000-0000" }}
            </span>
          </template>
        </van-cell>

        <!-- <van-cell title="Title" icon="envelop-o">
          <template #title>
            <span class="custom-title">{{ $t('message.userQQ') }}: {{ '' }}</span>
          </template>
          <template #right-icon>
            <van-button type="default" size="mini">{{ $t('message.goToSet') }}</van-button>
          </template>
        </van-cell> -->

        <van-cell title="Title" class="photo-o" icon="photo-o">
          <template #title>
            <span class="custom-title">
              {{ $t("message.userWechat") }}: {{ "" }}
            </span>
          </template>
          <template #right-icon>
            <van-button type="default" size="mini">{{
              $t("message.goToSet")
            }}</van-button>
          </template>
        </van-cell>

        <van-cell title="Title" class="chat-o" icon="chat-o">
          <template #title>
            <span class="custom-title">
              {{ $t("message.userMailbox") }}: {{ "" }}
            </span>
          </template>
          <template #right-icon>
            <van-button type="default" size="mini">
              {{ $t("message.goToSet") }}
            </van-button>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/Header.vue"
import { Component, Vue } from "vue-property-decorator"
import { UserInfoSearchCoreMessage } from "@/core/UserCore/Message/UserInfoSearchCoreMessage"
import { UserInfoCoreService } from "@/core/UserCore/Service/UserInfoCoreService"

@Component({
  components: {
    Header,
  },
})
export default class UserInfo extends Vue {
  private userData?: any = {}

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-09 16:44:11
    * @Description: Get current user info
  */
  get userDetails() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  /*
    * @Author: null
    * @LastAuthor: keanu
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-09 16:46:22
    * @Description: Get user info data
  */
  private UserInfo() {
    let param = new UserInfoSearchCoreMessage()
    param.equal_id_userInfo = this.userDetails.id;
    UserInfoCoreService.Search(param).then((data: any) => {
      this.userData = data[0];
    })
  }

  private created() {
    this.UserInfo();
  }
}
</script>

<style scoped lang="less">
/* Theme color */
@import "./../../assets/css/userinfo.less";

.withdraw-user-info {
  display: flex;
  justify-content: center;

  .van-cell__left-icon {

  }
  .withdraw-user-info-wrapper{
    background-color: #fff;
    height: fit-content;
    margin-top: 10px;
    box-shadow: 1px 1px 18px -7px gray;
    border-radius: 10px;
    width: 90%;
  }
  height: calc(100vh - 45px);
  .van-cell-group {
    background: none;
  }
  .van-cell {
    line-height: 23px;
    background: none;
  }
  .user-circle i{
    color: #fe2712;
  }
  .manager-o i{
    color: #0391ce;
  }
  .phone i{
    color: #fabc02;
  }
  .photo-o i{
    color: #66b032;
  }
  .chat-o i{
    color: #3d01a4;
  }

  .van-cell__left-icon {
    font-size: 22px;
  }

  .van-cell__title {
    text-align: left;
    font-size: 14px;
    display: flex;
  }

  .van-button--mini {
    border-radius: 6px;
    font-size: 12px;
    width: auto;
  }
}
</style>
