export function getRandomPlayer() {
  const players = ["🐻", "🐧"];
  shuffle(players);
  return players[0];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
