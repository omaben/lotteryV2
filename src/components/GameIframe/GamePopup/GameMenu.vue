<template>
  <div>
    <van-popup
      v-model="show"
      position="right"
      @open="onOpenMenu()"
      :overlay-style="{ backgroundColor: 'rgba(0,0,0,0.2)' }"
      @closed="onCloseMenu()"
      :close-on-click-overlay="true"
      class="game-menu-popup"
      :style="popUpStyle">
      <div class="pop-up-wrapper">
        <div
          v-for="(menuItem, itemKey) in menuItems"
          :key="itemKey"
          class="menu-item">
          <div class="menu-item-wrapper" :class="getThemeColor === 'classic-red' ? 'theme-red-icons': ''">
            <img class="red-icons" style="margin-right: 5px;" v-if="getThemeColor === 'classic-red'" alt="" height="25" width="auto" :src="require(`@/assets/game/${menuItem.icon}.png`)"/>
            <van-icon v-else :name="menuItem.icon" size="25" :color="themeColor[getThemeColor]"/>
            <span :style="(getLanguage == 'en') ? 'font-size: 14px' : ''" @click="goToLink(menuItem.link)">{{ menuItem.name }}</span>
          </div>
        </div>
        <!-- <div class="menu-item switch-item">
          <div class="menu-item-wrapper">
            <van-cell center title="添加收藏">
              <template #right-icon>
                <van-switch
                  v-model="checkFav"
                  size="14"
                  active-color="#f14848" inactive-color="#e7e7e7"/>
              </template>
            </van-cell>
          </div>

        </div>
        <div class="menu-item switch-item">
          <div class="menu-item-wrapper">
            <van-cell center>
              <template #title>
                <span>长</span>
                <span>龙</span>
              </template>
              <template #right-icon>
                <van-switch
                  v-model="checkLongTiger"
                  size="14"
                  active-color="#f14848" inactive-color="#e7e7e7"/>
              </template>
            </van-cell>
          </div>
        </div>
        <div class="menu-item switch-item">
          <div class="menu-item-wrapper">
            <van-cell center>
              <template #title>
                <span>声</span>
                <span>音</span>
              </template>
              <template #right-icon>
                <van-switch
                  v-model="checkSound"
                  size="14"
                  active-color="#f14848" inactive-color="#e7e7e7"/>
              </template>
            </van-cell>
          </div>
        </div> -->
      </div>
    </van-popup>
    <HowToPlayPopup
      :isShowPopup="showHowToPlay"
      v-if="showHowToPlay" @hide-popup="showHowToPlay = false"/>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import HowToPlayPopup from '@/components/GameIframe/GamePopup/HowToPlayPopup.vue';

@Component({
  components: {
    HowToPlayPopup
  }
})

export default class GameMenu extends Vue {
  private show?: boolean = false;
  private checkFav?: boolean = true;
  private checkLongTiger?: boolean = false;
  private checkSound?: boolean = false;
  private showHowToPlay?: boolean = false;
  private popUpStyle?: object = { 
    height: 'calc(100% - 45px)',
    width: '50%',
    top: 'calc(50% + 22px)',
  };
  private themeColor: any = {
    'classic-red': '#e63333',
    'classic-blue': '#11548f',
    'noble-black-gold': '#865920',
    'simple-platinum': '#4f4f4f',
  };
  private menuItems?: any = [
    {
      name: this.$t('message.lotteryrecord'),
      icon: 'records',
      link: 'LotteryRecord',
    },
    // {
    //   name: '账单历史',
    //   icon: 'balance-list-o',
    //   link: '',
    // },
    // {
    //   name: this.$t('message.TrackingNumberQuery'),
    //   icon: 'todo-list-o',
    //   link: 'TrackingNumQuery',
    // },
    {
      name: this.$t('message.AccountChangeReport'),
      icon: 'bar-chart-o',
      link: 'AccountChangeHome',
    },
    /*  {
       name: '投注说明',
       icon: 'medal-o',
      link: '',
    }, */
    {
      name: this.$t('message.howToPlay'),
      icon: 'orders-o',
      link: 'showPopup',
    },    
  ];
  get getThemeColor() {
    return this.$store.state.themeColor;
  }

  get getLanguage() {
    return this.$store.state.currLang;
  }

  @Prop({ type: Boolean, default: false }) public isShow!: boolean;
  @Watch('isShow')
  onChangeVal(newVal: any, oldVal: any) {
    this.show = newVal;
  }
  @Emit('onOpenMenu') sendOpen(value: any) {};
  private onOpenMenu() {
    this.sendOpen(true)
  }
  @Emit('onCloseMenu') sendClose(value: any) {};
  private onCloseMenu() {
    this.sendClose(false)
  }
  private goToLink(val:any) {
    if (val === 'showPopup') {
      this.showHowToPlay = true
    } else {
      if (this.$route.name === val ) return;
      else {
        this.$router.push({ name: val});
      }
    }
  }
}
</script>

<style>
/*
  * @Author: keanu 
  * @LastAuthor: reggie
  * @Param null
  * @Return null
  * @Date: 2021-04-04 18:48:09
  * @Description: Styles for game menu.
*/
.game-menu-popup .pop-up-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.game-menu-popup .pop-up-wrapper .menu-item .menu-item-wrapper {
  padding-left: 0;
}

.game-menu-popup .menu-item-wrapper.pop-up-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.game-menu-popup .pop-up-wrapper .menu-item:first-child {
  margin-top: 15px;
}

.game-menu-popup .pop-up-wrapper .menu-item {
  display: flex;
  height: 45px;
  padding-left: 10px;
  line-height: 45px;
  border-bottom: 1px solid #e7e7e7;
  font-size: 15px;
  color: #2c3e50;
  width: 100%;
}

.pop-up-wrapper .menu-item .menu-item-wrapper {
  display: flex;
  min-width: 65px;
  width: auto;
  align-items: center;
  position: relative;
  padding-left: 30px;
}

.pop-up-wrapper .menu-item .menu-item-wrapper .van-icon {
  display: flex;
  align-items: center;
  margin-right: 5px;
}

.pop-up-wrapper .menu-item.switch-item .menu-item-wrapper {
  padding: 0px;
  width: 95px;
}

.pop-up-wrapper .menu-item.switch-item .van-cell {
  padding: 0px;
}

.pop-up-wrapper .menu-item.switch-item .van-cell div:first-child {
  margin-right: 5px;
}

.pop-up-wrapper .menu-item.switch-item .van-cell .van-cell__title {
  display: flex;
  flex-direction: row;
}

.pop-up-wrapper .menu-item.switch-item .van-cell .van-cell__title span {
  flex: 1;
}

.pop-up-wrapper .menu-item.switch-item .van-cell .van-cell__title span:first-child {
  text-align: left;
}

</style>