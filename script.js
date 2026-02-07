const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const resetBtn = document.getElementById("resetBtn");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const buttons = document.getElementById("buttons");
const result = document.getElementById("result");
const photoFrame = document.querySelector(".photoFrame");

const pityPhrases = [
  "Non, je préfère Harry",
  "Stp…",
  "Tu vas pas regretter",
  "Allez, dis oui",
  "Je te ferai des plats de chantilly",
  "Je t’offrirai des tulipes… jaunes",
  "Clique sur oui là tu soules frrrrrr",
  "Je fais semblant de rien mais j’insiste",
  "Regarde la taille du bouton Oui",
  "Ok là c’est gênant si tu dis encore non",
  "C’est clairement un signe",
  "Bon. Clique. Sur. Oui."
];


let noCount = 0;
let yesScale = 1;

function setYesScale(value){
  yesScale = value;
  document.documentElement.style.setProperty("--yesScale", String(yesScale));
}

function nextNoText(){
  noCount += 1;
  const idx = Math.min(noCount, pityPhrases.length - 1);
  noBtn.textContent = pityPhrases[idx];
}

function growYes(){
  const bump = 0.45;
  const cap = 8;
  setYesScale(Math.min(yesScale + bump, cap));

  if (yesScale > 4) {
    yesBtn.style.position = "fixed";
    yesBtn.style.inset = "12px";
    yesBtn.style.zIndex = "999";
    yesBtn.style.borderRadius = "22px";
  }
}


function onNo(){
  nextNoText();
  growYes();

  subtitle.textContent = noCount < 5
    ? "Je te laisse reconsidérer."
    : "Le bouton Oui a l’air bien, non ?";
}

function onYes(){
  title.textContent = "OULOULOULOULOULOULOULOULOU.";
  subtitle.textContent = "TEMA LA FRAPPE QUE JAI POUR LE DATE C TROPPP";

  buttons.classList.add("hidden");
  result.classList.remove("hidden");

  photoFrame.classList.remove("happy");
  void photoFrame.offsetWidth;
  photoFrame.classList.add("happy");
}

function onReset(){
  noCount = 0;
  setYesScale(1);

  title.textContent = "Tu veux être ma Valentine ?";
  subtitle.textContent = "Promis, je fais des efforts.";
  noBtn.textContent = pityPhrases[0];

  result.classList.add("hidden");
  buttons.classList.remove("hidden");

  photoFrame.classList.remove("happy");
}

noBtn.addEventListener("click", onNo);
yesBtn.addEventListener("click", onYes);
resetBtn.addEventListener("click", onReset);

setYesScale(1);
