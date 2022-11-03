function createGame(player1, hour, player2) {
  return `
   <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1} " />
         <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2} " />
  </li>
  `
}

function createCard(date, day, games) {
  return `
<div class="card">
          <h2>${date} <span>${day} </span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
 <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
      </header>
      <main id="cards">
        ${createCard("20/11", "domingo", createGame("qtar", "13:00", "equador"))}
        ${createCard(
          "21/11",
          "segunda",
          createGame("inglaterra", "10:00", "iran") +
            createGame("senegal", "13:00", "holanda") +
            createGame("eua", "16:00", "gales")
        )}
        ${createCard(
          "22/11",
          "terça",
          createGame("argentina", "07:00", "arabia-saudita") +
            createGame("dinamarca", "10:00", "tunisia") +
            createGame("mexico", "13:00", "polonia") +
            createGame("frança", "16:00", "austrália")
        )}
        ${createCard(
          "23/11",
          "quarta",
          createGame("marrocos", "07:00", "croacia") +
            createGame("alemanha", "10:00", "japão") +
            createGame("espanha", "13:00", "costa-rica") +
            createGame("belgica", "16:00", "canada")
        )}
        ${createCard(
          "24/11",
          "quinta",
          createGame("suiça", "07:00", "camarões") +
            createGame("uruguai", "10:00", "correia-do-sul") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brasil", "16:00", "servia")
        )}
        ${createCard(
          "25/11",
          "sexta",
          createGame("gales", "07:00", "iran") +
            createGame("qtar", "10:00", "senegal") +
            createGame("holanda", "13:00", "equador") +
            createGame("inglaterra", "16:00", "eua")
        )}
        ${createCard(
          "26/11",
          "sábado",
          createGame("tunisia", "07:00", "austrália") +
            createGame("polonia", "10:00", "arabia-saudita") +
            createGame("frança", "13:00", "dinamarca") +
            createGame("argentina", "16:00", "mexico")
        )}
        ${createCard(
          "27/11",
          "domingo",
          createGame("japão", "07:00", "costa-rica") +
            createGame("belgica", "10:00", "marrocos") +
            createGame("croacia", "13:00", "canada") +
            createGame("espanha", "16:00", "alemanha")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createGame("camarões", "07:00", "servia") +
            createGame("correia-do-sul", "10:00", "ghana") +
            createGame("brasil", "13:00", "suiça") +
            createGame("portugal", "16:00", "uruguai")
        )}
        ${createCard(
          "29/11",
          "terça",
          createGame("equador", "12:00", "senegal") +
            createGame("holanda", "12:00", "qtar") +
            createGame("iran", "16:00", "eua") +
            createGame("gales", "16:00", "inglaterra")
        )}
        ${createCard(
          "30/11",
          "quarta",
          createGame("tunisia", "12:00", "frança") +
            createGame("austrália", "12:00", "dinamarca") +
            createGame("polonia", "16:00", "argentina") +
            createGame("arabia-saudita", "16:00", "mexico")
        )}
        ${createCard(
          "01/12",
          "quinta",
          createGame("croacia", "12:00", "belgica") +
            createGame("canada", "12:00", "marrocos") +
            createGame("japão", "16:00", "espanha") +
            createGame("costa-rica", "16:00", "alemanha")
        )}
        ${createCard(
          "02/12",
          "sexta",
          createGame("correia-do-sul", "12:00", "portugal") +
            createGame("ghana", "12:00", "uruguai") +
            createGame("servia", "16:00", "suiça") +
            createGame("camarões", "16:00", "brasil")
        )}
        


      </main>
`
