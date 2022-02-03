<template>
  <!-- 
    * @Author: keanu 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-16 10:39:12
    * @Description: Account management page
  -->
  <div class="account-management">
    <Header :msg="$t('message.accountManagement')" :back="true" :leftText="'返回'"/>
    <div class="account-managemen-wrapper">
      <van-cell-group>
        <van-cell
          v-for="(item, key) in links"
          :icon="require(`@/assets/icons/${item.icon}`)"
          :key="key"
          :title="item.title"
          is-link
          :to="{ name: item.url }" />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Header
  }
})

export default class AccountManagement extends Vue {
  private links: any = [
    { title: this.$t('message.changePassword'), url: 'ChangePassword', icon: 'change-password-icon.png'},
    { title: this.$t('message.changeWithdrawPassword'), url: 'ChangeWithdrawPassword', icon: 'change-withdrawal-password-icon.png'}
  ];
}
</script>

<style scoped>
.account-managemen-wrapper {
  width: 90%;
  margin: 10px auto;
}
.account-managemen-wrapper .van-cell-group {
  background-color: unset;
}
.account-managemen-wrapper .van-cell {
  margin-bottom: 10px;
  border-radius: 5px;
}
.account-managemen-wrapper .van-cell__title {
  text-align: left;
  padding-left: 5px;
}
</style>