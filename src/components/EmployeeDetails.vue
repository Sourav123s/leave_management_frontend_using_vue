<template>
  <div>
    <div class="leave">
      <h4 class="loginbtn">
        Want a Leave ? Click Here to
        <span
          ><a
            ><router-link to="/apply-leave">Apply For Leave</router-link></a
          ></span
        >
      </h4>
      <h4 class="loginbtn">
        Click here to check
        <span
          ><a
            ><router-link to="/my-leave">All Your Leaves</router-link></a
          ></span
        >
        taken
      </h4>
      <h4 class="loginbtn">
        <span v-if="!isAdmin">
          Approved OR Reject A
          <a
            ><router-link to="/approve-reject">Leave request</router-link></a
          ></span
        >
      </h4>
    </div>

    <h1>Employee Details</h1>
    <table class="table">
      <tr>
        <td>id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Mobile Number</td>
        <td>No Of Sick Leaves</td>
        <td>No Of Casual Leaves</td>
        <td>Designation Id</td>
        <td>Employee Id</td>
      </tr>
      <tr v-if="ismounted">
        <td>{{ user.id }}</td>

        <td>{{ user.name }}</td>

        <td>{{ user.email }}</td>

        <td>{{ user.mobile_no }}</td>

        <td>{{ user.no_of_sick_leaves }}</td>

        <td>{{ user.no_of_casual_leaves }}</td>

        <td>{{ user.designation_id }}</td>

        <td>{{ user.emp_id }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EmployeeDetails",
  data() {
    return {
      isAdmin: true,
      ismounted: false,
      token: "",
      user: null,
      designation: null,
    };
  },

  async mounted() {
    this.token = localStorage.getItem("token");
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));

    const id = {
      id: userDetails.id,
    };

    let userAlldetails = await axios({
      method: "post",
      url: "http://localhost:3000/api/employee-details",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      data: id,
    });

    this.user = userAlldetails.data.details;

    if (
      this.user.designation_id === "1" ||
      this.user.designation_id === "2" ||
      this.user.designation_id === "9"
    ) {
      this.isAdmin = false;
    }

    this.ismounted = true;
  },
};
</script>
<style scoped>
p {
  padding-left: 35rem;
}

.table {
  margin: 40px auto;
  border-width: 5px;
  border-style: dotted solid double dashed;
  box-sizing: border-box;
  height: auto;
  width: 80%;
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
  transition: 0.75s ease-in-out;
}
</style>
