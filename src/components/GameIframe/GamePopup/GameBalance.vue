<template>
  <van-popup
    v-model="isShow"
    :style="popUpStyle"
    :get-container="getContainer"
    position="right"
    :overlay="false"
    :overlay-style="{ backgroundColor: 'transparent' }"
    :round="true"
    :close-on-click-overlay="false"
    class="gamebalance-popup">
    <div class="pop-up-wrapper">
      <div class="pop-up-con">
        <span>{{ $t('message.outAmt') }}：</span>
        <span>{{ outstanding ? outstanding + '元' : '0.00元' }}</span>
      </div>
      <div class="pop-up-con">
        <span>{{ $t('message.profLoss') }}：</span>
        <span>{{ profitLoss ? profitLoss + '元' : '0.00元' }}</span>
      </div>
      <div class="pop-up-con button">
        <van-button type="default" size="small" :text="$t('message.recharge')" :color="'#bfc3cf'" @click="goToLink"/>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import {UserBetReportCoreService} from "@/core/UserCore/Service/UserBetReportCoreService";
import {UserBetReportSearchCoreMessage} from "@/core/UserCore/Message/UserBetReportSearchCoreMessage";
@Component({})

export default class GameBalance extends Vue {
  private outstanding?: string = '';
  private profitLoss?: string = '';
  private popUpStyle?: object = { 
    height: 'auto',
    minWidth: '150px',
    width: 'auto',
    borderRadius: '5px',
    top: '127px',
    right: '10px',
    boxShadow: '0 0 1px #888'
  };
  @Prop({ type: Boolean, default: false }) public isShow!: boolean;
  private getContainer() {
    return document.querySelector('.current-user-info-wrapper');
  }

  get userDetails() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  private goToLink() {
    this.$router.push({name: 'Recharge'});
  }

  private async UserBetReport() {
    let params: any = new UserBetReportSearchCoreMessage();
    params.equal_userinfo_userBetReport = this.userDetails.id;
    await UserBetReportCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.outstanding = data[0].outstandingAmount;
        this.profitLoss = data[0].profitAndLossToday;
      }
    })
  }

  private mounted() {
    this.UserBetReport();
  }

}
</script>

<style>
.gamebalance-popup .pop-up-wrapper {
  padding: 13px 7px 15px;
  font-size: 11px;
  line-height: 22px;
}

.gamebalance-popup .pop-up-con {
  display: flex;
  justify-content: space-between;
}

.gamebalance-popup .pop-up-con span:first-child {
  color: #939393;
}

.gamebalance-popup .pop-up-con span:last-child {
  color: #363636;
}

.gamebalance-popup .pop-up-con.button {
  margin-top: 5px;
}

.gamebalance-popup .pop-up-con.button button {
  width: 100%;
  background:rgb(237, 64, 64);
  border-radius: 2px;
  height: 24px;
  color: #fff;
}

.gamebalance-popup .pop-up-con.button button span {
  color: #fff;
}
</style>