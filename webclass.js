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
        this.price = (this.price / this.transfer).toFixed(2);
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
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        1504,
        '.container'    
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        1071,
        '.container'    
    ).render();