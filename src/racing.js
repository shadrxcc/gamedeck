import { getDetails } from "./details";

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
    const cont = document.getElementById('category3');
   const ul = document.createElement("div");
   ul.classList.add('row', 'mx-auto');
    for (let i = 0; i < data.length; i++){
        const game = data[i];
        const li = document.createElement("div")
        li.classList.add('col-md-3', 'py-3')
        const row = `<div>
            <div class="card id='${game.id} rounded border-0 w-100">
        <img src="${game.background_image}" class="card-img-top" alt="...">
        <div class="card-body bg">
          <h5 class="card-title">${game.name}</h5>

          
        </div>
        </div>
        </div>`
                    const overlay = document.getElementById('overlay');
                    const down = document.getElementById('category3');
                    li.innerHTML = row;
                    li.onclick = ()=>{
                            getDetails(game.id)
                            overlay.style.display = 'block';
                            down.style.display = 'none';
                    };
                ul.appendChild(li)
    };
                cont.appendChild(ul)
}
