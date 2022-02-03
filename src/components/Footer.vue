<template>
  <van-tabbar
    class="footer-custom"
    v-model="activeFooterItem"
    :active-color="themeColorActive[getThemeColor]"
    inactive-color="#646566"
  >
    <van-tabbar-item icon @click="goPage('Home')">
      {{ $t("message.homePage") }}
      <!-- /*
      * @Author: chase 
      * @LastAuthor: null
      * @Param null
      * @Return null
      * @Date: 2021-04-12
      * @Description: fix Icon theme color
      */ -->
      <template #icon>
        <img
          alt="user_avatar"
          v-if="activeFooterItem == 0"
          :src="require(`@/assets/images/footer/${getThemeColor}/home-highlight-icon.png`)"
        />
        <img
          alt="user_avatar"
          v-if="activeFooterItem != 0"
          :src="require(`@/assets/images/footer/${getThemeColor}/home-icon.png`)"
        />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon @click="goPage('Promotion')">
      {{ $t("message.activityPage") }}
      <template #icon>
        <img
          alt="user_avatar"
          v-if="activeFooterItem == 1"
          :src="require(`@/assets/images/footer/${getThemeColor}/live-highlight-icon.png`)"
        />
        <img
          alt="user_avatar"
          v-if="activeFooterItem != 1"
          :src="require(`@/assets/images/footer/${getThemeColor}/live-icon.png`)"
        />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon @click="goPage('Lucky')">
      {{ $t("message.draw") }}
      <template #icon>
        <img
          alt="user_avatar"
          v-if="activeFooterItem == 2"
          :src="require(`@/assets/images/footer/${getThemeColor}/draw-highlight-icon-small.png`)"
        />

        <!-- <img
          alt="user_avatar"
          v-if="activeFooterItem == 2"
          :src="require(`@/assets/tabsicone/theme/icon_active2_${getThemeColor}.png`)"
        /> -->
        <img
          alt="user_avatar"
          v-if="activeFooterItem != 2"
          :src="require(`@/assets/images/footer/${getThemeColor}/draw-icon-small.png`)"
        />
      </template>
    </van-tabbar-item>
    <!-- <van-tabbar-item icon @click="goPage('Agent')">
      {{ $t("message.proxy") }}
      <template #icon>
        <img
          alt="user_avatar"
          v-if="activeFooterItem == 3"
          :src="
            require(`@/assets/tabsicone/theme/icon_active1_${getThemeColor}.png`)
          "
        />
        <img
          alt="user_avatar"
          v-if="activeFooterItem != 3"
          src="@/assets/tabsicone/icon1.png"
        />
      </template>
    </van-tabbar-item> -->
    <van-tabbar-item icon @click="goPage('User')">
      {{ $t("message.mine") }}
      <template #icon>
        <img
          alt="user_avatar"
          v-if="activeFooterItem == 3"
            :src="require(`@/assets/images/footer/${getThemeColor}/profile-highlight-icon.png`)"
        />
        <img
          alt="user_avatar"
          v-if="activeFooterItem != 3"
          :src="require(`@/assets/images/footer/${getThemeColor}/profile-icon.png`)"
        />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter
import { Component, Vue, Prop } from "vue-property-decorator"
@Component({
  components: {},
})
export default class Footer extends Vue {
  @Prop({ type: Number, default: 0 }) private activeTabs!: number
  private activeFooterItem?: any = 0
  private themeColorActive: any = {
    "classic-red": "#dc0505",
    "classic-blue": "#1989fa",
    // "noble-black-gold": "#865920",
    "simple-platinum": "#4f4f4f",
  }

  private goPage(name: string) {
    if (this.$route.name === name) return
    else {
      if (name === 'Lucky') {
          this.$router.push(
            {
              name: name,
              params: {
                gameid: '1',
                gameclass: 'EveryColor',
              }
            }
          ).catch((e: any) => {
            if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
                Promise.reject(e)
            }
          });
      } else {
        this.$router.push({ name: name }).catch( (e: any) => {
          if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
              Promise.reject(e)
          }
        })
      }
    }
  }
  
  get getThemeColor() {
    return this.$store.state.themeColor
  }

  private created() {
    this.activeFooterItem = this.activeTabs
  }
}
</script>

<style scoped>

.theme-color-classic-red .footer-custom ::v-deep.van-tabbar-item.van-tabbar-item--active .van-tabbar-item__text{
  background: -webkit-linear-gradient(#cf4343, #eb7e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* .theme-color-classic-blue .footer-custom ::v-deep.van-tabbar-item.van-tabbar-item--active .van-tabbar-item__text{

}

.theme-color-simple-platinum .footer-custom ::v-deep.van-tabbar-item.van-tabbar-item--active .van-tabbar-item__text{

} */

.footer-custom.van-tabbar {
  z-index: 20;
}

.footer-custom .van-tabbar-item__icon img {
  width: 20px;
  height: 20px;
}
</style>
