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
  "J’ai déjà imaginé la photo",
  "Je te laisse choisir le resto",
  "Je fais la vaisselle, promis",
  "S’il te plaît, je suis sérieux",
  "Dernière chance…",
  "Ok mais je suis triste là",
  "Je mets une playlist trop bien",
  "Je peux pas faire plus mignon",
  "Dis oui, juste une fois"
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
  const bump = 0.18;
  const cap = 2.8;
  setYesScale(Math.min(yesScale + bump, cap));
}

function onNo(){
  nextNoText();
  growYes();

  subtitle.textContent = noCount < 5
    ? "Je te laisse reconsidérer."
    : "Le bouton Oui a l’air bien, non ?";
}

function onYes(){
  title.textContent = "Ok, c’est officiel.";
  subtitle.textContent = "Je suis trop content.";

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
