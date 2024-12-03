function createProductCard(cardData) {

    const liEl = document.createElement('div');

    const titleEl = document.createElement('h2');
    titleEl.textContent = cardData.title;
    liEl.appendChild(titleEl);

    const imageEl = document.createElement('img');
    imageEl.src = cardData.image;
    imageEl.width = 200;
    liEl.appendChild(imageEl);

    const textEl = document.createElement('p');
    textEl.textContent = cardData.description;
    liEl.appendChild(textEl);

    const priceEl = document.createElement('p');
    priceEl.textContent = cardData.price;
    liEl.appendChild(priceEl);

    const buttonEl = document.createElement('button');
    buttonEl.textContent = 'Add to card';
    buttonEl.addEventListener('click', () => {
        
        const blockEl = document.createElement('div');

        const textEl = document.createElement('p');
        textEl.textContent = cardData.description;

        const removeButtonEl = document.createElement('button');
        removeButtonEl.textContent = 'Удалить';
        removeButtonEl.addEventListener('click', () => blockEl.remove());

        blockEl.appendChild(textEl);
        blockEl.appendChild(removeButtonEl);
        
        const cardEl = document.querySelector('.card');
        cardEl.appendChild(blockEl);
        
    });

    liEl.appendChild(buttonEl);

    return liEl;
}

const ulEl = document.querySelector('ul');

dataJSON.forEach(cardData => {
    ulEl.appendChild(createProductCard(cardData));
});
