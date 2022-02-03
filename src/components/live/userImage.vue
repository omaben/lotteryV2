<template>
  <div class="user_image">
    <div class="logo_user" v-for="(item, index) in viewerList" :key="index">
      <img class="logo" src="@/assets/user/face_002.png" @click="userPopup(item)" />
      <img class="icone" src="@/assets/user/icon_video_music_collect_1.png" />
    </div>
    <UserPopup
      :isShow="showUserPopup"
      v-if="showUserPopup"
      :userid="userid"
      @hide-popup="showUserPopup = false"/>
  </div>
</template>
<script lang="ts">
//import { UserService } from "@/application/User/Service/UserServer";
//import { LiveWatchCoreService } from "@/core/LiveCore/Service/LiveWatchCoreService";
import { Component, Vue, Prop } from "vue-property-decorator"
import UserPopup from "../../components/live/userPopup.vue"

@Component({
  components: {
    UserPopup,
  },
})
export default class userImage extends Vue {
  private viewerList: any[] = [];
  private userid: any = null;
  private showUserPopup?: boolean = false

  private userPopup(id: any) {
    this.userid = Number(id);
    this.showUserPopup = true
  }

  private created() {
    this.viewerList = ["1", "2", "3"]

    // UserService.WatchList({ anchorid: this.$route.params.id }).then(
    //     data => {
    //         if (!data.state) {
    //             data.data.map((item, index) => {
    //                 this.viewerList.push(JSON.parse(item).data);
    //             });
    //         }
    //     }
    // );
  }
}
</script>
<style lang="less">
.user_image {
  height: 66px;
  display: flex;
  width: 100%;
  overflow-x: auto;
  .logo_user {
    position: relative;
    .logo {
      width: 30px;
      height: 30px;
      border-radius: 100px;
      margin: 6px;
    }
    .icone {
      position: absolute;
      right: 0px;
      bottom: 25px;
      border-radius: 100px;
      width: 8px;
      height: 7px;
      background: #fff;
      padding: 5px;
    }
  }
}
</style>
