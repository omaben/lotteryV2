<template>
  <div>
    <Header :back="true" :msg="$t('message.newPromotion')" :leftText="$t('message.sponsoredLinks')" />
    <Modal :open="modal" :numberModal="currentModal" @closeMod="closer" />
    <van-form
      @submit="submitHandler"
      class="gest-form"
      :class="`theme-color-${getThemeColor}`"
    >
      <div class="wrapper">
        <van-row class="list-item">
          <van-col class="list-item-name item-part">
            {{ $t('message.promAgent') }}
          </van-col>
          <van-col class="item-part item-description">本站</van-col>
        </van-row>
        <van-row class="list-item">
          <van-col class="list-item-name item-part">
            {{ $t('message.userType') }}
          </van-col>
          <van-col class="item-part item-description">代理</van-col>
        </van-row>
        <van-row class="list-item">
          <h2 class="title">{{ $t('message.bonusSetting') }}</h2>
        </van-row>
        <van-row
          v-for="item in list"
          :key="item.id"
          class="list-item"
          @click="clickHandler(item)"
        >
          <van-col
            :class="[{ active: item.active }, 'list-item-name item-part']"
          >
            {{ item.name }}
          </van-col>
          <van-col class="item-part item-description" v-show="!item.active">{{
            item.description
          }}</van-col>
        </van-row>
      </div>
      <footer class="gest-form-footer">
        <div class="gest-form-text">
          {{ $t('message.setBonusDesc') }} !
        </div>
        <van-button type="primary" size="large" native-type="submit"
          >{{ $t('message.genLink') }}</van-button
        >
      </footer>
    </van-form>
  </div>
</template>
<script lang="ts">
type list = {
  id: number | string
  name: string
  description: string
  active: boolean
}
import { Component, Prop, Vue } from "vue-property-decorator"
import Header from "@/components/Header.vue"
import Modal from "./Modal.vue"

@Component({
  components: {
    Header,
    Modal,
  },
})
export default class Page extends Vue {
  private modal: boolean = false
  private submited: Boolean = false
  private current: Object[] = []
  private currentModal: Number = 1
  private list: any[] = [
    {
      id: 4,
      name: this.$t('message.setBonus'),
      description: "选择其他奖金组",
      active: false,
    },
    {
      id: 5,
      name: this.$t('message.setSportsRebates'),
      description: "选择其他返点比例",
      active: false,
    },
    {
      id: 6,
      name: this.$t('message.setRealPerson'),
      description: "选择其他返点比例",
      active: false,
    },
    {
      id: 7,
      name: this.$t('message.setRealPerson'),
      description: "选择其他返点比例",
      active: false,
    },
    {
      id: 8,
      name: this.$t('message.setRealPerson'),
      description: "选择其他返点比例",
      active: false,
    },
    {
      id: 9,
      name: this.$t('message.setRealPerson'),
      description: "选择其他返点比例",
      active: false,
    },
    {
      id: 10,
      name: this.$t('message.setRealPerson'),
      description: "选择其他返点比例",
      active: false,
    },
    {
      id: 11,
      name: this.$t('message.setRealPerson'),
      description: "选择其他返点比例",
      active: false,
    },
  ]
  submitHandler() {
    return (this.currentModal = 1), (this.modal = true), (this.submited = true)
  }
  clickHandler(ev: any) {
    let opener = true
    if (ev.name === "设置奖金") {
      this.modal = true
      this.currentModal = 0
    }
  }
  closer() {
    if (this.currentModal === 1) {
      return (this.modal = false)
    } else {
      return (this.modal = false)
    }
  }
  get getThemeColor() {
    return this.$store.state.themeColor
  }
}
</script>
<style scoped lang="less">
@import "../../assets/css/themVariables.less";
.wrapper {
  max-height: calc(100vh - 129px);
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 0;
}

.list-item {
  display: flex;
  height: 50px;
  border-bottom: 1px solid gray;
  cursor: pointer;
}
.item-part {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 3%;
  text-align: left;
}
.list-item-name {
  background-color: #ffff;
  border-right: 1px solid gray;
  width: 15%;
  cursor: pointer;
}
.item-description {
  flex: 1;
  background-color: #f1f3f7;
}
.active {
  width: 100%;
  background-color: lightgray;
}
.gest-form-footer {
  padding: 0.5% 2% 2%;
  background-color: #ffff;
}
.gest-form-text {
  color: red;
  padding: 0 0 1% 1%;
  text-align: left;
  font-size: 11pt;
}
.list-item h2 {
  margin: 0;
  background: #949393;
  width: 100%;
  text-align: left;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 15pt;
  color: #2c3e50;

  // Thems button
}
.theme-color-classic-red ::v-deep.van-button--primary {
  background: @red-back;
  border-color: #e63333;
}
.theme-color-classic-blue ::v-deep.van-button--primary {
  background: @blue-back;
  border-color: #0092e8;
}
.theme-color-simple-platinum ::v-deep.van-button--primary {
  background: @silver-back;
  border-color: #d3d4d6;
}
.theme-color-noble-black-gold ::v-deep.van-button--primary {
  background: @gold-back;
  border-color: #edc14b;
}

@media (max-width: 768px) {
  .list-item-name {
    width: 30%;
  }
}
@media (max-width: 420px) {
  .list-item-name {
    width: 40%;
  }
}
</style>
