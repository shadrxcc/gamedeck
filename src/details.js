export const getDetails = (gameID) => {
   if (gameID) {
    fetch(`https://api.rawg.io/api/games/${gameID}?key=6e3446bcac6d4b9b9e33e75472a09c4f`).then(function(response){
    response.json().then(function(data) {
        console.log(data.results);
        //showDetails(data.results);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
   }
}





