/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: "V7LwfY5U5WI",
    title: "Shershah",
    image:
      "https://i.ytimg.com/an_webp/V7LwfY5U5WI/mqdefault_6s.webp?du=3000&sqp=CJS7j5IG&rs=AOn4CLBHjaChtDeP2ww3D9Bs1IczdeGpOg",
    description:
      "Shershaah Lofi Mashup | Vinick | Shershaah All Songs | Bpraak | Darshan Raval | Mann Bharryaa",
    creator: "Deepak goyal",
  },
  {
    _id: "dTu5dTEzVM4",
    title:
      "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
    image:
      "https://i.ytimg.com/vi/dTu5dTEzVM4/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADpcIPMd8YW9gcvmyVU00SFhP4ow",
    creator: "Sentdex",

    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: "9kqWIuAlFAI",
    title:
      "Dil sambhal ja jara & Iss dard e dil ki by Arunita & Mohammad Irfan at Grand Finale",
    creator: "Sentdex",
    image:
      "https://i.ytimg.com/vi/nynVielA6ZU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCZig6uIjtvn7MDPv2RYZzvZYQMYg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: "NwdQx2P_ytk",
    title:
      "Harrdy Sandhu - Bijlee Bijlee ft Palak Tiwari | Jaani | BPraak | Arvindr Khaira | Desi Melodies",
    image:
      "https://i.ytimg.com/vi/a6cJAFFQn_I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiISxAOaFSZustrxpaLyXL4oLH8Q",
    description: "315,487,824 views",
    creator: "DM - Desi Melodies",
  },
  // {
  //   _id: "dTu5dTEzVM4",
  //   title: "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  // {
  //   _id:"9kqWIuAlFAI",
  //   title: "Dil sambhal ja jara & Iss dard e dil ki by Arunita & Mohammad Irfan at Grand Finale",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",

  // },
  // {
  //   _id: "kC2l-DODse8",
  //   title: "Shershah",
  //   description:
  //     "Shershaah Lofi Mashup | Vinick | Shershaah All Songs | Bpraak | Darshan Raval | Mann Bharryaa",
  //   creator: "Deepak goyal",
  // },
  // {
  //   _id: "dTu5dTEzVM4",
  //   title: "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  // {
  //   _id:"9kqWIuAlFAI",
  //   title: "Dil sambhal ja jara & Iss dard e dil ki by Arunita & Mohammad Irfan at Grand Finale",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",

  // },
  // {
  //   _id: "kC2l-DODse8",
  //   title: "Shershah",
  //   description:
  //     "Shershaah Lofi Mashup | Vinick | Shershaah All Songs | Bpraak | Darshan Raval | Mann Bharryaa",
  //   creator: "Deepak goyal",
  // },
  // {
  //   _id: "dTu5dTEzVM4",
  //   title: "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  // {
  //   _id:"9kqWIuAlFAI",
  //   title: "Dil sambhal ja jara & Iss dard e dil ki by Arunita & Mohammad Irfan at Grand Finale",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",

  // },
  // {
  //   _id: "kC2l-DODse8",
  //   title: "Shershah",
  //   description:
  //     "Shershaah Lofi Mashup | Vinick | Shershaah All Songs | Bpraak | Darshan Raval | Mann Bharryaa",
  //   creator: "Deepak goyal",
  // },
  // {
  //   _id: "dTu5dTEzVM4",
  //   title: "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  // {
  //   _id:"9kqWIuAlFAI",
  //   title: "Dil sambhal ja jara & Iss dard e dil ki by Arunita & Mohammad Irfan at Grand Finale",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",

  // },
  // {
  //   _id: "kC2l-DODse8",
  //   title: "Shershah",
  //   description:
  //     "Shershaah Lofi Mashup | Vinick | Shershaah All Songs | Bpraak | Darshan Raval | Mann Bharryaa",
  //   creator: "Deepak goyal",
  // },
  // {
  //   _id: "dTu5dTEzVM4",
  //   title: "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  // {
  //   _id:"9kqWIuAlFAI",
  //   title: "Dil sambhal ja jara & Iss dard e dil ki by Arunita & Mohammad Irfan at Grand Finale",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",

  // },
  // {
  //   _id: "kC2l-DODse8",
  //   title: "Shershah",
  //   description:
  //     "Shershaah Lofi Mashup | Vinick | Shershaah All Songs | Bpraak | Darshan Raval | Mann Bharryaa",
  //   creator: "Deepak goyal",
  // },
  // {
  //   _id: "dTu5dTEzVM4",
  //   title: "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  // {
  //   _id:"9kqWIuAlFAI",
  //   title: "Dil sambhal ja jara & Iss dard e dil ki by Arunita & Mohammad Irfan at Grand Finale",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",

  // },
];
