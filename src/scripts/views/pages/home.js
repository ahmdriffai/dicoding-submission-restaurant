import RestaurantApi from '../../data/restaurant-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
        <img class="lazyload" src='./images/heros/hero-image_2-large.jpg' 
            alt="life is strange 2 poster">
      </picture>
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
