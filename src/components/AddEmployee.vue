<template>
  <div id="head">
    <img class="logo" src="../assets/Codelogicx-Technologies.png" />
    <h1>Add Employee</h1>
    <div class="form">
      <form @submit.prevent="addEmployee">
        <div>
          <input type="text" v-model="name" placeholder="Enter Name" required />
        </div>
        <div>
          <input
            type="text"
            v-model="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <input
            type="number"
            v-model="mobileNo"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div>
          <input
            type="number"
            v-model="designationId"
            placeholder="Enter Designation Id"
          />
        </div>
        <div>
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <button type="submit">Sing In</button>
        </div>
      </form>
    </div>
    <div>
      <h4 class="loginbtn">
        Already Have an account 😊 Click To
        <span
          ><a>
            <router-link to="/login">Log In</router-link>
          </a></span
        >
      </h4>
    </div>
  </div>
</template>

<script>

import axois from "axios";


export default {
  name: "AddEmployee",
  data() {
    return {
      name: "",
      email: "",
      mobileNo: null,
      designationId: null,
      password: "",
    };
  },

  methods: {
    async addEmployee() {
      let result;

      result = await axois.post("http://localhost:3000/api/add-employee", {
        name: this.name,
        email: this.email,
        mobile_no: this.mobileNo,
        designation_id: this.designationId,
        password: this.password,
      });

      console.log(result);

      if (result) {
        this.$router.push("/login");
      }
    },
  },
  
};
</script>
<style scoped>
input {
  border: 2px dotted rgb(0, 153, 255);
  border-radius: 15px;
  padding: 20px 30px;
}

h1 {
  margin: 30px 0px;
  color: green;
}

.form input[type="number"]:hover {
  background-color: wheat;
  font-size: 17px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s ease-in;
  border: 2px dotted red;
}

.form input[type="text"]:hover {
  background-color: wheat;
  font-size: 17px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s ease-in;
  border: 2px dotted red;
}

.form input[type="password"]:hover {
  background-color: wheat;
  font-size: 17px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s ease-in;
  border: 2px dotted red;
}

::placeholder {
  font-size: 20px;
  text-align: center;
  color: rgb(255, 44, 7);
}

.form button {
  border: 2px solid brown;
  cursor: pointer;
  background-color: rgb(253, 239, 221);
  border-radius: 10px;
  color: red;
  width: 150px;
  height: 40px;
  font-size: bolder;
  font-size: 20px;
  letter-spacing: 3px;
}

.form button:hover {
  background-color: rgb(0, 225, 255);
  color: white;
  transition: 0.5s;
  border: 2px dashed blueviolet;
}

.loginbtn {
  margin-top: 25px;
  color: blueviolet;
}

a {
  color: rgb(255, 102, 0);
  text-decoration: none;
}

a:hover {
  color: springgreen;
  transition: 0.75s ease-in;
}
</style>
