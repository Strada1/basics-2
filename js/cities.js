const storage = {
    CITIES: 'favouriteCities',
    LAST_CITY: 'lastCity',
    ALTERNATIVE_CITY: 'Архангельск',
    addOrRemoveCity: function(city){
        let list = this.getCities();
        list = !this.checkCity(city) ? [...list, city] :
            list.filter(item => item !== city);
        this._stringifyCities(list)
    },
    getCities: function(){
        let cities = localStorage.getItem(this.CITIES);
        if(!cities){
            this._stringifyCities([]);
        }
        return cities ? JSON.parse(cities) : [] ;
    },
    setLastCity: function(city){
        localStorage.setItem(this.LAST_CITY, city)
    },
    getLastCity: function(){
        let lastCity = localStorage.getItem(this.LAST_CITY);
        return lastCity ? lastCity : this.ALTERNATIVE_CITY;
    },
    checkCity: function(city){
        let cities = this.getCities();
        return cities.includes(city);
    },
    _stringifyCities: function(cities){
        let citiesJSON = JSON.stringify(cities);
        localStorage.setItem(this.CITIES, citiesJSON);
    },
}

function createCity(cityName){
    let city = document.createElement('li');
    city.className = 'favourites__city';
    city.textContent = cityName;

    let remove = document.createElement('div');
    remove.className = 'favourites__remove'

    city.append(remove);
    return city;
}

export {storage, createCity}