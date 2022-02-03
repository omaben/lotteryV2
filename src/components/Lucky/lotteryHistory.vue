<template>
  <div class="home-game" id="home-game" >
      <div class="hist-game-content">	
        <div class="lottery-history">
            <div  class="lh-wrapper title" >
                <div class="date">{{ $t('message.issue') }}</div>
                <div class="lottery-details">{{ $t('message.winNumbers') }}</div>
            </div>
          <div class="scrollable-wrapper">
            <div 	
                  v-for="(item, index) in lotteryHistoryData" 	
                  :key="index" 	
                  class="lh-wrapper" 	
                >	
                <div class="date">{{item.date}}</div>	
                <div class="lottery-details">	
                  <div class="pk10-wrap">
                    
                    <span 	
                      v-for="(num, index) in item.nums" 	
                      :key="index"  	
                      :class="'pk10-sq number-' + num"	
                    ></span>	
                  </div>	
                </div>	
          </div>	
          </div>
        </div>	
      </div>	
  </div> 	
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})

export default class LotteryHistory extends Vue {
  @Prop({ type: Array, default: [] }) public readonly lotteryHistoryData!: any[];
}
</script>

<style>
.van-pull-refresh {
  width: 100%;
}
</style>