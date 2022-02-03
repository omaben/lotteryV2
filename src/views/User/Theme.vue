<template>
    <div class="main-theme">
        <Header :msg="$t('message.themeSkinning')" :back="true" :leftText="$t('message.back')"/>
        <van-radio-group v-model="selectedTheme" class="themes_block">
            <van-cell-group >
                <van-cell
                  v-for="(themItem, themeKey) in themeList"
                  :key="themeKey"
                  :title="themItem.title + `${getThemeColor == themItem.color ? '(' + $t('message.current') + ')' : ''}`"
                  clickable
                  @click="changeTheme(themeKey)">
                    <template #right-icon>
                        <van-radio :name="`${themeKey}`" />
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
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
export default class Theme extends Vue {
    private selectedTheme: any = '';
    private themeList: any = [
      { title: this.$t('message.classicBlue'), color: 'classic-blue' },
      { title: this.$t('message.classicRed'), color: 'classic-red' },
      // { title: this.$t('message.nobleBlackGold'), color: 'noble-black-gold' },
      { title: this.$t('message.simplePlatinum'), color: 'simple-platinum' },
    ];

    get getThemeColor() {
      return this.$store.state.themeColor;
    }

    private filterTheme() {
      let indexNum = this.themeList.findIndex((val: any) => 
        val.color == this.getThemeColor
      );
      return indexNum;
    }

    private changeTheme(key: number) {
      this.selectedTheme = `${key}`
      this.$store.dispatch('setThemeSkin',  this.themeList[key].color)
    }

    private created() {
      this.selectedTheme = `${this.filterTheme()}`;
    }

}
</script>
<style scoped lang="less">
/* Theme color */
@import "./../../assets/css/themeskinning.less";
/*
  * @Author: reggie 
  * @LastAuthor: reggie
  * @Param null
  * @Return null
  * @Date: 2021-04-08 14:39:00
  * @Description: Css styles for theme page
*/
.main-theme ::v-deep.header_blue.van-nav-bar {
  border-radius: 0;
}
.van-cell-group {
  background: transparent;
}

.themes_block.van-radio-group ::v-deep.van-cell {
    text-align: left;
    background: transparent;
}
.themes_block.van-radio-group ::v-deep.van-cell .van-radio__icon.van-radio__icon--checked i{
    background-color: #fb5b5b;
    border-color: #f85555;
}

.theme-color.theme-color-classic-red {
  .themes_block.van-radio-group ::v-deep.van-cell .van-radio__icon.van-radio__icon--checked .van-icon {
    background: transparent !important;
    border: 1px solid #c8c9cc !important;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      background: #e32f2f;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 100%;
    }
  }
}
</style>