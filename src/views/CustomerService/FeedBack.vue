<template>
  <div class="feedback">
    <Header :msg="pageTitle" :back="true" :HomePage="false" :leftText="$t('message.back')" />
    <div class="feedback-content">
      <div class="feedback-content-wrapper">
        <div class="selection-panel">
          <div class="title">{{ $t('message.quotType') }}</div>
          <div class="selection">
            <van-cell :title="currentQuestionType" @click="showQuestionTypes()" is-link/>
          </div>
        </div>
        <div class="message-panel">
          <div class="title">
            {{ $t('message.probDesc') }}
            <span>（{{ $t('message.theContentBetween') }}）</span>
          </div>
          <div class="message-input">
            <van-field
              v-model="message"
              type="textarea"
              :placeholder="$t('message.describeProb')"
              rows="10"
              minlength="20"
              maxlength="200"
              autosize />
          </div>
        </div>
        <div class="upload-panel">
          <div class="preview-images">
            <van-uploader v-model="fileList" multiple :max-count="3" preview-size="50">
              <template #default>
                <van-icon name="photo-o" size="30" color="#bababa "/>
              </template>
            </van-uploader>
            <span>{{ fileList.length +'/'+ '3'}}</span>
          </div>
          <div class="note">{{ $t('message.fileFormatDesc') }}！</div>
        </div>
        <div class="btn-panel">
          <van-button type="default" size="large">{{ $t('message.submit') }}</van-button>
        </div>
      </div>
      <QuestionTypesPopup
        :isShow="showPopup"
        @hideQuestionTypes="hideQuestionTypes($event)"
        @selectType="selectType($event)"/>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import QuestionTypesPopup from '@/components/CustomerService/QuestionTypesPopup.vue';

@Component({
  components: {
    Header,
    QuestionTypesPopup
  }
})

export default class FeedBack extends Vue {
  private pageTitle?: any = this.$t('message.feedback');
  private message?: string = '';
  private fileList?: any[] | any = [];
  private showPopup?: boolean = false;
  private currentQuestionType?: any = this.$t('message.plsSelectQuestionType');
  private showQuestionTypes() {
    this.showPopup = true;
  }
  private selectType(val: any) {
    this.currentQuestionType = val;
  }
  private hideQuestionTypes(val: any) {
    this.showPopup = val;
  }
}
</script>

<style lang="less">
/* Theme color */
@import "./../../assets/css/feedback.less";

.feedback {
  height: calc(100vh - 46px);
  margin-top: 46px;
  overflow: hidden;
}

.feedback-content-wrapper .selection-panel {
  text-align: left;
}

.feedback-content-wrapper .selection-panel .title {
  padding: 10px;
  height: 20px;
  line-height: 20px;
  background: #f7f7f7;
  font-size: 16px;
}

.feedback-content-wrapper .selection-panel .selection .van-cell {
  padding: 10px;
  height: 40px;
  line-height: 20px;
  box-shadow: 0px 0px 2px 0px rgba(222, 222, 222, 0.8)
}

.feedback-content-wrapper .selection-panel .selection .van-cell .van-cell__title{
  font-size: 14px;
  color: #bababa;
}

.feedback-content-wrapper .message-panel {
  text-align: left;
}

.feedback-content-wrapper .message-panel .title {
  padding: 10px;
  height: auto;
  line-height: 20px;
  background: #f7f7f7;
  font-size: 16px;
}

.feedback-content-wrapper .message-panel .title span {
  font-size: 14px;
  color: #bababa;
}

.feedback-content-wrapper .message-panel .message-input .van-cell {
  padding: 15px 10px 0px;
  	box-shadow: 0px 0px 2px 0px rgba(222, 222, 222, 0.8)
}

.feedback-content-wrapper .message-panel .message-input .van-cell .van-field__control {
  line-height: 16px;
}

.upload-panel {
  padding: 10px;
	box-shadow: 0px 0px 4px 0px rgba(222, 222, 222, 0.8);
  background: #fff;
  margin-bottom: 20px;
}

.upload-panel .preview-images {
  position: relative;
  margin-bottom: 10px;
}

.upload-panel .preview-images .van-uploader {
  width: 100%;
}

.upload-panel .preview-images .van-uploader .van-uploader__wrapper {
  display: flex;
  justify-items: flex-start;
  max-height: 50px;
}

.upload-panel .preview-images .van-uploader .van-uploader__wrapper .van-uploader__input-wrapper {
  border: 1px dotted #bababa;
  border-radius: 2px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-panel .preview-images .van-uploader .van-uploader__wrapper .van-uploader__preview {
  margin-bottom: 0px;
}
.upload-panel .preview-images span {
  position: absolute;
  right: 0;
  top: 0;
  color: #b9b9b9;
  font-size: 14px;
  letter-spacing: 1px;
}

.upload-panel .note {
  color: #bababa;
  font-size: 14px;
  text-align: left;
}

.btn-panel .van-button {
  height: 40px;
  line-height: 40px;
  width: 90%;
  background: linear-gradient(0deg,#ff6363 0%,#d71616 100%), linear-gradient(#363636, #363636);
	border-radius: 5px;
}

.btn-panel .van-button .van-button__content {
  color: #fff;
}
</style>