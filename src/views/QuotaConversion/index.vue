<template>
    <div class="quotaConversion">
        <Header :msg="$t('message.quotaConversion')" :leftText="$t('message.back')" :back="true" :HomePage="false"/>
        <van-cell-group class="top_quotaConversion">
            <van-cell title :value="$t('message.oneClickRecycling')">
                <template #title>
                    <span>{{ $t('message.walletBal') }}</span>
                    <van-icon name="replay" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-grid  :column-num="2" class="info_quotaConversion">
            <van-grid-item>
                <h5><van-icon name="pending-payment" size="19" />{{ $t('message.centralWallet') }}</h5>
                <p>{{
                    userInfoData.length > 0 && typeof(userInfoData[0].money) != "undefined"
                    ? userInfoData[0].money
                    : 0
                }}
                </p>
            </van-grid-item>
            <van-grid-item>
                <h5><van-icon name="pending-payment" size="19" />{{ $t('message.lockWallet') }}</h5>
                <p>0.00</p>
            </van-grid-item>
        </van-grid>
        <van-grid :column-num="4" class="items_quotaConversion">
           <!-- <template v-if="loadMore">
                <van-grid-item text v-for="(quotation,index) in quotations" :key="index" @click="onConfirm(quotation)">
                    <template #text >
                        <h5 :class="{active:quotation.text==quotationName}">{{quotation.text}}</h5>
                        <p :class="{active:quotation.text==quotationName}">{{quotation.value}}</p>
                    </template>
                </van-grid-item>
           </template>
            <template v-if="!loadMore">
                <van-grid-item text v-for="(quotation,index) in quotationsMinimum" :key="index" >
                    <template #text >
                        <h5>{{quotation.text}}</h5>
                        <p>{{quotation.value}}</p>
                    </template>
                </van-grid-item>
            </template> 
            <van-grid-item text class="loadMore" @click="loadMore=!loadMore">
                <template #text>
                    <h5>{{ $t('message.putAway') }}</h5>
                    <p><van-icon name="arrow-up" v-if="loadMore" /></p>
                    <p><van-icon name="arrow-down" v-if="!loadMore" /></p>
                </template>
            </van-grid-item> -->
        </van-grid>
        <van-cell center title class="auto_quotaConversion">
            <template #title>
                <van-icon name="refund-o" />
                <span>{{ $t('message.autoConversion') }}</span>
                <span class="gray">({{ $t('message.afterOpenDesc') }})</span>
            </template>
            <template #right-icon>
                <van-switch v-model="autoQuotaConversion" size="15" />
            </template>
        </van-cell>
        <div class="no_auto_quotation" v-if="!autoQuotaConversion">
            <van-grid direction="horizontal" :column-num="3" class="info_account_quotation">
                <van-grid-item text>
                    <template #text>
                        <p>{{ $t('message.centralWallet') }}</p>
                        <van-icon name="arrow" />
                    </template>
                </van-grid-item>
                <van-grid-item text>
                    <template #text>
                        <img src="@/assets/images/quotation/toAccount.png" height="15" width="18" alt="">
                    </template>
                </van-grid-item>
                <van-grid-item text>
                    <template #text>
                        <van-field
                            readonly
                            clickable
                            :value="quotationName"
                            @click="showQuotation = true"
                            />
                        <van-icon name="arrow" />
                    </template>
                </van-grid-item>
            </van-grid>
            <van-popup v-model="showQuotation" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="quotations"
                    @confirm="onConfirm"
                    @cancel="showQuotation = false"
                    :cancel-button-text="$t('message.cancel')"
                    :confirm-button-text="$t('message.confirm')"
                />
            </van-popup>
            <p class="txt_account_quotation">{{ $t('message.theWalletDesc') }}</p>
            <van-form @submit="onSubmit">
                <van-cell-group>
                    <van-field
                        v-model="amountQuotation"
                        left-icon="gold-coin-o"
                        right-icon
                        :placeholder="$t('message.enterTransferAmount')"
                        :rules="[{ required: true}]"
                    >
                    <template #right-icon>
                        <p>{{ $t('message.maxAmount') }}</p>
                    </template>
                    </van-field>
                </van-cell-group>
                <van-button  block type="info" native-type="submit">
                    {{ $t('message.transferNow') }}
                </van-button>
            </van-form>
        </div>
    </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

import {UserInfoSearchCoreMessage} from '@/core/UserCore/Message/UserInfoSearchCoreMessage';
import {UserInfoCoreService} from '@/core/UserCore/Service/UserInfoCoreService';

@Component({
  components: {
    Header,
  },
})

export default class GameLobby extends Vue {
    private autoQuotaConversion: boolean = false;
    private loadMore:boolean=false;
    private showQuotation: boolean = false;
    private amountQuotation: any = '';
    private quotationName: String = 'AA彩票';
    private userInfoData: any [] = [];
    private userBalance = this.$store.state.userBalance
    private quotationsMinimum = [
        {
          value:'100.00',
          text:'AA彩票'
      },
      {
          value:'0.00',
          text:'KY棋牌'
      },
      {
          value:'0.00',
          text:'VG棋牌'
      },
    ]
    private quotations = [
        {
          value:'100.00',
          text:'AA彩票'
      },
      {
          value:'0.00',
          text:'KY棋牌'
      },
      {
          value:'0.00',
          text:'VG棋牌'
      },
      {
          value:'0.00',
          text:'QG棋牌'
      },
      {
          value:'0.00',
          text:'OG视讯'
      },
      {
          value:'0.00',
          text:'GD视讯'
      },
      {
          value:'0.00',
          text:'欧博视讯'
      },
      {
          value:'0.00',
          text:'EB视讯'
      },
      {
          value:'0.00',
          text:'AG视讯'
      },

      {
          value:'0.00',
          text:'BG视讯'
      },
      {
          value:'0.00',
          text:'DG视讯'
      },
      {
          value:'0.00',
          text:'AG捕鱼王'
      },
      {
          value:'0.00',
          text:'BG捕鱼'
      },
      {
          value:'0.00',
          text:'TTG电子'
      },
      {
          value:'0.00',
          text:'CQ9电子'
      },

      {
          value:'0.00',
          text:'AG电子'
      },
      {
          value:'0.00',
          text:'BG电子'
      },
      {
          value:'0.00',
          text:'CMD体育'
      },
      {
          value:'0.00',
          text:'AG体育'
      },
      ];
   onConfirm(value:any) {
      this.quotationName = value.text;
      this.showQuotation = false;
    }
    onSubmit() {
      console.log('submit', this.amountQuotation);
    }


    private money = 0

    private userInfoCore(){
    let params: any = new UserInfoSearchCoreMessage();
    params.like_id_agencyReport = 1;

    UserInfoCoreService.Search(params).then((data) => {
        this.userInfoData=data;
    })
  }

    private created () {
        this.userInfoCore()
    }
}
</script>
<style lang="less">
/* Theme color */
@import "./../../assets/css/quotaconversion.less";
.quotaConversion {
    height: calc(100vh - 45px);
    overflow: auto;
    // margin-top: 45px;
    // padding-bottom: 60px;
}
.top_quotaConversion {
    text-align: left;
    background: transparent;
}

.top_quotaConversion .van-cell__value {
    color: #ed5052;
}

.info_quotaConversion {
    margin: 0px 15px 15px;
    border-radius: 8px;
}

.van-grid-item__content::after {
  z-index: unset;
}

.info_quotaConversion h5 {
    margin: 0;
    font-weight: normal;
    display: flex;
    align-items: center;
    .van-icon {
      margin-right: 5px;
    }
}

.info_quotaConversion p {
    margin: 0;
    font-size: 12px;
    color: #ed4f51;
}

// .items_quotaConversion {}

.items_quotaConversion h5 {
    margin: 0;
    font-size: 9pt;
}

.items_quotaConversion p {
    margin: 0;
    font-size: 8pt;
}

.items_quotaConversion h5.active {
    color: #ed3c3e;
}

.items_quotaConversion p.active {
    color: #ed4e50;
}

.auto_quotaConversion {
    text-align: left;
    margin: 16px auto;
    width: 95%;
    border-radius: 5px;

    .van-switch {
      background-color: #d0d0d0;
    }

    .van-switch--on {
      background-color: #ed4f51;
    }
}

.auto_quotaConversion::after {
  content: none;
}

.info_quotaConversion .van-grid-item>div {
    // border-radius: 8px;
    padding: 12px 0px;
}

.header_blue .van-nav-bar__right {
    color: #fff;
}

.header_blue .van-nav-bar__left {
    color: #fff;
}
.info_quotaConversion .van-grid-item:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.info_quotaConversion .van-grid-item:first-child>div {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.info_quotaConversion .van-grid-item:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.info_quotaConversion .van-grid-item:last-child>div {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.top_quotaConversion::after {
  content: none;
}

.top_quotaConversion .van-cell {
    background: transparent;
    padding: 15px 15px 13px;
    font-size: 14px;
    line-height: 14px;
}

.top_quotaConversion .van-cell__title .van-icon {
    color: #ed5254;
    margin-left: 5px;
    position: relative;
    top: 1px;
}

.auto_quotaConversion .van-icon {
    color: #fea947;
    font-size: 14pt;
    position: relative;
    top: 4px;
}

.auto_quotaConversion span {
    margin-left: 5px;
    font-size: 10pt;
}

.auto_quotaConversion span.gray {
    color: gray;
    font-size: 10px;
}

// .info_account_quotation {}

.info_account_quotation p {
    margin: 0;
}

.info_account_quotation .van-grid-item>div {
    padding: 9px;
}

p.txt_account_quotation {
    margin: 0;
    background: #fff;
    text-align: left;
    font-size: 9pt;
    padding: 10px;
    color: gray;
}

form.van-form .van-field--error .van-field__control::placeholder {
  color: #484848;
}

.quotaConversion form.van-form p {
    margin: 0;
}

.quotaConversion form.van-form button.van-button {
    width: 85%;
    margin: 16px auto 0px;
    border-radius: 5px;
    background: #ed5153;
    border-color: #ed5053;
    padding: 0px;
}

.no_auto_quotation {

  .info_account_quotation {
    padding: 0px 40px;
    background: #fff;
    border-bottom: 1px solid #f8f8f8;

    .van-grid-item__content {
      padding: 0;
    }

    .van-grid-item__content::after {
      content: none;
    }

    .van-field::after {
      content: none;
    }

  }

}
</style>