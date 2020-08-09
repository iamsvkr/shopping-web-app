import { Header } from './header.js';
import { MainContent } from './mainContent.js';

class App {
  static main() {
    new Header('shopy');
    new MainContent('board');
  }
}

App.main();
