<template>
  <div class="bet-numbers" :class="'game-type-' + gameType">
    <div class="bet-numbers-wrapper">
      <div
          class="bet-header"
          :class="getLanguage === 'en' ? 'eng-lang' : null"
      >
        <div class="title">
          <div>{{ optionTitle }}</div>
        </div>
      </div>
    </div>
    <div class="bet-numbers-content">
      <div class="bet-numbers-content-wrapper">
        <div class="numbers">
          <div
              v-for="(number, numberKey) in betInfo.content.split(',')"
              :key="numberKey"
              @click="selectNumber(number)"
              :class="setItemClass(number)+' x_'+refreshClass"
          >
            <div class="shape" :class="{'char-type': true}">
              {{ isNaN(Number(number)) ? $t(`message['${number}']`) : number }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit, Watch} from "vue-property-decorator"

@Component({})
export default class BetOfficialPlay extends Vue {
  private activeOption?: string = ""
  private selectedOption: any[] = []
  private selectedNumbers: any[] = []
  private refreshClass = 0;
  @Prop({type: String, default: ""}) public readonly mark!: string
  @Prop({type: String, default: ""}) public readonly optionTitle!: string
  @Prop({type: Number, default: ""}) public readonly indexClassification: number | undefined
  @Prop({type: Number, default: 0}) public readonly optionKey!: number // use to identify which bet group 0=万位, 1=百位 , 2=十位
  @Prop({type: String, default: "PK10"}) public readonly gameType!: string
  @Prop({type: Object}) public readonly betInfo!: any

  get gameBetOfficial() {
    return this.$store.state.gameBetOfficial
  }

  get getLanguage() {
    return this.$store.state.currLang;
  }

  private selectNumber(itemVal: any) {
    let temp: any = []
    temp.push({content: this.betInfo.mark + '-' + itemVal, id: this.betInfo.id,num:itemVal})
    if (this.gameBetOfficial[this.optionKey].length == 0) {
      this.$store.dispatch("setBetOfficial", {
        key: this.optionKey,
        arr: [...temp],
      })
    } else {
      let isExist1 = this.gameBetOfficial[this.optionKey].findIndex(
          (val: any) => val.num == itemVal
      )
      if (isExist1 == -1) {
        this.$store.dispatch("setBetOfficial", {
          key: this.optionKey,
          arr: [...this.gameBetOfficial[this.optionKey], ...temp],
        })
      } else {
        if (this.gameBetOfficial[this.optionKey].length == 0) {
          this.$store.dispatch("setBetOfficial", {
            key: this.optionKey,
            arr: [],
          })
        } else {
          this.$store.dispatch("removeBetOfficial", {
            key: this.optionKey,
            arrIndex: isExist1,
          })
        }
      }
    }
    this.refreshClass++
  }

  private setItemClass(itemVal: any) {
    let  itemValObj={content: this.betInfo + '-' + itemVal, id: this.betInfo.id,num:itemVal}
    if (this.gameBetOfficial[this.optionKey] == undefined) {
      this.gameBetOfficial[this.optionKey] = [];
    }
    let isExist1 = this.gameBetOfficial[this.optionKey].findIndex(
        (val: any) => val.num == itemVal
    )
    if (isExist1 == -1) return null
    return "number-active"
  }

  /*
    * @Author: keanu
    * @LastAuthor: null
    * @Param: val: any
    * @Return: boolean
    * @Date: 2021-04-10 10:34:15
    * @Description: Check value if number or string
  */
  private isNumber(val: any) {
    if (isNaN(Number(val))) {
      return true;
    } else {
      return true;
    }
  }

  private mounted() {}
}
</script>

<style>
.bet-numbers .bet-numbers-wrapper {
  padding: 20px 10px 0px;
}

.bet-numbers .bet-header {
  display: flex;
  flex-direction: row;
}

.bet-numbers .bet-header .title {
  flex: 1;
}

.bet-numbers .bet-header .options {
  flex: 2;
}

.bet-numbers .bet-header.eng-lang .title div {
  width: 70px;
}

.bet-numbers .bet-header .title div {
  background: #363636;
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0 100%, 0 0);
  color: #fff;
  width: 35px;
  height: 23px;
  line-height: 23px;
  position: relative;
  font-size: 12px;
  padding-left: 5px;
  text-align: left;
}

.bet-numbers .bet-header .options .options-wrapper ul {
  display: flex;
  flex-direction: row;
  border: 1px solid #f14848;
  border-radius: 5px;
  overflow: hidden;
}

.bet-numbers .bet-header .options .options-wrapper ul li {
  flex: 1;
  border-right: 1px solid #f14848;
  font-size: 12px;
  height: 23px;
  line-height: 23px;
}

.bet-numbers .bet-header .options .options-wrapper ul li:last-child {
  border-right: none;
}

.bet-numbers .bet-header .options .options-wrapper ul li.option-active {
  background: #f14848;
  color: #fff;
}

.bet-numbers .bet-numbers-content .numbers {
  display: inline-block;
  width: 100%;
  flex-direction: row;
  margin: 12px 0px 0px;
}

.bet-numbers .bet-numbers-content .numbers > div {
  width: calc(20% - 5px);
  margin: 0px 2.5px;
  float: left;
  height: 50px;
  line-height: 50px;
  color: #797979;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bet-numbers .bet-numbers-content .numbers > div .shape {
  height: 40px;
  width: 40px;
  line-height: 40px;
  background: url("../../../assets/game/cbimage.jpg") no-repeat;
  background-position: 0px 0px;
  background-size: 80px;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
}

.bet-numbers .bet-numbers-content .numbers > div.number-active .shape {
  background: url("../../../assets/game/cbimage.jpg") no-repeat;
  background-position: -40px 0px;
  animation: beat 0.5s ease-out;
  background-size: 80px;
  color: #fff;
}

.bet-numbers .bet-numbers-content .numbers > div .shape.char-type {
  font-size: 13px;
}

@keyframes beat {
  0%,
  100%,
  50% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(1.15);
  }
}
</style>
