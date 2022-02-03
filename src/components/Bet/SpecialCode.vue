<template>
<div class="overflow_block">
    <div class="block_winning" v-for="(item, itemKey) in itemData" :key="itemKey">
        <span>{{item.title}}</span>
        <span class="number_sum round_red">{{item.code}}</span>
        <span class="info_text">{{item.info}}</span>
        <van-button type="default" :class="itembutton.class" v-for="(itembutton, Key) in item.button" :key="Key">{{itembutton.text}}</van-button>
    </div>
</div>
</template>
<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
    components: {
        
    }
})
export default class SpecialCode extends Vue {
    @Prop({ type: Array, default: [] }) public readonly itemData!: any[];
}
</script>
<style>
.overflow_block {
    display: block;
    width: 100%;
    overflow: auto;
    background: #fff;
}

.block_winning span.number_sum.round_red {
    background: #f85555;
    color: #fff;
    padding: 0;
    margin: 0;
    height: 22px;
    font-size: 10pt;
    padding: 0px 8px;
    padding-top: 8px;
    border-radius: 50%;
    position: relative;
    top: 6px;
    margin-right: 8px;
}

.block_winning span.info_text {
    font-weight: bold;
}
</style>