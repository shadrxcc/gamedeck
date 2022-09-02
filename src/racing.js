export const racingGames = () => {
    fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f&genres=1').then(function(response){
    response.json().then(function(data) {
        console.log(data.results);
        showRacingGames(data.results);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
}

export const showRacingGames = (data) => {
    const featured = data.map(game => {
        return `
        <div class="col-md-3 actgames py-3 m-auto">
            <div class="card border-danger w-100">
        <img src="${game.background_image}" class="card-img-top" alt="...">
        <div class="card-body bg">
          <h5 class="card-title">${game.name}</h5>
          
        </div>
        </div>
        </div>
        `
    })
    document.getElementById('category3').insertAdjacentHTML("afterbegin", featured);
}
