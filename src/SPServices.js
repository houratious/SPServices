/**
 * SPServices main module. Simply loads all other modules. Those modules should
 * all add themselves to the jQuery object (likely $.fn namespace)... This module
 * only needs to reference those modules as dependencies.
 *
 * @namespace spservices
 *
 * @example
 *
 * require(['jquery', "src/SPServices"], function($){
 *      // $.fn.SPServices() should now be available here.
 *      // Notice how there is no need to define a second function parameter
 *      // for the `SPServices` module - that's because all SPServices methods
 *      // utilities add themselves to the jQuery namespace.
 * })
 *
 */
define([
    "jquery",
    "./utils/constants",
    "./core/SPServices.core",
    "./core/SPServices.utils",
    "./core/Version",
    "./utils/SPGetCurrentSite",
    "./utils/SPGetCurrentUser",
    "./utils/SPFilterNode",
    "./utils/SPGetListItemsJson",
    "./utils/SPXmlToJson",
    "./utils/SPConvertDateToISO",
    "./utils/SPGetDisplayFromStatic",
    "./utils/SPGetStaticFromDisplay",
    "./utils/SPGetLastItemId",
    "./utils/SPGetQueryString",
    "./utils/SPListNameFromUrl",
    "./value-added/SPCascadeDropdowns",
    "./value-added/SPUpdateMultipleListItems"
], function($){
    return $;
});
