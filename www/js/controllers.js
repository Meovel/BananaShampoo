angular.module('starter.controllers', ['ngCookies'])

.controller('userSignIn', ['$scope', '$http', 'Users', '$window', '$sce', '$cookies', function($scope, $http, Users, $window, $sce, $cookies) {

        $scope.formEmail = { text: "" }
        $scope.formPassword = { text: "" }

        $scope.userSignIn = function() {

            Users.get().success(function(data) {
                    $scope.temp = data;
                    $scope.user = $scope.temp.data;
                    //console.log($scope.user);
                    var email = $scope.formEmail.text;
                    var password = $scope.formPassword.text;
                    var errorMessage = "";
                    var passwordTrue = false;
                    var emailTrue = false;

                    for (var i = 0; i < $scope.user.length; i++) {
                        if (email == $scope.user[i].email) {
                            emailTrue = true;
                            //console.log("I am here!!");
                            if (password == $scope.user[i].password) {
                                $scope.currentUser = $scope.user[i];
                                //console.log($scope.currentUser.email);
                                //console.log($scope.currentUser.password);
                                passwordTrue = true;
                                $cookies.put('userId', $scope.currentUser._id);
                                //console.log($scope.currentUser._id);
                                //var temp = $cookies.get('userId');
                                //console.log(temp);
                                //if(password)
                                //   $scope.UserSignedIn = $sce.trustAsHtml('Nice to see you again, ' + $scope.currentUser.name);
                                break;
                            }
                        }
                    }
                    if (emailTrue && passwordTrue) {
                        $window.location.href = 'index.html#/tab/category';
                    }
                    if (!emailTrue)
                        errorMessage = "The email you entered does not exist, please try again";
                    else
                    if (!passwordTrue && emailTrue)
                        errorMessage = "The password you entered is not correct, please try again";

                    //console.log(errorMessage);
                    $scope.errorPopUp = $sce.trustAsHtml(errorMessage);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

    }])
    .controller('userSignUp', ['$scope', '$http', 'Users', '$window', '$sce', function($scope, $http, Users, $window, $sce) {

        $scope.formName = { text: "" }
        $scope.formEmail = { text: "" }
        $scope.formPassword = { text: "" }
        $scope.failMessage = "";

        $scope.createUser = function() {
            //alert("I cliked here");
            //console.log($scope.formName)
            console.log($scope.formName.text)
            console.log($scope.formEmail.text)
            console.log($scope.formPassword.text)
            var user = { name: $scope.formName.text, email: $scope.formEmail.text, password: $scope.formPassword.text };
            Users.post(user).success(function(data, status) {
                $scope.submitForm = function(isValid) {
                    // check to make sure the form is completely valid
                    if (isValid) {
                        alert('You have successfully registerd, please login');
                        $scope.UserAdded = $sce.trustAsHtml('User "' + $scope.formName.text + '" has been add');
                    }
                };
                $window.location.href = 'index.html#/tab/signIn';

            }).error(function(err) {
                $scope.failMessage = "The Email you entered has been registered";
            });
        };

    }])

.controller('CategoryCtrl', ['$scope', '$http', 'Users', '$window', '$cookies', function($scope, $http, Users, $window, $cookies) {

    var temp = $cookies.get('userId');
    $cookies.put('userId', temp);
    //console.log(temp);

    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Hall"}').success(function(data) {
        $scope.hall = data.data;
        //console.log(data);

    }).error(function(err) {
        console.log(err);
    });
    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "UniLodge"}').success(function(data) {
        $scope.unilodge = data.data;
        //console.log(data);

    }).error(function(err) {
        console.log(err);
    });
    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Civic"}').success(function(data) {
        $scope.civic = data.data;
        //console.log(data.data);

    }).error(function(err) {
        console.log(err);
    });
    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Belconne"}').success(function(data) {
        $scope.belconne = data.data;
        //console.log(data);

    }).error(function(err) {
        console.log(err);
    });
    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Harrison"}').success(function(data) {
        $scope.harrison = data.data;
        //console.log(data);

    }).error(function(err) {
        console.log(err);
    });
    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Franklin"}').success(function(data) {
        $scope.franklin = data.data;
        //console.log(data);

    }).error(function(err) {
        console.log(err);
    });
    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Gungahlin"}').success(function(data) {
      $scope.gungahlin = data.data;
      //console.log(data);

    }).error(function(err) {
      console.log(err);
    });
    $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Other"}').success(function(data) {
      $scope.other = data.data;
      //console.log(data);

    }).error(function(err) {
      console.log(err);
    });

    $scope.category = 'Other';

    $scope.halltask = true;
    $scope.halllimit = 5;

    $scope.unilodgetask = false;
    $scope.unilodgelimit = 5;

    $scope.civictask = false;
    $scope.civiclimit = 5;

    $scope.belconnetask = false;
    $scope.belconnelimit = 5;

    $scope.harrisontask = false;
    $scope.harrisonlimit = 5;

    $scope.franklintask = false;
    $scope.franklinlimit = 5;

    $scope.gungahlintask = false;
    $scope.gungahlinlimit = 5;

    $scope.othertask = false;
    $scope.otherlimit = 5;

    $scope.type = "test";

    $scope.showHall = function() {
        $http.get('http://54.206.88.186:4000/api/tasks?where={"category": "Hall"}').success(function(data) {
          $scope.hall = data.data;
          //console.log(data);

        }).error(function(err) {
          console.log(err);
        });

        $scope.category = 'Hall';
        $scope.halltask = true;
        $scope.unilodgetask = false;
        $scope.unilodgelimit = 5;

        $scope.civictask = false;
        $scope.civiclimit = 5;

        $scope.belconnetask = false;
        $scope.belconnelimit = 5;

        $scope.harrisontask = false;
        $scope.harrisonlimit = 5;

        $scope.franklintask = false;
        $scope.franklinlimit = 5;

        $scope.gungahlintask = false;
        $scope.gungahlinlimit = 5;

        $scope.othertask = false;
        $scope.otherlimit = 5;
    }
    $scope.showUnilodge = function() {
        $scope.category = 'Unilodge';
        $scope.unilodgetask = true;
        $scope.halltask = false;
        $scope.halllimit = 5;

        $scope.civictask = false;
        $scope.civiclimit = 5;

        $scope.belconnetask = false;
        $scope.belconnelimit = 5;

        $scope.harrisontask = false;
        $scope.harrisonlimit = 5;

        $scope.franklintask = false;
        $scope.franklinlimit = 5;

        $scope.gungahlintask = false;
        $scope.gungahlinlimit = 5;

        $scope.othertask = false;
        $scope.otherlimit = 5;
    }
    $scope.showCivic = function() {
        $scope.category = 'Civic';
        $scope.civictask = true;
        $scope.halllimit = 5;
        $scope.halltask = false;

        $scope.unilodgetask = false;
        $scope.unilodgelimit = 5;

        $scope.belconnetask = false;
        $scope.belconnelimit = 5;

        $scope.harrisontask = false;
        $scope.harrisonlimit = 5;

        $scope.franklintask = false;
        $scope.franklinlimit = 5;

        $scope.gungahlintask = false;
        $scope.gungahlinlimit = 5;

        $scope.othertask = false;
        $scope.otherlimit = 5;
    }
    $scope.showBelconne = function() {
        $scope.category = 'Belconne';
        $scope.belconnetask = true;
        $scope.halltask = false;
        $scope.halllimit = 5;

        $scope.unilodgetask = false;
        $scope.unilodgelimit = 5;

        $scope.civictask = false;
        $scope.civiclimit = 5;

        $scope.harrisontask = false;
        $scope.harrisonlimit = 5;

        $scope.franklintask = false;
        $scope.franklinlimit = 5;

        $scope.gungahlintask = false;
        $scope.gungahlinlimit = 5;

        $scope.othertask = false;
        $scope.otherlimit = 5;
    }
    $scope.showHarrison = function() {
        $scope.category = 'Harrison';
        $scope.harrisontask = true;
        $scope.halltask = false;
        $scope.halllimit = 5;

        $scope.unilodgetask = false;
        $scope.unilodgelimit = 5;

        $scope.civictask = false;
        $scope.civiclimit = 5;

        $scope.belconnetask = false;
        $scope.belconnelimit = 5;

        $scope.franklintask = false;
        $scope.franklinlimit = 5;

        $scope.gungahlintask = false;
        $scope.gungahlinlimit = 5;

        $scope.othertask = false;
        $scope.otherlimit = 5;
    }
    $scope.showFranklin = function() {
        $scope.category = 'Franklin';
        $scope.franklintask = true;
        $scope.halltask = false;
        $scope.halllimit = 5;

        $scope.unilodgetask = false;
        $scope.unilodgelimit = 5;

        $scope.civictask = false;
        $scope.civiclimit = 5;

        $scope.belconnetask = false;
        $scope.belconnelimit = 5;

        $scope.harrisontask = false;
        $scope.harrisonlimit = 5;

        $scope.gungahlintask = false;
        $scope.gungahlinlimit = 5;

        $scope.othertask = false;
        $scope.otherlimit = 5;
    }
    $scope.showGungahlin = function() {
        $scope.category = 'Gungahlin';
        $scope.gungahlintask = true;
        $scope.halltask = false;
        $scope.halllimit = 5;

        $scope.unilodgetask = false;
        $scope.unilodgelimit = 5;

        $scope.civictask = false;
        $scope.civiclimit = 5;

        $scope.belconnetask = false;
        $scope.belconnelimit = 5;

        $scope.harrisontask = false;
        $scope.harrisonlimit = 5;

        $scope.franklintask = false;
        $scope.franklinlimit = 5;

        $scope.othertask = false;
        $scope.otherlimit = 5;
    }
    $scope.showOther = function() {
        $scope.category = 'Other';
        $scope.othertask = true;
        $scope.halltask = false;
        $scope.halllimit = 5;

        $scope.unilodgetask = false;
        $scope.unilodgelimit = 5;

        $scope.civictask = false;
        $scope.civiclimit = 5;

        $scope.belconnetask = false;
        $scope.belconnelimit = 5;

        $scope.harrisontask = false;
        $scope.harrisonlimit = 5;

        $scope.franklintask = false;
        $scope.franklinlimit = 5;

        $scope.gungahlintask = false;
        $scope.gungahlinlimit = 5;
    }

    $scope.setHallLimit = function(num) {
        $scope.halllimit = $scope.hall.length;
    }
    $scope.setUnilodgeLimit = function(num) {
        $scope.unilodgelimit = $scope.unilodge.length;
    }
    $scope.setCivicLimit = function(num) {
            $scope.civiclimit = $scope.civic.length;
        }
        /*
          $scope.setDailyLimit = function(num){
            $scope.dailylimit= $scope.daily.length;
          }*/
    $scope.setBelconneLimit = function(num) {
        $scope.belconnelimit = $scope.belconne.length;
    }
    $scope.setHarrisonLimit = function(num) {
        $scope.harrisonlimit = $scope.harrison.length;
    }
    $scope.setFranklinLimit = function(num) {
        $scope.franklinlimit = $scope.franklin.length;
    }
    $scope.setGungahlinLimit = function(num) {
        $scope.gungahlinlimit = $scope.gungahlin.length;
    }
    $scope.setOtherLimit = function(num) {
        $scope.otherlimit = $scope.other.length;
    }

}])


.controller('CategoryDetailCtrl', ['$scope', '$stateParams', '$http', '$cookies', 'Tasks', 'Users', '$sce', '$timeout', function($scope, $stateParams, $http, $cookies, Tasks, Users, $sce, $timeout) {
    var temp = $cookies.get('userId');
    $cookies.put('userId', temp);
    //console.log(temp);
    $scope.addmsg = { text: "" };
    $scope.addMessage = function() {
        //console.log($scope.addmsg);
        //console.log("hi");
        $http.get('http://54.206.88.186:4000/api/tasks/' + $stateParams._id).success(function(data) {
            $scope.taskdetail = data.data;
            $scope.message = $scope.taskdetail.messages;
            //console.log(data.data);
            var array = $scope.message;
            $http.get('http://54.206.88.186:4000/api/users/' + temp).success(function(data) {
                $scope.logname = data.data.name;
                $scope.logemail = data.data.email;
                console.log("log in name");
                console.log($scope.logname);

                var ele = {
                    "msg": $scope.addmsg.text,
                    "ids": $cookies.get('userId'),
                    "name": $scope.logname,
                    "email": $scope.logemail
                };

                array.push(ele);
                var userarray = $scope.taskdetail.interestedUsers;
                var temp = 0;
                for (var i = 0; i < userarray.length; i++) {
                    if (userarray[i] == $cookies.get('userId')) {
                        temp = 1;
                    }
                }
                if (temp == 0) {
                    userarray.push($cookies.get('userId'));
                }
                var newtask = {
                    "interestedUsers": userarray,
                    "messages": array,
                }
                $scope.taskdetail.messages = array;
                $scope.taskdetail.interestedUsers = userarray;


                Tasks.put($stateParams._id, $scope.taskdetail).success(function(task) {

                    console.log(task);
                    console.log(task.data)
                    console.log("Assigned user = " + task.data.assignedUser);

                    $http.get('http://54.206.88.186:4000/api/users/' + task.data.assignedUser).success(function(userPost) {
                        var userData = userPost.data;
                        userData.notifications.push({
                            'taskId': task.data._id,
                            'notificationText': "User " + $scope.logname + " follows post '" + task.data.name + "'!"
                        });

                        console.log(userData)

                        Users.put(userData._id, userData).success(function(data) {
                            console.log("hello");
                            console.log("Updated notifications of the post user");
                            console.log(data.data)
                        });
                    }).error(function(e) {
                        console.log("error when updating postUser notifications!")
                    });


                    $http.get('http://54.206.88.186:4000/api/users/' + $cookies.get('userId')).success(function(userPost) {
                        var userData = userPost.data;

                        var index = userData.interestedTasks.indexOf($scope.taskdetail._id);
                        if (index === -1 && userData._id !== $scope.taskdetail.assignedUser) {
                            console.log('updating interested tasks')
                            userData.interestedTasks.push($scope.taskdetail._id);
                        } else {
                            console.log("index = " + index + " " + userData._id + " " + $scope.taskdetail.assignedUser);
                        }

                        userData.notifications.push({
                            'taskId': task.data._id,
                            'notificationText': "Follow the post " + task.data.name + " of " + task.data.assignedUserName + "'!"
                        });

                        Users.put(userData._id, userData).success(function(data) {
                            console.log("Updated notifications of the post user");
                            console.log(data.data);
                        });
                    }).error(function(e) {
                        console.log("error when updating postUser notifications!")
                    });


                }).error(function(err) {
                    console.log(err);
                })
            })

        }).error(function(err) {
            console.log(err);
        });
    }

    clickSetMyFavorite = false;
    $scope.favorite = "";
    $scope.myStyle = "grey";

    $scope.setMyFavorite = function() {

        if (!clickSetMyFavorite) {
            clickSetMyFavorite = true;
            $scope.favorite = $sce.trustAsHtml("Added to your favorite list!");
            $scope.myStyle = "#66ffff";

            Users.getByUserId($cookies.get('userId')).success(function(user) {
                var userData = user.data; // This is the whole user object
                $scope.currentLogInUserData = userData;
                userData.interestedTasks.push($stateParams._id);

                //console.log(interestedTasksTemp);
                //console.log(user);
                Users.put(userData._id, userData).success(function(data) {
                    //console.log("Updated interestedTasks of the user")
                });
            }).error(function(e) {
                console.log("updateNotification UserSchema error!");
            });

            Tasks.getByTaskId($stateParams._id).success(function(task) {
                var taskData = task.data;
                //console.log(taskData);
                //console.log(taskData.interestedUsers);
                taskData.interestedUsers.push($cookies.get('userId'));
                //console.log(taskData.interestedUsers);
                Users.getByUserId(task.data.assignedUser).success(function(userPost) {
                    console.log(userPost);
                    var userData = userPost.data;
                    console.log(userData);
                    userData.notifications.push({
                        'taskId': taskData._id,
                        'notificationText': "User " + $scope.currentLogInUserData.name + " follows your post '" + taskData.name + "'!"
                    });
                    console.log($scope.currentLogInUserData.name);
                    Users.put(userData._id, userData).success(function(data) {
                        console.log("Updated notifications of the post user");
                    });
                }).error(function(e) {
                    console.log("error when updating postUser notifications!")
                });

            }).error(function(e) {
                console.log("updateNotification TaskSchema error!");
            });

        } else {
            clickSetMyFavorite = false;
            $scope.favorite = $sce.trustAsHtml("Removed from your favorite list!");
            $scope.myStyle = "grey";
        }
        $scope.promise = $timeout(function() { $scope.favorite = $sce.trustAsHtml(""); }, 3000);
    }

    $http.get('http://54.206.88.186:4000/api/tasks/' + $stateParams._id).success(function(data) {
        $scope.taskdetail = data.data;
        $scope.message = $scope.taskdetail.messages;
        //console.log(data);

        $http.get('http://54.206.88.186:4000/api/users/' + $scope.taskdetail.assignedUser).success(function(data) {
            $scope.userdetail = data.data;
            console.log(data);
        }).error(function(err) {
            console.log(err);
        })
    }).error(function(err) {
        console.log(err);
    });

}])

//.controller('CategoryDetailCtrl', ['$scope', '$stateParams', '$http', '$cookies','$sce','Users','Tasks', function($scope, $stateParams, $http, $cookies, $sce, Users, Tasks) {

.controller('PostCtrl', ['$scope', '$cookies', 'Tasks', 'Users','$sce', function($scope, $cookies, Tasks, Users, $sce) {

    $scope.name = { text: "" };
    $scope.category = { text: "Other" };
    $scope.description = { text: "" };
    $scope.assignedUser = $cookies.get('userId');
    $scope.completed = false;


    if ($scope.assignedUser == null) {

        errorMessage = "Log In Required"

        $scope.errorPopUp = $sce.trustAsHtml(errorMessage);
    }

    $scope.submitPost = function() {

        Users.getByUserId($scope.assignedUser).success(function(userdata) {

            var user = userdata.data;

            var post = {
                name: $scope.name.text,
                category: $scope.category.text,
                description: $scope.description.text,
                assignedUser: $scope.assignedUser,
                assignedUserName: user.name,
                completed: false
            };
            console.log(post);
            Tasks.post(post).success(function(data) {
                window.location.href = 'index.html#/tab/category';
                var task = data.data;
                user.pendingTasks.push(task._id);
                Users.put(user._id, user).success(function(data) {
                    console.log("Updated user");
                    console.log(user);
                }).error(function(e) {
                    alert("Error updating user");
                });
            }).error(function(e) {
                alert("Error submitting the form")
            });
        }).error(function(e) {
            alert(e)
        });
    }
}])

.controller('UserProfileCtrl', ['$scope', '$http', '$cookies', 'Users', 'Tasks', function($scope, $http, $cookies, Users, Tasks) {

    var userId = $cookies.get('userId');
    console.log('hello');

    document.getElementById('uploadFile').addEventListener('change', uploadFile, false);

    Users.getByUserId(userId).success(function(data) {
        var user = data.data;
        console.log("success")
        console.log(user);
        $scope.user = user;

        if (user.profilePicture === undefined || user.profilePicture === "") {
            document.getElementById('userImage').style.backgroundImage = "url('../img/defaultprofile.png')";
        } else {
            document.getElementById('userImage').style.backgroundImage = "url('" + user.profilePicture + "')";
        }

        $scope.pendingTasks = [];
        for (var i = 0; i < user.pendingTasks.length; i++) {
            Tasks.getByTaskId(user.pendingTasks[i]).success(function(data) {
                $scope.pendingTasks.push(data.data);
            });
        }

        $scope.interestedTasks = [];
        for (var i = 0; i < user.interestedTasks.length; i++) {
            Tasks.getByTaskId(user.interestedTasks[i]).success(function(data) {
                $scope.interestedTasks.push(data.data);
            });
        }

    });

    function uploadFile(input) {
        if (input.target.files && input.target.files[0] && input.target.files[0].type.match('image.*')) {
            console.log(input.target.files[0]);

            var file = input.target.files[0];

            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = (function(theFile) {
                return function(e) {
                    // Render thumbnail.
                    $scope.user.profilePicture = e.target.result;
                    document.getElementById('userImage').style.backgroundImage = "url('" + e.target.result + "')";

                    Users.put(userId, $scope.user).success(function(data) {
                        console.log("updated picture");
                        console.log($scope.user);
                    });
                };
            })(file);
        } else {
            console.log('uploading invalid file');
        }
    }

    $scope.remove = function(task) {
        var index = $scope.pendingTasks.indexOf(task);
        $scope.pendingTasks.splice(index, 1);

        index = $scope.user.pendingTasks.indexOf(task._id);
        $scope.user.pendingTasks.splice(index, 1);

        Users.put($scope.user._id, $scope.user).success(function(data) {
            console.log("Removed task from pendingTasks of user " + $scope.user._id);
        });

        var interestedUsers = task.interestedUsers;

        for (var i = 0; i < interestedUsers.length; i++) {
            Users.getByUserId(interestedUsers[i]).success(function(data) {
                var user = data.data;
                var ind = user.interestedTasks.indexOf(task._id);

                if (ind !== -1) {
                    user.interestedTasks.splice(ind, 1);
                }
                Users.put(user._id, user).success(function(data) {
                    console.log("Removed task from interestedTasks of user " + user._id);
                });
            });
        }

        Tasks.delete(task._id).success(function(data) {
            console.log("Deleted task from MongoDB");
        });
    }

    $scope.removeInterest = function(task) {
        var index = $scope.interestedTasks.indexOf(task);
        $scope.interestedTasks.splice(index, 1);

        index = $scope.user.interestedTasks.indexOf(task._id);
        $scope.user.interestedTasks.splice(index, 1);

        Users.put($scope.user._id, $scope.user).success(function(data) {
            console.log("Removed task from interestedTasks of user " + $scope.user._id);
        });
    }

    $scope.removeNotification = function(notification) {
        var index = $scope.user.notifications.indexOf(notification);
        $scope.user.notifications.splice(index, 1);

        Users.put($scope.user._id, $scope.user).success(function(data) {
            console.log("Removed notification from notifications of user " + $scope.user._id);
        });
    }

}])

.controller('SettingsController', ['$scope', '$window', function($scope, $window) {
    $scope.url = $window.sessionStorage.baseurl;

    $scope.setUrl = function() {
        $window.sessionStorage.baseurl = $scope.url;
        $scope.displayText = "URL set";
    };
}]);
