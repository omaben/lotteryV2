<template>
  <div class="push-link">
    <Header :msg="pageTitle" :leftText="$t('message.memberCentre')" :rightText="$t('message.newPromotion')" :back="true" :goToURL="'NewPromotion'" />
    <div class="prom-1">
      <van-popup
        v-model="showPopup"  
        :overlay-style="{ backgroundColor: 'rgba(0,0,0,0.2)' }"
        :close-on-click-overlay="false"
        :overlay="false"
        :style="{ width: '95%'}"
        class="prom-popup"
        closeable
        @close="hidePopOver()"
      >
        <div class="pop-up-container">
          <div class="popup-header">
            {{ $t('message.promote') }}1
          </div>
          <div class="popup-content">
            <van-cell-group>
              <div class="prom-items user-type">
                <van-field v-model="value" class="prom-text-input prom-item-value" :label="$t('message.userType') + ':'" />
              </div>
              <div class="prom-items code">
                <van-field v-model="value1" class="prom-text-input prom-item-value" :label="$t('message.qrCode') + ':'" />
                <van-image width="120" height="120" />
              </div>
              <div class="prom-items">
                <van-field v-model="value2" class="prom-text-input prom-item-value" :label="$t('message.promotionCode') + ':'"/>
                <van-button class="copy-btn" size="small">{{ $t('message.copy') }}</van-button>
              </div>
              <div class="prom-items">
                <van-field v-model="value3" class="prom-text-input prom-item-value" :label="$t('message.rebateRate') + ':'"/>
              </div>
              <div class="prom-items push-link">
                <van-field v-model="value4" class="prom-text-input prom-item-value" :label="$t('message.sponsoredLinks') + ':'"/>
                <van-button class="copy-btn" size="small">{{ $t('message.copy') }}</van-button>
              </div>
              <div class="prom-items encrypt-link">
                <van-field v-model="value5" class="prom-text-input prom-item-value" :label="$t('message.encryptLink') + ':'"/>
                <van-button class="copy-btn" size="small">{{ $t('message.copy') }}</van-button>
              </div>
            </van-cell-group>
          </div>
          <van-button class="prom1-btn" size="large" @click="showPushLinkPopup = true">{{ $t('message.seeDetails') }}</van-button>
        </div>
      </van-popup>
    </div>
    <PushLinkPopup
      :isShow="showPushLinkPopup"
      v-if="showPushLinkPopup"
      @hide-popup="showPushLinkPopup = false"
    />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import PushLinkPopup from '@/components/PushLink/PushLinkPopup.vue'

@Component({
  components: {
    Header,
    PushLinkPopup
  }
})

export default class PushLink extends Vue {
  private pageTitle?: any = this.$t('message.sponsoredLinks');
  private showPopup?: boolean = true;
  private value?: String = '代理';
  private value1?: String = '287644';
  private value2?: String = '287644';
  private value3?: String = '2.0%';
  private value4?: String = 'https://skytest1.yunji9.com/r/287644.do';
  private value5?: String = 'https://skytest1.yunji9.com/vote_topic_287644.do';
  private showPushLinkPopup?: boolean = false
}
</script>

<style lang="less">
.push-link {
  .van-icon-arrow-left + span {
    color: #fff !important;
  }
  .prom-1 {
    .prom-popup {
      top: 45px;
      transform: none;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .popup-header {
      background: #1f2124;
      padding: 10px 0;
      color: #fff;
    }
    .prom-items {
      display: flex;
      align-items: center;
      &.code {
        .van-cell {
          width: 120px;
        }
      }
    }
    .copy-btn {
      background: red;
      color: white;
      width: 50px;
      border-radius: 3px;
    }
    .prom1-btn {
      border: none;
      span {
        color: red;
        font-size: 12px;
      }
      &::before {
        display: none;
      }
    }
    .van-field__label{
      width: 4.5em;
      color: #ccc;
    }
    .van-field__label,
    .van-field__value {
      font-size: 13px;
    }
  }
  .van-icon-cross {
    font-size: 15px;
    background: white;
    border-radius: 50%;
    color: black;
    padding: 2px;
    top: 12px;
  }
}
</style>