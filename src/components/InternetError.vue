<template>
    <div class="internet-error">
      <div class="error-txt">当前网络错误！请稍后再试</div>
      <div>
        <button class="btn-reload" @click="reLoad()" v-if="!resErrorMessage">
          点击重试
        </button>
        <div style="text-align: center" v-if="resErrorMessage">
          {{ resErrorMessage }}
        </div>
      </div>
    </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator"
@Component({
  components: {},
})
export default class InternetError extends Vue {
  @Prop({ type: String, default: '' }) private resErrorMessage!: string

  private reLoad() {
    window.location.reload();
  }

}
</script>
<style lang="less" scoped>
.internet-error {
  z-index: 1;
  padding-top: 50%;
}
.error-txt {
  color: #fff;
  text-align: center;
}
.btn-reload {
  display: block;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 26px auto 0;
  background: linear-gradient(180deg, #98887e 0%, #5f5048 100%);
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
}
.error-img {
  img {
    width: 70%;
    margin: 0 auto;
    margin-left: 85px;
    display: block;
  }
}
</style>