define('components/planet', [

    'jquery'

], function (

    $

) {

    function Planet (data, $el) {

        this.model = data;

        this.$el = $el;

        this.tpl = {

            name : this.$el.find('[data-name]'),

            distance : this.$el.find('[data-distance-from-sun]'),

            timesAround : this.$el.find('[data-times-around-sun]')

        };

        this.renderStatic();
    }

    Planet.prototype = {

        renderStatic : function () {

            this.tpl.name.text(this.model.name);

            this.tpl.distance.text(this.model.distance);

            this.tpl.timesAround.text(0);
        }

    };

    return Planet;

});