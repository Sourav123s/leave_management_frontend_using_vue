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
    </div>

    <div class="tab">
      <h1>All Of Yours Leave</h1>
      <div class="table">
        <table v-if="ismounted">
          <tr>
            <td>From Date</td>
            <td>To Date</td>
            <td>Leave Type</td>
            <td>Half/Full</td>
            <td>Resaon</td>
            <td>Status</td>
            <td>Wrok Resume</td>
            <td>Approve Date</td>
          </tr>

          <tr v-for="item in allLeave" :key="item.id">
            <td>{{ item.from_date }}</td>

            <td>{{ item.to_date }}</td>

            <td>{{ item.leave_type }}</td>

            <td>{{ item.type_of_day }}</td>

            <td>{{ item.reason }}</td>

            <td>{{ item.leave_status }}</td>

            <td>{{ item.work_resume }}</td>

            <td>{{ item.approved_date }}</td>
          </tr>
        </table>
        <p v-else>Something went wrong</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ismounted: false,
      allLeave: [],
    };
  },
  async mounted() {
    const empData = JSON.parse(localStorage.getItem("userDetails"));
    const userId = empData.id;

    const result = await axios.post("http://localhost:3000/api/leave-data", {
      user_id: userId,
    });
    this.allLeave = result.data.details;

    this.ismounted = true;
  },
};
</script>

<style scoped>
.table {
  margin: 20px auto;
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

.tab {
  /* margin-top: 20px; */
  margin: 20px auto;
  width: 83%;
  padding: 15px;
}
</style>
