import SettingsIcon from "@/icons/settings";
import { MainNavItem } from "@/types";

export const dashboardSidebarConfig = {
  mainNav: [
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: SettingsIcon,
    },
  ] satisfies MainNavItem[],
};
