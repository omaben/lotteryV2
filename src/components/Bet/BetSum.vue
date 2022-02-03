<template>
<div>
    <div class="block_winning" v-for="(item, itemKey) in itemData" :key="itemKey">
        <span>{{item.title}}</span>
        <span class="number_sum">{{item.sum}}</span>
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
export default class BetSum extends Vue {
    @Prop({ type: Array, default: [] }) public readonly itemData!: any[];
}
</script>