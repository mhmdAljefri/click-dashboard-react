import DashboardPage from "pages/Dashboard/index"
import { FaDashboard } from 'react-icons/lib/fa'

export default [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Click Dashboard",
    icon: FaDashboard,
    component: DashboardPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Dashboard" }
];
