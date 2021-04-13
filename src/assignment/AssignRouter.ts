import { RouteConfig }  from "vue-router";
import overview from "../components/overview.vue"
import PrimaryRouter from "./features/primarypage/PrimaryRouter"
const AssignRouter: (prefix?: string) => Array<RouteConfig> = (prefix = "assign") => [
  {
    // name: "OverViewRouter",
    path: prefix,
    redirect: "assign",
    component: overview,
    children: [...PrimaryRouter()],
  },
];

export default AssignRouter;
