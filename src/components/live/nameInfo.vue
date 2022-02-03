<template>
  <div class="name_info">

    <div class="logo_header" @click="userPopup">
      <img class="logo" src="@/assets/user/face_001.png" />
      <img class="icone" src="@/assets/user/icon_live_func_lm.png" />
    </div>

    <div class="name_description" v-if="anchorDetails.name">
      <h3>{{ anchorDetails.name }}</h3>
      <i style="font-size:12px;">ID: {{ anchorDetails.id }}</i>
    </div>

    <van-button
      class="button_header"
      round
      v-if="anchorDetails.id"
      @click="IsAnchorFollowed(tempAnchorInfo.anchorId) ? Unfollow() : Follow()">
      {{ IsAnchorFollowed(tempAnchorInfo.anchorId) ? $t('message.checkOff') : $t('message.attention') }}
    </van-button>

    <UserPopup
      :isShow="showUserPopup"
      :userid="anchorDetails.id"
      v-if="showUserPopup"
      @hide-popup="showUserPopup = false"/>

  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UserPopup from "../../components/live/userPopup.vue";
import { Toast } from "vant";

import { AnchorInfoCoreService } from "@/core/AnchorCore/Service/AnchorInfoCoreService"; 
import { AnchorInfoSearchCoreMessage } from '@/core/AnchorCore/Message/AnchorInfoSearchCoreMessage';

import { AnchorFollowDeleteCoreMessage } from '@/core/AnchorCore/Message/AnchorFollowDeleteCoreMessage';
import { AnchorFollowInsertCoreMessage } from '@/core/AnchorCore/Message/AnchorFollowInsertCoreMessage';
import { AnchorFollowSearchCoreMessage } from '@/core/AnchorCore/Message/AnchorFollowSearchCoreMessage';
import { AnchorFollowCoreService } from "@/core/AnchorCore/Service/AnchorFollowCoreService"; 

import { UserData } from '@/application/User/Data/UserData';

@Component({
    components: {
        UserPopup
    }
})
export default class nameInfo extends Vue {
  private showUserPopup?: boolean = false;
  private anchorDetails: any = {};
  private tempAnchorInfo: any = {};

  get userDetails() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  private userPopup() {
      this.showUserPopup = true;
  }

  private async AnchorInfo() {
    let params: any = new AnchorInfoSearchCoreMessage();
    params.equal_id_anchorInfo = this.$route.params.id;
    await AnchorInfoCoreService.Search(params).then((data) => {
      this.anchorDetails = data[0];
      this.AnchorFollow();
    })
  }

  private async AnchorFollow() {
    let params: any = new AnchorFollowSearchCoreMessage();
    params.equal_userId_anchorFollow = this.userDetails.id;
    await AnchorFollowCoreService.Search(params).then((data) => {
      if (data.length > 0) {
        let tempAnchorList = this.filterAnchorFollow(data, this.$route.params.id);
        if (tempAnchorList.length > 0) {
          this.tempAnchorInfo = tempAnchorList[0];
        } else {
          this.tempAnchorInfo.anchorId = '';
        }
      } else {
        this.tempAnchorInfo.anchorId = '';
      }
    })
  }

  private async Follow() {
    let params: any = new AnchorFollowInsertCoreMessage();
    params.userId = this.userDetails.id;
    params.anchorId = this.$route.params.id;
    await AnchorFollowCoreService.Insert(params).then((data) => {
      this.AnchorFollow();
    })
  }

  private async Unfollow() {
    let params: any = new AnchorFollowDeleteCoreMessage();
    params.equal_anchorId_anchorFollow = this.$route.params.id;
    await AnchorFollowCoreService.Delete(params).then((data) => {
      this.AnchorFollow();
    })
  }

  /*
  ** Check if the anchor has been followed
  ** true == unfollow `取关` || false = follow `关注`
  */
  private IsAnchorFollowed(anchorID: any) {
    if (anchorID) {
      if (this.$route.params.id === anchorID) {
        return true;
      } else {
        return false;
      } 
    } else {
      return false;
    }
  }

  private filterAnchorFollow(arr: any, anchorID: any) {
    return arr.filter((val: any) => {
      if (val.anchorId == anchorID) {
        return val;
      }
    });
  }
  private async created() {
    await this.AnchorInfo();
  }

}
</script>
<style lang="less">
@import "../../../src/assets/css/live.less";
.user-popup {
    width: 80%;
    height: 484px;
    border-radius: 10px;
    .bottom-wrap {
        padding: 10px 0 0;
        h3 {
            font-size: 14pt;
            margin: 0;
            color: #595959;
        }
        .icon-wrap {
            padding-top: 10px;
        }
        .details {
            color: #aaa;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 10px 0;
            p {
                font-size: 12pt;
            }
            .loc {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ccc;
                img {
                    padding-right: 5px;
                }
            }
        }
        .btn-group {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
                margin-right: 6px;
                border-radius: 4px;
                padding: 0 13px;
                height: 25px;
                &.green {
                    background: #8fc320;
                    border: none;
                }
                &.red {
                    background: #e80085;
                    border: none;
                }
                &.yellow {
                    border-color: #f4cf26;
                    color: #f4cf26;
                    margin-right: 0;
                }
            }
        }
        .val-group {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 15px 0 0;
            span {
                flex-basis: 50%;
                margin-bottom: 10px;
                p {
                    margin: 5px 0;
                }
            }
        }
        .btn-bottom {
            display: flex;
            justify-content: space-around;
            color: yellow;
            border-top: 1px solid #ddd;
            p {
                margin: 10px 0;
            }
        }
    }
}
.user-popup .top-wrap {
    background: #f7f7ed;
    > span {
        left: 20px;
        top: 8px;
        position: absolute;
        color: #bbb;
    }
    .image-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
    }
    .prof-img {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        .user {
            position: absolute;
            border-radius: 100px;
            margin-top: -4px;
        }
    /*
    * @Author: chase 
    * @LastAuthor: none
    * @Param null
    * @Return null
    * @Date: 2021-04-10 
    * @Description: Live room redesign
    */
        .bg {
            z-index: 1;
            margin-top: -13px;
            width: 195px;
            height: 113px;
        }
    }
    .icon-num {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #2a74d7;
        width: auto;
        border-radius: 5px;
        padding: 0 4px 0 1px;
        margin-top: -15px;
        p {
            font-size: 12px;
            margin: 0;
            color: #fff;
        }
    }
}
.name_info {
    display: flex;
    background: #64605d;
    border-radius: 30px;
    width: min-content;
    height: 45px;
    align-items: center;
    padding: 0 5px;

    /*
      * @Author: chase 
      * @LastAuthor: none
      * @Param null
      * @Return null
      * @Date: 2021-04-10 
      * @Description: Live room redesign
    background-image: linear-gradient(0deg, #df4f4f 0%, #fc8686 100%);
      */
    border: 2px solid #df4f4f;
    .van-button {
      background: linear-gradient(0deg, #df4f4f 0%, #fc8686 100%);
    }
    .button_header button {
        color: #000;
        padding: 7px 13px;
        margin: 0;
        height: initial;
        margin-top: 7px;
        margin-right: 5px;
        // background: #ffda01;
        border: none;
        border-radius: 17px;
        font-size: 13pt;
    }
    h3 {
        white-space: nowrap;
    }
}
.logo_header {
    display: flex;
    position: relative;
    height: min-content;
    img {
        &.logo {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 2px solid #ffbb01;
        }
        &.icone {
            position: absolute;
            width: 13px;
            height: 13px;
            z-index: 99;
            right: -2px;
            bottom: 3px;
            display: block;
            background: #3d75b2;
        }
    }
    .name_description {
        padding-left: 10px;
    }
}
.name_description {
    padding: 0 10px;
    color: #fff;
    height: 100%;
    text-align: left;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
        margin: 0;
        font-weight: normal;
        font-size: 11pt;
        font-style: italic;
    }
    p {
        font-size: 10pt;
        margin: 0;
        padding: 0;
    }
}
</style>