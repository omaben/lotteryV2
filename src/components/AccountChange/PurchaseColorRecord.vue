<template>
    <div class="testerr">
        <div class="header">
            <p>{{ pageTitle }}</p>
        </div>
        <div class="content">
            <van-radio-group v-model="radio">
                <van-radio name="1"  checked-color="#ee0a24">{{ $t('message.superenaloto') }}</van-radio>
                <van-radio name="2"  checked-color="#ee0a24">{{ $t('message.chongqingTime') }}</van-radio>
                <van-radio name="3"  checked-color="#ee0a24">{{ $t('message.chongqingTime') }} 2</van-radio>
                <van-radio name="4"  checked-color="#ee0a24">{{ $t('message.xinjiangTime') }}</van-radio>
                <van-radio name="5"  checked-color="#ee0a24">{{ $t('message.xinjiangTime') }}</van-radio>
            </van-radio-group>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class PurchaseColorRecord extends Vue{
    private pageTitle?: any = this.$t('message.colorType');
    private radio?: any = 1;
}
</script>

<style scoped>
    .tester {
        position: relative;
    }
    .header{
        height: 30px;
        width: 100%;
        background: linear-gradient(to right, #e63333, #ff6363);
        text-align: left;
        display: flex;
        align-items: center;
        color: white;
    }
    .header p{
        margin-left: 10px;
    }
    .content p {
        text-align: left;
        line-height: 12px;
        margin-left: 10px;
    }
    .content .van-radio {
        margin: 10px;
    }
</style>