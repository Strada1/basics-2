const storage = {
    setFavCities: function(arr) {
        let favCity = JSON.stringify(arr);
        localStorage.setItem('city', favCity);
    },
    getFavCities: function() {
        let res = localStorage.getItem('city');
        return JSON.parse(res);
    },
    setCurrentCity: (value) => {
        localStorage.setItem('currentCity', value);
    },
    getCurrentCity: () => {
        return localStorage.getItem('currentCity');
    },
    saveNewCity: function(value) {
        localStorage.setItem('newCity', value);
    },
    getNewCity: function() {
        return localStorage.getItem('newCity');
    }
};

export default storage;