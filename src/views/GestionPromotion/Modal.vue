<template>
  <van-popup
    v-model="open"
    class="modal"
    :class="`theme-color-${getThemeColor}`"
    :close-on-click-overlay="false"
  >
    <header class="modal-header">
      <h3>{{ currentBet[numberModal].name }}</h3>
    </header>
    <van-field name="radio">
      <template #input>
        <van-radio-group v-model="modalRadio" @change="reset">
          <van-radio
            :name="index"
            v-for="(item, index) in currentBet[numberModal].bets"
            :key="currentBet.id + item[numberModal] + index"
            class="modal-input"
            >{{ item }}

            <template #icon="props">
              <div class="icon-wrapper">
                <div :class="[{ activeIcon: props.checked }, 'img-icon']" />
              </div>
            </template>
          </van-radio>
        </van-radio-group>
      </template>
    </van-field>
  </van-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({
  components: {},
})
export default class Modal extends Vue {
  @Prop({ type: Boolean, default: false }) private open?: boolean
  @Prop({ type: Number, default: 0 }) private numberModal?: 0
  private modalRadio: Number = 0
  private currentBet: Object[] = [
    {
      id: "1_modal",
      name: this.$t('message.selectBonusGroup'),
      bets: ["2.0%", "1.9%", "1.8%", "1.7%", "1.6%"],
    },
    {
      id: "2_modal",
      name: this.$t('message.selectUserType'),
      bets: [this.$t('message.proxy'), this.$t('message.member')],
    },
  ]
  reset() {
    this.$emit("closeMod")
    setTimeout(() => {
      this.modalRadio = 0
    }, 400)
  }
  get getThemeColor() {
    return this.$store.state.themeColor
  }
}
</script>
<style scoped lang="less">
@import "../../assets/css/themVariables.less";
.modal-active {
  display: flex;
}
.modal {
  width: 30%;
  background-color: lavender;
}
.modal-header {
  background: linear-gradient(to right, #e63333, #ff6363);
  color: #ffff;
  padding: 3% 5%;
  text-align: left;
}
.modal-header h3 {
  margin: 0;
}
.modal-input {
  margin: 15px 0;
}
.icon-wrapper {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
}
.img-icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
//Thems  ....

.theme-color-classic-red {
  .modal-header {
    background: @red-back;
  }
  .activeIcon {
    background-color: red;
  }
}
.theme-color-classic-blue {
  .modal-header {
    background: @blue-back;
  }
  .activeIcon {
    background-color: #2c6297;
  }
  .icon-wrapper {
    border-color: #4272a2;
  }
}
.theme-color-noble-black-gold {
  .modal-header {
    background: @gold-back;
  }
  .activeIcon {
    background-color: #edc14b;
  }
  .icon-wrapper {
    border-color: #edc14c;
  }
}
.theme-color-simple-platinum {
  .modal-header {
    background: @silver-back;
  }
  .activeIcon {
    background-color: #ababab;
  }
  .icon-wrapper {
    border-color: #ababab;
  }
}

@media (max-width: 576px) {
  .modal {
    width: 70%;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .modal {
    width: 50%;
  }
}
</style>
