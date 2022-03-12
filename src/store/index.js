import { createStore } from "vuex";

import axios from "axios";

const store = createStore({
  state() {
    return {
      userDetails: {},
      token: "",
    };
  },
  getters: {
    fetchUser(state) {
      return state.userDetails;
    },
    userToken(state) {
      return state.token;
    },
  },

  actions: {
    async addEmployee(context, data) {
      const employeeData = {
        name: data.name,
        email: data.email,
        mobile_no: data.mobileNo,
        designation_id: data.designationId,
        password: data.password,
      };

      await axios.post("http://localhost:3000/api/add-employee", employeeData);
    },
    async login(context, data) {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      const userData = await axios.post(
        "http://localhost:3000/api/signin",
        loginData
      );

      console.log(userData.data);
      const token = userData.data.details.token;
      const userDetails = userData.data.details.employee;

      console.log(userDetails);

      localStorage.setItem("token", token);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      if (token && userDetails) {
        context.commit("setUser", {
          token: token,
          userDetails: userDetails,
        });
      } else {
        const error = new Error("can't able to autorized");

        throw error;
      }
    },
    async applyLeave(context, payload) {
      const leaveData = {
        id: payload.id,
        user_id: payload.user_id,
        designation_id: payload.designation_id,
        from_date: payload.from_date,
        to_date: payload.to_date,
        type_of_day: payload.type_of_day,
        leave_type: payload.leave_type,
        reason: payload.reason,
        work_resume: payload.work_resume,
      };
      const result = await axios.post(
        "http://localhost:3000/api/add-update-leave",
        leaveData
      );

      const userData = result.data.emp;
      localStorage.setItem("userDetails", JSON.stringify(userData));
    },

    // async allLeave(context, payload) {
    //   const result = await axios.post("http://localhost:3000/api/leave-data", {
    //     user_id: payload.user_id,
    //   });

    //   console.log(result);
    //   localStorage.setItem("LeaveStatus", JSON.stringify(result));
    // },
  },
  mutations: {
    setUser(state, payload) {
      // console.log(payload);

      state.userDetails = payload.userDetails;
      state.token = payload.token;
    },
  },
});

export default store;
