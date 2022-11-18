import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-intitiator';
import StickyInitiator from '../utils/sticky-initiator';

class App {
  constructor({
    button, drawer, content, navbar,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navbar = navbar;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    StickyInitiator.init({
      navbar: this._navbar,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
