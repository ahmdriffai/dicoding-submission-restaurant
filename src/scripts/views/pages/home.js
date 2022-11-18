import RestaurantApi from '../../data/restaurant-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">Temukan Restourant Ternama</h1>
        <p class="hero-tagline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iste explicabo vel!</p>
      </div>
    </div>
    <section class="content" id="content">
      <div class="explore">
        <h1 class="explore-label">Explore Restaurant</h1>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
