<template>
  <div class="prom-item" @click="goPage(itemData.id)">
    <div class="prom-item-con">
      <div class="item-details">
        <span>
          {{ itemData.name }}
        </span>
        <!-- <span> {{ `${itemData.startTime} - ${itemData.endTime}` }} </span> -->
      </div>
      <div class="item-img">
        <img :src="require('@/assets/live/live-test-image.jpg')" style="width:100%"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter
@Component({})
export default class PromotionListItem extends Vue {
  @Prop({ type: Object, default: {} }) public readonly itemData!: any[]
  @Prop({ type: String, default: "" }) public title?: ""

  private goPage(id: string) {
    this.$router.push({ name: "live", params: { id } }).catch( (e: any) => {
      if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
          Promise.reject(e)
      }
    })
  }

}
</script>

<style>

.prom-item {
  float: left;
  width: calc(50% - 5px);
  min-width: calc(50% - 5px);
  margin-right: 5px;
  margin-bottom: 5px;
  height: 150px;
  max-height: 150px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.prom-item::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url('../../assets/live/live-border.png') no-repeat;
  background-size: 100% 100%;
}

.item-details {
  position: absolute;
  top: 0;    
  z-index: 1;
  left: 0;
  min-width: 100px;
  color: #ffff;
  text-align: center;
  background: linear-gradient(180deg, #fc9c5d 0%, #ee7656 33%, #e04f4f 62%),
              linear-gradient(#ffffff, #ffffff);
  border-bottom-right-radius: 10px;
}

.item-details span {
  font-size: 12px;
}
.item-img {
  overflow: hidden;
  display: flex;
}

.item-img img {
  object-fit: cover;
  height: 150px;
  width: 100%;
}

</style>
