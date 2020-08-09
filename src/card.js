import { CardDescription } from './cardDescription.js';

export class Card {
  constructor(image, title, price) {
    this.image = image;
    this.title = title;
    this.price = price;
  }

  createCardElement() {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <div class="card-img">
        <img src="${this.image}" alt="chair image" height="200" />
      </div>
      <div class="card-title">${this.title}</div>
      <hr />
      <div class="card-price">₹ ${this.price}</div>`;

    //cardElement.addEventListener('click', () => {
    //  new CardDescription(this.image, this.title, this.price);
    //});
    return cardElement;
  }
}
