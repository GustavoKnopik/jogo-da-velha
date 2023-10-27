const celulas = document.querySelector(".celula");
let checarTurno = true;
let turno;

//Define constantes para representar os jogadores "X" e "Y"
const JOGADOR_X = "X";
const JOGADOR_O = "O";

let jogoAcabou = false;

document.addEventListener("click", (event) =>) {
 if (event.target.matches(".celula")&& !jogoAcabou) {
jogar (event.target.id);
}
});
