<template>
  <div class="proxy-review">
    <Header :msg="pageTitle" :back="true" :iconRight="''" />
    <div class="pr-con">
      <div class="icon-text">
        <van-icon name="success" />
        <span>{{ $t('message.appWaitingReview') }}</span>
      </div>
      <div class="pr-box">
        <div class="pr-box-title">
          <div class="pr-title">
            {{ $t('message.agencyInfo') }}
          </div>
        </div>
        <div class="pr-box-cont">
          <span class="email">
            <p class="label">{{ $t('message.mailbox') }} :</p>
            <p class="value">{{ agencyInfo[0].agencyEmail }} </p>
          </span>
          <!-- <span class="qq">
            <p class="label">QQ :</p>
            <p class="value">5211314521</p>
          </span> -->
          <span class="number">
            <p class="label">{{ $t('message.mobilePhoneNumber') }} :</p>
            <p class="value">{{ agencyInfo[0].tel }}</p>
          </span>
        </div>
      </div>
      <div class="pr-back-btn">
        <van-button
          class="back-btn"
          to="/"
          >{{ $t('message.backHome') }}</van-button
        >
        </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

import {AgencyInfoCoreService} from "@/core/AgencyCore/Service/AgencyInfoCoreService";
import {AgencyInfoSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoSearchCoreMessage";

@Component({
  components: {
    Header,
  },
})

export default class ProxyReview extends Vue {
  private pageTitle?: any = this.$t('message.agencyReview');
  private agencyInfo?: any[] = [];

  private async agencyDetail(){
    let params: any = new AgencyInfoSearchCoreMessage();
    await AgencyInfoCoreService.Search(params).then((data) => {
      this.agencyInfo = data;
    });
  }

  private created() {
    this.agencyDetail();
  }
}
</script>

<style lang="less" scoped>
/* Theme color */
@import "../../../src/assets/css/proxyreview.less";

.pr-con {
  padding-top: 40px;
  
  .icon-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .van-icon-success {
      background: #26cf2e;
      padding: 10px;
      border-radius: 50%;
      font-size: 35px;
      color: #fff;
      width: 35px;
    }
    
    span {
      padding: 30px 0;
    }
  }

  .pr-box {
    width: 90%;
    margin: 0 auto;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
    border-radius: 5px;

    .pr-box-title {
      background: #363636;
      color: #fff;
      padding: 10px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .pr-box-cont {
      padding: 20px 30px 50px;

      span {
        display: flex;
      }

      p {
        margin: 0 0 10px;
      }
    }
  }

  .pr-back-btn {
    border-radius: 3px;
    margin: 45px 0px 10px;

    .back-btn {
      padding: 0;
      background-image: linear-gradient(180deg, #2797ff 30%, #3b60f3 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      border: none;
      width: 95%;
      color: #fff;
      height: 50px;
      margin: 0 auto;
    }
  }
}
</style>