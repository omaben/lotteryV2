agile team coding standard

1，language and framework
we use typescript,vue 2.6，iview adn vant

2 project name
example：my_project_name

3 file name

3.1 pages name
use(kebab-case)user-info.vue
if views dir only have one file,the name is index.vue

3.2 HTML name
use underscore

3.3 CSS, SCSS name
use css

4 id and class name
id：use “little camel-case”
class use (kebab-case) to split
complex should a “s” example:lists

5id and class should short
.navigation{} /* not recommend */
.login_box_inside_con{} /* not recommend */
.nav{} /* recommend */

6 var and function name
example：myStudentCount

7 components rules

--components
----login-form
------index.ts
------login-form.vue
or
--components
----login-form
------index.vue

8vue coding 
must typescript + decorator

import { Component, Vue , Prop} from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
@Component({
  //mounted
    components: {
      Footer,
      Header
    }
})
export default class Home extends Vue {
    //Props
    @Prop({ type: String, default: "" }) private msg?: string;
    @Prop({ type: String, default: "ellipsis" }) private iconRight?: string;
    @Prop({ type: Boolean, default: false }) private back?: boolean;
    @Prop({ type: Boolean, default: false }) private HomePage?: boolean;
    //compoent data
    private fixed: boolean = true; 
    private test: boolean = true;
    private demo: string = "";
    //plz write the return value
    private demoFunc(value:number):void{
        //......
        this.fixed = true
    }
}

component name
(PascalCase) or (kebab-case)。

// bad
mycomponent.vue
myComponent.vue

// good
my-component.vue
MyComponent.vue

// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue

<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />

Prop name
when new a prop ，the name should be camelCase，but in template should use kebab-case。

<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />


<!-- bad -->
<input v-bind:value="value" v-on:input="onInput" />

<!-- good -->
<input :value="value" @input="onInput" />

Props sequence
first is command then attr and event。

<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>

compoent options sequence

@Component({
    components: {},
    props: {},
    computed: {},
})
export default class Home extends Vue {
 
  //Props
  /*
  @Prop({ type: String, default: "" }) private msg?: string;
  ......
  /*
  
  //params
  /*
  private fixed: boolean = true; 
  ......
  /*

  //watch
  /*
    @Watch("xxxxx")
    private xxxxx(value:number):void{

    }
  */

  created() {},

  mounted() {},

  //methods
   /*

  /*
};


<template>
  ...
</template>

<script>
  /* ... */
</script>

<style>
  /* ... */
</style>

9 not allow wrap 

error example
updateSysFun(data).then(ret => {
    isSync(ret.data.id).then(rets => {
             if(rets.data.errcode === 0) {
                    console.log('success')
            }
      })
    })

(should await=true)，function name should add async
let ret = await updateSysFun(data)
let rets = await isSync(ret.data.id)
if(rets.data.errcode === 0) {
    console.log('success')
}

use function to call
export default class Home extends Vue {
  getUserInfo( id ) {
        isSync(id).then(ret=>{
            if(ret.data.errcode === 0) {            
                    console.log('success')
                }
        })
    },
  userData(){
      updateSysFun(data).then(ret=>{
                this.getUserInfo(ret.data.id)
      })
  }

}


