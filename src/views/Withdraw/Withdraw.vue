<template>
  <div class="withdraw">
    <Header
        :msg="$t('message.withdrawal')"
        :back="back"
        :leftText="$t('message.back')"
    />
    <div class="withdraw-content">
      <!-- 
      /*
        * @Author: chase 
        * @LastAuthor: null
        * @Param null
        * @Return null
        * @Date: 2021-04-11
        * @Description: Decimal
      */ -->
      <van-cell
          center
          title
          :label="`${$t('message.accountBalance')}: ${user.money ? user.money : '0.00'}`"
          icon
          class="profile"
          is-link
          to=""
      >
        <template #right-icon>
          <van-icon
              name="arrow"
              class="arrow"
              @click="$router.push({ name: 'UserInfo' })"
          />
        </template>
        <template #title>
          <span>
            {{ user.name ? user.name : '' }}
          </span>
          <van-tag
              type="success"
              class="custom_info"
              @click="$router.push({ name: 'AccountChangeHome' })"
          >{{ $t("message.viewFlow") }}
          </van-tag>
        </template>
        <template #icon>
          <img
            height="60px"
            width="60px"
            alt="user_avatar"
            :src="valitdateProfile(user.avatar).length > 0
              ? require(`@/assets/images/profile/${user.avatar}.png`)
              : require('@/assets/images/profile/default.png')"
          />
        </template>
      </van-cell>
      <div class="input-fields">
        <van-cell-group>
          <van-field
              v-model="val1"
              center
              readonly
              clearable
              :label="$t('message.withdrawType') + ':'"
              :placeholder="$t('message.withdrawalType')"
              label-width='7.5rem'
          >
              <!-- class="w-type" -->
            <template #button class="w-type">
              <van-icon name="arrow" class="arrow" @click="showType = true"/>
            </template>
          </van-field>

          <van-field
              v-if="currentType == 0"
              v-model="bankVal"
              center
              readonly
              clearable
              :label="$t('message.bankCard') + ':'"
              :placeholder="$t('message.bankType')"
              class="w-bankcard"
              label-width='7.5rem'
          >
            <template #button>
              <van-icon name="arrow" class="arrow" @click="showPop"/>
            </template>
          </van-field>

          <van-field
              v-else-if="currentType == 1"
              v-model="val2"
              center
              clearable
              :label="$t('message.进入微信')"
              :placeholder="$t('message.微信')+'...'"
              class="w-bankcard"
              label-width='7.5rem'
          >
            <template #button>
              <van-icon name="arrow" class="arrow backg"/>
            </template>
          </van-field>
          <van-field
              v-else-if="currentType == 2"
              v-model="val2"
              center
              clearable
              :label="$t('message.输入支付宝')"
              :placeholder="$t('message.输入支付宝')+'...'"
              class="w-bankcard"
              label-width='7.5rem'
          >
            <template #button>
              <van-icon name="arrow" class="arrow backg"/>
            </template>
          </van-field>
<!-- /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021/04/10
    * @Description: added withdraw amount number and password validation
  */ -->
          <van-cell-group class="w-amount">
            <van-field
                v-model="summ"
                center
                clearable
                type="digit"
                :label="$t('message.withdrawAmount') + ':'"
                :placeholder="$t('message.enterWithdrawAmount')"
                label-width='7.5rem'
            />
            <span>{{ $t("message.unlimitedWithdraw") }}</span>
          </van-cell-group>
          <van-field
              v-model="password"
              center
              clearable
              type="password"
              :label="$t('message.withdrawPass') + ':'"
              :placeholder="$t('message.enterWithdrawPass')"
              class="w-password"
              label-width='7.5rem'
          />
        </van-cell-group>
      </div>
      <!-- <div class="input-fields2">
        <span>{{ $t("message.notesWithdraw") }}:</span>
        <div class="current-coding-amount">
          <span>1.{{ $t("message.currCodingAmount") }}:</span>
          <input v-model="val1" center clearable label="" placeholder="5242" />
        </div>
        <div class="betting-amount">
          <span>2.{{ $t("message.requiredBetAmount") }}:</span>
          <input
            v-model="val2"
            center
            clearable
            label=""
            placeholder="267.82"
          />
        </div>
        <div class="w-limit">
          <span>3.{{ $t("message.withdrawLimit") }}:</span>
          <input v-model="summ" center clearable label="" placeholder="10000" />
        </div>
        <div class="lower-limit">
          <span>4.{{ $t("message.minWithdrawLimit") }}:</span>
          <input v-model="val4" center clearable label="" placeholder="10" />
        </div>
        <div class="w-time">
          <span>5.{{ $t("message.withdrawTime") }}:</span>
          <input
            v-model="val4"
            center
            clearable
            label=""
            placeholder="09:30--23:59"
          />
        </div>
      </div> -->

      <!-- <div class="desc-col">
        {{ $t("message.withdrawDesc") }}
      </div> -->
      <div class="bottom-btn">
        <van-button :class="'theme-button-color'" type="primary" size="large" @click="submitHandler">{{
            $t("message.withdrawal")
          }}
        </van-button>
      </div>
    </div>

    <van-popup
        v-model="showType"
        class="bankcard-popup"
        get-container="withdraw"
        :style="{ height: 'auto', width: '80%' }"
    >
      <div class="header">
        <span>{{ $t("message.selectPaymentType") }}</span>
      </div>


      <div class="body">
        <van-radio-group v-model="currentType" @change="selectType">
          <van-radio
              checked-color="red"
              v-for="(item, index) in withdrawTypes"
              :key="index"
              :name="index"
          >{{ item }}
          </van-radio>
        </van-radio-group>
      </div>
    </van-popup>
    <van-popup
        v-model="showAtributs"
        class="bankcard-popup"
        get-container="withdraw"
        :style="{ height: 'auto', width: '80%' }"
    >
      <div v-if="currentType == 0">
        <div class="header">
          <span>{{ $t("message.selectCard") }}</span>
        </div>
        <div class="body">
          <!-- /*
            * @Author: chase 
            * @LastAuthor: null
            * @Param null
            * @Return null
            * @Date: 2021/04/10
            * @Description: add jump to Bank Card Details page
            */ -->
          <van-radio-group v-model="currentCard" >
            <van-radio v-if="userWithdraw.bankCardNum"  checked-color="red" name="0">
              {{ userWithdraw.bankCardNum }}
            </van-radio>
            <van-radio checked-color="red" name="new" @click="$router.push({name: 'newBank'})">
              {{ $t("message.newCard") }}
            </van-radio>
            <!-- <van-field
                v-if="currentCard == 'new'"
                v-model="newCard"
                center
                clearable
                :label="$t('message.bankCard') + ':'"
                class="w-bankcard"
            >
              <template #button>
                <van-icon name="arrow" class="arrow" @click="makeNewCard"/>
              </template>
            </van-field> -->
            
            <!-- /*
            * @Author: chase 
            * @LastAuthor: chase
            * @Param null
            * @Return null
            * @Date: 2021/04/14
            * @Description: add current value to the input text
            */ -->
          </van-radio-group>
          <van-radio-group v-model="currentCard2">
            <div class="visa-list" v-if="visaCardList.length > 0">
              <van-radio 
                class="bankCardList"
                v-for="(bankItem, bankKey) in visaCardList"
                :key="bankKey"
                checked-color="red"
                :name="bankItem.name"
                @click="bankValue(bankItem.bankAddress)"
              >
                {{ bankItem.bankAddress }}
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div v-else-if="currentType == 1">USD</div>
      <div v-else-if="currentType == 2">Ali</div>
    </van-popup>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/Header.vue"
import {Component, Vue} from "vue-property-decorator"
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage"
import {UserInfoCoreService} from "@/core/UserCore/Service/UserInfoCoreService"
import {WithdrawDetailSearchCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailSearchCoreMessage"
import {WithdrawDetailCoreService} from "@/core/WithdrawCore/Service/WithdrawDetailCoreService"
import {WithdrawService} from "@/application/Withdraw/Service/WithdrawService";
import {WithdrawUserMessage} from "@/application/Withdraw/Message/WithdrawUserMessage";
import {AccountInfoCoreService} from "@/core/AccountCore/Service/AccountInfoCoreService";
import {AccountInfoSearchCoreMessage} from "@/core/AccountCore/Message/AccountInfoSearchCoreMessage";
import {RechargeClassificationSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationSearchCoreMessage"
import {RechargeClassificationCoreService} from "@/core/RechargeCore/Service/RechargeClassificationCoreService"
import {Toast} from "vant";

import { myFn } from "@/utils/fn";


@Component({
  components: {
    Header,
  },
})
export default class Withdraw extends Vue {
  private back?: boolean = true
  /*
  * @Author: chase 
  * @LastAuthor: chase
  * @Param null
  * @Return null
  * @Date: 2021/04/14
  * @Description: remove value for withdraw type
  */
  private val1?: any = ''
  private val2?: any = ""
  private bankVal: String = ""
  private withdrawVal: String = ""
  private summ?: any = ""
  private password?: any = ""
  private showType: boolean = false
  private showType2: boolean = false
  private showAtributs: boolean = false
  private radio: string = "1"
  private user: any = {}
  private userWithdraw: any = {}
  private card: any = ""
  private currentType: number = 0
  private currentCard: any = 0
  private currentCard2: any = 0
  private newCard: any = ""
  private visaCardList: any = [];
  private bankTypeList: any = [];
  private withdrawalAPI: any = [];

  private withdrawTypes: any[] = [
    this.$t('message.银行卡'),
    this.$t('message.微信'),
    this.$t('message.支付宝'),
  ]

  private userStatusName: any[] = [
    this.$t("message.unapproved"),
    this.$t("message.pass"),
    this.$t("message.failure"),
  ]
  private images: any[] = [
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
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-13 16:41:55
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
    * @Date: 2021-04-09 18:38:16
    * @Description: check user avatar if exist
  */
  private valitdateProfile(iconName: any) {
    return this.images.filter((val: any) => {
      if (val.title == iconName) return val;
    })
  }

  /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-11
    * @Description: internationalize toast
  */
  private getBank(){
    let params = new AccountInfoSearchCoreMessage()
    params.equal_userInfo_accountInfo = this.userDetails.id;
    AccountInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.visaCardList=data
      }
    })
  }
  
  /*
    * @Author: Chase 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-14
    * @Description: get withdraw
  */
  private getWithdraw(){
    let params = new RechargeClassificationSearchCoreMessage()
    params.greater_id_rechargeClassification = 0;
    RechargeClassificationCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.bankTypeList = data
      }
    })
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-04-13 16:41:56
    * @Description: get user info data
  */
  private UserInfo() {
    let params: any = new UserInfoSearchCoreMessage();
    params.equal_id_userInfo = this.userDetails.id;
    UserInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.user = data[0];
        this.user.money = myFn.formatDecimal(this.user.money);
      }
    })
  }

  private async created() {
    await this.UserInfo();
    await this.getBank();
    await this.getWithdraw();
  }

  private submitHandler() {
    
  /*
    * @Author: Chase
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-14
    * @Description: withdraw validation
  */
    this.password = ""
    if (this.user.money >= this.summ && this.user.money != 0) {
      if (this.summ <= this.userDetails.classificationModel.limitWithdrewMoney) {
        if(this.summ < 100||this.summ == ''){
          Toast(this.$t("message.aMinimum100"))
          return;
        }
        if (
            this.summ > this.userWithdraw.withdrawAmount &&
            this.summ < 10 &&
            this.summ > this.user.money
        ) {
          Toast(this.$t('message.lackMoney'))
          return
        }
        let params = new WithdrawUserMessage();
        params.money = this.summ;
        WithdrawService.User(params).then(()=>{
          Toast(this.$t('message.succeed'))
        });
      } else {
        Toast('maximum of 100,000 only!')
      }
    } else {
      Toast('Invalid Withdraw!')
    }
      
  }

  private selectType(val: any) {
    this.currentType = val
    console.log(val)
    this.showType = false
    if (val === 0) {
      this.val1 = this.$t('message.银行卡')
    }
    if (val === 1) {
      this.val1 = this.$t('message.微信')
    }
    if (val === 2) {
      this.val1 = this.$t('message.支付宝')
    }
  }

  private cardToHide(ev: any) {
    this.card = ev.split("")
    for (let i = 0; i < this.card.length; i++) {
      if (i > 2 && i < this.card.length - 3) {
        //  <=== change number of shown
        this.$set(this.card, i, "*")
        console.log(this.card)
      }
    }
    return (this.card = this.card.join(""))
  }

  private selectCard(val: any) {
    if (val != "new") {
      this.currentCard = val
      this.cardToHide(this.userWithdraw.bankCardNum)
      this.showAtributs = false
    }
  }

  private makeNewCard() {
    this.cardToHide(this.newCard)
    this.showAtributs = false
    this.newCard = ""
    // this.currentCard = "0"
  }

  private showPop() {
    this.showAtributs = true
  }


  /*
    * @Author: Chase
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-14
    * @Description: get data for inputs
  */
  private withdrawValue(val:any){
    this.withdrawVal = val;
  }
  private bankValue(val:any){
    this.bankVal = val;
    this.showAtributs = false
  }
}
</script>

<style scoped lang="less">
/* Theme color */
@import "./../../assets/css/withdraw.less";

.bankCardList{
  margin: 20px 0px;
}

.withdraw .header_blue {
  &::after {
    display: none;
  }
}
/*
 * @Author: chase 
 * @LastAuthor: null
 * @Param null
 * @Return null
 * @Date: 2021-07-04
 * @Description: change design for Withdrawal page
 */
 .van-field {
   font-size: 12.5px;
   margin-right: 0px;
 }
.withdraw-content {
  background: #fff;
  // margin-top: 45px;
  .profile {
    text-align: left;
    background: #bdbdbd;
    padding: 70px 15px 20px;
    margin-top: -50px;

    .arrow {
      font-size: 30px;
      color: #fff;
    }

    .van-cell__title {
      padding-left: 15px;

      .van-cell__label {
        padding-top: 5px;
      }

      .custom_info {
        background: linear-gradient(0deg, #2c8d18 0%, #00e20f 100%);
        padding: 3px 2.5px;
        font-size: 12px;
      }

      > * {
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .input-fields {
    .arrow {
      font-size: 30px;
    }

    .van-cell,
    .van-cell-group {
      background: transparent;
    }

    .van-cell {
      padding-top: 0;
      padding-bottom: 0;

      &.w-password {
        padding: 10px 16px;
      }
    }

    .w-amount {
      padding: 10px 0px;
      display: flex;

      span {
        width: 40%;
        color: red;
        font-size: 12px;
        padding-right: 10px;
      }
    }
  }

  .input-fields2 {
    padding: 10px 0 40px;
    background: transparent;

    > span {
      text-align: left;
      display: block;
      padding-left: 16px;
    }

    > div {
      display: flex;
      padding: 0 16px;
      justify-content: flex-start;

      input {
        border: none;
        color: red;
        background: none;

        &::placeholder {
          color: red;
        }
      }

      span {
        width: 200px;
        text-align: left;
      }
    }
  }

  .desc-col {
    background: #fff;
    padding: 10px 16px 0px;
    text-align: left;
    font-size: 13px;
  }

  .bottom-btn button {
    background: linear-gradient(0deg, #530303 -70%, #ff2727 50%, #fd6767 100%);
    border: none;
    border-radius: 12px;
    height: 40px;
  }

  .bottom-btn {
    padding: 20px 15px;
    margin: 0px;
  }
}

.withdraw .bankcard-popup {
  .header {
    height: 35px;
    line-height: 35px;
    text-align: left;
    padding: 0px 15px;
    background: #ed5053;
    color: #fff;
  }

  .body {
    padding: 10px 15px;

    .van-radio:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

.backg {
  color: transparent;
}
</style>
