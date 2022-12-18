function createGame(player1) {
  return `
   <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1} " />
        
  </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
<div class="card1" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day} </span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards1").innerHTML = createCard(
  "",
  "3° Lugar",
  createGame("croacia")
)
