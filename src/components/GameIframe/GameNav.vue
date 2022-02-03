<template>
  <div class="game-nav" id="gamenav">
    <div class="game-nav-wrapper" :class="hasMenu ? 'has-menu' : null">
      <van-nav-bar
        :left-text="$t('message.back')"
        :right-text="$t('message.gameAssistant')"
        @click-left="goBackPage()"
        @click-right="showMenu(null)"
        left-arrow>
        <template #title>
          <van-dropdown-menu 
            :class="getLanguage === 'en' ? 'eng-lang' : null"
            :close-on-click-overlay="false"
          >
            <van-dropdown-item 
              @open="openDropMenu()"
              @closed="closeDropMenu()"
              v-model="value"
              :options="[]"
              :title="playGroupName ? $t(`message['${playGroupName}']`) : ''"
              z-index="1000"
              ref="item">
              <div class="drop-down-box-content">
                <div class="box-content-wrapper" v-if="gameTypeList.length > 0">
                  <div class="per-type-box"  v-for="(gameType, gameTypeKey) in gameTypeList" :key="gameTypeKey">
                    <van-divider 
                      :style="{ color: '#e63333', borderColor: '#e63333', padding: '0 16px', margin: '5px 0px 10px' }">
                      <!-- {{ gameType.name }} -->
                       {{ $t(`message['${gameType.mark }']`) }}
                    </van-divider>
                    <div class="list-button">
                      <van-button
                        v-for="(item, key) in gameList[gameType.id]"
                        :key="key"
                        @click="selectItem(item)"
                        type="default"
                        size="normal">
                        {{ $t(`message['${item.name}']`) }}
                        <!-- <span v-if="item.isHot" class="is-hot">热</span> -->
                      </van-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="close-drop-down">
                <div @click="hideDropDown()">{{ $t('message.putAway')}}</div>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </template>
      </van-nav-bar>
    </div>
    <GameMenu
      class="game-menu-right"
      :isShow="isGameMenu"
      @onOpenMenu="onOpenMenu($event)"
      @onCloseMenu="onCloseMenu($event)"/>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import GameMenu from '@/components/GameIframe/GamePopup/GameMenu.vue';

import {GameClassificationCoreService} from "@/core/GameCore/Service/GameClassificationCoreService";
import {GameClassificationSearchCoreMessage} from "@/core/GameCore/Message/GameClassificationSearchCoreMessage";
import { GameInfoCoreService } from "@/core/GameCore/Service/GameInfoCoreService"
import { GameInfoSearchCoreMessage } from "@/core/GameCore/Message/GameInfoSearchCoreMessage"

@Component({
  components: {
    GameMenu
  }
})

export default class GameNav extends Vue {
  private value?: boolean = false;
  private isShowDropMenu?: boolean = false;
  private isGameMenu?: boolean = false;
  private hasMenu?: boolean = false;
  private gameTypeList?: any = [
    // 'PK10',
    // '六合彩',
    // '时时彩',
    // '快三',
    // '11选5'
  ];
  private gameList?: any = {
    // 'PK10': [
    //   { name: '分赛车', isHot: false },
    //   { name: '极速赛车', isHot: false },
    //   { name: '闪电飞誕', isHot: false },
    //   { name: '三分赛车', isHot: false },
    //   { name: '幸运飞誕', isHot: true },
    //   { name: '五分赛车', isHot: false },
    //   { name: '北京赛车', isHot: false }
    // ],
    // '六合彩': [
    //   { name: '五分六合彩', isHot: true },
    //   { name: '十分六合彩', isHot: false },
    //   { name: '香港六合彩', isHot: false }
    // ],
    // '时时彩': [
    //   { name: '分分彩', isHot: false },
    //   { name: '秒速时时彩', isHot: false },
    //   { name: '二分彩', isHot: false },
    //   { name: '五分彩', isHot: false },
    //   { name: '重庆时时彩', isHot: false },
    //   { name: '天津时时彩', isHot: false }
    // ],
    // '快三': [
    //   { name: '一分快三', isHot: false },
    //   { name: '极速快三', isHot: false },
    //   { name: '三分快三', isHot: false },
    //   { name: '五分快三', isHot: false },
    //   { name: '十分快三', isHot: false },
    //   { name: '江苏快三', isHot: false },
    //   { name: '北京快三', isHot: false },
    //   { name: '安徽快三', isHot: false },
    //   { name: '甘肃快三', isHot: false },
    //   { name: '上海快三', isHot: false },
    //   { name: '河北快三', isHot: false }
    // ],
    // '11选5': [
    //   { name: '一分11选5', isHot: false },
    //   { name: '三分11选5', isHot: false },
    //   { name: '五分11选5', isHot: false },
    //   { name: '广东11选5', isHot: false }
    // ],
  };
  private tempGameList: any = [];

  @Emit('openDropMenu') sendOpen(value: any) {};
  private openDropMenu() {
    this.onCloseMenu(false);
    this.sendOpen(true);
  }

  @Emit('closeDropMenu') sendClose(value: any) {};
  private closeDropMenu() {
    this.sendClose(false);
  }

  private goBackPage() {
    this.$router.back();
  }

  private hideDropDown() {
    let _item = this.$refs.item as any;
    _item.toggle();
  }

  private selectItem(val: any) {
    this.$store.dispatch('setPlayGroupName', val.name)
    if (this.$route.params.gameid != val.id && this.$route.params.gamename != val.name) {
      this.$router.replace(
        {
          name: 'GameIframe',
          params: {
            gameid: val.id,
            gamename: val.mark,
          }
        }
      );
    }
    this.hideDropDown();
  }

  @Emit('showMenu') sendMenu(value: any) {};
  private showMenu() {
    this.isGameMenu = !this.isGameMenu;
    this.sendMenu(this.isGameMenu);
  }

  @Emit('onOpenMenu') sendOpenMenu(value: any) {};
  private onOpenMenu(val: any) {
    this.hasMenu = val;
    this.sendOpenMenu(this.hasMenu)
  }

  @Emit('onCloseMenu') sendColseMenu(value: any) {};
  private onCloseMenu(val: any) {
    this.hasMenu = val;
    this.isGameMenu = false;
    this.sendColseMenu(this.hasMenu)
  }

  get playGroupName() {
    return this.$store.state.gameBet.playGroup.name;
  }

  get getLanguage() {
    return this.$store.state.currLang;
  }

  private filterGameByGameID(arr: any, id: any) {
    return arr.filter((val: any) => {
      if (val.id == id) {
        return val;
      }
    })
  }

  private filterGameByClassification(arr: any, id: any) {
    return arr.filter((val: any) => {
      if (val.classification == id) {
        return val;
      }
    })
  }

  private async GameClassification(){
   let params: any = new GameClassificationSearchCoreMessage();
    await GameClassificationCoreService.Search(params).then((data: any) => {
      this.gameTypeList = data;
      this.GameInfo();
    })
  } 

  private async GameInfo() {
    let params: any = new GameInfoSearchCoreMessage()
    await GameInfoCoreService.Search(params).then((data: any) => {
      let gameItem = this.filterGameByGameID(data, this.$route.params.gameid)[0];
      this.$store.dispatch('setPlayGroupName', gameItem.name)
      for (var i = 0; i < this.gameTypeList.length; i++) {
        // property id equal to classification
        this.gameList[`${this.gameTypeList[i].id}`] = this.filterGameByClassification(data, this.gameTypeList[i].id);
      }
    })
  }

  private created() {
    this.GameClassification();
  }

  private mounted() {}

}
</script>

<style>
.game-nav .game-nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.game-nav .game-nav-wrapper.has-menu {
  z-index: 99999;
}

.game-nav .van-nav-bar {
  z-index: unset;
  height: 45px;
	background-image: linear-gradient(180deg,#fc9c5d,#ee7656 0,#e04f4f 62%),linear-gradient(#e04f4f,#e04f4f);
}

.game-nav .van-nav-bar .van-nav-bar__left {
  padding-left: 10px;
}

.game-nav .van-nav-bar .van-nav-bar__left .van-icon {
  margin-right: 0px;
}

.game-nav .van-popup--top {
  left: 10px;
  width: calc(100% - 20px);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.game-nav .van-dropdown-item__content {
  max-height: 95%;
}

.game-nav .van-nav-bar .van-nav-bar__title {
  width: 30%;
}

.game-nav .van-nav-bar .van-dropdown-menu__bar {
  height: 45px;
  background: transparent;
}

.game-nav .van-nav-bar .van-dropdown-menu__title {
  color: #fff;
}

.game-nav .van-nav-bar .van-icon,
.game-nav .van-nav-bar .van-nav-bar__text {
  color: #fff;
}

.game-nav .drop-down-box-content {
  display: flex;
  flex-direction: column;
  /* height: calc(100vh - 105px); */
  height: auto;
  max-height: calc(100vh - 105px);
  overflow: hidden;
}

.game-nav .drop-down-box-content .box-content-wrapper {
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.game-nav .drop-down-box-content .list-button {
  padding-left: 10px;
}

.game-nav .drop-down-box-content .list-button button {
  float: left;
  width: calc(33.3333% - 10px);
  margin-right: 10px;
  margin-bottom: 10px;
  height: 32px;
  background: #EDF1F6;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.game-nav .drop-down-box-content .list-button button .is-hot {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: #ff5353;
  color: #fff;
}
.game-nav .close-drop-down>div {
  height: 28px;
  line-height: 28px;
  background-image: linear-gradient(to right, #e63333, #ff6363);
  color: #fff;
  position: relative;
}

.game-nav .close-drop-down>div::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 42%;
  margin-top: 0px;
  border: 3px solid;
  border-color: transparent transparent #dcdee0 #dcdee0;
  transform: rotate(135deg);
}

.eng-lang .van-ellipsis,
.eng-lang .van-button__text {
  font-size: 11px;
  white-space: break-spaces;
  line-height: 12px;
}

</style>