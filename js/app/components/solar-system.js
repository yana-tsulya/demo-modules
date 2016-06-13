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
                // the rest have too large distance and too long rolling time to show on the screen
                // decreased manually
                {
                    name : 'Jupiter',
                    distance : 250, //bln km
                    year : 1000
                },
                {
                    name : 'Saturn',
                    distance : 300 , //bln km
                    year : 1150
                },
                {
                    name : 'Uranus',
                    distance : 360, //bln km
                    year : 1220
                },
                {
                    name : 'Neptune',
                    distance : 450, //bln km
                    year : 1460
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