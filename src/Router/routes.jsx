import HomePage from "../Pages/HomePage";
import LandingPage from "../Pages/LandingPage";

export const routes = [
  {
    name: "landing page",
    path: "/login",
    component: LandingPage,
    isProtected: false,
  },
  {
    name: "home page",
    path: "/",
    component: HomePage,
    isProtected: false,
  },
];
