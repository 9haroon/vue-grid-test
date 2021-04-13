import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     status:true,
//   },
//   mutations: {
//     setValue(state,value){
//         state.status = !value;
//     }
//   },
//   getters: {
//     getStatus(state){
//       return state.status
//     }
//   },
//   actions: {
//       changeStatus(context){
//           context.commit("setValue",this.getters.getStatus)
//       }
//   },
//   modules: {},
// });


Vue.use(Vuex);
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {},
});