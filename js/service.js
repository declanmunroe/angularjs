// new angular module with name and has no dependancies
angular.module('UserService', [])
    .factory('UserAPIService', function($http) {
 
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });
    
angular.module('TodoService', [])
    .factory('TodoAPIService', function($http) {
        TodoAPIService = {
            getTodos: function(url, data, token) {
                var header = "Authorization: JWT " + token; //header title must be spelt right when calling it again on other pages or it will not work
                return $http.get(url, {params:{"username": data}}, header);
                //placing the token in the header is because the get method is not as secure as the post method so we place it in the header and then call the header in the get method
            },
            createTodo: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.post(url, data, header);
            },
            editTodo: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteTodo: function(url, token) {
                header = "Authorization: JWT " + token;
                return $http.delete(url, token);
            }
        };
        return TodoAPIService;
    });