<template>
  <div class="customer-service">
    <Header
      :msg="pageTitle"
      :leftText="$t('message.back')"
      :back="true"
      :HomePage="false"
      :rightText="$t('message.feedback')"
      :goToURL="'FeedBack'"
    />
    <div class="customer-service-content">
      <div class="banner">
        <div class="pos-banner">
          <van-image
            width="100%"
            height="100px"
            fit="cover"
            :src="require(`@/assets/customerservice/header.png`)"
          />
        </div>
        <div class="user-panel">
          <div class="user-panel-wrapper">
            <div class="user-info">
              <div class="row row-top">
                <van-image
                  width="43"
                  height="43"
                  fit="cover"
                  :src="require(`@/assets/customerservice/icon_pic.png`)"
                />
                <div class="text">
                  <span
                    >Hi,
                    {{
                      currentUser.name
                        ? currentUser.name
                        : currentUser.nickname
                        ? currentUser.nickname
                        : "Lucky"
                    }}</span
                  >
                  <span>{{ $t("message.welcomeCustomerService") }}</span>
                </div>
              </div>
              <van-divider />
              <div class="row row-bottom">
                <p>{{ $t("message.addFunChat") }}</p>
                <!-- <van-button class="add-btn">{{ $t('message.addItNow') }}</van-button> -->
                <!-- <van-image width="55" height="22" fit="cover" :src="require(`@/assets/customerservice/button_classic-blue.png`)"/> -->
                <!-- <van-image width="55" height="22" fit="cover" :src="require(`@/assets/customerservice/button_${getThemeColor}.png`)"/> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="service-list">
        <div class="service-list-wrapper">
          <div
            class="service-item"
            v-for="(item, key) in customerLines"
            :key="key"
            @click="goPage(item.link)"
          >
            <div class="row row-left">
              <div>
                <van-image
                  width="27px"
                  height="27px"
                  fit="cover"
                  :src="
                    require(`@/assets/customerservice/icon_classic-blue.png`)
                  "
                />
                <!-- <van-image width="27px" height="27px" fit="cover" v-if="getThemeColor !== 'classic-red'" :src="require(`@/assets/customerservice/icon_${getThemeColor}.png`)"/> -->
                <span>{{ item.name }}</span>
              </div>
              <div>{{ item.desc }}</div>
              <div>{{ item.subDesc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import Header from "@/components/Header.vue"

@Component({
  components: {
    Header,
  },
})
export default class CustomerService extends Vue {
  private pageTitle?: any = this.$t("message.customerService")
  private currentUser: object = {}
  private customerLines?: any[] = [
    {
      name: this.$t("message.mainlineCustomerService"),
      desc: this.$t("message.mainCustomerSupport"),
      subDesc: this.$t("message.7*24"),
      link: "ChatSupport",
    },
    {
      name: this.$t("message.mainlineCustomerService"),
      desc: this.$t("message.mainCustomerSupport"),
      subDesc: this.$t("message.7*24"),
      link: "ChatSupport",
    },
  ]
  private goPage(url: string) {
    this.$router.push({ name: url })
  }
  get getThemeColor() {
    return this.$store.state.themeColor
  }
  private async userInfo() {
    await this.$http
      .get(this.$api.UserInfo)
      .then((res: any) => {
        if (res.status === 200) {
          return (this.currentUser = { ...res.data.data })
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
  private created() {
    this.userInfo()
  }
}
</script>

<style lang="less" scoped>
/* Theme color */
@import "./../../assets/css/customer-service.less";
</style>
