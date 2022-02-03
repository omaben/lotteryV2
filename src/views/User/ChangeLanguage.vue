<template>
    <div class="main-change-lang">
        <Header :msg="$t('message.language')" :back="true" :leftText="'返回'"/>
        <van-radio-group v-model="selectedLanguage" class="themes_block">
            <van-cell-group >
                <van-cell
                  v-for="(themItem, themeKey) in langList"
                  :key="themeKey"
                  :title="themItem.title + `${getLanguage == themItem.name ? `(${$t('message.current')})` : ''}`"
                  clickable
                  @click="changeLang(themeKey)">
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
export default class ChangeLanguage extends Vue {
    private selectedLanguage: any = '';
    private langList: any = [
      { 
        title: this.$t('message.chinese'),
        name: 'zn' 
      },
      { 
        title: this.$t('message.english'), 
        name: 'en' 
      },
      // { 
      //   title: this.$t('message.russian'),
      //   name: 'ru' 
      // },
      // { 
      //   title: this.$t('message.hindi'),
      //   name: 'hi' 
      // }
    ];

    get getThemeColor() {
      return this.$store.state.themeColor;
    }

    get getLanguage() {
      return this.$store.state.currLang;
    }

    private filterLanguage() {
      let indexNum = this.langList.findIndex((val: any) => 
        val.name == this.getLanguage
      );
      return indexNum;
    }

    private changeLang(key: any) {
      this.selectedLanguage = `${key}`
      this.$store.dispatch('setLangauge',  this.langList[key].name)
      window.location.reload()
    }

    private created() {
      this.selectedLanguage = `${this.filterLanguage()}`;
    }

}
</script>
<style scoped lang="less">
/* Theme color */
@import "./../../assets/css/changelang.less";

/*
  * @Author: reggie 
  * @LastAuthor: reggie
  * @Param null
  * @Return null
  * @Date: 2021-04-08 14:39:00
  * @Description: Css styles for change language page.
*/

.main-change-lang .header_blue.van-nav-bar {
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
      background: red;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 100%;
    }
  }
}
</style>