export const getGames = () => {
    fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f&dates=2018-09-01,2022-04-30&platforms=18,1,7').then(function(response){
    response.json().then(function(data) {
        console.log(data.results);
        displayGames(data.results);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
}

export const displayGames = (data) => {
    const featured = data.map(game => {
        return `
        <div class="col-md-3 py-3 m-auto">
            <div class="card border-danger w-100">
        <img src="${game.background_image}" class="card-img-top" alt="...">
        <div class="card-body bg">
          <h5 class="card-title">${game.name}</h5>
          <p class="card-text"></p>
        </div>
        </div>
        </div>
        `
    })
    document.getElementById('category').insertAdjacentHTML("afterbegin", featured);
}

