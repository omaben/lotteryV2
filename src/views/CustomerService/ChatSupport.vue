<template>
  <div class="chat-support">
    <Header
      :msg="pageTitle"
      :back="true"
      :HomePage="false"
      :rightText="$t('message.deviceInfo')"
      :leftText="$t('message.back')"
      :goToURL="'DeviceInfo'"/>
    <div
      class="chat-support-content"
      :style="{ height: `calc(100vh - ${contentLessHeight}px)`}">
      <div class="chat-wrapper">
        <div class="chat-time-start">
          <span>{{ '2020-01-21  17:12:22' }}</span>
        </div>
        <div
          v-for="(item, key) in dataMessage"
          :key="key"
          :class="messagePosition(item)"
          class="chat-item"
          >
          <div class="icon">
            <van-image width="33" height="33" src="" />
          </div>
          <div class="message">
            <p>{{ item.message }}</p>
            <div v-if="item.notice.length > 0" class="notice">
              <span v-for="(notice, noticeKey) in item.notice" :key="noticeKey">
                {{ notice }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <ChatFooter @sendMessage="getMessage($event)" @calcFooterHeight="calcFooterHeight($event)"/>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import ChatFooter from '@/components/CustomerService/ChatSupport/ChatFooter.vue';
import Header from '@/components/Header.vue';

@Component({
  components: {
    ChatFooter,
    Header
  }
})

export default class ChatSupport extends Vue {
  private pageTitle?: any = this.$t('message.myCustomerService');
  private contentLessHeight: number | any = 96;
  private dataMessage?: any[] | any = [
    {
      from: 'Admin',
      message: `亲亲，AA智能助手很荣幸为您服务！请直接点击您想咨询的问题就好～`,
      notice: [
        '一、存款相关问题',
        '二、提款相关问题',
        '三、优惠相关问题',
        '四、游戏相关问题',
        '五、官网及账号问题'
      ],
      date: '',
    },
  ];
  private getMessage(val: any) {
    this.dataMessage.push(val);
    this.scrollToBottom();
  }
  scrollToBottom() {
    var container: any = document.querySelector(".chat-wrapper");
    var scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;
  }
  private messagePosition(item: any) {
    if (item.from != 'Admin') {
      return 'pos-right'
    }
  }
  private calcFooterHeight(val: any) {
    let navHeight = 46; // DOM navigation height
    this.contentLessHeight = navHeight + val;
  }
  private mounted() {
    this.scrollToBottom();
  }
  private updated() {
    this.scrollToBottom();
  }
}
</script>

<style>

.chat-support {
  height: calc(100vh - 46px);
  /* margin-top: 46px; */
  overflow: hidden;
  background: #fff;
}

.chat-support-content {
  overflow: hidden;
}

.chat-wrapper {
  height: 100%;
  overflow-y: auto;
  padding: 0px 10px;
}

.chat-wrapper .chat-time-start {
  padding: 10px 0px 25px;
}

.chat-wrapper .chat-time-start span {
  color: #bababa;
  font-size: 13px;
}

.chat-wrapper .chat-item {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.chat-wrapper .chat-item .icon {
  margin-right: 12px;
}

.chat-wrapper .chat-item .icon .van-image {
  border-radius: 50%;
  border: 1px solid #fff;
}

.chat-wrapper .chat-item .message {
  background-color: #f7f7f7;
  box-shadow: 0px 0px 1px 0px rgba(203, 201, 201, 0.6);
  border-radius: 10px;
  padding: 15px 10px;
  max-width: 68%;
  overflow: hidden;
  line-height: 24px;
}

.chat-wrapper .chat-item .message p {
  margin: 0;
  text-align: left;
  font-size: 14px;
  word-break: break-all;
}

.chat-wrapper .chat-item .message .notice {
  display: flex;
  flex-direction: column;
}

.chat-wrapper .chat-item .message .notice span {
  color: #fb4242;
  text-align: left;
  font-size: 14px;
  word-break: keep-all;
}

.chat-wrapper .chat-item.pos-right {
  justify-content: end;
  flex-direction: row-reverse;
}

.chat-wrapper .chat-item.pos-right .icon {
  margin-right: 0px;
  margin-left: 10px;
}
</style>