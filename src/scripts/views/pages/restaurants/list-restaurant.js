import RestaurantApi from '../../../data/restaurant-api';
import { createRestaurantItemTemplate } from '../../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <section class="content" id="content">
      <div class="explore">
        <h1 class="explore-label">List Restaurant</h1>
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

export default ListRestaurant;
