let games = [
    "Call of Duty: Warzone",
    "Minecraft",
    "Fortnite",
    "Grand Theft Auto V",
    "Forza Horizon 5",
    "Super Smash Bros: Ultimate",
    "Red Dead Redemption II",
    "Overwatch",
    "Rocket League",
    "Roblox",
    "League of Legends",
    "PlayerUnknown's Battlegrounds",
    "Counter-Strike: Global Offensive",
    "Super Mario Odyssey",
    "Legend of Zelda: Tears of the Kingdom"
];

games = games.sort();


function loadNames() {
let ul = document.getElementById('gamesList')

for (let game of games) {
    let li = document.createElement('li');
    li.innerHTML = game;
    ul.appendChild(li);
}
}




let userInput = document.getElementById('search');

function clicked() {
    e.preventDefault;

games.filter(game => game.includes(userInput));
//games.filter(game => game.includes('c'));  this one works in console
}



