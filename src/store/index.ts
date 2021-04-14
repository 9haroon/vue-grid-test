import Vue from "vue";
import Vuex from "vuex";
import  primary from "./primary/index";
import test1111 from "./test1111/index"

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
export default new Vuex.Store({
  modules: {
    primary,
    test1111
  },
});