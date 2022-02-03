<template>
  <div class="chat-footer" ref="chatfooter" id="chatfooter">
    <div class="chat-footer-wrapper">
      <div class="mic">
        <van-image width="25" height="25" :src="require('@/assets/customerservice/icon_mic.png')" />
      </div>
      <div class="input">
        <van-field
          @keyup.enter="onEnter"
          v-model="message"
          type="textarea"
          :placeholder="$t('message.enterQuestion')"
          rows="1"
          :autosize="{ maxHeight: 96, minHeight: 16 }"/>
      </div>
      <div class="send-button" @click="sendMessage()">
        <van-image width="30" height="30" :src="require('@/assets/customerservice/icon_send.png')" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { Toast } from 'vant';
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({
  components: {}
})

export default class ChatFooter extends Vue {
  private message?: string = '';
  private footerHeight?: number | any = 0;
  private currFootH?: any = 0;
  @Emit('sendMessage') send(value: any) {};
  private sendMessage() {
    if (this.message) {
      let userID = 1;
      let temp = {
        from: userID,
        message: this.message,
        notice: [],
        date: '',
      };
      this.message = '';
      this.send(temp);
    } else {
      Toast(this.$t('message.enterQuestion'));
    }
  }
  @Emit('calcFooterHeight') sendHeight(value: any) {};
  private calcFooterHeight() {
    let footerCon = document.getElementById('chatfooter');
    let footerHeight = footerCon?.getBoundingClientRect().height;
    if (this.message == '') {
      this.sendHeight(50);
    } else {
      this.sendHeight(footerHeight);
    }
  }
  @Watch('message')
  onChangeValue(newVal: any, oldVal: any) {
    this.calcFooterHeight();
  }
  private onEnter() {
    this.calcFooterHeight();
  }
}
</script>

<style>
.chat-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.chat-footer .chat-footer-wrapper {
	background-color: #f8f6f6;
	box-shadow: 0px 0px 3px 0px rgba(176, 175, 175, 0.6);  
  min-height: 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 10px 0px;
}

.chat-footer .chat-footer-wrapper .mic {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.chat-footer .chat-footer-wrapper .input {
  flex: 6;
}

.chat-footer .chat-footer-wrapper .input .van-cell {
  padding: 7px 8px;
  border-radius: 3px;
}

.chat-footer .chat-footer-wrapper .input .van-cell .van-field__control {
  line-height: 16px;
}

.chat-footer .chat-footer-wrapper .send-button {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>