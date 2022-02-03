<template>
  <div>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch, Inject, Prop} from "vue-property-decorator";
import * as PIXI from 'pixi.js'
// @ts-ignore
window.PIXI = PIXI; //Solution to use dragonbones with PIXI v5
const dragonBones = require("pixi5-dragonbones");
@Component
export default class extends Vue {
  private PIXIWrapper: any;
  private armatureDisplay: any;
  private PIXI_ROOT: PIXI.Application;
  @Prop({type: String, default: ''})
  private name: string | undefined;

  private created() {
    this.PIXI_ROOT = new PIXI.Application({
      antialias: true,
      transparent: true,
      width: 500,
      height: 500,
    });
    document.body.appendChild(this.PIXI_ROOT.view);
    this.PIXI_ROOT.view.className = "PIXI-ROOT";
    this.play();
  }

  @Watch('name')
  private play() {
    if (this.name == '') {
      return;
    }
    const loader = new PIXI.Loader()
    loader
        .add('skeleton', '/resource/live/live_gift_' + this.name + '_ske.json')
        .add('texture_json', '/resource/live/live_gift_' + this.name + '_tex.json')
        .add('texture_png', '/resource/live/live_gift_' + this.name + '_tex.png')
        .load(this.onAssetsLoaded);
  }

  private onAssetsLoaded(loader: any, res: { skeleton: { data: any; }; texture_json: { data: any; }; texture_png: { texture: any; }; }) {
    // console.log("on assets loaded");
    const factory = dragonBones.PixiFactory.factory;
    factory.parseDragonBonesData(res.skeleton.data);
    factory.parseTextureAtlasData(res.texture_json.data, res.texture_png.texture); //解析纹理数据
    let armatureDisplay = factory.buildArmatureDisplay(this.name);
    armatureDisplay.animation.play(this.name,1);
    armatureDisplay.scale.set(0.3, 0.3);
    armatureDisplay.x = 250;
    armatureDisplay.y = 300;
    setTimeout(()=>{
      this.PIXI_ROOT.stage.removeChild(armatureDisplay);
    },5000)
    this.PIXI_ROOT.stage.addChild(armatureDisplay);
  }

  private destroyed() {
    // console.log(this.PIXI_ROOT.view)
    document.body.removeChild(this.PIXI_ROOT.view)
  }
}
</script>
<style>
.PIXI-ROOT {
  position: absolute;
  top: 100px;
  background: rgba(255, 255, 255, 0); /*关键点*/
  width: 100vw;
  height: calc(100vh - 100px);
  z-index: -1;
}
</style>