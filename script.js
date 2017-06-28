(function () {

  'use strict';

    angular
         .module('app', [])
         .component('upload', {
             templateUrl: 'ui.html',
             bindings: {
                 name: '@'
             },
             controller: function () {
               //alert('here');
             }
         });

})();