import playersAvatars from "@/assets";

// ***********************************************************************************
// @ in order To add a product to be on sale,
// you must add to the 'product' object a kay called 'saleId' with one of the following id's:
// 1 - '3 for 100$'
// 2 - 'Second at 50%'
// 3 - 'Buy one get one free'
// ***********************************************************************************

export const products = [
  {
    id: 1,
    title: "Messi",
    avatar: playersAvatars.messi,
    price: 1000,
    quantity: 1,
    saleId: 1,
  },
  {
    id: 2,
    title: "Alba",
    avatar: playersAvatars.alba,
    price: 70,
    quantity: 1,
    saleId: 2,
  },
  {
    id: 3,
    title: "Araujo",
    avatar: playersAvatars.araujo,
    price: 80,
    quantity: 1,
    saleId: 3,
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
