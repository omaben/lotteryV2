<template>
  <div class="home">
    <Header :msg="$t('message.pointHistory')" :leftText="$t('message.back')" :back="back"/>
    
    <van-cell-group >
        <van-cell class="pointsHistory" :title="item.title" :value="item.value" label v-for="(item,index) in history" :key="index">
            <template #label>
                <p>{{ $t('message.platformActivity') }}</p>
                <p>{{item.date}}</p>
            </template>
        </van-cell>
        
    </van-cell-group>
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
export default class Bet extends Vue {
    private back: boolean = true;
     private history= [
       {
        title:'积分兑换-50元彩金券',
        value:'-500' + this.$t('message.minute'),
        date: '今天 16:32',
        },
         {
        title:'打卡签到-1月29日',
        value:'+1' + this.$t('message.minute'),
        date: '昨天 16:32',
        },
         {
        title:'流水赚分-1月7日流水10,000.00',
        value:'+10' + this.$t('message.minute'),
        date: '昨天 16:32',
        }
        
      ]
}
</script>
<style>
.pointsHistory.van-cell span {
    font-size: 8pt;
}
.pointsHistory.van-cell {
    text-align: left;
}

.pointsHistory.van-cell p {
    margin: 0;
}
</style>