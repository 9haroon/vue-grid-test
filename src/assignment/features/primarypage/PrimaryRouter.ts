import { RouteConfig }from "vue-router";

import PrimaryPage from "./page/PrimaryPage.vue"


const PrimaryRouter: (prefix?: string) => Array<RouteConfig> = (prefix = "") => [
    {
        name: "PrimaryPage",
        path: "primary",
        component: PrimaryPage,
    }
];

export default PrimaryRouter;
