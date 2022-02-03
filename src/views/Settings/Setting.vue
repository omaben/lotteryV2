<template>
<!-- changePassword
      clearCache
      feedback
      checkUpdates
      launchAccount
      setup
      contactCustomerToModify
      currentVersion -->
  <div class="setting">
    <div class="page-content">
      <Header :msg="$t('message.setup')" :leftText="$t('message.back')" :back="back"/>
        <van-cell-group class="setting-options">
            <van-cell center class="modify-password" :title="$t('message.changePassword')" icon>
                <template #right-icon>
                    <div class="icon-wrap">
                        {{ $t('message.contactCustomerToModify') }}
                        <van-icon name="arrow" class="arrow" />
                    </div>
                </template>
            </van-cell>
            <van-cell center class="clear-cache" :title="$t('message.clearCache')" icon>
                <template #right-icon>
                    <div class="icon-wrap">
                        0Mb
                        <van-icon name="arrow" class="arrow" />
                    </div>
                </template>
            </van-cell>
            <van-cell @click="$router.push({path:'/CustomerService/FeedBack'})" center :title="$t('message.feedback')" icon>
                <template #right-icon>
                    <div class="icon-wrap">
                        <van-icon name="arrow" class="arrow" />
                    </div>
                </template>
            </van-cell>
            <van-cell center class="updates" :title="$t('message.checkUpdates')" icon>
                <template #right-icon>
                    <div class="icon-wrap">
                        {{ $t('message.currentVersion') }}
                        <van-icon name="arrow" class="arrow" />
                    </div>
                </template>
            </van-cell>
        </van-cell-group>
        <div class="launch-btn">
            <span>{{ $t('message.launchAccount') }}</span>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Header,
  }
})
export default class Setting extends Vue {
  private back: boolean = true;
}
</script>

<style lang="less" scoped>
/* Theme color */
@import "./../../assets/css/settings.less";
.setting {
    margin-top: 45px;
    .van-cell {
        padding: 13px 16px;
    }
    .van-cell-group {
        background: #f2f4f8;
    }
    .van-cell--center {
        justify-content: space-between;
    }
    .van-cell__title {
        flex: 0 0 auto;
    }
    .clear-cache .icon-wrap {
        color: #000;
    }
    .clear-cache,
    .updates {
        margin-bottom: 7px;
    }
    .launch-btn {
        background: #fff;
        padding: 15px 0;
    }
    .icon-wrap {
        display: flex;
        align-items: center;
        color: #aaa;
        i {
            padding-left: 3px;
        }
    }
}
</style>