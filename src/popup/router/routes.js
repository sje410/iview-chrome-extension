import PageIndex from "./pages/Index";
import PageMe from "./pages/Me";
import PageSetting from "./pages/Setting";
import PageLogin from "./pages/Login";

export default [
  {
    path: "/",
    component: PageIndex
  },
  {
    path: "/me",
    component: PageMe
  },
  {
    path: "/setting",
    component: PageSetting
  },
  {
    path: "/login",
    component: PageLogin
  }
];
