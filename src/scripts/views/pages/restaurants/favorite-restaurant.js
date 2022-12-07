import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
      <section class="content" id="content">
        <div class="explore">
          <h1 class="explore-label">Favorite Restaurant</h1>
          <div id="restaurants" class="restaurants">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default FavoriteRestaurant;
