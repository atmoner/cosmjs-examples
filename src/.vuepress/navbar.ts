import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/stargate/",
  "/query/", 
  {
    text: "Broadcast examples",
    icon: "laptop-code",
    prefix: "broadcast/",
    link: "broadcast/", 
  },
  "/tips/"
]);
