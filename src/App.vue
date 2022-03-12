<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 100px;
}
.form input,
textarea {
  width: 300px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.form button {
  width: 320px;
  height: 20px;
  border: 1px solid black;
  background: skyblue;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}
</style>
