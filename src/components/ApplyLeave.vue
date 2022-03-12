<template>
  <div>
    <h1>welcome to apply leave page</h1>
    <h1>Fill up for a Leave</h1>
    <div class="form">
      <form @submit.prevent="submitLeave">
        <div class="leaveInput">
          <label for="fromdate">From Date</label>
          <div>
            <input type="date" name="fromdate" v-model="fromDate" />
          </div>
        </div>
        <div class="leaveInput">
          <label for="todate">To Date</label>
          <div>
            <input type="date" name="todate" v-model="toDate" />
          </div>
        </div>
        <div class="leaveInput">
          <label>Type of Leave Day</label>
          <div class="leaveDay">
            <div>
              <label for="fullLeave">Full Leave</label>
              <input
                type="radio"
                value="full"
                id="fullLeave"
                name="leaveDay"
                v-model="typeOfDay"
              />
            </div>
            <div>
              <label for="halfLeave">Half Leave</label>
              <input
                type="radio"
                value="half"
                id="halfLeave"
                name="leaveDay"
                v-model="typeOfDay"
              />
            </div>
          </div>
        </div>
        <div class="leaveInput">
          <label>Type of Leave</label>
          <div class="leaveType">
            <div>
              <label for="casualLeave">Casual Leave</label>
              <input
                type="radio"
                value="casual"
                id="casualLeave"
                name="leaveType"
                v-model="typeOfLeave"
              />
            </div>
            <div>
              <label for="sickLeave">Sick Leave</label>
              <input
                type="radio"
                value="sick"
                id="sickLeave"
                name="leaveType"
                v-model="typeOfLeave"
              />
            </div>
          </div>
        </div>
        <div class="leaveInput">
          <label for="reason">Reason Of The Leave</label>
          <div>
            <textarea
              type="text"
              name="reason"
              id=""
              rows="5"
              v-model="reason"
            ></textarea>
          </div>
        </div>
        <div class="leaveInput">
          <label>Date of Resuming Work</label>
          <div>
            <input type="date" v-model="workResume" />
          </div>
        </div>

        <div>
          <button type="submit">Apply Leave</button>
        </div>
      </form>
    </div>
    <div class="leave">
      <h4 class="loginbtn">
        Click here to check
        <span><router-link to="/my-leave">All Your Leaves</router-link></span>
        taken
      </h4>
    </div>
  </div>
</template>

<script>

export default {
  name: "ApplyLeave",

  data() {
    return {
      userId: null,
      designationId: null,
      fromDate: null,
      toDate: null,
      typeOfDay: "",
      typeOfLeave: "",
      reason: "",
      workResume: null,
    };
  },
  methods: {
    submitLeave() {
      const empData = JSON.parse(localStorage.getItem("userDetails"));
      this.userId = empData.id;
      this.designationId = empData.designation_id;

    
      this.$store.dispatch("applyLeave", {
        id: "",
        user_id: this.userId,
        designation_id: this.designationId,
        from_date: this.fromDate,
        to_date: this.toDate,
        type_of_day: this.typeOfDay,
        leave_type: this.typeOfLeave,
        reason: this.reason,
        work_resume: this.workResume,
      });

      this.$router.replace("/my-leave");
    },
  },
};
</script>

<style scoped>
/* .form{
  margin: 40px auto;
  padding-top: 30px;
  border-width:5px;  
  border-style:dotted solid double dashed;
  box-sizing: border-box;
  height: auto;
  width: 100%;
} */

.form button {
  margin: 20px auto;
  border: 2px solid brown;
  cursor: pointer;
  background-color: rgb(253, 239, 221);
  border-radius: 10px;
  color: red;
  width: 250px;
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

.form input[type="radio"] {
  width: 145px;
  height: 15px;
  /* padding-left: 5px; */
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

input {
  border: 2px dotted rgb(0, 153, 255);
  border-radius: 15px;
  padding: 20px 30px;
}

.form input[type="text"]:hover {
  background-color: wheat;
  font-size: 17px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s ease-in;
  border: 2px dotted red;
}

.form input[type="date"]:hover {
  background-color: wheat;
  font-size: 17px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s ease-in;
  border: 2px dotted red;
}

textarea {
  border: 2px dotted rgb(0, 153, 255);
  border-radius: 15px;
  padding: 20px 30px;
}

.form textarea[type="text"]:hover {
  background-color: wheat;
  font-size: 17px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s ease-in;
  border: 2px dotted red;
}

.leaveInput {
  border: 2px solid red;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 10px auto;
  width: 35%;
}

a {
  color: rgb(255, 102, 0);
  text-decoration: none;
}

a:hover {
  color: springgreen;
  transition: 0.75s ease-in-out;
}

.leaveDay {
  border: 2px solid green;
  display: flex;
}

.leaveType {
  border: 2px solid green;
  display: flex;
}

.leave {
  margin-top: 10px;
}

h4 {
  margin-top: 25px;
  color: blueviolet;
}
</style>
