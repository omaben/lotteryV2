<template>
  <div class="footer_icone">
    <span>
      <img
        class="icone_left"
        @click="showMessage()"
        src="@/assets/user/chat-icon_classic-red.png"
      />
    </span>
    <img class="icon_right"  
    @click="showPopup()"  
    :src="require(`@/assets/user/icon_live_gift_classic-red.png`)"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
@Component({
  components: {},
})
export default class footerUser extends Vue {
  
  private showgiftM() {
    this.$emit("showgiftM", true)
  }

  private showGames() {
    this.$emit("showGames", true)
  }

  private showMessage() {
    this.$emit("showMessage", true)
  }

  private showPopup(): void {
    this.$emit("live-popup", true)
  }

}
</script>
<style lang="less">
.footer_icone {
  position: absolute;
  bottom: 0;
  display: inline-block;
  justify-content: right;
  width: 100%;
  text-align: right;
  .main-icon img {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .icone_left {
    padding: 10px;
    height: 30px;
    width: 30px;
  }
}
</style>
