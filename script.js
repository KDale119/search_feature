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



function clicked(event) {
    event.preventDefault();
    let userInput = document.getElementById('search').value;
    let filtered = games.filter(game => game.includes(userInput))
    
    let ul = document.getElementById('gamesList')
    let lis = document.getElementsByTagName('li');
    
    for (let li of lis) {
        
        if (userInput.length === 0) {
            li.style.display = 'list-item';
        } else if(filtered.includes(li.innerHTML)) {
            li.style.display = 'visibile';
        } else {
            li.style.display = 'none';
        }

    }
    
}

