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
                    distance : 50
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