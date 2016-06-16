define('components/solar-system', [
    'jquery',
    'components/planet'
], function (

    $,
    Planet

) {

    function SolarSystem () {
        this.$el = $('main');

        this.model = {
            planets : [
                {
                    name : 'Mercury',
                    distance : 58,
                    year : 58 / 365.3
                },
                {
                    name : 'Venus',
                    distance : 108.2,
                    year : 224.7 / 365.3
                },
                {
                    name : 'Earth',
                    distance : 149.6,
                    year : 365.3 / 365.3
                },
                {
                    name : 'Mars',
                    distance : 227.9,
                    year : 687 / 365.3
                },
                {
                    name : 'Jupiter',
                    distance : 778,
                    year : 11.9
                },
                {
                    name : 'Saturn',
                    distance : 1427 ,
                    year : 29.46
                },
                {
                    name : 'Uranus',
                    distance : 2871,
                    year : 84
                },
                {
                    name : 'Neptune',
                    distance : 4497,
                    year : 164.8
                }
            ]
        };

        this.init();

    }

    SolarSystem.prototype = {

        init : function () {

            $this = this;

            this.$el = $('[data-planets]');

            this.planetTpl = this.$el.find('li').get(0).outerHTML;

            this.startYear = 1;

            setInterval(function () {
              $this.$el.empty();

              $this.createPlanets($this.startYear ++);

              $this.render();
            }, 300);

        },

        createPlanets : function (i) {

            this.planetsInstances = [];

            this.model.planets.forEach(function (planetData) {

                planetData.yearGone = i;

                var newPlanet = new Planet(planetData, $(this.planetTpl));

                this.planetsInstances.push(newPlanet);

            }.bind(this));

        },

        render : function () {

            this.planetsInstances.forEach(function (planet) {

                this.$el.append(planet.$el);

            }.bind(this));

        }


    };

    return SolarSystem;
});
