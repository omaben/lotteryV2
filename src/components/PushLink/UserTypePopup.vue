<template>
  <div class="ut-popup">
    <van-popup
      v-model="showPopup"  
      :style="{ width: '70%'}"
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('message.selectUserType') }}
        </div>
        <div class="popup-content">
          <van-cell-group>
            <van-radio-group v-model="radio">
              <van-radio name="1">Radio 1</van-radio>
              <van-radio name="2">Radio 2</van-radio>
            </van-radio-group>
          </van-cell-group>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class UserTypePopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: boolean;
  private showPopup?: any = ''
  private radio?: any = '1'
  
  private mounted() {
    this.showPopup = this.isShow
  }
  private hidePopOver() {
    this.$emit('hide-popup', false);
  }
}
</script>
<style lang="less">
.ut-popup{
  .popup-header {
    background: blue;
    color: #fff;
    text-align: left;
    padding: 5px 20px;
  }
  .van-radio {
    padding: 20px;
    .van-radio__icon--checked .van-icon {
      background: red;
      border-color: red;
    }
  }
}
</style>