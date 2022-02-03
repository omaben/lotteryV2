<template>
  <div class="roadbeads">
    <div class="roadbeads-wrapper">
      <div class="beads-list">
        <div class="beads-item" v-for="(beadItem, beadKey) in 10" :key="beadKey">
          <span v-for="(item, key) in beadItem" :key="key">
            {{ beadKey % 2 == 0 ? '大' : '小' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})

export default class RoadBeads extends Vue {
  @Prop({type: Object, default: () => { {} } }) public readonly data!: object;
}
</script>

<style>
.roadbeads .roadbeads-wrapper{
  height: calc(100vh - 384px);
  overflow: hidden;
}
.roadbeads .beads-list {
  padding-top: 4px;
  padding-left: 2.5px;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
}

.roadbeads .beads-list .beads-item {
  display: flex;
  flex-direction: column;
  width: 27px;
  margin: 0px 2.5px;

}

.roadbeads .beads-list .beads-item span {
  height: 27px;
  width: 27px;
  line-height: 27px;
  color: #fff;
  border-radius: 50%;
  font-size: 11px;
  margin-top: 5px;
}

.roadbeads .beads-list .beads-item:nth-of-type(odd) span {
  background-color: #fb3d0a;
}

.roadbeads .beads-list .beads-item:nth-of-type(even) span {
  background-color: #2d86fb;
}
</style>