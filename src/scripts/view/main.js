import Restaurant from "../data/restaurant";

const main = () => {
    const menu = document.querySelector('#menu');
    const drawer = document.querySelector('#drawer');
    const hero = document.querySelector('.hero');
    const main = document.querySelector('main');


    menu.addEventListener('click', function(event) {
        drawer.classList.toggle('open');
        event.stopPropagation();
    });

    hero.addEventListener('click', function(event) {
        drawer.classList.remove('open');
        event.stopPropagation();
    })

    main.addEventListener('click', function(event) {
        drawer.classList.remove('open');
        event.stopPropagation();
    })

    // sticky
    window.onscroll = function() {scrollSticky()};

    const navbar = document.querySelector(".nav");


    const sticky = navbar.offsetTop;

    function scrollSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    const listRestaurant = async () => {
        try {
            const result = await Restaurant.getAll();
            console.log('a');
            if (result.length === 0) {
                fallbackResult('data tidak ditemukan');
            }else {
                renderRestaurant(result);
            }
        } catch (error) {
            console.log(error);
        }
    }
    // end sticky
    
    // rendar data
    const renderRestaurant = result =>{
        const restaurants = document.querySelector('.restaurants');
        result.forEach(restaurant => {
            const itemRestaurant = document.createElement('article');
            itemRestaurant.classList.add('restaurant-item');
            
            itemRestaurant.innerHTML = `
            <div class="restaurant-item-city">
                <h3>${restaurant.city}</h3>
            </div>
            <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-item-thumnail">
            <div class="restaurant-item-content">
                <p class="restaurant-item-rating">Rating: ${restaurant.rating}</p>
                <h1 class="restaurant-item-title">
                    <a href="">${restaurant.name}</a>
                </h1>
                <p class="restaurant-item-description">${restaurant.description}</p>
            </div>
            `;
    
            restaurants.appendChild(itemRestaurant); 
        });
    }

    const fallbackResult = message => {

    }

    listRestaurant();
}

export default main;