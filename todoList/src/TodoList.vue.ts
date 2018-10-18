/**
 * Created by lenovo on 2018/10/18.
 */
<template>
  <div>
    <input v-model="inputValue/>
  <button @click="handleSubmit">提交</button>
    </div>
  <ul>
    <todo-item v-for="(item,index) of list"></todo-item>
    :key:"index"
    :content:"item"
   :index:"index"
  @delete:"handleDel"
    </ul>
  </template>

  <script>
    //引入子组件
    import TodoItem form './components/TodoItem'
    export default{
      components:{
        //注册局部组件  以<todo-item></todo-item>形式使用TodoItem组件
        'todo-item':TodoItem
      }
          //data:function(){ 等价于：
      data(){   //es6 写法
           return {
             inputValue:''，
             list:[]
           }
      },
      methods:{
        handleSubmit(){
          this.list.push(this.inputValue);
          this.inputValue="";
        },
        handleDel(index){
          this.list.splice(index,1);
        }
      }
    }
    </script>
