<template>
  <div class="draw-numbers" :class="'game-type-'+gameType">
    <div class="draw-numbers-wrapper">
      <div class="issue" v-if="drawData.currentIssue">
        {{ drawData.currentIssue + ':' }}
      </div>
      <div class="drawnum-info">
        <div class="drawnum">

          <ul v-if="drawData.currentDrawNumber">
            <li v-for="(number, key) in drawData.currentDrawNumber.split(',')" :key="key" :class="'number-'+number">
              {{ gameType == 'PK10' ? '' : number }}
            </li>
          </ul>

          <ul v-if="drawData.winningNumbers">
            <li v-for="(number, key) in drawData.winningNumbers.split(',')" :key="key" :class="'number-'+number">
              {{ gameType == 'PK10' ? '' : number }}
            </li>
          </ul>

        </div>
        <!--        <div class="draw-info">-->
        <!--          <ul v-if="drawData.currentDrawNumber">-->
        <!--            <li v-for="(info, key) in parseDrawNumbers(drawData.currentDrawNumber.split(','))" :key="key">-->
        <!--              {{ info }}-->
        <!--            </li>-->
        <!--          </ul>-->

        <!--          <ul v-if="drawData.winningNumbers">-->
        <!--            <li v-for="(info, key) in parseDrawNumbers(drawData.winningNumbers.split(','))" :key="key">-->
        <!--              {{ info }}-->
        <!--            </li>-->
        <!--          </ul>-->

        <!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {}
})

export default class DrawNumbers extends Vue {
  @Prop({type: String, default: 'PK10'}) public readonly gameType!: string;
  @Prop({
    type: Object, default: () => {
      {
      }
    }
  }) public readonly drawData!: object;


  private parseDrawNumbers(drawNumArr: any) {
    let tempArr = [];
    let dTNumber = Number(drawNumArr[0]) + Number(drawNumArr[1]);
    let smallBig = dTNumber < 12 ? '小' : '大';
    let sinDou = dTNumber % 2 === 0 ? '双' : '单';
    let longDragon: any = this.parseLongDragon(drawNumArr);
    tempArr = [dTNumber, smallBig, sinDou, ...longDragon];
    return tempArr;

  }

  private parseLongDragon(drawNumArr: any) {
    let tempArr = [];
    for (var i = 0; i < drawNumArr.length; i++) {
      if (i < (drawNumArr.length / 2)) {
        var text = Number(drawNumArr[i]) > Number(drawNumArr[drawNumArr.length - (i == 0 ? 1 : (i + 1))]) ? '龙' : '虎';
        tempArr.push(text);
      }
    }
    return tempArr;
  }

  private combinedNumbers(drawNumArr: any) {
    let combinedNumbers: any = 0;
    for (var i = 0; i < drawNumArr.length; i++) {
      combinedNumbers = combinedNumbers + Number(drawNumArr[i]);
    }
    return combinedNumbers;
  }

}
</script>

<style scoped>
.current-draw-info {
  min-height: 58px;
  height: 58px;
}

.draw-numbers {
  border-bottom: 1px solid #dbdbdb;
  min-height: 58px;
  height: 58px;
  display: flex;
}

.draw-numbers .draw-numbers-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  width: 100%;
}

.draw-numbers .draw-numbers-wrapper .issue {
  margin-right: 5px;
  font-size: 14px;
  color: #363636;
  flex: 1;
  text-align: left;
}

.draw-numbers .draw-numbers-wrapper .drawnum-info  {
  flex: 4;
}

.draw-numbers .drawnum-info .drawnum ul,
.draw-numbers .drawnum-info .draw-info ul {
  display: flex;
  flex-direction: row;
}

/*
  Determine the style of the lottery number according to the game type
*/
.draw-numbers.game-type-PK10 {
}

.draw-numbers.game-type-PK10 .draw-info ul li {
  font-size: 13px;
  height: 17px;
  width: 17px;
  border-radius: 2px;
  border: 1px solid #f14848;
  color: #f14848;
  line-height: 17px;
}

.draw-numbers.game-type-PK10 .draw-info ul li:not(:last-child) {
  margin-right: 1px;
}

.draw-numbers.game-type-PK10 .drawnum {
  margin-bottom: 2px;
}

.draw-numbers.game-type-PK10 .drawnum ul li {
  width: 21px;
  height: 21px;
  border-radius: 2px;
}

.draw-numbers.game-type-PK10 .drawnum ul li:not(:last-child) {
  margin-right: 1px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-0 {
  background: url('../../../assets/game/base_zero.png');
  background-repeat: repeat;
  background-size: cover;
  width: 21.5px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-1 {
  background: url('../../../assets/game/base.png');
  background-position: 0;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-2 {
  background: url('../../../assets/game/base.png');
  background-position: -21px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-3 {
  background: url('../../../assets/game/base.png');
  background-position: -42px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-4 {
  background: url('../../../assets/game/base.png');
  background-position: -63px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-5 {
  background: url('../../../assets/game/base.png');
  background-position: -84px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-6 {
  background: url('../../../assets/game/base.png');
  background-position: -105px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-7 {
  background: url('../../../assets/game/base.png');
  background-position: -126px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-8 {
  background: url('../../../assets/game/base.png');
  background-position: -147px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-9 {
  background: url('../../../assets/game/base.png');
  background-position: -168px;
  background-size: 210px;
}

.draw-numbers.game-type-PK10 .drawnum ul .number-10 {
  background: url('../../../assets/game/base.png');
  background-position: -189px;
  background-size: 210px;
}

/*
.draw-numbers.game-type-marksix {}

.draw-numbers.game-type-ssc {}

.draw-numbers.game-type-k3 {}

.draw-numbers.game-type-eleven_five {}

.draw-numbers.game-type-other {}
*/
</style>