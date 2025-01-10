// Variáveis para armazenar o nome e o XP do herói
let name = "Arthur";
let xp = 9800;

// Estrutura de decisão para determinar o nível do herói
let level;

if (xp < 1000) {
  level = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  level = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  level = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  level = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  level = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  level = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}

// Exibindo a mensagem final
console.log(`O Herói de nome ${name} está no nível de ${level}.`);