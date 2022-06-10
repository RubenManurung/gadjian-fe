import {
  faCalendarDays,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const MENU_LIST = [
  {
    label: "Beranda",
    route: "#home",
    icon: faHouse,
  },
  {
    label: "Personal List",
    route: "#personal-list",
    icon: faUsers,
  },
  {
    label: "Daily Attendance",
    route: "#daily-attendance",
    icon: faCalendarDays,
  },
];
