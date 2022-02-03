<template>
  <div class="ag-agent-unreg">
    <!-- 代理中心未注册 -->
    <Header :msg="pageTitle" :back="true" :HomePage="false" :iconRight="''"/>
    <div class="ag-heading">
      <div class="ag-text-content">{{ $t('message.agencyAdvantage') }}</div>
    </div>
    <div class="ag-aa-text">
      <div class="ag-wrapper">
        <div class="ag-inner-text">
          {{ $t('message.aaEntertainmentDesc') }}
        </div>
      </div>
    </div>
    <div class="ag-red-text">
      <div class="text-content">
        {{ $t('message.joinAgencyDesc') }}：
      </div>
    </div>
    <div class="ag-advantages-text">
      <div class="ag-inner-text">
        <div class="ag-adv" v-for="(text, index) in advText" :key="index">
          {{ text }}
        </div>
      </div>
    </div>
    <div class="ag-heading">
      <div class="ag-text-content">
        {{ $t('message.agencyPlan') }}
      </div>
    </div>
    <div class="ag-advantages-text">
      <div class="ag-inner-text">
        <div class="ag-adv" v-for="(text, index) in advText" :key="index">
          {{ text }}
        </div>
      </div>
    </div>
    <div class="ag-heading">
      <div class="ag-text-content">
        {{ $t('message.comCalculation') }}
      </div>
    </div>
    <div class="ag-advantages-text">
      <div class="ag-inner-text">
        <div class="ag-adv" v-for="(text, index) in advText" :key="index">
          {{ text }}
        </div>
      </div>
    </div>
    <van-button type="default" class="ag-btn" >{{ $t('message.agentRegist') }} </van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})

export default class AgentUnreg extends Vue {
  private pageTitle?: any = this.$t('message.agencyCenter');
  private advText?: any = this.$t('message.agencySteps');
}
</script>
<style lang="less">
.ag-agent-unreg {
  position: relative;
  padding-bottom: 40px;

  .ag-heading {
    background-color: #ffffff;
    height: 40px;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 0px 0px 5px 0px 
		rgba(188, 187, 185, 0.5);

    ::before {
      content: '';
      width: 2px;
      height: 23px;
      background-image: linear-gradient(180deg, #e5ceb1 0%, #f0dcc4 50%, #fae8d6 100%);
      position: absolute;
      left: 20px;
      top: 8px;
      border-radius: 1px;
    }
  }

  .ag-text-content {
    font-size: 14px;
    color: #3d3c3c;
    line-height: 12px;
    letter-spacing: -1px;
    font-weight: 600;
    padding-left: 30px;
  }

  .ag-inner-text {
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0;
    color: #4e4e4e;
    text-align: left;
    .ag-adv {
      padding-bottom: 9px;
      text-align: left;
    }
  }

  .ag-aa-text {
    background-color: #ffffff;
    padding: 11px 12px 11px 20px;
  }

  .ag-red-text {
    color: #f03131;
    font-size: 14px;
    margin: 18px auto;
    padding-left: 20px;
  }

  .ag-advantages-text {
    background-color: #ffffff;
    padding: 15px 0px 15px 20px;
  }

  .ag-btn {
    background-image: linear-gradient(to right, #e63333, #ff6363);
    color: #fff;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>