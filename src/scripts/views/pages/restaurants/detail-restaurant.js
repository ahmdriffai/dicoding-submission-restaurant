import RestaurantApi from '../../../data/restaurant-api';
import UrlParser from '../../../routes/url-parser';
import LikeButtonPresenter from '../../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApi.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default DetailRestaurant;
