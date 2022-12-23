// let arr = [3, 2, 1, 10, 6];

// // slice ctrl + c gacha.  O'zidan boshlab hisoblaydi
// // splice ctrl + x        O'zidan boshlab hisoblaydi. Asosiy arrayga ham o'zgarish kiritadi

// //                   start  end
// let arrExmp1 = arr.slice(0, 3);
// console.log(arrExmp1);
// //                    start  count
// let arrExmp2 = arr.splice(2, 3);// 2-elementdan 3dona
// console.log(arrExmp2);

// console.log(arr);

// const formEl = document.querySelector("#form");
// const inputEl = document.querySelector("#name-input");
// const listEl = document.querySelector("#list");
// const listMenu = document.querySelector(".list-menu");

// formEl.addEventListener("submit", (e) => {
//   // console.log(e);
//   e.preventDefault();
//   const liEl = document.createElement("li");
//   liEl.innerHTML = inputEl.value;
//   listEl.appendChild(liEl);
// })



//                                               Homework
const formMenEl = document.querySelector(".form");
const menuInpEl1 = document.querySelector("#menu-input1");
const menuInpEl2 = document.querySelector("#menu-input2");
const imgInpEl = document.querySelector("#inp3");
const foodChef = document.querySelector("#food-chef");
const restaurantWhereFoodIsPrepared = document.querySelector("#inp5");
const menuBox = document.querySelector(".menuBox");
const btnDate = document.querySelector(".btnDate");
const listMenuEl = document.querySelector(".list-menu");

formMenEl.addEventListener("submit", (e) => {
  e.preventDefault();
  menuBox.style = "background:#fff";

  btnDate.style = "display:block"

  const liEl1 = document.createElement("li");
  listMenuEl.appendChild(liEl1);
  const ulMenEl = document.createElement("ul");
  liEl1.appendChild(ulMenEl);
  const liEl2 = document.createElement("li");
  liEl2.style = "font-family: 'Inter'; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px;";
  ulMenEl.appendChild(liEl2);
  liEl2.innerHTML = "Taom nomi:";
  const liEl3 = document.createElement("li");
  ulMenEl.appendChild(liEl3);
  ulMenEl.style = "display:flex; gap:8px"
  liEl3.innerHTML = menuInpEl1.value;

  const liEl4 = document.createElement("li");
  listMenuEl.appendChild(liEl4);
  const ulMenEl2 = document.createElement("ul");
  liEl4.appendChild(ulMenEl2);
  ulMenEl2.style = "display:flex; gap:8px"
  const liEl5 = document.createElement("li");
  liEl5.style = "font-family: 'Inter'; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px;";
  ulMenEl2.appendChild(liEl5);
  liEl5.innerHTML = "Taom narxi: ";
  const liEl6 = document.createElement("li");
  ulMenEl2.appendChild(liEl6);
  liEl6.innerHTML = menuInpEl2.value;

  const srcImgInpEl = document.createElement("img");
  menuBox.appendChild(srcImgInpEl);
  srcImgInpEl.style = "width: 190px; border-radius:18px";
  srcImgInpEl.src = imgInpEl.value;

  const liFoodChef = document.createElement("li");
  listMenuEl.appendChild(liFoodChef);
  const ulFoodChef = document.createElement("ul");
  liFoodChef.appendChild(ulFoodChef);
  ulFoodChef.style = "display:flex; gap:8px"
  const li2FoodChef = document.createElement("li");
  li2FoodChef.style = "font-family: 'Inter'; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px;";
  ulFoodChef.appendChild(li2FoodChef);
  li2FoodChef.innerHTML = "Taom oshpazi: ";
  const li3FoodChef = document.createElement("li");
  ulFoodChef.appendChild(li3FoodChef);
  li3FoodChef.innerHTML = foodChef.value;

  const liRestaurantWhereFoodIsPrepared = document.createElement("li");
  listMenuEl.appendChild(liRestaurantWhereFoodIsPrepared);
  const ulRestaurantWhereFoodIsPrepared = document.createElement("ul");
  ulRestaurantWhereFoodIsPrepared.style = "display:flex; gap:8px";
  liRestaurantWhereFoodIsPrepared.appendChild(ulRestaurantWhereFoodIsPrepared);
  const li2RestaurantWhereFoodIsPrepared = document.createElement("li");
  li2RestaurantWhereFoodIsPrepared.style = "font-family: 'Inter'; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px;";
  ulRestaurantWhereFoodIsPrepared.appendChild(li2RestaurantWhereFoodIsPrepared);
  li2RestaurantWhereFoodIsPrepared.innerHTML = "Taom restorani:";
  const li3RestaurantWhereFoodIsPrepared = document.createElement("li");
  ulRestaurantWhereFoodIsPrepared.appendChild(li3RestaurantWhereFoodIsPrepared);
  li3RestaurantWhereFoodIsPrepared.innerHTML = restaurantWhereFoodIsPrepared.value;

  // const sana = document.createElement("button");
  // sana.style = "margin-left:auto; width:180px; height:43px";
  // menuBox.appendChild(sana);
  // sana.innerHTML = "12/23/2022";
});
