<template>
  <div class="how-to-play-popup">
    <van-popup
      v-model="showPopup"  
      :overlay-style="{ backgroundColor: 'rgba(0,0,0,0.2)' }"
      :close-on-click-overlay="false"
      get-container="game-iframe"
      class="how-to-play-popup"
      closeable
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('message.howToPlay') }}
        </div>
        <div class="popup-content">
          <span>{{ $t('message.oldChongqing') }} <van-icon name="arrow" class="arrow" /></span>
          <table class="table">
            <tr>
              <th>{{ $t('message.gameplayGroup') }}</th>
              <td>{{ $t('message.howToPlay') }}</td>
              <td>{{ $t('message.howToPlay') }}</td>
            </tr>
            <tr>
              <th rowspan="3">{{ $t('message.renEr') }}</th>
              <td>{{ $t('message.renErDuplex') }}</td>
              <td class="long-text">{{ $t('message.renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('message.renErDuplex') }}</td>
              <td class="long-text">{{ $t('message.renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('message.renErDuplex') }}</td>
              <td class="long-text">{{ $t('message.renErDesc') }}
              </td>
            </tr>
            <tr>
              <th rowspan="3">{{ $t('message.renEr') }}</th>
              <td>{{ $t('message.renErDuplex') }}</td>
              <td class="long-text">{{ $t('message.renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('message.renErDuplex') }}</td>
              <td class="long-text">{{ $t('message.renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('message.renErDuplex') }}</td>
              <td class="long-text">{{ $t('message.renErDesc') }}
              </td>
            </tr>
        </table>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})

export default class HowToPlayPopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShowPopup?: boolean;
  private showPopup?: any = '';
  private hidePopOver() {
    this.$emit('hide-popup', false);
  }
  private mounted() {
    this.showPopup = this.isShowPopup
  }
}
</script>

<style lang="less" scoped>
@import "./../../../assets/css/how-to-play.less";
</style>

