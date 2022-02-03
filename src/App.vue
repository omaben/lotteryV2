<template>
  <div id="app"
    class="theme-color"
    :class="[`theme-color-${getThemeColor}`,`${CustomClassname}`, `${internetStatus ? '' : 'no-internet'}`]">

    <router-view />

    <!-- Check if server is down or have interet connection -->

    <!-- <router-view v-if="internetStatus == true"/>

    <InternetError
      v-if="internetStatus == false"
      :resErrorMessage="resErrorMessage"
    /> -->

    <!-- end -->

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import InternetError from '@/components/InternetError.vue'

//temporary API to check the status of Server
import { AdvertisingInfoCoreService } from "@/core/AdvertisingCore/Service/AdvertisingInfoCoreService"
import { AdvertisingInfoSearchCoreMessage } from "@/core/AdvertisingCore/Message/AdvertisingInfoSearchCoreMessage"

@Component({
    components: {
      InternetError
    }
})
export default class App extends Vue {
  private internetStatus: boolean = true;
  private resErrorMessage: string = '';
  private CustomClassname: any = '';

  get getThemeColor() {
    return this.$store.state.themeColor;
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    if(this.$route.name === 'GameIframe' || this.$route.name === 'live') {
      this.CustomClassname = this.$route.name;
    } else {
      this.CustomClassname = '';
    }
  }

  //check server if available or not
  private async checkServerStatus() {
    let params: any = new AdvertisingInfoSearchCoreMessage()
    await AdvertisingInfoCoreService.Search(params)
    .then((data: any) => {
      this.internetStatus = true;
    })
    .catch((err: any) => {
      this.internetStatus = false;
    })
  }
  
  private created() {
    // this.checkServerStatus();
  }

}
</script>

<style lang="less" scoped>
/* Theme color */
@import "./assets/css/theme.less";

.theme-color.no-internet {
  margin-top: 0;
  min-height: 100vh
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.change-lang {
  position: fixed;
  right: 0;
  top: 50%;
  width: 100px;
  background: #fff;
}

.change-lang li {
  margin: 5px;
  border: 1px solid #333;
}

.change-color {
  position: fixed;
  left: 0;
  top: 50%;
  width: 120px;
  background: #fff;
}

.change-color li {
  margin: 5px;
  border: 1px solid #333;
}

</style>
