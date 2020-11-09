<template>
  <div id="app">
    <el-collapse-transition>
      <router-view/>
    </el-collapse-transition>
  </div>
</template>

<style>
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}



</style>
