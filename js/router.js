import { Game } from './game/game.js';
import { Stats } from './stats.js';

const classes = {
  Game,
  Stats
};

export class Router{
  constructor(){
    this.routes = {
      '#/game': 'Game',
      '#/stats': 'Stats',
    }

    // Main container
    this.container = document.getElementById('container');
    
    //Game container *****
    this.gameContainer = document.createElement('div');

    this.init();

    if(window.location.hash) {
      this.checkRouteExist(window.location.hash)
    }

    window.addEventListener('hashchange', () => {
      this.onRouteChange();
    });
  }

  init(){
    const title = "BattleShip by Les Influenceurs"
    document.title = title;

    // Header
    const header = document.createElement('div');
    header.style.margin = "30";

    // Page Titles
    const containerTitle = document.createElement('h1');
    containerTitle.innerHTML = title;
    containerTitle.setAttribute('class', 'txt-center');
    header.appendChild(containerTitle);

    const subTitle = document.createElement('p');
    subTitle.innerHTML = "Full Javascript battleship"
    subTitle.setAttribute('class', 'txt-center');
    header.appendChild(subTitle)

    // Btns container
    const mainBtns = document.createElement('div');

    // back btn
    const backBtn = document.createElement('a');
    backBtn.innerHTML = "Back";
    backBtn.setAttribute('class','btn btn-default');
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
    backBtn.style.background = "#DCD6F7";

    // start game button
    const startGameBtn = document.createElement('a');
    startGameBtn.innerHTML = "Start The Battleship";
    startGameBtn.setAttribute('class', 'btn btn-success');
    startGameBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#/game';
    })
    startGameBtn.style.background = "#4ECDC4";

    // stats button
    const statsBtn = document.createElement('a');
    statsBtn.innerHTML = 'Stats';
    statsBtn.setAttribute('class', 'btn');
    statsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#/stats';
    });
    statsBtn.style.background = "#FF6B6B";

    mainBtns.appendChild(backBtn);
    mainBtns.appendChild(startGameBtn);
    mainBtns.appendChild(statsBtn);
    mainBtns.style.textAlign = "center";

    this.gameContainer.setAttribute('id', 'game-container');
    this.container.appendChild(header);
    this.container.appendChild(mainBtns);
    this.container.appendChild(this.gameContainer);
  }

  onRouteChange() {
    const hash = window.location.hash;
    this.checkRouteExist(hash);
  }

  checkRouteExist(hash) {
    if(Object.keys(this.routes).includes(hash)) {
      this.gameContainer.innerHTML = '';
      new DynamicClass(this.routes[hash]);
    }
    else if (hash === "" && window.location.pathname === '/'){
      this.gameContainer.innerHTML = "";
    }
    else {
      alert(`This url don't exist`); 
    }
  }
}

class DynamicClass{
  constructor(className) {
    return new classes[className];
  }
}
