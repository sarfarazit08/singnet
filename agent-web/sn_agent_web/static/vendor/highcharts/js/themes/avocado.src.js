/**
 * @license Highcharts JS v5.0.14 (2017-07-28)
 *
 * (c) 2009-2017 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
'use strict';
(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    } else {
        factory(Highcharts);
    }
}(function(Highcharts) {
    (function(Highcharts) {
        /**
         * (c) 2010-2017 Highsoft AS
         *
         * License: www.highcharts.com/license
         * 
         * Accessible high-contrast theme for Highcharts. Considers colorblindness and 
         * monochrome rendering.
         * @author Øystein Moseng
         */

        Highcharts.theme = {
            colors: ['#F3E796', '#95C471', '#35729E', '#251735'],

            colorAxis: {
                maxColor: '#05426E',
                minColor: '#F3E796'
            },

            plotOptions: {
                map: {
                    nullColor: '#fcfefe'
                }
            },

            navigator: {
                maskFill: 'rgba(170, 205, 170, 0.5)',
                series: {
                    color: '#95C471',
                    lineColor: '#35729E'
                }
            }
        };

        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);

    }(Highcharts));
}));
