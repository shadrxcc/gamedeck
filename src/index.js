import './styles/style.scss';
import { getGames } from './games';
import { gamesAction } from './action';
import { racingGames } from './racing';
import { sportGames } from './sports';

getGames();

const saction = document.getElementById('gaction');
const actiongames = document.getElementById('category2');
const tgames = document.querySelector('.actgames');
const wrapper = document.getElementById('category');
const racingbtn = document.getElementById('racing');
const racinggames = document.getElementById('category3');
const sportsbtn = document.getElementById('sports');
const sportgames = document.getElementById('category4')


saction.addEventListener('click', () => {
wrapper.style.display = 'none';
gamesAction();

});

racingbtn.addEventListener('click', () => {
    wrapper.style.display = 'none';
    actiongames.style.display = 'none';
    racingGames();
} )

sportsbtn.addEventListener('click', () => {
    wrapper.style.display = 'none';
    actiongames.style.display = 'none';
    racinggames.style.display = 'none';
    sportGames();
})


