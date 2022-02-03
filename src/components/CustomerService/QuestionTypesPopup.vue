<template>
  <van-popup
    v-model="isShow"
    round position="bottom"
    :close-on-click-overlay="false"
    :style="{ height: '60%' }" >
    <div class="popup-content">
      <div class="header">
        <div @click="hideQuestionTypes()">{{ $t('message.cancel') }}</div>
        <div>{{ $t('message.selectQuestionType') }}</div>
      </div>
      <div class="content">
        <div class="list">
          <div class="item" v-for="(item, key) in questionTypes" :key="key" @click="selectType(item.name)">
            <van-icon :name="item.icon" size="24" :color="themeColor[getThemeColor]"/>
            <div class="text">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {}
})

export default class QuestionTypesPopup extends Vue {
  @Prop({type: Boolean, default: false}) public readonly isShow!: boolean;
  private themeColor: any = {
    'classic-red': '#e63333',
    'classic-blue': '#11548f',
    'noble-black-gold': '#865920',
    'simple-platinum': '#4f4f4f',
  };

  get getThemeColor() {
    return this.$store.state.themeColor;
  }

  private questionTypes?: any = [
    {
      name: this.$t('message.depositProb'),
      icon: 'pending-payment',
    },
    {
      name: this.$t('message.payProb'),
      icon: 'credit-pay',
    },
    {
      name: this.$t('message.gameProb'),
      icon: 'cluster-o',
    },
    {
      name: this.$t('message.preferIssues'),
      icon: 'gift-o',
    },
    {
      name: this.$t('message.webProb'),
      icon: 'apps-o',
    },
    {
      name: this.$t('message.modifyInfo'),
      icon: 'edit',
    },
    {
      name: this.$t('message.flowProb'),
      icon: 'bar-chart-o',
    },
    {
      name: this.$t('message.other'),
      icon: 'coupon-o',
    },
  ];
  @Emit('selectType') sendType(value: any) {};
  private selectType(name: string) {
    this.hideQuestionTypes();
    this.sendType(name);
  }
  @Emit('hideQuestionTypes') send(value: any) {};
  private hideQuestionTypes() {
    this.send(false);
  }
}
</script>

<style>
.popup-content {
  height: 100%;
  overflow: hidden;
}

.popup-content .header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 20px 0px;
  border-bottom: 1px solid #f7f7f7;
}

.popup-content .header div:first-child{
  position: absolute;
  left: 15px;
  top: 20px;
}

.popup-content .header div:last-child{
  color: #484848;
}

.popup-content .content {
  height: calc(100% - 63px);
}

.popup-content .content .list {
  margin: 0px 15px;
  height: 100%;
  overflow: auto;
}

.popup-content .content .list .item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #f7f7f7;
}

.popup-content .content .list .item .van-icon {
  margin-right: 10px;
}

.popup-content .content .list .item .text {
  font-size: 14px;
}
</style>