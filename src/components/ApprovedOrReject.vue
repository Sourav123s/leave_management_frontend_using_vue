<template>
  <div>
    <h1>Approved or reject</h1>

    <div class="table">
      <table v-if="ismounted">
        <tr>
          <td>Leave Id</td>
          <td>From Date</td>
          <td>To Date</td>
          <td>Leave Type</td>
          <td>Half/Full</td>
          <td>Resaon</td>
          <td>Wrok Resume</td>
          <td>Approved</td>
          <td>Reject</td>
        </tr>

        <tr v-for="item in leave" :key="item.id">
          <td v-if="item.leave_status === 'Pending'">{{ item.id }}</td>
          <td v-if="item.leave_status === 'Pending'">{{ item.from_date }}</td>

          <td v-if="item.leave_status === 'Pending'">{{ item.to_date }}</td>

          <td v-if="item.leave_status === 'Pending'">{{ item.leave_type }}</td>

          <td v-if="item.leave_status === 'Pending'">{{ item.type_of_day }}</td>

          <td v-if="item.leave_status === 'Pending'">{{ item.reason }}</td>

          <td v-if="item.leave_status === 'Pending'">{{ item.work_resume }}</td>

          <td v-if="item.leave_status === 'Pending'">
            <button @click="approved(item.id)">Approved</button>
          </td>
          <td v-if="item.leave_status === 'Pending'">
            <button @click="reject(item.id)">Reject</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ismounted: false,
      currentUser: {},
      leave: [],
    };
  },
  methods: {
    async approved(id) {
      await axios.post("http://localhost:3000/api/approve-reject", {
        designation_id: this.currentUser.designation_id,
        leave_id: id,
        leave_status: "Approved",
      });
      this.ismounted = false;
      this.refresh();
    },
    async reject(id) {
      await axios.post("http://localhost:3000/api/approve-reject", {
        designation_id: this.currentUser.designation_id,
        leave_id: id,
        leave_status: "Rejected",
      });
      this.ismounted = false;
      this.refresh();
    },

    async refresh() {
      const result = await axios.get("http://localhost:3000/api/all-leave");
      this.leave = result.data.msg;
      this.ismounted = true;
    },
  },

  // -----------what should we nedd to approved a or  reject a leave
  // we create v- fi button if the user is hr ,admin,or project managger then that taht router link sholud shown and by clicking that the hr,admin ,project maneger can see leave table and with that table approved or reject button should attached and all the information that we need to approved or reject function and by clicking that approved or reject a particular leave @click="approved(item.id)" samwe for reject also
  //designation_id of approver
  //   leave id of that particular user and using it fetch all details using that
  // leave status that means reject or approved that came from abutton
  // json format should sent to approved or reject that particular approved
  //   {
  //    "designation_id":1,
  //    "leave_id":18,
  //    "leave_status":"approved"
  // }

  async mounted() {
    this.currentUser = JSON.parse(localStorage.getItem("userDetails"));
    const result = await axios.get("http://localhost:3000/api/all-leave");

    this.leave = result.data.msg;

    // console.log(result);

    this.ismounted = true;
  },
};
</script>

<style scoped>
.table {
  margin: 90px auto;
  border-width: 5px;
  border-style: dotted solid double dashed;
  box-sizing: border-box;
  height: auto;
  width: 85%;
}

button {
  /* margin: 20px auto; */
  border: 2px solid brown;
  cursor: pointer;
  background-color: rgb(253, 239, 221);
  border-radius: 10px;
  color: red;
  /* width: 250px; */
  /* height: 40px; */
  font-size: bolder;
  font-size: 20px;
  /* letter-spacing: 3px; */
}

.approved:hover {
  background-color: green;
  color: white;
  transition: 1s;
  border: 2px solid white;
}

.reject:hover {
  background-color: red;
  color: white;
  transition: 1s;
  border: 2px solid white;
}
</style>
