import { Card } from './card.js';

export class MainContent {
  constructor(itemName) {
    this.itemName = itemName;
    this.initRender();
  }

  createSearchElement() {
    const searchEl = document.createElement('div');
    searchEl.className = 'form-block';
    searchEl.innerHTML = `
      <form>
        <input type="text" id="productName" />
        <button type="button" id="search">Submit</button>
      </form>
    `;
    const searchButton = searchEl.querySelector('#search');
    const inputName = searchEl.querySelector('#productName');
    searchButton.addEventListener('click', () => {
      this.itemName = inputName.value;
      const mainContent = document.querySelector('main');
      if (mainContent) {
        document.body.removeChild(mainContent);
      }
      this.getItems();
    });
    return searchEl;
  }

  initRender() {
    const searchEl = this.createSearchElement();
    document.body.appendChild(searchEl);
  }

  render() {
    const mainContent = document.createElement('main');

    this.items.forEach((item) => {
      const card = new Card(
        item.product_image_link,
        item.product_name,
        item.product_price
      );
      const cardElement = card.createCardElement();
      mainContent.appendChild(cardElement);
    });
    document.body.appendChild(mainContent);
  }

  async getItems() {
    const response = await axios.get(
      `http://localhost:3000/product/${this.itemName}`
    );
    this.items = response.data;
    this.render();
  }
}
