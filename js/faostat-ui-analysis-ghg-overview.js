define(['jquery',
        'handlebars',
        'text!faostat_ui_analysis_ghg_overview/html/templates.html',
        'i18n!faostat_ui_analysis_ghg_overview/nls/translate',
        'bootstrap',
        'sweetAlert'], function ($, Handlebars, templates, translate) {

    'use strict';

    function GHG_OVERVIEW() {

        this.CONFIG = {
            lang: 'E',
            placeholder_id: 'placeholder'
        };

    }

    GHG_OVERVIEW.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'E';

    };

    return GHG_OVERVIEW;

});