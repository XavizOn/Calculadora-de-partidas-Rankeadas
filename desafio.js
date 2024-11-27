// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função para determinar o nível do jogador
function determinarNivel(vitorias) {
  // Definição dos níveis com base no número de vitórias

  let nivel;
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  return nivel;
}

//Função principal
function exibirResutado(vitorias, derrotas) {
  const saldo = calcularSaldo(vitorias, derrotas);
  const nivel = determinarNivel(vitorias);
  console.log(`O heroi tem de saldo ${saldo} e esta no nível ${nivel}`);
}

//Uso
const vitorias = 45;
const derrotas = 20;

exibirResutado(vitorias, derrotas);
