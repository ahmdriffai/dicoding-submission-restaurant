Feature('Liking Restaurant');

const assert = require('assert');

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/#/list-restaurant');
  pause();

  I.seeElement('.restaurant-item-title a');

  const restaurant = locate('.restaurant-item-title a').first();
  const restaurantName = await I.grabTextFrom(restaurant);

  I.click(restaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');

  I.seeElement('.restaurant-item-title a');

  const likeRestaurantName = await I.grabTextFrom('.restaurant-item-title a');

  assert.strictEqual(restaurantName, likeRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/list-restaurant');
  pause();

  I.seeElement('.restaurant-item-title a');

  I.click(locate('.restaurant-item-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');

  I.seeElement('.restaurant-item-title a');

  I.click(locate('.restaurant-item-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');
  I.dontSee('.post-item__title a');
});
