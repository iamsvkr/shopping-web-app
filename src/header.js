export class Header {
  constructor(logo) {
    this.logo = logo;
    this.render();
  }

  createHeaderElement() {
    const headerElement = document.createElement('header');
    headerElement.innerHTML = `<header>
                                <div class="logo">${this.logo}</div>
                              </header>`;
    return headerElement;
  }

  render() {
    const headerElement = this.createHeaderElement();
    document.querySelector('body').appendChild(headerElement);
  }
}
