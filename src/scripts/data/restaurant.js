import dataJson from '../../DATA.json';

class Restaurant {
  static async getAll() {
    try {
      const responseJson = dataJson;

      return Promise.resolve(responseJson.restaurants);
    } catch (error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('data tidak ditemukan');
    }
  }
}

export default Restaurant;
