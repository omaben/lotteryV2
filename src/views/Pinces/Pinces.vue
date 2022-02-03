<template>
  <div class="pince-record">
    <Header :msg="$t('message.sponsoredLinks')" :leftText="$t('message.back')" :back="true" :rightText="$t('message.newPromotion')" :goToURL="'GestionPromotion'" />
    <div class="pince-content">
      <div class="record-list">
        <div v-if="pinceRecordData.length > 0" class="record-list-container">
          <van-list
            v-model="loading"
            :finished="finished"
            :finished-text="$t('message.finished')"
            @load="onLoad">
              <div class="record-list-item" v-for="(item, key) in pinceRecordData" :key="key">
                
                <div class="list-item-header">
                    
                  <div class="details">
                    <div>{{ item.header }}  <van-image  :src="require('@/assets/images/quotation/close.png')" style="float: right; margin-top:5px;" @click="deleteItem(key)"/>	</div>
                  </div>
                </div>
                <div class="list-item-content">
                  <div class="content-body">
                   
                 
                <van-cell-group>
                   <van-cell :title="$t('message.userType') + ': '" :value="item.title" >
                     <template #right-icon>
                       <div class="row5"></div>
                    </template>
                  </van-cell>
                  <center> <img	
                  :src="	
                      require('@/assets/images/quotation/' + item.qrcode_image + '.jpg'	)
                  "	style="margin-top:5px;"/></center>
                   <van-cell :title="$t('message.promotionCode') + ': '" :value="item.number" >
                     <template #right-icon>
                       <div class="row4" v-on:click="copy(item.number)">{{ $t('message.copy') }}</div>
                    </template>
                  </van-cell>
                   <van-cell :title="$t('message.rebateRate') + ': '" :value="item.percentage" >
                     <template #right-icon>
                       <div class="row5"></div>
                    </template>
                  </van-cell>
                   <van-cell :title="$t('message.sponsoredLinks') + ': '" :value="item.url" >
                     <template #right-icon>
                       <div class="row4" v-on:click="copy(item.url)">{{ $t('message.copy') }}</div>
                    </template>
                  </van-cell>
                  <van-cell :title="$t('message.encryptLink') + ': '" :value="item.path" >
                     <template #right-icon>
                       <div class="row4" v-on:click="copy(item.path)">{{ $t('message.copy') }}</div>
                    </template>
                  </van-cell>
                </van-cell-group>
                     <div style="text-align: center; padding:30px; color:red;font-weight: bold;">{{ $t('message.seeDetails') }}</div>

                  </div>
                      
                </div>
              </div>
          </van-list>
        </div>
        <div v-else class="no-data">
          <div>{{ $t('message.noBetRecord') }}</div>
        </div>
      </div>
    </div>
    
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
export default class AllPinceRecord extends Vue {
  private loading?: boolean = false;
  private finished?: boolean = false;
  
  private pinceRecordData?: any = [
    {
      id: 0,
      header : '推广4',
      title: '代理',
      qrcode_image:'qrcode',
      number: 224039,
      percentage: '1.9%',
      url: 'https://skytest1.yunji9.com/r/224039.do',
      path: 'https://skytest1.yunji9.com/vote_topic_224039.do',
      
    },
    {
      id:1,
      header : '推广3',
      title: '代理',
      qrcode_image:'qrcode',
      number: 289307,
      percentage: '5%',
      url: 'https://skytest2.yunji9.com/r/289307.do',
      path: 'https://skytest2.yunji9.com/vote_topic_289307.do',
      
    }
  ];
  private onLoad(): void {
    setTimeout(() => {
      this.loading = false;
      this.finished = true;
    }, 1000);
  }
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.onLoad();
  }

  private deleteItem(index:any)
  {
    
      this.pinceRecordData.splice(index,1); 
  }
  private copy(val: any) {
    const clipboard = new Vue.prototype.clipboard('.row4', {
      text: () => val,
    })
    /*clipboard.on('success', (e: any) => {
      Toast('复制成功')
    })
    clipboard.on('error', () => {
      Toast('复制失败')
    })*/
  }
  
}
</script>
<style lang="less">
@import "../../../src/assets/css/pinces.less";
.pince-record {
.van-cell__title{
  font-size: 12px;
  color: #939393;
  margin-left: -15px;
  width: 0px;
}
.van-cell__value
{
  font-size: 12px;
  color:#000;
  font-weight: bold;
  margin-left:-60px;
  text-align: left;
}
.record-picker .van-dropdown-menu .van-dropdown-menu__bar {
  height: 45px;
  padding: 0px 10px;
  align-items: center;
}

.record-picker .van-dropdown-menu .van-dropdown-menu__item {
  flex: none;
  min-width: 90px;
  height: 35px;
  line-height: 35px;
  border-radius: 28px;
  background: #f2f4f8;
}

.record-picker .van-dropdown-menu .van-dropdown-menu__item:not(:last-child) {
  margin-right: 10px;
}

.record-picker .van-dropdown-menu .van-dropdown-menu__title::after {
  border-color: transparent transparent #2c3e50 #2c3e50;;
}

.record-picker .picker-list {
  display: block;
  padding: 10px 0px 0px 10px;
}

.record-picker .picker-list .picker-item {
  float: left;
  width: calc(25% - 10px);
  margin: 0px 10px 10px 0px;
}

.record-picker .picker-list .picker-item .van-button {
  width: 100%;
  padding: 0px 5px;
  height: 40px;
  border-radius: 8px;
}

.record-picker .picker-list .picker-item.item-active .van-button {
  background: rgb(237, 64, 64);
  color: #fff;
}
.van-field__label {
   
    margin-left: -15px;
    font-size: 12px;
  color: #939393;
  }
 .van-field__control::placeholder{
   color: #000;
   font-weight: bold;
   font-size: 12px;
 }
  .van-field__control {
  text-align: left;
  margin-left: -15px;

}

 
.record-list {
  // height: calc(100vh - 91px);
  overflow: hidden;
}

.record-list .record-list-container {
  height: 100%;
  overflow-y: scroll;
  padding: 12px 10px 10px;
}

.record-list-item:not(:first-child) {
  margin-top: 10px;
}

.record-list-item .list-item-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px 0px;
}

.record-list-item .list-item-header .date {
  width: 32%;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
}

.record-list-item .list-item-header .details {
  width: 100%;
  /*display:flex;
  flex-direction: row;*/
  background-color: #000000;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  /*color: #939393;*/
}

.record-list-item .list-item-header .details div:not(:last-child) {
  margin-right: 5px;
}

.record-list-item .list-item-content {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px rgba(100,101,102,.12);
}

.list-item-content .content-header {
  height: 20px;
  line-height: 20px;
  text-align: left;
  padding: 14px 0px 6px 18px;
  border-bottom: 1px solid #dbdbdb;
}

.list-item-content .content-body {
  padding: 10px 10px 10px 28px;
  border-bottom: 1px solid #dbdbdb;
}

.list-item-content .content-body>div {
  text-align: left;
  padding: 2px 0px;
  font-size: 14px;
}

.list-item-content .content-body .row1 {
  color:black; 
  font-size: 12px;
  font-weight: bold; 
}



.list-item-content .content-body .row2 {
 font-size: 12px;
  color: #939393;

}

.list-item-content .content-body .row4 {
  font-size: 12px;
  background-color:red;
  color:#fff;
   text-align: center;
   padding: 2px;
  width: 40px;
  height: 20px;
  margin-left: 20px;

}
.list-item-content .content-body .row5 {
  font-size: 12px;
  background-color:#fff;
  color:#fff;
  padding: 2px;
  text-align: center;
  width: 40px;
  height: 20px;
  margin-left: 20px;

}



.list-item-content .content-body .row3 div:last-child {
  text-align: right;
  padding-right: 20px;
}

.list-item-content .content-footer {
  padding-left: 28px;
  text-align: left;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  padding: 10px 0px 10px 28px;
  color: #939393;
}

.record-list .no-data {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
}
</style>