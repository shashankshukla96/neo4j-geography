const cities = require('./cities.json');
const states = require('./states.json');

const newStates = states.map(state => {
    const citiesOfState = cities[state.name]
    return {
        ...state,
        cities: citiesOfState
    }
});

const fs = require("fs");

fs.writeFile("newStates.json", JSON.stringify(newStates), function(err) {   
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

console.log(newStates);