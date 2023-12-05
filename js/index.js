const products = [
  {
    id: "hfihfi",
    name: "хліб",
    img: "img/photo/b1.png",
    description: "kutfutfututf",
    price: 10,
    productItem: "bakery",
    quantityInCart: 0,
  },
  {
    id: "ethtuk",
    name: "кирпич",
    img: "img/photo/b2.png",
    description: "Опис продукту",
    price: 11,
    productItem: "bakery",
    quantityInCart: 0,
  },
  {
    id: "yerjae5h",
    name: "батон",
    img: "img/photo/b3.png",
    description: "Опис продукту ",
    price: 12,
    productItem: "bakery",
    quantityInCart: 0,
  },
  {
    id: "etyjtj",
    name: "сінабон",
    img: "img/photo/b4.png",
    description: "Опис продукту ",
    price: 9,
    productItem: "bakery",
    quantityInCart: 0,
  },
  {
    id: "estjn5",
    name: "шокотортик",
    img: "img/photo/b5.png",
    description: "Опис продукту ",
    price: 10,
    productItem: "bakery",
    quantityInCart: 0,
  },
  {
    id: "kuuryjn",
    name: "шокопечиво",
    img: "img/photo/b6.png",
    description: "Опис продукту ",
    price: 11,
    productItem: "bakery",
    quantityInCart: 0,
  },
  {
    id: "w4y5hrsf",
    name: "тарталетка",
    img: "img/photo/b7.webp",
    description: "Опис продукту ",
    price: 12,
    productItem: "bakery",
    quantityInCart: 0,
  },
  {
    id: "srr6yj",
    name: "тарт",
    img: "img/photo/b8.webp",
    description: "Опис продукту ",
    price: 13,
    productItem: "bakery",
    quantityInCart: 0,
  },
];

let shoppingCart = {};
// Перетворення об'єкта shoppingCart у рядок за допомогою JSON.stringify та збереження у localStorage
localStorage.setItem("shoppingCartData", JSON.stringify(shoppingCart));

const plusBtn = document.querySelector(".m__plus__btn");
const minusBtn = document.querySelector(".m__minus__btn");
const mNum = document.querySelector(".product-list-item__control__number");
const all = document.querySelector(".all");
const mBackBtn = document.querySelector(".m__back__btn");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__img");
const costModal = document.querySelector(".cost");
const productNameModal = document.querySelector(".product__name__modal");
const modalDescription = document.querySelector(".modal__description");

const foodBox = document.querySelector(".food__box");

//////inner html///////////////////

products.forEach((product) => {
  foodBox.insertAdjacentHTML(
    "beforeend",
    `<div id="${product.id}" class="food__card">
  <p class="product-item">${product.productItem}</p>
  <img src="${product.img}" />
  <div class="card__box">
    <p class="product__name">${product.name}</p>
    <p class="product__description">${product.description}</p>
    <p >$<span class="pro__price">${product.price}</span></p>
  </div>
  <div class="add__food">
    <svg class="icon-add">
      <use href="img/symbol-defs.svg#icon-plus"></use>
    </svg>
  </div>
</div>`
  );
});

const foodCards = document.querySelectorAll(".food__card");

let myNumber = localStorage.getItem("myNumber") || 0;
mNum.innerHTML = myNumber;

function calcFunc(e) {
  // console.log(e.currentTarget);
  // console.log(e.target);
  e.currentTarget.classList.contains("m__plus__btn") ? myNumber++ : myNumber--;
  minusBtn.disabled = myNumber === 0;
  mNum.innerHTML = myNumber;
  let itemCount = { product: "product", count: myNumber };
  localStorage.setItem("shoppingCartData", JSON.stringify(itemCount));
  if (myNumber === 0) {
    localStorage.removeItem("shoppingCartData");
  }
}

plusBtn.addEventListener("click", calcFunc);
minusBtn.addEventListener("click", calcFunc);
mBackBtn.addEventListener("click", () => {
  modal.style = "transform: translateX(-100%);";
});
for (let i = 0; i < foodCards.length; i++) {
  foodCards[i].addEventListener("click", (e) => {
    console.log(e.currentTarget.querySelector(".pro__price").textContent);
    modal.style = "transform: translateX(0);";
    modalImg.src = e.currentTarget.querySelector("img").src;
    costModal.innerHTML = `${
      e.currentTarget.querySelector(".pro__price").textContent
    }`;
    productNameModal.innerHTML = `${
      e.currentTarget.querySelector(".product__name").textContent
    }`;
    // modalDescription.innerHTML = `${
    //   e.currentTarget.querySelector(".pro__price").textContent
    // }`;
  });
}
///////////////////////////////////////////////////////////////////

let myOBJ = { cart: { qwe: "5", rtt: "8" }, deck: "hghghghgh" };
localStorage.setItem("myOBJqwe", JSON.stringify(myOBJ));
let asd = JSON.parse(localStorage.getItem("myOBJqwe"));
