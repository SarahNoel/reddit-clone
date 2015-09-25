var app = angular.module('redditapp', ['ngAnimate', 'angularMoment', 'ui.bootstrap']);

app.controller("Places", function($scope) {
  $scope.places =
  [
    {
      title: "Place Beyond the Pines",
      author: "Ryan Gosling",
      image: 'images/pretty.jpg',
      description: "Cheesecake bonbon cupcake cake pudding lemon drops bonbon. Chocolate croissant bonbon chocolate cake chocolate gingerbread bear claw bonbon. Donut liquorice macaroon candy canes chupa chups. Wafer pastry lollipop dessert cheesecake icing chupa chups danish candy. Wafer pie danish caramels apple pie halvah. Candy canes caramels soufflé wafer bear claw cake lemon drops donut. Candy canes apple pie icing danish. Sesame snaps jelly liquorice donut pudding tootsie roll dragée. Powder gummies tootsie roll candy. Sweet cake toffee gummies. Sugar plum cake tart cupcake tiramisu carrot cake. Tiramisu cheesecake tiramisu tiramisu caramels gummies sweet. Bear claw fruitcake donut gummi bears sweet.",
      votes: 0,
      time: 1442005103000,
      comments: [
          {author:"Mike H.", comment:"People are really good-looking here."
          },
          {
            author:"Liz L.", comment:"I want to go to there."
          },
          {
            author:"4eva Lonely", comment:"I got dumped here :( "
          }
        ],
    },
     {
      title: "Jurassic World",
      author: "Chris Pratt",
      image: 'images/dino.jpg',
      description: "Euronychodon Teyuwasu Yutyrannus Vitakridrinda Clarencea Elrhazosaurus Brachylophosaurus Protoceratops Riojasaurus Jurapteryx Laosaurus Plateosauravus Stokesosaurus Massospondylus Tapuiasaurus Gyposaurus Wannanosaurus Dashanpusaurus Qiaowanlong Tawasaurus Neovenator Stormbergia Tanystropheus Loricatosaurus Sonorasaurus Pseudolagosuchus Cladeiodon Epicampodon Rhadinosaurus Galtonia Asylosaurus Utahceratops Nemegtosaurus Machimosaurus Coelosaurus Astrodontaurus Agathaumas Wannanosaurus Utahraptor Tazoudasaurus Barosaurus Albertonykus Microvenator Lourinhasaurus Coeluroides Shanyangosaurus Eodromaeus Marisaurus Ohmdenosaurus Thespesius Qingxiusaurus Australovenator Sonorasaurus Epicampodon Betasuchus Philovenator Indosuchus Podokesaurus Chaoyangosaurus Eoceratops .",
      votes: 5,
      time: 1441722812000,
      comments: [
          {
            author:'Cole S.', comment:"A pteradactyl ate my sister. 3 stars."
          },
          {
            author:'Susie Q.', comment:"Indominus Rex was a letdown."
          },
          {
            author:"Hal G.", comment:"Rode a triceratops, would visit again"
          },
          {
            author:"Crosby B.", comment:"Is there a lost and found?"
          }
        ],
    }
  ];
  $scope.addNewPlace = function(){
    var newPlace=
      {
        title: $scope.title,
        author: $scope.author,
        image: $scope.image,
        description: $scope.description,
        comments: [],
        votes:0,
        time: Date.now(),
      };
    $scope.places.push(newPlace);
    $scope.title = $scope.author = $scope.image = $scope.description = ('');
  };
   $scope.addNewComment = function(){
    console.log(this);
    this.place.comments.push(
      {
        author:this.newAuthor,
        comment:this.newComment
    });
  };
});












