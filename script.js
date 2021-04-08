alert(`Bienvenue dans le jeu chifoumi`);

function comparer(player, ordi) {
  if (player === ordi) {
    return "egalité";
  } else if (player === "pierre") {
    if (ordi === "ciseaux") {
      return "player";
    } else if (ordi === "feuille") {
      return "ordi";
    }
  } else if (player === "feuille") {
    if (ordi === "pierre") {
      return "player";
    } else if (ordi === "ciseaux") {
      return "ordi";
    }
  } else if (player === "ciseaux") {
    if (ordi === "pierre") {
      return "ordi";
    } else if (ordi === "feuille") {
      return "player";
    }
  }
}

let scoreOrdi = 0;
let scorePlayer = 0;

for (let manche = 0; manche < 3; manche++) {
  let player = prompt("Choisissez entre pierre, feuille ou ciseaux");
  player = player.toLowerCase();
  if (player == "pierre" || player == "feuille" || player == "ciseaux") {
    alert(`vous avez choisi ${player} , au tour de l'ordinateur de choisir`);
  } else {
    alert("mot invalide - recommencez");
    player = prompt("Choissisez entre pierre, feuille ou ciseaux");
  }

  let ordi = Math.random();
  if (ordi < 0.34) {
    ordi = `pierre`;
  } else if (ordi <= 0.67) {
    ordi = `feuille`;
  } else {
    ordi = `ciseaux`;
  }

  alert(` ordinateur: ${ordi}\n et vous avez choisi: ${player}`);

  let resultat = comparer(player, ordi);
  alert(`Le gagnant: ${resultat}`);

  if (resultat == `player`) {
    scorePlayer++;
    alert(`Felicitations tu as gagné cette manche!`);
  } else if (resultat == "ordi") {
    scoreOrdi++;
    alert(`Tu as perdu cette manche!`);
  } else {
    alert("egalité sur cette manche, pas de points!");
  }
}

let message;
if (scoreOrdi === scorePlayer) {
  message = "Egalite pour cette partie";
} else if (scoreOrdi > scorePlayer) {
  message = "Perdu cette partie, il faut rejouer";
} else {
  message = "Tu as gagné la partie! ";
}
alert(
  message +
    ` votre score: ` +
    scorePlayer +
    " , le score de l'ordi: " +
    scoreOrdi
);
