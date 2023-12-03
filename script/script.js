const textBlock = document.querySelector(".text");
const btnShowText = document.getElementById("learn");

const btnShowTextTesla = document.getElementById("btnShowTextTesla");
const btnShowTextDelivery = document.getElementById("btnShowTextDelivery");
const btnShowTextAfto = document.getElementById("btnShowTextAfto");
const btnShowTextCity = document.getElementById("btnShowTextCity");

const titleGlobal = document.querySelector(".title");

const textTesla = document.querySelector(".text-tesla");
const textDelivery = document.querySelector(".text-delivery");
const textAfto = document.querySelector(".text-afto");
const textCity = document.querySelector(".text-city");

let originalText = btnShowText.innerText;
let originalTextTesla = btnShowTextTesla.innerText;
let originalTextDelivery = btnShowTextDelivery.innerText;
let originalTextAfto = btnShowTextAfto.innerText;
let originalTextCity = btnShowTextCity.innerText;

btnShowText.addEventListener('click', (e) => {
  e.preventDefault();

  textBlock.classList.toggle('show');

  if (btnShowText.innerText === originalText) {
    btnShowText.innerText = "Скрыть подробности";
    btnShowText.style.background = "#fff";
    btnShowText.style.color = "#000";
  } else {
    btnShowText.innerText = originalText;
    btnShowText.style.background = "transparent";
    btnShowText.style.color = "#fff";
  }
});

const popUpTesla = document.getElementById("popUpTesla");
const popUpDelivery = document.getElementById("popUpDelivery");
const popUpAfto = document.getElementById("popUpAfto");
const popUpCity = document.getElementById("popUpCity");

btnShowTextTesla.addEventListener('click', (e) => {
  e.preventDefault();
  e._isClick = true;

  textTesla.classList.toggle('show');

  if (btnShowTextTesla.innerText === originalTextTesla) {
    btnShowTextTesla.innerText = "Скрыть подробности";
  } else {
    btnShowTextTesla.innerText = originalTextTesla;
  }
});
btnShowTextDelivery.addEventListener('click', (e) => {
  e.preventDefault();
  e._isClick = true;

  textDelivery.classList.toggle('show');

  if (btnShowTextDelivery.innerText === originalTextDelivery) {
    btnShowTextDelivery.innerText = "Скрыть подробности";
  } else {
    btnShowTextDelivery.innerText = originalTextDelivery;
  }
});
btnShowTextAfto.addEventListener('click', (e) => {
  e.preventDefault();
  e._isClick = true;

  textAfto.classList.toggle('show');

  if (btnShowTextAfto.innerText === originalTextAfto) {
    btnShowTextAfto.innerText = "Скрыть подробности";
  } else {
    btnShowTextAfto.innerText = originalTextAfto;
  }
});
btnShowTextCity.addEventListener('click', (e) => {
  e.preventDefault();
  e._isClick = true;

  textCity.classList.toggle('show');

  if (btnShowTextCity.innerText === originalTextCity) {
    btnShowTextCity.innerText = "Скрыть подробности";
  } else {
    btnShowTextCity.innerText = originalTextCity;
  }
});

const sf1 = document.querySelector(".sf-1");
const sf2 = document.querySelector(".sf-2");
const sf3 = document.querySelector(".sf-3");
const sf4 = document.querySelector(".sf-4");
const bodyElement = document.querySelector('body');

sf1.addEventListener("click", (e) => {
  e._isClick = true;

  popUpTesla.classList.add("open");
  popUpDelivery.classList.remove("open");
  popUpAfto.classList.remove("open");
  popUpCity.classList.remove("open");
  bodyElement.classList.add("opened");
});

sf2.addEventListener("click", (e) => {
  e._isClick = true;

  popUpDelivery.classList.add("open");
  popUpTesla.classList.remove("open");
  popUpAfto.classList.remove("open");
  popUpCity.classList.remove("open");
  bodyElement.classList.add("opened");
});

sf3.addEventListener("click", (e) => {
  e._isClick = true;

  popUpDelivery.classList.remove("open");
  popUpAfto.classList.add("open");
  popUpTesla.classList.remove("open");
  popUpCity.classList.remove("open");
  bodyElement.classList.add("opened");
});

sf4.addEventListener("click", (e) => {
  e._isClick = true;

  popUpCity.classList.add("open");

  popUpDelivery.classList.remove("open");
  popUpAfto.classList.remove("open");
  popUpTesla.classList.remove("open");
  bodyElement.classList.add("opened");
});

document.body.addEventListener("click", (e) => {
  if (e._isClick == true) return

  popUpTesla.classList.remove("open");
  popUpCity.classList.remove("open");
  popUpAfto.classList.remove("open");
  popUpDelivery.classList.remove("open");
  bodyElement.classList.remove("opened");
});