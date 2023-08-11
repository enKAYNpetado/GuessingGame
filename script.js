const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener("click", handleClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", keydownEnter)

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    document.querySelector(".screen2 h2").innerText =
      "Você acertou em " + xAttempts + " tentativas"
  } else if (Number(inputNumber.value) < 0) {
    alert("Erro, o número digitado deve estar entre 0 e 10")
  } else if (Number(inputNumber.value) > 10) {
    alert("Erro, o número digitado deve estar entre 0 e 10")
  }
  /*else if(xAttempts == 0) {
   document.querySelector(".screen2 h2").innerText =
     "Você acertou em 1 tentativa"
  }*/
  /*else if (Number(inputNumber.value) < 0 && Number(inputNumber.value) > 10) {
    xAttempts--
  }*/
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function keydownEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
