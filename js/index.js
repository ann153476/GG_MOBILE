const plusBtn = document.querySelector(".m__plus__btn");
const minusBtn = document.querySelector(".m__minus__btn");
const mNum = document.querySelector(".product-list-item__control__number");
let myNumber = 0;
mNum.innerHTML = myNumber;
function calcFunc(e) {
  if (e.currentTarget.classList.contains("m__plus__btn")) {
    myNumber++;
  } else {
    myNumber--;
  }

  mNum.innerHTML = myNumber;
}

plusBtn.addEventListener("click", calcFunc);
minusBtn.addEventListener("click", calcFunc);
