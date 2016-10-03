// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.signUp', {
      url: '/signUp',
      views: {
        'tab-signUp': {
          templateUrl: 'templates/tab-signUp.html',
          controller: 'userSignUp'
        }
      }
    })

    .state('tab.signIn', {
      url: '/signIn',
      views: {
        'tab-signIn': {
          templateUrl: 'templates/tab-signIn.html',
          controller: 'userSignIn'
        }
      }
    })

    .state('tab.category', {
      cache: false,
      url: '/category',
      views: {
        'tab-category': {
          templateUrl: 'templates/tab-category.html',
          controller: 'CategoryCtrl'
        }
      }
    })

    .state('tab.category-detail', {
      url: '/category/:_id',
      views: {
        'tab-category': {
          templateUrl: 'templates/category-detail.html',
          controller: 'CategoryDetailCtrl'
        }
      }
    })

    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsController'
        }
      }
    })

    .state('tab.post', {
      url: '/post',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-task.html',
          controller: 'PostCtrl'
        }
      }
    })

    .state('tab.userprofile', {
      cache: false,
      url: '/userprofile',
      views: {
        'tab-userprofile': {
          templateUrl: 'templates/tab-userprofile.html',
          controller: 'UserProfileCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/signIn');

});
