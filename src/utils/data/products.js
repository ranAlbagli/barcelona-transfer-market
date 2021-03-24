import playersAvatars from "@/assets";

// ***********************************************************************************
// @ in order To add a product to be on sale,
// you must add to the 'product' object an array called 'sales' with one of the following strings:
// ["THREE_FOR_100$", "SECOND_AT_50%", "BUY_ONE_GET_ONE_FREE"]
// ***********************************************************************************

export const products = [
  {
    id: 1,
    title: "Messi",
    avatar: playersAvatars.messi,
    price: 1000,
    quantity: 1,
    sales: ["THREE_FOR_100$", "SECOND_AT_50%", "BUY_ONE_GET_ONE_FREE"],
  },
  {
    id: 2,
    title: "Alba",
    avatar: playersAvatars.alba,
    price: 70,
    quantity: 1,
    sales: ["THREE_FOR_100$"],
  },
  {
    id: 3,
    title: "Araujo",
    avatar: playersAvatars.araujo,
    price: 80,
    quantity: 1,
  },
  {
    id: 4,
    title: "De Jong",
    avatar: playersAvatars.deJong,
    price: 70,
    quantity: 1,
  },
  {
    id: 5,
    title: "Griezmann",
    avatar: playersAvatars.griezmann,
    price: 60,
    quantity: 1,
  },
  {
    id: 6,
    title: "Dest",
    avatar: playersAvatars.dest,
    price: 60,
    quantity: 1,
  },
  {
    id: 7,
    title: "Pedri",
    avatar: playersAvatars.pedri,
    price: 90,
    quantity: 1,
  },
  {
    id: 8,
    title: "Pique",
    avatar: playersAvatars.pique,
    price: 40,
    quantity: 1,
  },
  {
    id: 9,
    title: "Ter Stegen",
    avatar: playersAvatars.terStegen,
    price: 150,
    quantity: 1,
  },
  {
    id: 10,
    title: "Bosquets",
    avatar: playersAvatars.busquets,
    price: 100,
    quantity: 1,
  },
  {
    id: 11,
    title: "Braithwaite",
    avatar: playersAvatars.braithwaite,
    price: 40,
    quantity: 1,
  },
  {
    id: 12,
    title: "Coutinho",
    avatar: playersAvatars.coutinho,
    price: 120,
    quantity: 1,
  },
  {
    id: 13,
    title: "Dembele",
    avatar: playersAvatars.dembele,
    price: 90,
    quantity: 1,
  },
  {
    id: 14,
    title: "Lenglet",
    avatar: playersAvatars.lenglet,
    price: 40,
    quantity: 1,
  },
  {
    id: 15,
    title: "Trincao",
    avatar: playersAvatars.trincao,
    price: 60,
    quantity: 1,
  },
  {
    id: 16,
    title: "Roberto",
    avatar: playersAvatars.roberto,
    price: 50,
    quantity: 1,
  },
];
