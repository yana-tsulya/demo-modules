define('components/solar-system', [
    'jquery',
    'components/planet'
], function (

    $,
    Planet

) {

    function SolarSystem () {

        this.startYear = 1;
        this.renderInterval = 500;

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

            this.$el = $('[data-planets]');

            this.planetTpl = this.$el.find('li').get(0).outerHTML;

            this.$el.empty();

            this.createPlanets();

            this.render();

            this.renderPlanetYears();

        },

        createPlanets : function () {

            this.planetsInstances = [];

            this.model.planets.forEach(function (planetData) {

                var newPlanet = new Planet(planetData, $(this.planetTpl));

                this.planetsInstances.push(newPlanet);

            }.bind(this));

        },

        render : function () {

            this.planetsInstances.forEach(function (planet) {

                this.$el.append(planet.$el);

            }.bind(this));

        },

        renderPlanetYears : function () {

          var yearTmpl,
              i = this.startYear;

          setInterval(function () {

              this.planetsInstances.forEach(function (planet) {

                  yearTmpl = this.$el.find('[data-planet=' + planet.model.name + ']').find('[data-times-around-sun]');

                  yearTmpl.text(planet.getPlanetYear(i));

              }.bind(this));

              i++;

          }.bind(this), this.renderInterval);
        }

    };

    return SolarSystem;
});
