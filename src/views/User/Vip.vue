<template>
  <div class="home main-vip">
    <div class="header_vip">
        <van-nav-bar
            :title="$t('message.vipPrivilege')"
            left-text
            left-arrow
            class="header_blue"
            :fixed="fixed"
        >
            <template #left>
                <van-icon  name="arrow-left" @click="onClickLeft" />
                <span @click="onClickLeft">{{ $t('message.back') }}</span>
            </template>
            <template #right>
                <!-- <span @click="onClickRight">VIP详情</span> -->
                <!-- <p class="infoLogin">
                    test001
                    <br />
                    <span>¥1,000,000元</span>
                </p> -->
            </template>
        </van-nav-bar>
        <van-cell center title :label="$t('message.vipDayJoined')" icon class="top_user" is-link to="DetailUser">
        <template #right-icon>
            
        </template>
        <template #title>
            <span >{{accountInfo.name}}</span>
            <van-tag type="success" class="custom_info">VIP 0</van-tag>
        </template>
        <template #icon>
            <img alt="user_avatar" src='@/assets/images/profile/default.png'>
        </template>
        </van-cell>
        <div class="progress_bar">
            <span class="info left">VIP0</span>
            <van-slider v-model="value" title active-color="#f8d9b1" class="progress_vip" disabled>
                
                <template #button>
                    
                    <div class="custom-button">{{ value }} <br> <img alt="user_avatar" src='@/assets/user/arrow_down.png'></div>
                    <img alt="user_avatar" src='@/assets/user/progress.png' class="icone_progress">
                    
                </template>
                
            </van-slider>
            <span class="info right">VIP1</span>
        </div>
        <ul class="vip_list">
            <li>{{ $t('message.currentDepoist') }}（{{ $t('message.yuan') }}）： 0.00（0.00/500）</li>
            <li>{{ $t('message.currentDepoist') }}（{{ $t('message.yuan') }}）： 0.00（0.00/500）</li>
        </ul>
    </div>
    <van-tabs  animated class="tabs_carte_vip">
        <van-tab v-for="(index,key) in 5" :key="key" :title="'VIP ' + index" >
            <div class="carte_visa_vip">
                <h2>VIP {{ index }}</h2>
                <img alt="user_avatar" src='@/assets/user/visa.png'>
                <van-row>
                    <van-col span="8">
                        500 <br> {{ $t('message.cumulativeDepoist') }}
                    </van-col>
                    <van-col span="8">
                        3000 <br> {{ $t('message.turnoverRequirement') }}
                    </van-col>
                    <van-col span="8">
                        2000 <br> {{ $t('message.reclassification') }}
                    </van-col>
                </van-row>
            </div>
            <div class="info_vip">
                <h2>VIP{{ index }}{{ $t('message.vipExclusivePrivileges') }}</h2>
                <van-grid direction="horizontal" :column-num="2">
                    <van-grid-item icon text>
                        <template #text>
                            <div class="text-info">
                                <h3>3</h3>
                                <p>{{ $t('message.dailyWithdrawals') }}</p>
                            </div>
                        </template>
                        <template #icon>
                            <img alt="user_avatar" :src="require(`@/assets/user/vip1_${getThemeColor}4.png`)">
                        </template>
                    </van-grid-item>
                    <van-grid-item icon text>
                        <template #text>
                            <div class="text-info">
                                <h3>100,000.00</h3>
                                <p>{{ $t('message.dailyWithdrawalsLimit') }}</p>
                            </div>
                        </template>
                        <template #icon>
                            <img alt="user_avatar" :src="require(`@/assets/user/vip1_${getThemeColor}4.png`)">
                        </template>
                    </van-grid-item>
                    <van-grid-item icon text>
                        <template #text>
                            <div class="text-info">
                                <h3>8</h3>
                                <p>{{ $t('message.upgradeBonus') }}</p>
                            </div>
                        </template>
                        <template #icon>
                            <img alt="user_avatar" :src="require(`@/assets/user/vip1_${getThemeColor}4.png`)">
                        </template>
                    </van-grid-item>
                    <van-grid-item icon text>
                        <template #text>
                            <div class="text-info">
                                <h3>8</h3>
                                <p>{{ $t('message.monthlyRedEnvelopes') }}</p>
                            </div>
                        </template>
                        <template #icon>
                            <img alt="user_avatar" :src="require(`@/assets/user/vip1_${getThemeColor}4.png`)">
                        </template>
                    </van-grid-item>
                </van-grid>
            </div>
        </van-tab>
    </van-tabs>
    
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

import {AccountInfoCoreService} from "@/core/AccountCore/Service/AccountInfoCoreService";
import {AccountDetailSearchCoreMessage} from "@/core/AccountCore/Message/AccountDetailSearchCoreMessage";

@Component({
    components: {}
})
export default class Vip extends Vue {
    private fixed: boolean = true;
    private value: Number = 25;
    private name : String ="";
    private accountInfo: any = {};
    onClickLeft() {
        this.$router.back();
    }

    private onClickRight() {
        this.$router.push({name: 'User'});
    }

    
    get getThemeColor() {
        return this.$store.state.themeColor;
    }
    private async UserInfo() {
    await this.$http.get(this.$api.AccountInfo)
      .then((res: any) => {
       this.name = res.data.data['name'];
       //console.log(this.name)
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  private async AccountInfo() {
    let params: any = new AccountDetailSearchCoreMessage();
    await AccountInfoCoreService.Search(params).then((data: any) => {
      this.accountInfo = data[0];
    })
  }
  
  private created () {
    // this.UserInfo();
    this.AccountInfo();
    
  }
}
</script>
<style lang="less">
/* Theme color */
@import "../../../src/assets/css/VIP.less";

.main-vip {
    .header_vip{
        background-image: url('../../assets/user/background_head.png'); 
        background-color: #fff;
        .van-hairline--bottom::after {
          content: none;
        }
    }
    .tabs_carte_vip {
    background-color: #fff;
}
    .progress_vip.van-slider{
        background-image: url('../../assets/user/back_progress.png'); 
    }
    .progress_vip.van-slider {
        height: 14px;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 5px 12px;
    width: calc(100% - 95px);
    margin-left: 45px;
    margin-right: 40px;
    margin-top: 21px;
    margin-bottom: 20px;
}

.progress_bar {
    position: relative;
    width: 90%;
    margin: auto;
}

.progress_bar span.info {
    position: absolute;
    /* left: 4px; */
    font-size: 6pt;
    background: #ddbd93;
    padding: 2px 5px;
    border-radius: 10px;
    color: #794a16;
    font-weight: bold;
    top: 0;
}

.progress_bar span.info.left {
    left: 11px;
}

.progress_bar  span.info.right {
    right: 14px;
    color: #717171;
    background: #cfcfcf;
}


.progress_vip.van-slider .custom-button {
    position: absolute;
    top: -21px;
    font-size: 10pt;
    color: #fff;
    right: 2px;
}

.progress_vip.van-slider img.icone_progress {
    width: 34px;
    position: relative;
    top: 3px;
}

.progress_vip.van-slider .custom-button>img {
    width: 9px;
    position: relative;
    top: -4px;
}
ul.vip_list {
    text-align: left;
    padding-left: 11px;
    color: #fff;
    font-size: 8pt;
    list-style: circle;
    margin-left: 16px;
}
.header_vip .top_user {
    background: transparent;
}

.header_vip {
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    min-height: 197px;
    padding: 0px 10px;
}

.header_vip .top_user .van-cell__title>div {
    color: #ffdcdc;
}
.header_vip .top_user .van-cell__title {
    color: #fff;
}
.carte_visa_vip {
    margin: 10px 30px;
    position: relative;
    padding-bottom: 10px;
    display: flex;
}
.info_vip .van-grid-item__content {
    text-align: left;
    justify-content: left;
}

.carte_visa_vip img {
    width: 100%;
}

.carte_visa_vip h2 {
    position: absolute;
    top: 20px;
    color: #fff;
    left: 20px;
    margin: 0;
    font-size: 18pt;
}

.carte_visa_vip .van-row {
    position: absolute;
    bottom: 25px;
    width: 100%;
    color: #fff;
    font-size: 10pt;
}
.tabs_carte_vip .van-tabs__wrap {
    background: transparent;
    background-image: url('../../assets/user/back_tab.png'); 
        background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.tabs_carte_vip .van-tabs__nav.van-tabs__nav--line {
    background: transparent;
}

.tabs_carte_vip .van-tabs__line {
    opacity: 0;
}

.tabs_carte_vip  span.van-tab__text {
    color: #979797;
    background: #dbdbdb;
    padding: 0px 7px;
    font-size: 8pt;
    border-radius: 18px;
    box-shadow: 9px 6px 26px 6px #e9e9e9;
    border: 1px solid;
    line-height: 1.5;
}

.tabs_carte_vip .van-tab--active span.van-tab__text {
    background: #303f4f;
    color: #fff;
}
.info_vip h2 {
    margin: 0;
    text-align: left;
    font-size: 12pt;
    margin-left: 11px;
    border: none;
}

.info_vip {
    background: #fff;
    margin-top: 8px;
    padding-top: 7px;
    position: relative;
}

.info_vip::after {
  content: "";
  position: absolute;
  top:-8px;
  left: 0;
  right: 0;
  height: 8px;
  background: #f2f4f8;
}

.info_vip .van-grid-item {
    border: none;
    background: transparent;
}

.info_vip .van-grid-item__content::after {
    border: none;
}

.info_vip .van-grid.van-hairline--top {
    border: none;
}

.info_vip .van-hairline--top::after {
    border: none;
}

.info_vip .van-grid-item img {
    width: 42px;
}

.info_vip .van-grid-item .text-info h3 {
    margin: 0;
    font-size: 10pt;
}

.info_vip .van-grid-item .text-info {
    text-align: left;
    padding-left: 10px;
}

.info_vip .van-grid-item p {
    margin: 0;
    font-size: 9pt;
    color: #a1a3a6;
}
.van-slider--disabled{
    opacity: 1;
}
}
</style>