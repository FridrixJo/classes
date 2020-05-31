'use strict';

class MenuCard {
    constructor(scr, alt, title, descr, price, parentSelector ) {
        this.scr = scr;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 75;
        this.changeToUsd();
    }

    changeToUsd() {
        this.price = (this.price / this.transfer).toFixed(1);
    }
    
    render() {
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card">
             <div class="img">
                 <img src=${this.scr} alt=${this.alt}>
             </div>
             <div class="title">
                 <p>${this.title}</p>
             </div>
             <div class="text">
                 <h4>${this.descr}
                 </h4>  
             </div>
             <hr>
             <p id="cost">Цена:</p>
             <p id="num"><span>${this.price}</span>usd/день</p>
        </div>
    `;    
        this.parent.append(element);
    }

}    

    //const div = new MenuCard();
    //div.rander();

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        607,
        '.container'    
    ).render();

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        607,
        '.container'    
    ).render();

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        607,
        '.container'    
    ).render();