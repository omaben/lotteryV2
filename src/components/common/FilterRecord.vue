<template>
  <div class="filter-container">
    <!-- <div class="filter-container-wrapper">
      <van-field
        v-model="filterDetais.userName"
        :label="$t('message.username') + ':'"
      />
      <van-field
        v-model="filterDetais.colorType"
        :label="$t('message.colorType') + ':'"
        readonly
        @click="showColorType = true"
        right-icon="arrow-down"
      />
      <div class="date">
        <span class="date-label">{{ $t("message.date") }}:</span>
        <van-field
          v-model="filterDetais.fromDate"
          readonly
          @click="showBeginDate = true"
        />
        <span class="date-divider">--</span>
        <van-field
          v-model="filterDetais.toDate"
          readonly
          @click="showEndDate = true"
        />
      </div>
      <div class="options">
        <van-checkbox
          v-if="showCheckBox"
          v-model="checked"
          checked-color="#ee0a24"
          icon-size="14px"
          shape="square"
          >{{ $t("message.subordinate") }}</van-checkbox
        >
        <van-button type="default" class="opt-btn btn-margin" size="mini">{{
          $t("message.cancel")
        }}</van-button>
        <van-button type="danger" class="opt-btn confirm" size="mini">{{
          $t("message.confirm")
        }}</van-button>
      </div>
    </div> -->

    <!-- <van-popup
      v-model="showColorType"
      class="color-type-popup"
      get-container="filter-container"
      :style="{ height: 'auto', width: '70%' }"
    >
      <div class="header">
        <span>{{ $t("message.colorType") }}</span>
      </div>
      <div class="body">
        <van-radio-group v-model="colorRadio" @change="selecColorType">
          <van-radio
            v-for="(colorItem, colorKey) in colorList"
            :key="colorKey"
            :name="colorKey"
            checked-color="red"
          >
            {{ colorItem }}
          </van-radio>
        </van-radio-group>
      </div>
    </van-popup>

    <van-popup
      v-model="showBeginDate"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-datetime-picker
        v-model="filterDetais.fromDate"
        type="datehour"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showBeginDate = false"
        :cancel-button-text="$t('message.cancel')"
        :confirm-button-text="$t('message.confirm')"
        :columns-order="['year', 'month', 'day']"
        :title="$t('message.customColumnSort')"
        @confirm="selectBeginDate"
      />
    </van-popup>

    <van-popup
      v-model="showEndDate"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-datetime-picker
        v-model="filterDetais.toDate"
        type="datehour"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showEndDate = false"
        :cancel-button-text="$t('message.cancel')"
        :confirm-button-text="$t('message.confirm')"
        :columns-order="['year', 'month', 'day']"
        :title="$t('message.customColumnSort')"
        @confirm="selectEndDate"
      />
    </van-popup>
     -->

    <div class="filter-container-wrapper">
      <div class="date">
        <span class="date-label">{{ $t("message.date") }}:</span>
        <van-field
          v-model="filterDate"
          readonly
          @click="showFilterDate = true"
          :placeholder="$t('message.selectDate')"
          right-icon
        >
          <template #right-icon>
            <van-icon size="16" :name="require('@/assets/icons/Calendar.png')" />
          </template>
        </van-field>
      </div>
      <div class="options">
        <van-button
          @click="cancelFilter"
          :disabled="filterDate === ''"
          type="default"
          class="opt-btn btn-margin"
          size="mini"
          >{{ $t("message.cancel") }}</van-button
        >
        <van-button
          @click="confirmFilter"
          :disabled="filterDate === ''"
          type="danger"
          class="opt-btn confirm"
          size="mini"
          >{{ $t("message.confirm") }}</van-button
        >
      </div>
    </div>

    <van-popup
      v-model="showFilterDate"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :title="$t('message.customColumnSort')"
        @cancel="showFilterDate = false"
        @confirm="selectDate"
        :cancel-button-text="$t('message.cancel')"
        :confirm-button-text="$t('message.confirm')"
        :columns-order="['year', 'month', 'day']"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class LotteryRecord extends Vue {
  @Prop({ type: Boolean, default: false })
  private readonly showCheckBox!: boolean;
  private showColorType: boolean = false;
  private checked: boolean = true;
  private colorRadio: number = 0;
  private beginDate?: any = "";
  private endDate?: any = "";
  private showBeginDate?: boolean = false;
  private showEndDate?: boolean = false;
  private minDate?: any = new Date(2020, 0, 1);
  private maxDate?: any = new Date(2025, 10, 1);
  private currentDate?: any = new Date();
  private filterDate?: any = "";
  private filterDetais: any = {
    userName: "",
    colorType: "所有",
    fromDate: "2021-02-24 00:00:00",
    toDate: "2021-02-24 00:00:00",
  };
  private colorList: any = [
    this.$t("message.superenaloto"),
    this.$t("message.chongqingTime"),
    this.$t("message.chongqingTime") + "2",
    this.$t("message.xinjiangTime"),
    this.$t("message.oneSixAULucky"),
  ];
  private showFilterDate: boolean = false;

  private selecColorType(val: any) {
    this.filterDetais.colorType = this.colorList[val];
    this.showColorType = false;
  }

  private selectBeginDate(val: any) {
    let month =
      val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1;
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate();

    this.filterDetais.fromDate = `${val.getFullYear()}-${month}-${date}`;
    this.showBeginDate = false;
  }

  private selectEndDate(val: any) {
    let month =
      val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1;
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate();

    this.filterDetais.toDate = `${val.getFullYear()}-${month}-${date}`;
    this.showEndDate = false;
  }

  private selectDate(val: any) {
    let month =
      val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1;
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate();
    this.filterDate = `${val.getFullYear()}-${month}-${date}`;
    this.showFilterDate = false;
  }

  private cancelFilter() {
    this.filterDate = "";
    this.$emit("cancel-filter-data");
  }

  private confirmFilter() {
    this.$emit("filter-data", this.filterDate);
  }
}
</script>

<style lang="less" scoped>
@import "./../../assets/css/filter-record.less";
</style>