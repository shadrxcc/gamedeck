export const getDetails = (gameID) => {
   if (gameID) {
    fetch(`https://api.rawg.io/api/games/${gameID}?key=6e3446bcac6d4b9b9e33e75472a09c4f`).then(function(response){
    response.json().then(function(data) {
        console.log([data]);
        gameDetails([data]);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
   }
}

export const gameDetails = (data) => {
    const more = document.getElementById('info');
    for (let i = 0; i < data.length; i++){
        const game = data[i];
            var  rows = `
          

            <div class="card bg mx-lg-5 mb-3 mx-4"">
             
  <img src="${game.background_image}" class="card-img" alt="...">
  <div class="card-body bg">
    <h5 class="card-title">${game.name}</h5>
    <p class="card-text">${game.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-white bg">Genres: ${game.genres[0].name}, ${game.genres[1].name}</li>
    <li class="list-group-item text-white bg">Platforms: ${game.platforms[0].platform.name}, ${game.platforms[1].platform.name}, ${game.platforms[2].platform.name}, ${game.platforms[3].platform.name}</li>
    <li class="list-group-item text-white bg">Publishers: ${game.publishers[0].name}</li>
  </ul>
  <div class="card-body bg">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>   
      `
        more.innerHTML += rows;
    };
}

