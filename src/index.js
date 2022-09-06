import './styles/style.scss';
import { getGames } from './games';
import { gamesAction } from './action';
import { racingGames } from './racing';
import { sportGames } from './sports';
import { getDetails } from './details';

getGames();




const saction = document.getElementById('gaction');
const actiongames = document.getElementById('category2');
const tgames = document.querySelector('.actgames');
const wrapper = document.getElementById('category');
const racingbtn = document.getElementById('racing');
const racinggames = document.getElementById('category3');
const sportsbtn = document.getElementById('sports');
const sportgames = document.getElementById('category4')

const homebtn = document.getElementById('home')
homebtn.addEventListener('click', () => {
    wrapper.style.display = 'inline-flex';
    racinggames.style.display = 'none';
    sportgames.style.display = 'none';
    actiongames.style.display = 'none';
    getGames();
})


saction.addEventListener('click', () => {
wrapper.style.display = 'none';
    actiongames.style.display = 'inline-flex';
gamesAction();
});

racingbtn.addEventListener('click', () => {
    wrapper.style.display = 'none';
    actiongames.style.display = 'none';
    racinggames.style.display = 'inline-flex';
    sportgames.style.display = 'none';
    racingGames();
} )

sportsbtn.addEventListener('click', () => {
    wrapper.style.display = 'none';
    actiongames.style.display = 'none';
    racinggames.style.display = 'none';
    sportgames.style.display = 'inline-flex';
    sportGames();
})



