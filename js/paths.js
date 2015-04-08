define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_ANALYSIS_GHG_OVERVIEW: 'faostat-ui-analysis-ghg-overview',
            faostat_ui_analysis_ghg_overview: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});