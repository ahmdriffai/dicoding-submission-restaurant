import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item-city">
      <h3>${restaurant.city}</h3>
    </div>
    <div class="restaurant-item-thumnail">
      <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}" alt="${restaurant.name}" >
    </div>
    <div class="restaurant-item-content">
      <p class="restaurant-item-rating">Rating: ${restaurant.rating}</p>
      <h1 class="restaurant-item-title">
          <a href="/#/detail-restaurant/${restaurant.id}">${restaurant.name}</a>
      </h1>
      <p class="restaurant-item-description">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__detail">
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}" />  
    <div class="restaurant__desc">
      <h3>${restaurant.name}</h3>
      <p class="restaurant__address">${restaurant.address}</p>
      <span>${restaurant.city}</span>
      <p class="restaurant__description">${restaurant.description}</p>
      <h3>Menu</h3>
      <div class="restaurant__menu">
        <div class="restaurant__menu__item">
          <h2>Foods</h2>
          <ul> ${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</ul>
        </div>
        <div class="restaurant__menu__item">
          <h2>Drinks</h2>
          <ul> ${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</ul>
        </div>
      </div>
    </div>
  </div>
  <div class="restaurant__review">
    <h2>Review</h2>
    ${restaurant.customerReviews.map((review) => `
      <div class="restaurant__review__item">
        <p><b>${review.name}</b> - <i>${review.date}</i></p>
        <p>${review.review}</p>
        <br>
      </div>
    `).join('')} 
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
