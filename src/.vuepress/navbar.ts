import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/stargate/",
  "/query/", 
  {
    text: "Broadcast examples",
    prefix: "broadcast/",
    link: "broadcast/", 
  },
  "/tips/"
]);
