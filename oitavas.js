function createGame(player1, hour, player2) {
  return `
   <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1} " />
         <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2} " />
  </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
<div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day} </span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "03/12",
    "sabádo",
    createGame("holanda", "12:00", "eua") +
      createGame("argentina", "16:00", "austrália")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("frança", "12:00", "polonia") +
      createGame("inglaterra", "16:00", "senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("japão", "12:00", "croacia") +
      createGame("undefined", "16:00", "undefined")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("marrocos", "12:00", "espanha") +
      createGame("undefined", "16:00", "undefined")
  )
