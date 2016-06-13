define('components/planet', [

    'jquery'

], function (

    $

) {

    function Planet (data) {
        this.model = data;
    }

    Planet.prototype = {

        showData : function () {
            console.dir(this.model);
        }

    };

    return Planet;

});