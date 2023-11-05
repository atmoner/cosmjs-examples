import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Stargate",
      icon: "laptop-code",
      prefix: "stargate/",
      link: "stargate/",
      children: "structure",
    },
    {
      text: "Query examples",
      icon: "laptop-code",
      prefix: "query/",
      link: "query/",
      children: "structure",
    },
    {
      text: "Broadcast examples",
      icon: "book",
      prefix: "broadcast/",
      link: "broadcast/",
      children: "structure",
    },
    {
      text: "Tips and tricks",
      icon: "book",
      prefix: "tips/",
      link: "tips/",
      children: "structure",
    }
  ],
});
