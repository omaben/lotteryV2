<template>
  <div class="wallet">
    <div class="page-content">
      <Header :msg="$t('message.wallet')" :back="back" :leftText="'返回'"/>
      <div>
        <WalletContent />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";
import WalletContent from "@/views/Wallet/WalletContent.vue";

@Component({
  components: {
    Header,
    WalletContent,
  }
})
export default class Wallet extends Vue {
  private back: boolean = true;
}
</script>

<style lang="less">
/* Theme color */
@import "./../../assets/css/wallet.less";

.wallet {
  // margin-top: 45px;
  .page-content {
    background-color: #ffffff;
  }
}
.wlt-content {
  padding-top: 10px;
  padding-bottom: 10px;
  .wlt-wrapper {
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px 
    rgba(188, 187, 185, 0.5);
    margin: 0px 10px 5px;
    padding: 16px 16px 10px 20px;
    border-radius: 5px;
    position: relative;
    // z-index: 1;
    // &::after {
    //   content: '';
    //   position: absolute;
    //   // top: 135px;
    //   left: 0;
    //   bottom: 35px;
    //   height: 1.5px;
    //   width: 100%;
    //   background-color: #ededed;
    // }
  }
  .wlt-total-amount {
    color: #727272;
    font-size: 14px;
    text-align: left;
  }
  .wlt-amt-deposit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .amount {
      color: #444444;
      font-size: 14px;
      font-weight: bolder;
      .currency {
        font-size: 12px;
      }
    }
    .deposit-btn {
      height: 30px;
      width: 76px;
      border-radius: 20px;
      background-image: linear-gradient(to right, #efd6bf 0%, #dec0a8 100%);
      box-shadow: 0px 0px 10px 0px 
      rgba(188, 187, 185, 0.5);
      color:#fff;
      border: none;
      font-size: 10px;
    }
  }
  .wlt-items {
    display: flex;
    justify-content: space-around;
    padding-top: 12px;
    margin-bottom: 5px;
    .wlt-icon-wrap {
      text-align: center;
      font-size: 0;
      .wlt-icon {
        height: 35px;
        height: 35px;
      }
    }
    span {
      color: #727272;
      font-size: 12px;
    }
  }
  .wlt-item-icon {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .quota-icon, .home_withdrawals, .bank-card-icon {
    width: 35px;
  }
  .wlt-more-details {
    margin-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #727272;
    font-size: 14px;
    .wlt-view-bal {
      font-size: 12px;
      color: #bfbfbf;
      display: flex;
      align-items: center;
      .plus {
        background: url('../../assets/wallet/w-plus.png') center no-repeat;
        background-size: 12px;
        height: 12px;
        width: 12px;
        margin-top: 1px;
        padding-left: 5px;
      }
      .minus {
        background: url('../../assets/wallet/w-minus.png') center no-repeat;
        background-size: 12px;
        height: 12px;
        width: 12px;
        margin-top: 1px;
        padding-left: 5px;
      }
    }
  }
  .wlt-bal-detail {
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px 
    rgba(188, 187, 185, 0.5);
    position: relative;
  }
  .wlt-bal-wallet {
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #ededed;
    margin: auto 15px;
    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 50%;
      border-right: 1px solid #cdcdcd;
      width: 1px;
      height: 25px;
    }
  }
  .wlt-item {
    color: #484848;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    .amount {
      color: #ef3030;
      padding-top: 3px;
      margin: 0;
    }
  }
  .wlt-text {
    display: flex;
    align-items: center;
  }
  .wlt-wallet-img {
    background: url('../../assets/wallet/wallet-icon.png') center no-repeat;
    width: 19px;
    height: 16px;
    margin-right: 10px;
    background-size: 19px 16px;
  }
  .wlt-bal-games {
    display: flex;
    flex-direction: column;
  }
  .wlt-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ededed;
    flex-wrap: wrap;
    margin: auto 15px;
  }
  .wlt-game {
    color: #484848;
    font-size: 14px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 55px;
    width: 25%;
    flex-wrap: wrap;
    border-bottom: 1px solid #ededed;
    .wlt-amount {
      padding-top: 6px;
      color: #bfbfbf;
      font-size: 13px;
    }
  }
  .wlt-game:first-of-type {
    color: #ef3030;
    .wlt-amount {
      color: #ef3030;
    }
  }
  .wlt-game:last-of-type {
    border-bottom: none;
  }
  .wlt-container {
    margin: 25px 10px 0px;
    position: relative;
    text-align: center;
    padding-bottom: 20px;
    .text {
      padding-top: 100px;
      font-size: 12px;
      color: #bfbfbf;
    }
  }
  .wlt-betting-record {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wlt-heading {
      margin-left: 8px;
      font-size: 14px;
      color: #313131;
    }
    &::after {
      content: '';
      width: 2px;
      height: 23px;
      background-image: linear-gradient(180deg, #e5ceb1 0%, #f0dcc4 50%, #fae8d6 100%);
      position: absolute;
      left: 0;
      border-radius: 1px;
    }
    .wlt-more {
      font-size: 12px;
      color: #bfbfbf;
      position: relative;
      display: flex;
      align-items: center;
      .more-arrow {
        background-image: url('../../assets/wallet/back-btn.png');
        height: 8px;
        width: 8px;
        margin-left: 6px;
      }
    }
  }

  
}
</style>