import Login from "../pages/Login";
import OnProgress from "../pages/OnProgress";
import InputForm from "../pages/InputForm";
import Role from "../pages/Role";
import History from "../pages/History";
import PendingForm from "../pages/PendingForm";
import Invoice from "../pages/Invoice";
import WorkSheet from "../pages/WorkSheet";
import SuratPO from "../pages/SuratPO";
import Header from "../components/Header";
// import CreateUser from "../pages/user/create";
// import DetailUser from "../pages/user/detail";
// import Contact from "../pages/contact";

const routes = [
  { path: "/onProgress", element: OnProgress },
  { path: "/inputForm", element: InputForm },
  { path: "/role", element: Role },
  { path: "/history", element: History },
  { path: "/pendingForm", element: PendingForm },
  { path: "/login", element: Login },
  { path: "/invoice", element: Invoice },
  { path: "/workSheet", element: WorkSheet },
  { path: "/suratPO", element: SuratPO },
  { path: "/header", element: Header },

  // { path: "/user/create", element: CreateUser },
//   { path: "/user/detail/:USER_ID", element: DetailUser },
//   // MAIN Route
  { path: "/", element: OnProgress }, 
];

export default routes;
