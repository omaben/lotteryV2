<template>
  <van-popup
    v-model="show"
    position="bottom"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    closeable
    :overlay-style="{ backgroundColor: 'rgba(0,0,0,0.2)' }"
    :style="popupOption"
    @closed="hideOfficialBetSwitch()"
    class="official-bet-switch">
    <div class="popup-title">
      <div>{{ $t('message.playSwitch')}}</div>
    </div>
    <div class="popup-content">
      <div class="popup-content-wrapper">
        <van-tree-select 
          height="100%"
          :items="items"
          animated
          :main-active-index.sync="active">
          <template #content>
            <!-- can make component to make the items flexible -->
            <div class="switch-items">
              <div class="switch-items-wrapper">
                <div
                  v-for="(switchItem, switchKey) in switchItems"
                  :key="switchKey"
                  class="item"
                  @click="selectSwitchItem(switchKey)"
                  :class="activeItem == switchKey ? 'active-item': null">
                  {{ switchItem }}
                </div>
              </div>
            </div>
          </template>
        </van-tree-select>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class OfficialBetSwitch extends Vue {
  private show?: boolean = false;
  private active?: number = 0;
  private activeItem?: number = 0;
  private items?: any[] = [
    { text: '五星复式' },
    { text: '五星单式' },
    { text: '五星组合' },
    { text: '组选120' },
    { text: '组选120' },
    { text: '组选30' },
    { text: '组选20' },
    { text: '组选10' },
    { text: '组选5' },
  ];
  private switchItems?: any = [
    '定位胆',
    '五星',
    '后四',
    '后三',
    '中三',
    '前三',
    '前二',
    '不定胆',
    '大小单双',
    '任三',
    '任四',
    '前四',
    '后二',
    '任二'
  ];
  @Prop({type: Boolean, default: false }) public readonly isShow?: boolean;
  private popupOption?: object = {
    height: 'calc(100vh - 288px)',
    bottom: '90px',
  };
  @Emit('hideOfficialBetSwitch') send(value: any) {};
  private hideOfficialBetSwitch() {
    this.show = false;
    this.send(false);
  }
  private selectSwitchItem(index: number) {
    this.activeItem = index;
  }
  private mounted() {
    this.show = this.isShow;
  }
}
</script>

<style>
.official-bet-switch .popup-title {
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  background: #363636;
  color: #fff;
  font-size: 14px;
  height: 25px;
  line-height: 25px;
}

.official-bet-switch .van-popup__close-icon--top-right{
  top: 2px;
  right: 5px;
  font-size: 20px;
}

.official-bet-switch .popup-content .popup-content-wrapper {
  height: calc(100vh - 288px - 25px);
}

.official-bet-switch .van-tree-select .van-tree-select__content {
  flex: 3;
}

.official-bet-switch .van-tree-select .van-tree-select__nav {
  flex: 1;
  background-color: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.1);;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.48);
}

.official-bet-switch .van-tree-select .van-tree-select__nav-item {
  padding: 10px 10px;
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
}

.official-bet-switch .van-tree-select .van-sidebar-item--select {
  background: rgb(237, 64, 64);
  color: #fff;
  border-bottom: none;
}

.official-bet-switch .van-tree-select .van-sidebar-item--select::before {
  display: none;
}

.official-bet-switch .switch-items {
  display: flex;
}

.official-bet-switch .switch-items .switch-items-wrapper {
  padding: 17px 0px 17px 10px;
}

.official-bet-switch .switch-items .switch-items-wrapper .item {
  width: calc(33.3333% - 10px);
  float: left;
  margin: 0px 10px 20px 0px;
  height: 35px;
  line-height: 35px;
  border-radius: 3px;
  background: #edf1f6;
  font-size: 14px;
  color: #a6adb7;
}

.official-bet-switch .switch-items .switch-items-wrapper .item.active-item {
  background: rgb(237, 64, 64);
  color: #fff;
}
</style>