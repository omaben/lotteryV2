<template>
  <div>
    <van-popup class="captcha" v-model="showCaptcha" :close-on-click-overlay="false">
      <div class="">{{ firstNumber }} + {{ secondeNumber }} = ?</div>
      <van-field
        :center="true"
        :placeholder="$t('message.answer')"
        v-model="answer"
        type="text"
        input-align="center"
      >
      </van-field>
      <van-button class="confirm-btn" @click="confirm">
        {{ $t("message.confirm") }}</van-button
      >
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Captcha extends Vue {
  @Prop({ type: Boolean, default: true }) private showCaptcha!: boolean;
  private show: boolean = true;
  private answer: string = "";

  get firstNumber() {
    return Math.floor(Math.random() * 10);
  }

  get secondeNumber() {
    return Math.floor(Math.random() * 10);
  }

  private confirm() {
    if (this.firstNumber+this.secondeNumber === Number(this.answer)) {
      this.$emit('onSuccess')
    } else {
      this.$emit('onFailed')
    }
  }
}
</script>

<style scoped>
.captcha {
  width: 70%;
  padding: 20px 10px;
  border-radius: 5px;
}
.confirm-btn {
  height: 30px !important;
  color: white;
  background: linear-gradient(180deg, #fc9c5d 0%, #ee7656 0%, #e04f4f 62%),
    linear-gradient(#ffffff, #ffffff) !important;
  background-blend-mode: normal, normal;
  border-style: solid;
  border-image-source: linear-gradient(0deg, #cf4343 0%, #eb7e50 100%);
  border-image-slice: 1;
  border-radius: 8px !important;
  border: none !important;
}
</style>

