<template>
  <div class="home-game" id="home-game">
      <div class="hist-game-content champion">
        <div class="lottery-history ">
          <div class="header">
            <div class="left date">{{ $t("message.issue") }}</div>
            <div class="right">
              <div class="lh-wrapper title">
                <div class="championNbr">
                  <div class="nbr">0</div>
                  <div class="nbr">1</div>
                  <div class="nbr">2</div>
                  <div class="nbr">3</div>
                  <div class="nbr">4</div>
                  <div class="nbr">5</div>
                  <div class="nbr">6</div>
                  <div class="nbr">7</div>
                  <div class="nbr">8</div>
                  <div class="nbr">9</div>
                  <div class="nbr">10</div>
                </div>
              </div>
            </div>
          </div>

          <div class="body scrollable-wrapper">
            <div class="left">
              
              <div
                v-for="(item, index) in championData1"
                :key="index"
                class="lh-wrapper"
              >
                <div class="date">{{ item.date }}</div>
              </div>
            </div>
            <div class="right">
              <div
                v-for="(item, index) in championData1"
                :key="index"
                class="lh-wrapper"
              >
                <div class="championNbr">
                  <div class="nbr"  v-if="item.nums!=''">
                    <div v-if="item.nums ==0">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 1">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 2">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 3">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 4">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 5">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 6">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 7">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 8">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 9">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                  <div class="nbr">
                    <div v-if="item.nums == 10">
                      <div
                        :class="getThemeColor"
                        v-if="index != 0"
                        class="tringle"
                        :style="calculLenght(item, index)"
                      >
                        <div
                          class="inside"
                          :style="calculLenghtI(item, index)"
                        ></div>
                      </div>
                      <div class="numberLucky">{{ item.nums }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class Champion extends Vue {
  @Prop({ type: Array, default: [] }) public readonly championData1!: any[]
  @Prop({ type: Number, default: 0 }) public readonly rank!: number // default value `0` -> first rank
  private themeColor: any = {
    "classic-red": "#e63333",
    "classic-blue": "#11548f",
    "noble-black-gold": "#865920",
    "simple-platinum": "#4f4f4f",
  }

  get getThemeColor() {
    return this.$store.state.themeColor
  }

  private goPage(name: string) {
    this.$router.push({ name: name })
  }
  private calculLenght(item: any, index: any) {
    var prevouisItem = -1
    var widthchampion = 0
    var borderwidth = ""
    var i = 1
    var leftSide = ""
    var borderHeight = 30
    while (prevouisItem == -1) {
      if (this.championData1[index - i].nums != "") {
        prevouisItem = this.championData1[index - i].nums
      } else {
        borderHeight = borderHeight + 30
      }
      i++
    }
    if (item.nums > prevouisItem) {
      widthchampion = 30 * (item.nums - prevouisItem - 1) + 20
      borderwidth =
        "border-width: " + borderHeight + "px 0px 0px " + widthchampion + "px;"
      leftSide =
        "left: auto;right: 13px; border-color: transparent " +
        this.themeColor[this.getThemeColor] +
        " transparent;top: -" +
        (borderHeight - 10) +
        "px;"
    } else if (item.nums == prevouisItem) {
      borderwidth =
        "border-left: 2px solid " +
        this.themeColor[this.getThemeColor] +
        ";top:-" +
        (borderHeight - 10) +
        "px;left: 10px;height: " +
        (borderHeight - 30) +
        "px;"
    } else {
      widthchampion = 30 * (prevouisItem - item.nums - 1) + 20
      borderwidth =
        "border-width: 1px 1px " +
        borderHeight +
        "px " +
        widthchampion +
        "px;top:-" +
        (borderHeight - 10) +
        "px;"
    }
    return borderwidth + leftSide
  }
  private calculLenghtI(item: any, index: any) {
    var prevouisItem = -1
    var widthchampion = 0
    var borderwidth = ""
    var i = 1
    var borderHeight = 30
    while (prevouisItem == -1) {
      if (this.championData1[index - i].nums != "") {
        prevouisItem = this.championData1[index - i].nums
      } else {
        borderHeight = borderHeight + 30
      }
      i++
    }
    if (item.nums > prevouisItem) {
      widthchampion = 30 * (item.nums - prevouisItem - 1) + 20
      borderwidth =
        "right: 0px;top: -" +
        (borderHeight - 1) +
        "px;left: auto;border-color: transparent #fff;border-width: " +
        borderHeight +
        "px 1px 1px " +
        widthchampion +
        "px;"
    } else if (item.nums == prevouisItem) {
      borderwidth = "display:none"
    } else {
      widthchampion = 30 * (prevouisItem - item.nums - 1) + 20
      borderwidth =
        "border-width: 1px 1px " + borderHeight + "px " + widthchampion + "px;"
    }
    return borderwidth
  }
}
</script>

<style>
.lottery-history .header {
  display: inline-flex;
  height: 30px;
  line-height: 30px;
  width: 100%;
}

.lottery-history .header .left {
  width: 80px;
  background-color: #ecf4ff;
}

.lottery-history .header .right {
  width: calc(100% - 80px);
}

.lottery-history .header .right .lh-wrapper.title {
  background: #fff;
}
.lottery-history .body {
  display: inline-flex;
  height: calc(100vh - (49px + 30px + 28px + 60px));
  overflow: hidden;
  overflow-y: auto;
}

.lottery-history .lottery-history .header .left.scrollable-wrapper {
  padding-bottom: 50px;
}
.lottery-history .body .left {
  width: 80px;
}

.lottery-history .body .right {
  width: 100%;
}
.championNbr {
    display: contents;
}
</style>
