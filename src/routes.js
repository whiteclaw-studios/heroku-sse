import App from "./components/App";
import ServicesPage from "./components/ServicesPage";
const APP_KEY = "APP_KEY";
const SERVICES_PAGE_KEY = "HOME_PAGE_KEY";
const routes = [
  {
    component: App,
    key: APP_KEY,
    routes: [
      {
        path: "/services",
        exact: true,
        component: ServicesPage,
        key: SERVICES_PAGE_KEY,
      },
    ],
  },
];
export default routes;
