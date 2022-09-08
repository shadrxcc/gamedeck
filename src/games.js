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
   const gamecount = counter(data)
    const text = "Featured Games:"
    cont.innerText = text.concat(" ", ([gamecount]))
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
          <h6 class="card-title">${game.name}</h6>

          
        </div>
        </div>
        </div>`
                    const overlay = document.getElementById('overlay');
                    const down = document.getElementById('category');
                    li.innerHTML = row;
                    li.onclick = ()=>{
                            getDetails(game.id)
                            overlay.style.display = 'block';
                            down.style.display = 'none';
                    };
                ul.appendChild(li)
    };
                cont.appendChild(ul)
};
