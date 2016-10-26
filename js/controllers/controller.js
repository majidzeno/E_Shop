var products = [
                    {
                      "id": 1,
                      "quantity":0,
                      "name": 'The Brief History of the Dead',
                      "shortname":'the-brief-history-of-the-dead',
                      "price": 19,
                      "cover": 'img/the-brief-history-of-the-dead.jpg',
                      "bio":'Author: Kevin Brockmeier',
                      "description":["This very cool cover makes a visual pun on the title, with the black and white colour scheme adding to the creepiness of the disembodied hands. The use of 'a novel' as the name tag on the top of the coat is a nice touch too."]
                    },
                    {
                      "id": 2,
                      "quantity":0,
                      "name": '1984',
                      "shortname":"1984",
                      "price": 8,
                      "cover": 'img/1984.jpg',
                      "description":["1984 is a tale of Big Brother surveillance and, of the many great covers that have graced this, we like this one from 2008, designed by Shepard Fairey of Obey. The Soviet style of Obey's work suits the content of the book perfectly and the all-seeing eye gives that essential element of creepiness."]
                    },
                  {
                    "id": 3,
                    "quantity":0,
                    "name": 'Lenovo T460',
                    "shortname":"lenovo_t460",
                    "price": 	1079.99,
                    "cover": 'img/lenovo_t460.jpg',
                    "bio":'Best Business Ultrabook',
                    "description":  [
                      "Intel i5-6300U (2.4GHz up to 3.0GHz) 3MB Cache, 1600MHz, vPro Technology",
                      "Intel HD Graphics 520, 8GB RAM, 192GB Solid State Drive ",
                      "14-inch FHD IPS Display (1920x1080), integrated 720p Webcam ",
                      "802.11AC WiFi, Backlit Keyboard, Bluetooth 4.1, Fingerprint Reader, USB 3.0, Mini DisplayPort, HDMI ",
                      "3-Cell (23WH) Battery, Windows 7 Pro 64-bit (upgradable to Windows 10)"]
                },
                {
                  "id": 4,
                  "quantity":0,
                  "name": 'Apple MacBook',
                  "shortname":"appel_mac",
                  "price": 	1529 ,
                  "cover": 'img/appel_mac.jpg',
                  "bio":'First Macbook with Retina Display',
                  "description": ["12.0-inch TFT LED-backlit Active-Matrix Retina Display with IPS Technology, 2304 x 1440 pixel resolution (~226ppi pixel density)",
                  "Intel Core M 1.1 GHz, Mac OX X 10.10 Yosemite, Intel HD Graphic 5300",
                  "Wireless LAN 802.11a/b/g/n/ac; Bluetooth: v4.0; Ports: USB v3.1 x1 (Gen 2 Type-C), Display Port x1, Audio Port x1",
                  "78-Key Full Size Keyboard, Multi-touch Gestures, Force Touch Trackpad",
                  "Built-in 39.7 watt-hour lithium-polymer battery - Up to 9 hours of wireless wed usag",
                  "1.2 GHz Dual-Core Intel Core M5 Processor (Turbo Boost up to 3.1 GHz) with 4 MB shared L3 cache",
                  " 8 GB of 1866 MHz LPDDR3 RAM; 512 GB PCIe-based onboard flash storage",
                  " 12-Inch IPS LED-backlit Display; 2304-by-1440 Resolution ",
                  "Intel HD Graphics 515 ",
                  "OS X El Capitan; USB-C Port Only. PEASE NOTE: This MacBook has a single USB-C port (a new version of USB) which handles power and connectivity to all peripherals. An accessory adapter can be purchased to connect standard USB devices to this MacBook."]
                }];
var bridgeController = angular.module("bridgeController",[]);
bridgeController.controller("cartController" , function ($scope) {
$scope.cart=[];
});

bridgeController.controller("storeController" , function ($scope) {
  // $scope.title = 'Catalog';
  $scope.promo = 'Work hard. Make history. Have fun.';
  $scope.products = products;

});
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  DetailsController  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
bridgeController.controller("DetailsController" , function ($scope,$routeParams) {
$scope.products = products;
$scope.cart = [];
$scope.whichProduct = Number($routeParams.productId);
$scope.currentProduct = $scope.products[$scope.whichProduct - 1];
$scope.count = 0;
$scope.addFunction = function() {
    // arr.some(callback[, thisArg])

    var productInCart = $scope.cart.find(function(product){
        return $scope.whichProduct === product.id;
    });

    if (!productInCart){
        productInCart = angular.copy($scope.currentProduct);
        $scope.cart.push(productInCart);
    }

    productInCart.quantity++;

// $scope.count++;
// if($scope.cart.whichProduct == $scope.whichProduct){
// $scope.cart.push($scope.products[$scope.whichProduct].quantity++);}
// else{
//          $scope.cart.push($scope.products[$scope.whichProduct]);}
//
//        console.log($scope.cart);
//        $scope.checkCount = function() {
// if ($scope.count <= 0) {
//   return true;
//        }
//  else {
//   return false;
//        };
//   };

};

$scope.removeFunction= function() {
  $scope.count--;
        $scope.checkCount = function() {
        if ($scope.count <= 0) {
          $scope.count = 0;
          return true;
         }
         else {
          return false;
        };
      };};
    });
