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
    createGame("undefined", "12:00", "undefined") +
      createGame("holanda", "16:00", "argentina")
  ) +
  createCard(
    "10/12",
    "sabádo",
    createGame("undefined", "12:00", "undefined") +
      createGame("frança", "16:00", "undefined")
  ) 
