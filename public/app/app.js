 var myApp = angular.module('myApp',['ngRoute','ngAnimate']);
    myApp.config(function($routeProvider){
            $routeProvider
            .when("/",{
                templateUrl: "home.html"
            })
            .when("/home",{
                templateUrl: "home.html"
            })
            .when("/fiction",{
                templateUrl: "fiction.html"
            })
            .when("/crime",{
                templateUrl: "crime.html"
            })
            .when("/romance",{
                templateUrl: "romance.html"
            })
            .when("/classics",{
                templateUrl: "classics.html"
            })
            .when("/nonfiction",{
                templateUrl: "nonfiction.html"
            })
            .when("/youngadult",{
                templateUrl: "youngadult.html"
            })
            .when("/account",{
                templateUrl: "account.html"
            })
            .when("/cart",{
                templateUrl: "cart.html"
            })
            .when("/login",{
                templateUrl: "login.html",
                controller: "loginCtrl",
                controllerAs: "login"
            })
            .when("/order",{
                templateUrl: "order.html"
            })
            .when("/rateus",{
                templateUrl: "rateus.html"
            })
            .when("/register",{
                templateUrl: "register.html",
                controller: "userController",
                controllerAs: "register"
            })
            .when("/sell",{
                templateUrl: "sell.html"
            })
        });
        myApp.component("hello",{
            template: 
                `<center>
                <h2>Personal Info</h2>
                <p>User Name</p> 
                <input type="text" ng-model="username"><br>
                <p>Welcome <span ng-bind="username"></span> !!</p>
                <p>Email</p>
                <input type="email" name="email" id="email"/>
                <p>Contact number</p>
                <input type="text" name="number" id="number"/>
                <p>Gender</p>
                <select value="select">
                    <option>Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>other</option>
                </select>
                <p>Date of Birth</p>
                <input type="date" name="dob" id="dob"/><br><br>
                <button value="Edit">edit</button>
                <button value="Save">Save</button>
        
                </div>
                </center>`
           
            });
            
    myApp.controller("searchController_classic",function($scope){
    $scope.carts=[];
  

    $scope.classics=[

        {book_image:"images/classics_1.png",book_name:"The Great Gatsby",author:"F Scott Fitzgerald",price:"300.00"},
        {book_image:"images/classics_2.jpg",book_name:"Pride and Prejudice",author:"Jane Austin",price:"350.00"},
        {book_image:"images/classics_3.jpg",book_name:"The Wealth of Nations",author:"Adam Smith",price:"395.00"},
        {book_image:"images/classics_4.jpg",book_name:"The Divine Comedy",author:"Dante",price:"325.00"},
        {book_image:"images/classics_5.jpg",book_name:"A Small Fortune",author:"Rosie Dastgir",price:"195.00"},
        {book_image:"images/classics_6.jpg",book_name:"The Goldfinch",author:"Donna Tartt",price:"225.00"},
        {book_image:"images/classics_7.jpg",book_name:"A Teaspoon of Earth and Sea",author:"Dina Nayeri",price:"250.00"},
        {book_image:"images/classics_8.jpg",book_name:"The Little Prince",author:"Antoine de Saint-Exupéry",price:"195.00"},
    ];
    $scope.add_cart = function(c){
        if(c){
        $scope.carts.push({book_image:c.book_image, book_name:c.book_name, author:c.author,price:c.price});
        }
    }
    $scope.total=0;
    $scope.setTotals = function(cart){
      if(cart){
            var a=Number(cart.price || 0);
						$scope.total += a;
					}
    }
    $scope.remove_cart = function(cart){
        if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.price;
        }
    }
    });
    myApp.controller("searchController_crime",function($scope){
    $scope.carts=[];
  

    $scope.crime=[

        {book_image:"images/crime_1.jpg",book_name:"The Murder of Roger Ackroyd",author:"Agatha Christie",price:"350.00"},
        {book_image:"images/crime_2.jpg",book_name:"The girl in the room 105",author:"Jane Chetan Bhagat",price:"250.00"},
        {book_image:"images/crime_3.jpg",book_name:"The Silent Patient",author:"Alex Michaelides",price:"395.00"},
        {book_image:"images/crime_4.jpg",book_name:"Behind her eyes",author:"Sarah Pinborough",price:"125.00"},
        {book_image:"images/crime_5.jpg",book_name:"Deadly still water",author:"Roger Stelljes",price:"195.00"},
        {book_image:"images/crime_6.png",book_name:"The Dead Don't Talk",author:"Sumit Ghosal",price:"295.00"},
        {book_image:"images/crime_7.jpg",book_name:"The Invited",author:"Jennifer McMahon",price:"150.00"},
        {book_image:"images/crime_8.jpg",book_name:"Then she was gone",author:"Lisa Jewell",price:"195.00"},
    ];
    $scope.add_cart = function(cr){
        if(cr){
        $scope.carts.push({book_image:cr.book_image, book_name:cr.book_name, author:cr.author,price:cr.price});
        }
    }
    $scope.total=0;
    $scope.setTotals = function(cart){
      if(cart){
            var a=Number(cart.price || 0);
						$scope.total += a;
					}
    }
    $scope.remove_cart = function(cart){
        if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.price;
        }
    }
    });
    myApp.controller("searchController_fiction",function($scope){
      $scope.carts=[];
    
  
      $scope.fiction=[
  
          {book_image:"images/fic_1.jpg",book_name:"The Palace of Illusions",author:"Chitra Banerjee",price:"350.00"},
          {book_image:"images/fic_2.jpg",book_name:"The forest of enchantments",author:"Chitra Banerjee",price:"250.00"},
          {book_image:"images/fic_3.jpg",book_name:"The fault in our stars",author:"John Green",price:"295.00"},
          {book_image:"images/fic_4.jpg",book_name:"Roald Dahl",author:"Quentin Blake",price:"150.00"},
          {book_image:"images/fic_5.jfif",book_name:"The Vines",author:"Shelley Nolden",price:"295.00"},
          {book_image:"images/fic_6.jpg",book_name:"All the light we cannot see",author:"Anthony Doe",price:"195.00"},
          {book_image:"images/fic_7.jfif",book_name:"The Diamond Eye",author:"Kate Quinn",price:"200.00"},
          {book_image:"images/fic_8.jpg",book_name:"Blue Skies",author:"Anne Bustard",price:"195.00"},
      ];
      $scope.add_cart = function(f){
          if(f){
          $scope.carts.push({book_image:f.book_image, book_name:f.book_name, author:f.author,price:f.price});
          }
      }
      $scope.total=0;
      $scope.setTotals = function(cart){
        if(cart){
              var a=Number(cart.price || 0);
              $scope.total += a;
            }
      }
      $scope.remove_cart = function(cart){
          if(cart){
              $scope.carts.splice($scope.carts.indexOf(cart), 1);
              $scope.total -= cart.price;
          }
      }
      });
    
      myApp.controller("searchController_nonfiction",function($scope){
        $scope.carts=[];
      
    
        $scope.nonfiction=[
    
            {book_image:"images/nf_1.jpg",book_name:"Sapiens - A Brief history of humankind",author:"Yuval Noah Harari",price:"350.00"},
            {book_image:"images/nf_2.jfif",book_name:"Atomic habits",author:"James Clear",price:"250.00"},
            {book_image:"images/nf_3.jpg",book_name:"Into the wild",author:"Jon Krakauer",price:"395.00"},
            {book_image:"images/nf_4.jpg",book_name:"I am malala",author:"Malala Yousafzai",price:"225.00"},
            {book_image:"images/nf_5.jpg",book_name:"How to do nothing",author:"Jenny Odell",price:"145.00"},
            {book_image:"images/nf_6.jpg",book_name:"The diary of a young girl",author:"Anne Frank",price:"175.00"},
            {book_image:"images/nf_7.jpg",book_name:"How to win friends and influence people",author:"Dale Carnegie",price:"215.00"},
            {book_image:"images/nf_8.jpg",book_name:"In cold blood",author:"Truman Capote",price:"165.00"},
        ];
        $scope.add_cart = function(no){
            if(no){
            $scope.carts.push({book_image:no.book_image, book_name:no.book_name, author:no.author,price:no.price});
            }
        }
        $scope.total=0;
        $scope.setTotals = function(cart){
          if(cart){
                var a=Number(cart.price || 0);
                $scope.total += a;
              }
        }
        $scope.remove_cart = function(cart){
            if(cart){
                $scope.carts.splice($scope.carts.indexOf(cart), 1);
                $scope.total -= cart.price;
            }
        }
        });
    
        myApp.controller("searchController_romance",function($scope){
      $scope.carts=[];
    
  
      $scope.romance=[
  
          {book_image:"images/romance_1.jpg",book_name:"Fly away",author:"kristin Hannah",price:"350.00"},
          {book_image:"images/romace_2.jpg",book_name:"The Notebook",author:"Nicholas Sparks",price:"240.00"},
          {book_image:"images/romance_3.jpg",book_name:"Paris is Always a Good Idea",author:"Jenn McKinlay",price:"295.00"},
          {book_image:"images/romance_4.jpg",book_name:"It ends with us",author:"Colleen Hoover",price:"225.00"},
          {book_image:"images/romance_5.jpg",book_name:"November 9",author:"Colleen Hoover",price:"195.00"},
          {book_image:"images/romance_6.jpg",book_name:"A Touch of Eternity",author:"Durjoy Datta",price:"295.00"},
          {book_image:"images/romance_7.jpg",book_name:"All this time",author:"Mikki Daughtry and Rachael Lippincott",price:"150.00"},
          {book_image:"images/romance_8.jpg",book_name:"She fell in love with her best friend",author:"Sharad Raj C",price:"195.00"},
      ];
      $scope.add_cart = function(ro){
          if(ro){
          $scope.carts.push({book_image:ro.book_image, book_name:ro.book_name, author:ro.author,price:ro.price});
          }
      }
      $scope.total=0;
      $scope.setTotals = function(cart){
        if(cart){
              var a=Number(cart.price || 0);
              $scope.total += a;
            }
      }
      $scope.remove_cart = function(cart){
          if(cart){
              $scope.carts.splice($scope.carts.indexOf(cart), 1);
              $scope.total -= cart.price;
          }
      }
      });
        myApp.controller("searchController_youngadult",function($scope){
        $scope.carts=[];
      
    
        $scope.youngadult=[
    
            {book_image:"images/ya_1.jpg",book_name:"Gallant",author:"V.E. Schwab",price:"300.00"},
            {book_image:"images/ya_2.jpg",book_name:"A magic steeped in poison",author:"Judy I. Lin",price:"350.00"},
            {book_image:"images/ya_3.jpg",book_name:"Blood Scion",author:"Deborah Falaye",price:"395.00"},
            {book_image:"images/ya_4.jpg",book_name:"Edgewood",author:"Kristen ciccarelli",price:"325.00"},
            {book_image:"images/ya_5.jpg",book_name:"All that's left in the world",author:"Erik J. Brown",price:"195.00"},
            {book_image:"images/ya_6.jpg",book_name:"The Lost Dreamer",author:"Lizz Huerta",price:"295.00"},
            {book_image:"images/ya_7.jpg",book_name:"A forger of roses",author:"Jessica S. Olson",price:"155.00"},
            {book_image:"images/ya_8.jpg",book_name:"The book of living secrets",author:"Madeleine Roux",price:"195.00"},
        ];
        $scope.add_cart = function(y){
            if(y){
            $scope.carts.push({book_image:y.book_image, book_name:y.book_name, author:y.author,price:y.price});
            }
        }
        $scope.total=0;
        $scope.setTotals = function(cart){
          if(cart){
                var a=Number(cart.price || 0);
                $scope.total += a;
              }
        }
        $scope.remove_cart = function(cart){
            if(cart){
                $scope.carts.splice($scope.carts.indexOf(cart), 1);
                $scope.total -= cart.price;
            }
        }
        });

        myApp.controller("searchController_home",function($scope){
            $scope.carts=[];
          
        
            $scope.home=[
        
                {book_image:"images/bs_1.jpg",book_name:"The Hunger Games",author:"Suzanne Collins",price:"1300.00"},
                {book_image:"images/bs_2.jfif",book_name:"The Shiva Trilogy",author:"Amish Tripati",price:"950.00"},
                {book_image:"images/bs_3.jfif",book_name:"Harry Potter",author:"Harry Potter",price:"1395.00"},
                {book_image:"images/bs_4.jpg",book_name:"Percy Jackson",author:"Rick Riordan",price:"1825.00"},
                {book_image:"images/bs_5.jpg",book_name:"The Ramachandra Series",author:"Amish Tripati",price:"1595.00"},
                {book_image:"images/bs_6.jpg",book_name:"The Dan Brown Collection",author:"Dan Brown",price:"995.00"},
                {book_image:"images/bs_7.jpg",book_name:"Roald Dahl Collection",author:"Roald Dahl",price:"1055.00"},
                {book_image:"images/bs_8.jpg",book_name:"Diary of a wimpy kid",author:"Jeff Kinney",price:"1095.00"},
                {book_image:"images/classics_1.png",book_name:"The Great Gatsby",author:"F Scott Fitzgerald",price:"300.00"},
                {book_image:"images/classics_2.jpg",book_name:"Pride and Prejudice",author:"Jane Austin",price:"350.00"},
                {book_image:"images/classics_3.jpg",book_name:"The Wealth of Nations",author:"Adam Smith",price:"395.00"},
                {book_image:"images/classics_4.jpg",book_name:"The Divine Comedy",author:"Dante",price:"325.00"},
                {book_image:"images/classics_5.jpg",book_name:"A Small Fortune",author:"Rosie Dastgir",price:"195.00"},
                {book_image:"images/classics_6.jpg",book_name:"The Goldfinch",author:"Donna Tartt",price:"225.00"},
                {book_image:"images/classics_7.jpg",book_name:"A Teaspoon of Earth and Sea",author:"Dina Nayeri",price:"250.00"},
                {book_image:"images/classics_8.jpg",book_name:"The Little Prince",author:"Antoine de Saint-Exupéry",price:"195.00"},
                {book_image:"images/crime_1.jpg",book_name:"The Murder of Roger Ackroyd",author:"Agatha Christie",price:"350.00"},
                {book_image:"images/crime_2.jpg",book_name:"The girl in the room 105",author:"Jane Chetan Bhagat",price:"250.00"},
                {book_image:"images/crime_3.jpg",book_name:"The Silent Patient",author:"Alex Michaelides",price:"395.00"},
                {book_image:"images/crime_4.jpg",book_name:"Behind her eyes",author:"Sarah Pinborough",price:"125.00"},
                {book_image:"images/crime_5.jpg",book_name:"Deadly still water",author:"Roger Stelljes",price:"195.00"},
                {book_image:"images/crime_6.png",book_name:"The Dead Don't Talk",author:"Sumit Ghosal",price:"295.00"},
                {book_image:"images/crime_7.jpg",book_name:"The Invited",author:"Jennifer McMahon",price:"150.00"},
                {book_image:"images/crime_8.jpg",book_name:"Then she was gone",author:"Lisa Jewell",price:"195.00"},
                {book_image:"images/fic_1.jpg",book_name:"The Palace of Illusions",author:"Chitra Banerjee",price:"350.00"},
                {book_image:"images/fic_2.jpg",book_name:"The forest of enchantments",author:"Chitra Banerjee",price:"250.00"},
                {book_image:"images/fic_3.jpg",book_name:"The fault in our stars",author:"John Green",price:"295.00"},
                {book_image:"images/fic_4.jpg",book_name:"Roald Dahl",author:"Quentin Blake",price:"150.00"},
                {book_image:"images/fic_5.jfif",book_name:"The Vines",author:"Shelley Nolden",price:"295.00"},
                {book_image:"images/fic_6.jpg",book_name:"All the light we cannot see",author:"Anthony Doe",price:"195.00"},
                {book_image:"images/fic_7.jfif",book_name:"The Diamond Eye",author:"Kate Quinn",price:"200.00"},
                {book_image:"images/fic_8.jpg",book_name:"Blue Skies",author:"Anne Bustard",price:"195.00"},
                {book_image:"images/nf_1.jpg",book_name:"Sapiens - A Brief history of humankind",author:"Yuval Noah Harari",price:"350.00"},
                {book_image:"images/nf_2.jfif",book_name:"Atomic habits",author:"James Clear",price:"250.00"},
                {book_image:"images/nf_3.jpg",book_name:"Into the wild",author:"Jon Krakauer",price:"395.00"},
                {book_image:"images/nf_4.jpg",book_name:"I am malala",author:"Malala Yousafzai",price:"225.00"},
                {book_image:"images/nf_5.jpg",book_name:"How to do nothing",author:"Jenny Odell",price:"145.00"},
                {book_image:"images/nf_6.jpg",book_name:"The diary of a young girl",author:"Anne Frank",price:"175.00"},
                {book_image:"images/nf_7.jpg",book_name:"How to win friends and influence people",author:"Dale Carnegie",price:"215.00"},
                {book_image:"images/nf_8.jpg",book_name:"In cold blood",author:"Truman Capote",price:"165.00"},
                {book_image:"images/romance_1.jpg",book_name:"Fly away",author:"kristin Hannah",price:"350.00"},
                {book_image:"images/romace_2.jpg",book_name:"The Notebook",author:"Nicholas Sparks",price:"240.00"},
                {book_image:"images/romance_3.jpg",book_name:"Paris is Always a Good Idea",author:"Jenn McKinlay",price:"295.00"},
                {book_image:"images/romance_4.jpg",book_name:"It ends with us",author:"Colleen Hoover",price:"225.00"},
                {book_image:"images/romance_5.jpg",book_name:"November 9",author:"Colleen Hoover",price:"195.00"},
                {book_image:"images/romance_6.jpg",book_name:"A Touch of Eternity",author:"Durjoy Datta",price:"295.00"},
                {book_image:"images/romance_7.jpg",book_name:"All this time",author:"Mikki Daughtry and Rachael Lippincott",price:"150.00"},
                {book_image:"images/romance_8.jpg",book_name:"She fell in love with her best friend",author:"Sharad Raj C",price:"195.00"},
                {book_image:"images/ya_1.jpg",book_name:"Gallant",author:"V.E. Schwab",price:"300.00"},
                {book_image:"images/ya_2.jpg",book_name:"A magic steeped in poison",author:"Judy I. Lin",price:"350.00"},
                {book_image:"images/ya_3.jpg",book_name:"Blood Scion",author:"Deborah Falaye",price:"395.00"},
                {book_image:"images/ya_4.jpg",book_name:"Edgewood",author:"Kristen ciccarelli",price:"325.00"},
                {book_image:"images/ya_5.jpg",book_name:"All that's left in the world",author:"Erik J. Brown",price:"195.00"},
                {book_image:"images/ya_6.jpg",book_name:"The Lost Dreamer",author:"Lizz Huerta",price:"295.00"},
                {book_image:"images/ya_7.jpg",book_name:"A forger of roses",author:"Jessica S. Olson",price:"155.00"},
                {book_image:"images/ya_8.jpg",book_name:"The book of living secrets",author:"Madeleine Roux",price:"195.00"},
            ];
            $scope.add_cart = function(y){
                if(y){
                $scope.carts.push({book_image:y.book_image, book_name:y.book_name, author:y.author,price:y.price});
                }
            }
            $scope.total=0;
            $scope.setTotals = function(cart){
              if(cart){
                    var a=Number(cart.price || 0);
                    $scope.total += a;
                  }
            }
            $scope.remove_cart = function(cart){
                if(cart){
                    $scope.carts.splice($scope.carts.indexOf(cart), 1);
                    $scope.total -= cart.price;
                }
            }
            });
            
        
		myApp.service("msg",function(){
			this.serv_fun=function(){
				return "Thank you! Will get back to you soon.";
			}
		})
		
		myApp.controller("ctrl",function($scope,msg){
			$scope.value=false;
			$scope.myfun=function(){
				$scope.value=true;
				
				$scope.msg1=msg.serv_fun();}
			
		})

         
            function loadDoc() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("demo").innerHTML = this.responseText;
                  }
                };
                xhttp.open("GET", "policy.txt", true);
                xhttp.send();
              }
            

              myApp.controller("cartCtrl",function(){
               
                
            });
            myApp.controller("userController",function($http,$location,$timeout){ 
                var app=this;
                this.regUser=function(regData){
                    app.error_message=false;
                    $http.post('/api/users',this.regData).then(function(data){
                            console.log(data.data.success);
                            console.log(data.data.message);
                            if(data.data.success){
                                app.success_message=data.data.message+'...Redirecting';
                                $timeout(function(){
                                    $location.path('#!/home')
                                },2000);  
                            }else{
                                app.error_message=data.data.message;
                            }
                    });
                }
            });
            // myApp.service('authServies',[])
            // .factory('Auth',function($http){
            //     authFactory={};
            //     authFactory.login=function(logData){
            //         return $http.post('/api/authenticate',logData);
            //     }
            //     return authFactory;
            // });
            
            myApp.controller("loginCtrl",function($http,$location,$timeout){ 
                var app=this;
                this.logUser=function(logData){
                    $http.post('/api/authenticate',this.logData).then(function(data){
                        console.log(data.data.success);
                        console.log(data.data.message);
                        if(data.data.success){
                            app.success_message=data.data.message+'...Redirecting';
                            $timeout(function(){
                                $location.path('#!/home')
                            },2000);  
                        }else{
                            app.error_message=data.data.message;
                        }
                });
            }
        });
                     