<template>
  <div class="recharge-bank">
    <Header :msg="$t('message.bankTransfer')" :back="back" :leftText="$t('message.back')"/>
    <div class="rb-content">
      <div class="top-label">
        <span>20191103{{ $t('message.testGeneralPayment') }}</span>
      </div>
      <div class="qr-code">
        <span>{{ $t('message.scanQRCode') }}</span>
        <van-image
          width="150"
          height="150"
          src=""
        />
      </div>
      <div class="test-list">
        <div
          v-for="(item, index) in testList"
          :key="index"
          @click="changeTestItem(index)"
          :class="{'active': testItem === index}">
          {{item}}
        </div>
      </div>
      <div class="input-fields">
        <van-cell-group>
          <van-field v-model="val1" center clearable :label="$t('message.payeeName')" :placeholder="$t('message.testViolin')">
            <template #button>
              <van-button size="small">{{ $t('message.copy') }}</van-button>
            </template>
          </van-field>
          <van-field v-model="val2" center clearable :label="$t('message.receivingAcc')" placeholder="6258078888888888">
            <template #button>
              <van-button size="small">{{ $t('message.copy') }}</van-button>
            </template>
          </van-field>
          <van-field v-model="val3" center clearable :label="$t('message.beneficiaryBank')" :placeholder="$t('message.otherBanks')">
            <template #button>
              <van-button size="small">{{ $t('message.copy') }}</van-button>
            </template>
          </van-field>
          <van-field v-model="val4" center clearable :label="$t('message.bankAdd')" :placeholder="$t('message.wuhan')" />
        </van-cell-group>
      </div>
      <div class="text-w-bg">
        <van-cell :value="trasferType" is-link @click="showTransferType = true">
          <template #title>
            <span class="custom-title">{{ $t('message.transferType') }}</span>
          </template>
        </van-cell>
      </div>
      <div class="text-fade">
        {{ $t('message.enterRemittancePerson') }}
      </div>
      <div class="bottom-btn">
        <span>{{ $t('message.tips') }}: {{ $t('message.minRecharge') }}, {{ $t('message.maxRecharge') }};</span>
        <van-button type="primary" size="large">{{ $t('message.confirmSubmission') }}</van-button>
      </div>
    </div>

    <van-popup
      v-model="showTransferType"
      class="transfer-type-popup"
      get-container="recharge-bank"
      :style="{ height: 'auto', width: '70%'}">
      <div class="header">
        <span>{{ $t('message.selectTransferType') }}</span>
      </div>
      <div class="body">
        <van-radio-group v-model="colorRadio" @change="selectTransferType">
          <van-radio
            v-for="(transferItem, transferKey) in transferTypeList"
            :key="transferKey"
            :name="transferKey"
            checked-color="red">
            {{ transferItem }}
          </van-radio>
        </van-radio-group>
      </div>
    </van-popup>

  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Header,
  }
})
export default class RechargeBank extends Vue {
  private back?: boolean = true; 
  private colorRadio: number = 0;
  private showTransferType?: boolean = false; 
  private trasferType: any = this.$t('message.onlineBankTransfer');
  private transferTypeList: any[] = [
    this.$t('message.onlineBankTransfer'),
    this.$t('message.atm'),
    this.$t('message.bankCounters'),
    this.$t('message.mobilePhoneTransfer'),
    this.$t('message.alipay')
  ];
  private val1?: any = "";
  private val2?: any = "";
  private val3?: any = "";
  private val4?: any = "";
  private testItem: number = 0;
  private testList?: any = [
    this.$t('message.testViolin'),
    this.$t('message.testOld'),
    this.$t('message.testLao'),
    this.$t('message.testLao'),
    this.$t('message.testLaoWu'),
  ];

  private selectTransferType(val: any) {
    this.trasferType = this.transferTypeList[val];
    this.showTransferType = false;
  }

  private changeTestItem(index: any) {
    this.testItem = index;
  }

}
</script>

<style lang="less" scoped>
/*Theme Change */
@import "../../../src/assets/css/rechargebank.less";

.recharge-bank {

.rb-content {
  // margin-top: 45px;

  .top-label {
    padding: 10px 15px;
    background: #000;
    color: #fff;
    font-size: 15px;
    align-items: center;
    display: flex;

    &::before {
      content: '';
      display: block;
      height: 10px;
      width: 10px;
      margin-right: 10px;
      background: red;
      border-radius: 50%;
    }
  }

  .qr-code {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .van-image {
      margin: 10px 0px;
    }
  }

  .test-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
    margin-bottom: 5px;
    & > div {
          border: 1px solid rgb(209, 209, 209);
          width: calc(33.3333% - 12px);
          margin: 0px 10px 5px 0px;
          font-size: 12px;
          font-weight: 600;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          overflow: hidden;
          background: #fff;

      &:nth-child(3) {
        margin-right: 0;
      }
    }

    & > div.active {
      border: 1px solid #f53939;
      position: relative;
    }

    & > div.active::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -2px;
      height: 11px;
      width: 15px;
      background-size: contain;
    }

  }

  .input-fields {
    .van-cell {
      padding: 5px 10px;
    }
  }
  .text-w-bg {
    text-align: left;

    .van-cell {
      background: #aaa;
      padding: 5px 10px;
    }

    .van-cell .van-cell__value {
      flex: 3;
      text-align: left;
      padding-left: 10px;
      color: #323233;
    }

  }

  .text-fade {
    padding: 5px 10px;
  }

  .text-fade,
  .bottom-btn {
    text-align: left;
  }

  .bottom-btn {
    padding: 10px 15px;
  }
  .bottom-btn button {
    background: #ed5053;
    border: none;
  }

  .bottom-btn > span {
    font-size: 13px;
    color: red;
    display: block;
    margin-bottom: 5px;
  }
}

  .transfer-type-popup {
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

}

</style>