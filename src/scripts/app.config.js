

function AppConfig($routeProvider, $locationProvider){
  // 'ngInject';
    $routeProvider
      .when('/home', {
        templateUrl: 'templates/default.html',
      })
      .when('/contact-info/:contact_index', {
        template : '<contact-info></contact-info>'
        
      })
      .when('/add', {
        template: '<contact-form></contact-form>',
      })
      .when('/edit/:contact_index', {
        template: '<contact-form></contact-form>',
        
      })
      .otherwise({redirectTo: '/home'});
      $locationProvider.html5Mode(true);
  }

  export default AppConfig;
