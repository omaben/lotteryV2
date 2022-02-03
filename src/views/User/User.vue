<template>
  <div class="user">
    <Header
        :msg="$t('message.personalCenter')"
        iconRight="setting-o"
        :notifIcon="true"
        :goToURL="'Setting'"
        :showDropOut="true"
    />
    <van-cell
        center
        title
        icon
        class="top_user"
        is-link
        to="User/DetailUser"
    >
      <template #right-icon>
        <van-icon name="arrow" class="arrow"/>
      </template>
      <template #title>
        <div v-if="userData.name">
          <span>{{ userData ? userData.name : "" }}</span>
          <van-tag type="success" class="custom_info">VIP 0</van-tag>
          <!-- 
          /*
            * @Author: chase 
            * @LastAuthor: null
            * @Param null
            * @Return null
            * @Date: 2021-04-11
            * @Description: Decimal
          */ -->
          <span class="currency"> {{ '￥' + (userData.money ? userData.money : '0.00')  }}</span>
        </div>
        <div v-else>
          <span class="not-login">{{ $t('message.loginRegister') }}</span>
        </div>
      </template>
      <template #icon>
        <img alt=""
          :src="valitdateProfile(userData.avatar).length > 0
                ? require(`@/assets/images/profile/${userData.avatar}.png`)
                : require('@/assets/images/profile/default.png')"/>
      </template>
    </van-cell>
    <div class="info_user-wrapper" v-if="false">
      <!-- <van-grid
        direction="horizontal"
        :column-num="1"
        class="info_user info_user-c"
      > -->
      <!-- <van-grid-item icon text is-link to="User/Vip">
          <template #icon>
            <img alt="user_avatar" src="@/assets/user/icone9.png" />
          </template>
          <template #text>
            <h5>
              {{ $t("message.vipPrivilege") }} <br />
              <span class="tip">VIP PRIVILEGE</span>
            </h5>
          </template>
        </van-grid-item>
        <van-grid-item icon text is-link to="Redeem">
          <template #icon>
            <img alt="user_avatar" src="@/assets/user/icone8.png" />
          </template>
          <template #text>
            <h5>
              {{ $t("message.redeemPoints") }} <br /><span class="tip"
                >EXCHANGE</span
              >
            </h5>
          </template>
        </van-grid-item>
      </van-grid> -->
    </div>

    <van-grid
      class="icone_info_user user-transact-list"
      :class="'lang-'+getLanguage"
      :column-num="list.length">
      <van-grid-item
          icon
          v-for="(item, key) in list"
          :key="key"
          :text="item.name"
          @click="goLink(item.path)"
      >
        <template #icon>
          <img
              alt="user_avatar"
              :src="
              require(`@/assets/images/common/${item.icon}.png`)
            "
          />
        </template>
      </van-grid-item>
    </van-grid>
    <van-cell-group class="link_user">
      <van-cell center title icon is-link :to="{ name: 'AccountManagement' }">
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <van-icon name="contact" color="#865920" size="25" />
        </template>
        <template #title>
          <span>{{ $t("message.accountManagement") }}</span>
        </template>
      </van-cell>
      <!-- <van-cell
        center
        :title="$t('message.agencyCenter')"
        icon
        is-link
        to="Agent"
      >
        <template #right-icon>
          <van-icon name="arrow" class="arrow" />
        </template>
        <template #icon>
          <img
            alt="user_avatar"
            :src="require(`@/assets/user/theme/icone6-${getThemeColor}.png`)"
          />
        </template>
      </van-cell> -->

      <!-- <van-cell
        center
        :title="$t('message.onlineService')"
        icon
        is-link
        :to="{ name: 'CustomerService' }"
      >
        <template #right-icon>
          <van-icon name="arrow" class="arrow" />
        </template>
        <template #icon>
          <img
            alt="user_avatar"
            :src="require(`@/assets/user/theme/icone4-${getThemeColor}.png`)"
          />
        </template>
      </van-cell> -->
      <!-- <van-cell center :title="$t('message.shareApp')" icon @click="showPopup">
        <template #right-icon>
          <van-icon name="arrow" class="arrow" />
        </template>
        <template #icon>
          <img alt="user_avatar"
          :src="require(`@/assets/user/theme/icone3-${getThemeColor}.png`)">
        </template>
      </van-cell> -->

      <!-- <van-cell center title icon is-link to="User/Theme">
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <van-icon name="brush-o" color="#e04f4f" size="25"/>
        </template>
        <template #title>
          <span>{{ $t("message.themeSkinning") }}</span>
          <van-tag type="danger">New</van-tag>
        </template>
      </van-cell> -->

      <!-- <van-cell center :title="$t('message.openTheApp')" icon>
        <template #right-icon>
          <van-icon name="arrow" class="arrow" />
        </template>
        <template #icon>
          <img alt="user_avatar" 
          :src="require(`@/assets/user/theme/icone1-${getThemeColor}.png`)">
        </template>
      </van-cell> -->
      <van-cell
          center
          :title="$t('message.myComment')"
          is-link
          icon
          :to="{ name: 'MyComments', params: { id: 1 } }"
      >
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <!-- <van-icon name="comment-o" size="20"/> -->
          <img alt="" height="25" width="auto" :src="require(`@/assets/images/user/my_comment.png`)"/>
        </template>
      </van-cell>
      <van-cell
          center
          :title="$t('message.myPresent')"
          icon
          :to="{ name: 'MyPresent' }"
          is-link
      >
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <!-- <van-icon name="gift-o" size="20"/> -->
          <img alt="" height="25" width="auto" :src="require(`@/assets/images/user/my_present.png`)"/>
        </template>
      </van-cell>
      <!-- <van-cell
          center
          :title="$t('message.language')"
          icon
          :to="{ name: 'ChangeLanguage' }"
          is-link
      >
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <van-icon name="flag-o" size="20"/>
          <img alt="" height="25" width="auto" :src="require(`@/assets/images/user/language.png`)"/>
        </template>
      </van-cell> -->
      <!-- .................MY COLECTION............................. -->
      <van-cell
          center
          :title="$t('message.myCollect')"
          icon
          :to="{ name: 'MyCollection' }"
          is-link
      >
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <!-- <van-icon name="bookmark-o" size="20"/> -->
          <img alt="" height="25" width="auto" :src="require(`@/assets/images/user/my_collection.png`)"/>
        </template>
      </van-cell>
      <van-cell
          center
          :title="$t('message.bindBankCard')"
          icon
          :to="{ name: 'newBank'}"
          is-link
      >
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <!-- <van-icon name="idcard" size="20"/> -->
          <img alt="" height="25" width="auto" :src="require(`@/assets/images/user/bind_bank_card.png`)"/>
        </template>
      </van-cell>

<!-- /*
    * @Author: chase 
    * @LastAuthor: none
    * @Param null
    * @Return null
    * @Date: 2021-04-09 16:40:20
    * @Description: access to ChangePassword
    */ -->
      <!-- <van-cell center title icon is-link to="/ChangePassword">
        <template #right-icon>
          <van-icon name="arrow" class="arrow"/>
        </template>
        <template #icon>
          <van-icon name="edit" color="#e04f4f" size="25"/>
        </template>
        <template #title>
          <span>{{ $t("message.changePassword") }}</span>
        </template>
      </van-cell> -->
      <!-- ................................................... -->
    </van-cell-group>
    <Footer :activeTabs="3"/>
    <UserPopup
        :isShow="showSharePopup"
        v-if="showSharePopup"
        @hide-popup="showSharePopup = false"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"

// @ is an alias to /src
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import UserPopup from "@/components/User/UserSharePopup.vue"
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage"
import {UserInfoCoreService} from "@/core/UserCore/Service/UserInfoCoreService"

import { myFn } from "@/utils/fn";
import { Dialog } from 'vant';

@Component({
  components: {
    Header,
    Footer,
    UserPopup,
  },
})
export default class User extends Vue {
  private showSharePopup?: boolean = false
  // private imageDefault: string = require("@/assets/user/person8.png")
  private userData?: any = {};
  private list?: any = [
    // {
    //   icon: "wallet",
    //   name: this.$t('message.myPurse'),
    //   path: "Wallet"
    // },
    {
      icon: "bet-record",
      name: this.$t("message.betRecord"),
      path: "BetRecord",
    },
    {
      icon: "transaction-record",
      name: this.$t("message.transactRecord"),
      path: "FundRecords",
    },
    // {
    //   icon: "dailycheckin",
    //   name: this.$t('message.myCollection'),
    //   path: "MyCollection"
    // },
    {
      icon: "recharge",
      name: this.$t("message.recharge"),
      path: "Recharge",
    },
    {
      // icon: "bank-card-icon",
      icon: "withdrawal",
      name: this.$t("message.withdraw"),
      path: "Withdraw",
    },
  ];
  private profiles: any = [
    { name: require("@/assets/images/profile/person1.png"), title: 'person1' },
    { name: require("@/assets/images/profile/person2.png"), title: 'person2' },
    { name: require("@/assets/images/profile/person3.png"), title: 'person3' },
    { name: require("@/assets/images/profile/person4.png"), title: 'person4' },
    { name: require("@/assets/images/profile/person5.png"), title: 'person5' },
    { name: require("@/assets/images/profile/person6.png"), title: 'person6' },
    { name: require("@/assets/images/profile/person7.png"), title: 'person7' },
    { name: require("@/assets/images/profile/person8.png"), title: 'person8' },
  ];

  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-04-09 16:40:20
    * @Description: get currenct theme color
  */
  get getThemeColor() {
    return this.$store.state.themeColor
  }

  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-04-09 16:40:20
    * @Description: get current language
  */
  get getLanguage() {
    return this.$store.state.currLang;
  }

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
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-09 17:19:02
    * @Description: check user avatar if exist
  */
  private valitdateProfile(iconName: any) {
    return this.profiles.filter((val: any) => {
      if (val.title == iconName) return val;
    })
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-04-09 16:40:20
    * @Description: show share popup component
  */
  private showPopup() {
    this.showSharePopup = true
  }

  /*
    * @Author: reggie 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-04-08 14:39:00
    * @Description: Navigation function
  */
  private goLink(link: string) {
    if (link === 'Withdraw' && (this.userData.withdrawPassword === null || this.userData.withdrawPassword === '')) {
      Dialog.confirm({
        title: this.$t('message.notice') as any,
        message: this.$t('message.modifyWithdrawpass') as any,
        confirmButtonText: this.$t('message.modify') as any,
        cancelButtonText: this.$t('message.cancel') as any,
        width: '80%'
      })
        .then(() => {
          return this.$router.push({name: 'ChangeWithdrawPassword'})
        })
        .catch(() => {
          // on cancel
        });
    } else {
      this.$router.push({name: link})
    }
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-04-09 16:40:56
    * @Description: get user info data
  */
  private UserInfo() {
    let params: any = new UserInfoSearchCoreMessage();
    params.equal_id_userInfo = this.userDetails.id;
    UserInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.userData = data[0];
        this.userData.money = myFn.formatDecimal(this.userData.money);
      }
    })
  }

  created() {
    if (this.userDetails) {
     this.UserInfo()
    }
  }

}
</script>

<style scoped lang="less">
/* Theme color */
@import "../../../src/assets/css/user.less";

.user .header_blue.van-nav-bar {
  border-radius: 0;
}
.link_user {
  padding-top: 10px;
  overflow: scroll;
  height: 300px;
}

.link_user .van-cell__title {
  text-align: left;
  padding-left: 15px;
}

.link_user .van-cell::after {
  right: 0;
  left: 0;
}

.link_user span.van-tag {
  margin-left: 10px;
}

.link_user .van-icon {
  color: #bdc1ce;
}

.top_user.info {
  padding: 0;
}

.top_user.info .van-cell__title,
.link_user.info .van-cell__title {
  padding-left: 9px;
}

.link_user.info .van-cell {
  padding-left: 0;
}

.link_user.info {
  padding-top: 0;
  padding-bottom: 0;
}

.user .van-cell-group {
  background: transparent;
}

.user .top_user > img {
  width: 50px;
  min-height: 50px;
  display: inline-block;
}

.user .top_user .van-cell__title {
  flex: initial;
  text-align: left;
  padding-left: 15px;
  color: #363636;
}

.user .top_user .van-cell__title > div {
  margin: 0;
  color: #959595;
}

.user .top_user .van-icon {
  float: right;
  flex: 1;
  text-align: right;
  color: #bfc3cf;
}

.user .top_user {
  padding: 20px 10px 10px;
}

.user .top_user::after {
  display: none;
}

.user .info_user img {
  width: 40px;
  margin-right: 6px;
}

.user .info_user h5 {
  display: block;
  margin: 0;
  text-align: left;
}

.user .info_user p {
  display: block;
  width: 100%;
}

.user .info_user-wrapper {
  padding: 0px 10px 10px;
  background: #fff;
}

.user .info_user {
  text-align: center;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 26%);
  margin: 0px;
  border-radius: 6px;
  background: #fff;
}

.user .info_user ::v-deep .van-grid-item__content {
  background: transparent;
  padding: 0px;
  height: 55px;
}

.user .info_user h5 span {
  font-size: 9pt;
  font-weight: initial;
}

.user .info_user .van-grid-item {
  text-align: center;
}

.user .info_user .van-grid-item__content::after {
  border: none;
}

.user .info_user .van-grid-item:first-child .van-grid-item__content::before {
  content: "";
  border: 1px solid #c2c6d1;
  height: 58%;
  width: 0px;
  position: absolute;
  right: 0;
}

.user
.info_user.info_user-c
::v-deep.van-grid-item:first-child
.van-grid-item__content::before {
  content: none;
}

.user ::v-deep .icone_info_user {
  background: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

.user ::v-deep.van-hairline--top::after {
  display: none;
}

.user ::v-deep.van-hairline--top-bottom::after {
  display: none;
}

.user ::v-deep .icone_info_user .van-grid-item__content {
  padding: 5px 0px 10px;
  height: auto;
}

.user ::v-deep .icone_info_user .van-grid-item__content img {
  width: 49px;
  height: 49px;
}

.user ::v-deep .icone_info_user .van-grid-item__content::after {
  content: none;
}

.user .tip {
  color: #a2a2a2;
  font-size: 9px !important;
}

.fix_size {
  width: 25px;
  height: 25px;
}

.not-login {
  font-size: 18px;
  color: #363636;
}

.user-transact-list.lang-en ::v-deep.van-grid-item__text {
  font-size: 10px;
  line-height: 10px;
}

.currency {
  display: block;
  font-size: 14px;
}
</style>
