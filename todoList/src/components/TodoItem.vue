<template>
 <li @click="handleDel">{{content}}</li>
</template>

<script>
export default {
  //接收父组件传值
  props:['content']
  methods:{
    handleDel:function(){
      this.$emt('delete',this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  //scoped  表示局部样式 作用域修饰符

</style>
