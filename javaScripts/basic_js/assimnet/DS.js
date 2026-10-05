
//     let k = [
//   {
//     id: 1,
//     title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop and other items.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     rating: {
//       rate: 3.9,
//       count: 120
//     }
//   }
// ]
// let [{rating:{rate,count}}]=k;
// console.log(rating);
// console.log(rate);
// console.log(count);

let k = {
  id: 1,
  title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop and other items.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: {
    rate: 3.9,
    count: 120
  },
  
  items: [
    {
      id: 1,
      title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop and other items.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: {
        rate: 3.9,
        count: 120,
        skills: ["html", "css", "js"]

      }
    }
  ]
};
let { items: [{ rating: {skills } }] } = k;
console.log(skills[1]);


