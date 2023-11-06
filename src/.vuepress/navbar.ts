import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/stargate/", 
  {
    text: "Query examples",
    prefix: "query/",
    link: "query/", 
  },
  {
    text: "Broadcast examples",
    prefix: "broadcast/",
    link: "broadcast/", 
  },
  "/tips/"
]);
