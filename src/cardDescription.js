export class CardDescription {
  constructor(image, title, price) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.render();
  }

  createCardDescriptionElement() {
    const cardDescriptionElement = document.createElement('div');
    cardDescriptionElement.innerHTML = `
    <div class="card-desc">
      <div class="card-img">
        <img src="${this.image}" alt="chair image" height="200" />
      </div>
      <div class="card-title">${this.title}</div>
      <hr />
      <div class="card-price">₹ ${this.price}</div>
    </div>`;
    return cardDescriptionElement;
  }

  render() {
    const cardDescriptionElement = this.createCardDescriptionElement();
    const main = document.querySelector('main');
    document.body.removeChild(main);
    document.body.appendChild(cardDescriptionElement);
  }
}
