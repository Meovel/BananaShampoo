var starterServices = angular.module('starter.services', []);

starterServices.factory('Users', function($http, $window) {
  return {
    get: function() {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/users');
      return $http.get(baseUrl + '/api/users');
    },
    post: function(user) {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/users');
      return $http.post(baseUrl + '/api/users', user);
    },
    delete: function(userID) {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/users/');
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.delete(baseUrl + '/api/users/' + userID);
    },
    put: function(userID, user) {
      var baseUrl = $window.sessionStorage.baseurl;
      //console.log(baseUrl + '/api/users/'+userID);
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/users/'+userID);
      return $http.put(baseUrl + '/api/users/' + userID, user);
    },
    getByUserId: function(userID) {
      var baseUrl = $window.sessionStorage.baseurl;
      //console.log(baseUrl + '/api/users/');
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/users/');
      return $http.get(baseUrl + '/api/users/'+userID);
    }
  }
});

starterServices.factory('Tasks', function($http, $window) {
  return {
    get: function() {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/tasks');
      return $http.get(baseUrl + '/api/tasks');
    },
    post: function(task) {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/tasks');
      return $http.post(baseUrl + '/api/tasks', task);
    },
    delete: function(taskID) {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/tasks/');
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.delete(baseUrl + '/api/tasks/' + taskID);
    },
    put: function(taskID, task) {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/tasks/'+taskID);
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.put(baseUrl + '/api/tasks/' + taskID, task);
    },
    getByTaskId: function(taskID) {
      var baseUrl = $window.sessionStorage.baseurl;
      var baseUrl = 'http://localhost:4000';
      console.log(baseUrl + '/api/tasks/');
      return $http.get(baseUrl + '/api/tasks/'+taskID);
    }
  }
});
