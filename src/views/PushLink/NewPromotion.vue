<template>
  <div class="new-prom">
    <Header :msg="pageTitle" :leftText="$t('message.sponsoredLinks')" :back="true" :goToURL="'PushLink'" />
    <van-cell-group class="new-prom-acc">
      <div class="new-prom-items">
        <van-field v-model="value" class="new-prom-text-input new-prom-item-value" :label="$t('message.promoteDomainName') + ':'" :placeholder="$t('message.thisSite')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value1" @click="showUTPopup = true"  class="new-prom-text-input new-prom-item-value" :label="$t('message.userType')+ ':'" :placeholder="$t('message.proxy')"/>
      </div>
      <div class="new-prom-items bonus-setting">{{ $t('message.bonusSetting') }}</div>
      <div class="new-prom-items">
        <van-field v-model="value2" @click="showBGPopup = true"  class="new-prom-text-input new-prom-item-value" :label="$t('message.setBonus') + ':'" :placeholder="$t('message.chooseBonusGroup')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value3" class="new-prom-text-input new-prom-item-value" :label="$t('message.setSportsRebates') + ':'" :placeholder="$t('message.chooseRebateRatio')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value4" class="new-prom-text-input new-prom-item-value" :label="$t('message.setThirdPartySR') + ':'" :placeholder="$t('message.chooseRebateRatio')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value5" class="new-prom-text-input new-prom-item-value" :label="$t('message.setRealPerson') + ':'" :placeholder="$t('message.chooseRebateRatio')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value6" class="new-prom-text-input new-prom-item-value" :label="$t('message.setElectronicRebate') + ':'" :placeholder="$t('message.chooseRebateRatio')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value7" class="new-prom-text-input new-prom-item-value" :label="$t('message.setChessRebate') + ':'" :placeholder="$t('message.chooseRebateRatio')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value8" class="new-prom-text-input new-prom-item-value" :label="$t('message.setGamingRebates')" :placeholder="$t('message.chooseRebateRatio')"/>
      </div>
      <div class="new-prom-items">
        <van-field v-model="value9" class="new-prom-text-input new-prom-item-value" :label="$t('message.setFishingRebate')" :placeholder="$t('message.chooseRebateRatio')"/>
      </div>
    </van-cell-group>
    <div class="note">
      {{ $t('message.setBonusDesc') }}
    </div>
    <van-button class="gen-prom" size="large">{{ $t('message.genLink') }}</van-button>
    <UserTypePopup
      :isShow="showUTPopup"
      v-if="showUTPopup"
      @hide-popup="showUTPopup = false"
    />
    <BonusGroup
      :isShow="showBGPopup"
      v-if="showBGPopup"
      @hide-popup="showBGPopup = false"
    />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import UserTypePopup from '@/components/PushLink/UserTypePopup.vue'
import BonusGroup from '@/components/PushLink/BonusGroup.vue'

@Component({
  components: {
    Header,
    UserTypePopup,
    BonusGroup
  }
})

export default class PushLink extends Vue {
  private pageTitle?: any = this.$t('message.newPromotion');
  private showUTPopup?: boolean = false
  private showBGPopup?: boolean = false
  private value?: any = ''
  private value1?: any = ''
  private value2?: any = ''
  private value3?: any = ''
  private value4?: any = ''
  private value5?: any = ''
  private value6?: any = ''
  private value7?: any = ''
  private value8?: any = ''
  private value9?: any = ''
}
</script>

<style lang="less">
.theme-color.theme-color-classic-red {
  .header_blue.van-nav-bar {
    border-radius: 0;
  }
  .popup-header {
    padding: 10px 20px;
    background: linear-gradient(0deg, rgba(180,43,43,1) 0%, rgba(252,70,70,1) 100%);
  }
  .van-radio__icon--checked .van-icon {
    background: transparent !important;
    border: 1px solid #c8c9cc !important;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      background: red;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 100%;
    }
  }
  .new-prom  {
    background: #fff;
    .bonus-setting {
      background: #949393;
      font-size: 20px;
      color: #fff;
    }
    .van-field__value input {
      padding-left: 10px;
    }
    .van-field__value input::placeholder {
      color: #8d8c8c;
    }
    .gen-prom {
      margin-top: 0;
      background: linear-gradient(0deg, rgba(180,43,43,1) 0%, rgba(252,70,70,1) 100%);
    }
    .note {
      padding-top: 20px;
      margin-top: 5px;
      margin: 0;
      padding-bottom: 20px;
    }
  }
}

.new-prom {
  // padding-top: 47px;
  padding-bottom: 20px;
  .new-prom-text-input {
    padding: 0;
    box-shadow: 0px 0.5px 0px 0px rgba(0,0,0,0.1);
  }
  .bonus-setting {
    text-align: left;
    padding: 20px;
    background: #dcdcdc;
  }
  .van-field__label {
    padding: 15px;
    width: 8.5em;
  }
  .van-field__value {
    padding: 15px 0;
    background: #dcdcdc;
    input {
      color: #000;
    }
  }
  .note {
    padding: 5px 20px 30px;
    text-align: left;
    margin-top: 70px;
    font-size: 11px;
    color: red;
    background: white;
  }
  .gen-prom {
    margin-top: 20px;
    background: #1f2124;
    color: #fff;
    width: 90%;
  }
  .van-icon-arrow-left  span {
    color: #fff;
  }
}
</style>