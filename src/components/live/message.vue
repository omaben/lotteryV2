<template>
  <div class="chat_live">
    <van-popup
      v-model="show"
      position="bottom"
      class="chat-popup"
      closeable
      :close-on-click-overlay="true"
      @close="hidePopOver"
    >
      <div class="pop-up-container">
        <van-field
          v-model="message"
          label
          type="textarea"
          :placeholder="$t('message.enterSpeech')"
          rows="1"
          autosize
        >
          <template #label>
            <van-switch v-model="checked" />
          </template>
          <!-- 
    /*
      * @Author: chase 
      * @LastAuthor: none
      * @Param null
      * @Return null
      * @Date: 2021-04-10 
      * @Description: Live room redesign
      */ -->
          <template #button>
            <van-button size="small" type="primary" @click="sendMessage">
              <img :src="require(`@/assets/user/icon_live_send_classic-red.png`)" />
            </van-button>
          </template>
        </van-field>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">

//import { UserService } from "@/application/User/Service/UserServer";
import { Component, Vue, Prop, Emit, Watch  } from "vue-property-decorator";
@Component({
  components: {}
})
export default class message extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: Boolean;
  @Prop({ type: Boolean, default: false }) public readonly showMessageBox?: boolean;
  private checked?: boolean = false;
  private message?: String = ''
  private name?: any = '';
  private show: any = false

  @Watch('showMessageBox')
  private onChangeShowMessage(newVal: any, oldVal: any) {
    this.show = newVal;
  }

  @Emit('closeMessage') sendCloseMessage(val: any) {}
  private hidePopOver() {
    this.sendCloseMessage(false)
  }

  private sendMessage() {
    this.$emit('pass-message', this.message)
    this.message = ''
  }

  private mounted() {}

}

</script>
<style lang="less">
.chat-popup .van-icon-cross::before {
  content: none;
}
.chat_live .chat-popup.van-popup.van-popup--bottom {
  background: rgba(255, 255, 255, 0.9);
}
.chat_live .van-cell.van-field {
  background: transparent;
}
.chat_live .van-switch__node {
  width: 1em;
  height: 1em;
  position: absolute;
  top: -2px;
  left: 0;
  z-index: 1;
  width: 1.1em;
  height: 1em;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1),
    0 3px 3px 0 rgba(0, 0, 0, 0.05);
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
  transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
  transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
  transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05),
    -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
  transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05),
    -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
  &::before {
    display: none;
  }
}
.chat_live .van-cell__title.van-field__label {
  width: 1.8em;
  height: initial;
  position: relative;
  top: -8px;
}
.chat_live .van-switch {
  width: 1em;
  height: 0.5em;
  position: absolute;
  bottom: 0;
}
.chat_live .van-cell__value.van-field__value {
  background: #fff;
  height: initial;
  border-radius: 15px;
  margin-right: 26px;
  .van-field__button {
    position: absolute;
    background: transparent;
    z-index: 5;
    right: -35px;
    bottom: 3px;
    button.van-button {
      background: transparent;
      border: none;
      height: initial;
      img {
        width: 22px;
      }
      &::before {
        opacity: 0;
        display: none;
      }
    }
  }
}
.chat_live .van-cell__value.van-field__value textarea.van-field__control {
  padding: 3px 9px;
  padding-bottom: 5px;
  max-height: 107px !important;
}
</style>
