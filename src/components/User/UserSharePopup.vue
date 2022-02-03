<template>
  <div class="share-popup">
    <van-popup
      v-model="showPopup"  
      round 
      class="share-popup"
      @close="hidePopOver()"
    >
        <div class="pop-up-container qr-code">
            <van-image :src="require(`@/assets/user/${spLogo}`)" />
            <van-image width="100%" height="45" src="" />
            <van-image width="100%" height="170" src="" />
        </div>
    </van-popup>

    <van-popup
      v-model="showPopup"  
      class="share-popup-bottom"
      position="bottom"
      :overlay="false"
      @close="hidePopOver()"
    >
        <div class="pop-up-container">
            <div class="btn-group">
                <div class="item">
                    <div class="img-wrap">
                        <img class="cl-logo" :src="require(`@/assets/user/${clLogo}`)" />
                    </div>
                    {{ $t('message.copyLink') }}
                </div>
                <div class="item">
                    <div class="img-wrap">
                        <img class="sv-logo" :src="require(`@/assets/user/${svLogo}`)" />
                    </div>
                    {{ $t('message.savePic') }}
                </div>
            </div>
            <div class="cancel-btn" @click="showPopup = false">
                <span>{{ $t('message.cancel') }}</span>
            </div>
        </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
    components: {}
})
export default class UserSharePopup extends Vue {
    @Prop({ type: Boolean, default: false }) private isShow?: boolean;
    private back: boolean = true;
    private showPopup?: any = ''
    private spLogo?: any = "share_popup_logo.png";
    private clLogo?: any = "copy_link_logo.png";
    private svLogo?: any = "save_pictures_logo.png";
    private mounted() {
        this.showPopup = this.isShow
    }
    private hidePopOver() {
        this.$emit('hide-popup', false);
    }
}
</script>
<style scoped lang="less">
.van-row {
    background: #fff;
}
.share-popup{
    width: 60%;
    border-radius: 7px;
    .pop-up-container{
        padding: 10px 20px;
        background: linear-gradient(173deg, #d3d4d6 0%, #ffffff 100%);
    }
    .cancel-btn{
        padding: 20px;
        background: #fff
    }
    .van-image__error, .van-image__loading {
        background: #fff;
    }
    @media(max-height:650px) {
        top: calc(100% - 60%);
    }
}
.share-popup-bottom .pop-up-container{
    background: linear-gradient(173deg, #d3d4d6 0%, #ffffff 100%);
    padding: 0;

  .share-popup ::v-deep.pop-up-container .item {
    color: #505050;
  }
    .van-image{
        margin-bottom:3px;
    }
    .btn-group{
        padding: 10px 20px;
        display: flex;
        >div{
            display: flex;
            flex-direction: column;
            padding-right: 15px;
            color: #aaa;
            font-size: 10pt;
        }
        .img-wrap {
            background: #fff;
            height: 60px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            > img {
               width: 25px;
               height: 25px;
            }
        }
    }
}
</style>