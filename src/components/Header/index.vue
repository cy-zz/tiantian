<template>
  <header id="header">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
      title : {
        type : String,
        default : '天天电影'
      }
    }
};
</script>

<style scoped>
/* scoped ：这部分样式代码只会在这个组件内生效，不会影响其他组件，避免样式冲突*/
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: rgb(253, 62, 93);
  border-bottom: 1px solid rgb(253, 62, 93);
  position: relative;
}
#header h1 {
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>