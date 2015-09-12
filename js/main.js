var app = angular.module('redditapp', ['ngAnimate', 'angularMoment']);

app.run(function(amMoment) {
    amMoment.changeLocale('de');
});

app.controller("Places", function($scope) {
  $scope.places =
  [
    {
      title: "Place Beyond the Pines",
      author: "Ryan Gosling",
      image: 'http://d104xtrw2rzoau.cloudfront.net/wp-content/uploads/2013/03/beautiful-places-in-the-world-5-1.jpg',
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
      image: 'http://static5.businessinsider.com/image/557dae6a6bb3f73a29ea89d8/jurassic-world-is-the-first-movie-ever-to-crack-500-million-in-its-opening-weekend.jpg',
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
    $scope.title = ('');
    $scope.author = ('');
    $scope.image = ('');
    $scope.description = ('');
  };
 $scope.addNewComment = function(newAuthor, newComment, useTitle){
  var index;
  var brandNewComment=
    {
      author: newAuthor,
      comment: newComment

    };
    for (var i = 0; i < $scope.places.length; i++) {
      if ($scope.places[i].title === useTitle){
        index = i;
        $scope.places[i].comments.push(brandNewComment);
      }
    }
  };
});
