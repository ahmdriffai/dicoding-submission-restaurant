const StickyInitiator = {
  init({ navbar }) {
    const sticky = navbar.offsetTop;
    window.onscroll = () => { this.scrollSticky(navbar, sticky); };
  },

  scrollSticky(navbar, sticky) {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  },
};

export default StickyInitiator;
