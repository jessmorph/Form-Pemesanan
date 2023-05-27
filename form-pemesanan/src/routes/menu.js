import Login from "../pages/Login";
import OnProgress from "../pages/OnProgress";
import InputForm from "../pages/InputForm";
import Role from "../pages/Role";
import History from "../pages/History";
import PendingForm from "../pages/PendingForm";
import Invoice from "../components/tester/Invoice";
import WorkSheet from "../components/tester/WorkSheet";
import SuratPO from "../components/tester/SuratPO";
import Header from "../templates/Header";
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
  { path: "/", element: Login }, 
];

export default routes;
