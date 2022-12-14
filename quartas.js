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
    "09/12",
    "sexta",
    createGame("croacia", "12:00", "brasil") +
      createGame("holanda", "16:00", "argentina")
  ) +
  createCard(
    "10/12",
    "sabádo",
    createGame("marrocos", "12:00", "portugal") +
      createGame("inglaterra", "16:00", "frança")
  )
