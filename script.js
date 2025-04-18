const themesData = [
    "Piosenka o miłości",
    "Piosenka o narkotykach",
    "Piosenka z lat 80",
    "Piosenka z lat 90",
    "Piosenka z lat 2000",
    "Piosenka z lat 2010",
    "Piosenka z lat 2020",
    "Duet kobieta i mężczyzna",
    "Smutna piosenka",
    "Wesoła piosenka",
    "Piosenka o jeżdżeniu (czymkolwiek)",
    "Piosenka w innym języku niż polski lub angielski",
    "Uczucie w tytule",
    "Polski rap",
    "Disco polo",
    "Nostalgiczna piosenka",
    "Piosenka na lato",
    "Piosenka na jesień",
    "Cover lub remix",
    "Hit z ostatnich lat",
    "Piosenka jakiegoś zespołu/grupy",
    "Piosenka z gościnnym występem",
    "Piosenka opowiadająca historię",
    "Długa piosenka",
    "Piosenka z długim tytułem",
    "Piosenka z głupim tekstem",
    "Piosenka z miejscem w tytule",
    "Piosenka z liczbą w tytule",
    "Piosenka Rockowa",
    "Piosenka popowa",
    "Piosenka elektroniczna",
]
let counter = 0;
let themes = [...themesData];
function pickTheme(){
    if(themes.length === 0){
        return;
    }
    const randomIndex = Math.floor(Math.random() * themes.length);
    const theme = themes[randomIndex];
    themes.splice(randomIndex, 1)
    document.getElementById('theme-container').innerHTML = theme;
    counter++;
    updateCounter();
    console.log(themes);
}

function resetThemes(){
    themes = [...themesData];
    counter = 0;
    updateCounter();
    document.getElementById('theme-container').innerHTML = "Wylosuj temat";
    console.log(themes);
}

function updateCounter(){
    document.getElementById('counter').innerHTML = counter.toString() + "/" + themesData.length.toString();
}

document.addEventListener('DOMContentLoaded', async () => {
    let themes = [...themesData];
    counter = 0;
    updateCounter();
    document.getElementById('play-button').addEventListener('click', () => pickTheme());
    document.getElementById('reset-button').addEventListener('click', () => resetThemes());
}); 
