import Home from '../views/pages/home';
import DetailRestaurant from '../views/pages/restaurants/detail-restaurant';
import FavoriteRestaurant from '../views/pages/restaurants/favorite-restaurant';
import ListRestaurant from '../views/pages/restaurants/list-restaurant';

const routes = {
  '/': Home,
  '/list-restaurant': ListRestaurant,
  '/favorite-restaurant': FavoriteRestaurant,
  '/detail-restaurant/:id': DetailRestaurant,
};

export default routes;
