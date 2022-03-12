<template>
  <div id="head">
    <h1>Welcome To Leave Manage System</h1>

    <div id="nav">
      <div class="box">
        <h3>Sign up by clicking Add Employee below</h3>
        <button class="btn">
          <router-link to="/addemployee">Add Employee</router-link>
        </button>
      </div>

      <div class="box">
        <h3>Already Have an account ? Click Log In below</h3>
        <button class="btn">
          <router-link to="/login">Log In </router-link>
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  color: rgb(0, 119, 255);
  font: large;
}

h3 {
  margin-bottom: 30px;
  width: 100%;
}

.btn {
  border: 2px solid brown;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 50px;
  background-color: rgb(253, 239, 221);
  border-radius: 10px;
}

.btn a {
  text-decoration: none;
  font-size: 25px;
  color: blue;
}

.box {
  border: 1.5px solid rgb(104, 168, 7);
  padding: 55px 30px;
  border-radius: 8px;
  background-color: azure;
}
</style>
