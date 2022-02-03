<template>
    <van-popup v-model="showgift"
  close-icon="close" class="center show-cancel-button gift_user"  @close="onClickCloseIcon()">
    <h2>直播间红包</h2>
    <p>给当前直播间观众发红包</p>
    <van-radio-group v-model="radio1" direction="horizontal">
        <van-radio name="1">拼手气红包</van-radio>
        <van-radio name="2">平均红包</van-radio>
    </van-radio-group>
    <van-row class="item_gift">
        <van-col span="8">总金额</van-col>
        <van-col span="8">100</van-col>
        <van-col span="8" class="right">月牙</van-col>
    </van-row>
    <van-row class="item_gift">
        <van-col span="8">数量</van-col>
        <van-col span="8">10</van-col>
        <van-col span="8" class="right">个</van-col>
    </van-row>
    <van-row class="item_gift last_child">
        <p>恭喜发财，大吉大利</p>
    </van-row>
    <van-switch :checked="checked" size="24px" :class="{'checked':checked}" class="switch_gift" @change="checked=!checked"/>
    <van-button type="primary" size="large" round class="button_gift">发红包100月牙</van-button>
  </van-popup>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
    components: {}
})
export default class giftUser extends Vue {
    @Prop({ type: Boolean, default: false }) private showgift?: Boolean;
    private radio1: String = '1';
    private checked: Boolean = true;
    

    onClickCloseIcon() {
        this.$emit('closeGift');
    }
}
</script>
<style>
</style>