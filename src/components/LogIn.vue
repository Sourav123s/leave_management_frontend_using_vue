<template>
  <div>
    <img class="logo" src="../assets/Codelogicx-Technologies.png" />
    <h1>Log In</h1>
    <div class="form">
      <form @submit.prevent="login">
        <div>
          <input
            type="text"
            v-model.trim="email"
            placeholder="Enter User Name"
            required
          />
        </div>
        <div>
          <input
            type="password"
            v-model.trim="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
// import {bus} from "../main"
import axois from "axios";
export default {
  name: "LogIn",

  data() {
    return {
      email: "",
      password: "",
      user: {},
    };
  },

  methods: {
    async login() {
      let login = await axois.post("http://localhost:3000/api/signin", {
        email: this.email,
        password: this.password,
      });

      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      const token = localStorage.getItem("token");

      const auth = login.data.details.token;

      if (auth == token) {
        this.$router.replace("/employee-details");
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
  transition: 0.75s ease-out;
}
</style>
