import { counter } from "./counter";
import { getDetails } from "./details";

export const getGames = () => {
    fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f').then(function(response){
    response.json().then(function(data) {
        console.log(data.results);
        displayGames(data.results);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
}

export const displayGames = (data) => {
   const cont = document.getElementById('category');
   const ul = document.createElement("div");
    for (let i = 0; i < data.length; i++){
        const game = data[i];
        const li = document.createElement("div")
        const row = `<div class="col-md-3 allgames py-3 m-auto">
            <div class="card rounded border-0 w-100">
        <img src="${game.background_image}" class="card-img-top" alt="...">
        <div class="card-body bg">
          <h5 class="card-title">${game.name}</h5>

          
        </div>
        </div>
        </div>`
                    const overlay = document.getElementById('overlay');
                    const down = document.getElementById('coinDlist');
                    li.innerHTML = row;
                    li.onclick = ()=>{
                            details(item.id)
                            overlay.style.display = 'block';
                            down.style.display = 'none';
                    };
                ul.appendChild(li)
    };
                cont.appendChild(ul)
};

/* eslint-enable import/no-cycle, consistent-return */

