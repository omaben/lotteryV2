<template>
  <div class="home">
    <Header :msg="$t('message.setup')" :back="back"/>
     <van-cell-group class="link_user info">
            <van-cell center :title="$t('message.changePassword')">
                <template #right-icon>
                    <p>{{ $t('message.contactCustomerServiceModiy') }}</p>
                    <van-icon name="arrow" class="arrow" />
                </template>
            </van-cell>
            <van-cell center :title="$t('message.clearCache')" >
                <template #right-icon>
                    <h3>0Mb</h3>
                </template>
            </van-cell>
            <van-cell center :title="$t('message.feedback')">
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
            </van-cell>
            <van-cell center :title="$t('message.checkUpdates')">
                <template #right-icon>
                    <p>{{ $t('message.currentVersion') }}</p>
                    <van-icon name="arrow" class="arrow" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-button type="default" size="large" class="button_large">{{ $t('message.signoutAccount') }}</van-button>
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
export default class Installation extends Vue {
   private back: boolean = true;
}
</script>