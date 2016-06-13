define('components/solar-system', [
    'jquery',
    'components/planet'
], function (

    $,
    Planet

) {

    function SolarSystem () {

        this.model = {
            planets : [
                {
                    name : 'Mercury',
                    distance : 58, //bln km
                    year : 58
                },
                {
                    name : 'Venus',
                    distance : 108.2, //bln km
                    year : 224.7
                },
                {
                    name : 'Earth',
                    distance : 149.6, //bln km
                    year : 365.3
                },
                {
                    name : 'Mars',
                    distance : 227.9, //bln km
                    year : 687
                },
                {
                    name : 'Jupiter',
                    distance : 778, //bln km
                    year : 11.9 * 365.3
                },
                {
                    name : 'Saturn',
                    distance : 1427 , //bln km
                    year : 29.46 * 365.3
                },
                {
                    name : 'Uranus',
                    distance : 2871, //bln km
                    year : 84 * 365.3
                },
                {
                    name : 'Neptune',
                    distance : 4497, //bln km
                    year : 164.8
                }
            ]
        };

        this.init();

    }

    SolarSystem.prototype = {

        init : function () {
            this.planets = [];
            this.model.planets.forEach(function (planetData) {
                this.planets.push(new Planet(planetData));
            }.bind(this));
            console.dir(this.model);
        },

        render : function () {

        }


    };

    return SolarSystem;
});