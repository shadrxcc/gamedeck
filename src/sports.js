import { getDetails } from "./details";
import { counter } from "./counter";

export const sportGames = () => {
    fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f&genres=15').then(function(response){
    response.json().then(function(data) {
        console.log(data.results);
        showSportGames(data.results);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
}

export const showSportGames = (data) => {
    const cont = document.getElementById('category4');
    const gamecount = counter(data)
   const text = document.createElement('h5');
   text.classList.add('text-start', 'ps-4')
   text.innerHTML = "Sport Games:" + " " + "(" + ([gamecount]) + ")"
   cont.appendChild(text)
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
                    const down = document.getElementById('category4');
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
