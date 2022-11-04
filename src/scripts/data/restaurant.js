import data_json from '../../DATA.json';

class Restaurant {
    static async getAll() {
        try {
        
            const responseJson = data_json;
    
            return Promise.resolve(responseJson.restaurants);
        } catch (error) {
            return Promise.reject(`data tidak ditemukan`);
        }
    }
}

export default Restaurant;