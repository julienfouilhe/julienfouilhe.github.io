'use strict';
/*jshint multistr: true */
var app = angular.module('personalApp');
app.controller('MainCtrl', function ($scope, $location, $anchorScroll) {
    $scope.gotoContact = function() {
        $scope.dispContactForm = !$scope.dispContactForm;
        setTimeout(function() {
            $location.hash('contact');
            $anchorScroll();
          }, 0);
      };

    $scope.dispContactForm = false;
    $scope.types = [ 'Personal', 'School' ];
    $scope.projects = [
      {
        name: 'Needbook',
        state: 'Pending',
        leadline: 'An app for every person who has to touch a book someday',
        description: '<b>Needbook</b> is a project willing to take the electronical book to the next step...',
        tags: [
            'iOS', 'objective-c', 'node.js', 'c++', 'android', 'angular.js', 'ruby'
          ],
          type: 'Personal'
        },
        {
          name: 'Icebreaker',
          state: 'Finished',
          leadline: 'An application for those who want to keep it down',
          description: 'Currently there are several messenger apps out there and probably more than you even use. The most common used ones are Whatsapp and Line, lately telegram, threema and several more. They all do the same: Chat with your friends, send pictures etc. But what if you could write with people you\'ve never met before? People from all over the world? People who are speaking different languages, but still have the same interest as you have? Or do you just want to chat with people in a language you are interested in?<br/><br/>\
            This is where Icebreaker helps you! We created a messenger, where you can chat with random people from all over the world, send photos, jokes, get to know each other and probably become friends. As we respect your privacy, you\'ll get a random identity each time you start a new chat. As soon as you want to reveal your real identity to your chat partner, you can just do it by one tap.<br/><br/>\
            So try out Icebreaker and master a new language, find friends and maybe even your next vacation in another country. Possibilities are endless if you are open for new people in your life.',
          url: 'http://www.icebreakerapp.im',
          tags: [
              'iOS', 'objective-c', 'node.js', 'express'
            ],
            type: 'Personal'
          },
          {
            name: 'Transports de Montpellier',
            state: 'Finished',
            leadline: 'For every Montpellier citizen',
            description: '<b>Transports de Montpellier</b> is an application realized within 48 hours during the hackathon of Montpellier (South of France) which received the first prize of the competition. TDM was downloaded 1500 times in less than 3 days on Android Play Store.',
            actions: [
              'Develop the game aimed at help tramway users to wait for the tramway or during the transport. The user had to throw a tramway at an old woman and the old woman would fly and get boosts (tramway tickets) or harms (controllers).'
            ],
            url: 'https://itunes.apple.com/fr/app/transports-de-montpellier/id725309080?mt=8',
            tags: [
              'actionscript3', 'starling'
            ],
            type: 'Personal'
          },
          {
            name: 'Zappy',
            state: 'Finished',
            leadline: 'A game for developers',
            description: '<b>Zappy</b> is a project aimed at developers eager to develop an artificial intelligence. It\'s supposed to be online and everybody who developed an AI can launch their own if they know the server address.',
            actions: [
              'Implement server protocol and commands to be able to connect every component of the subject (server, artificial intelligence and graphical client).',
              'Develop the graphical client in Actionscript 3, which was aimed to be as professional as possible, and cross-platform. Made it available online, on Android and on iOS.',
              'Make a short funny video to introduce the project.',
              'Write the texts on the website to explain the project and how we did it.'
            ],
            url: 'http://zappy.fouilhe.fr',
            tags: [
              'actionscript3', 'c++', 'c', 'minko'
            ],
            type: 'School'
          },
          {
            name: 'Babel',
            state: 'Finished',
            leadline: 'A Skype-like',
            description: 'We had to develop a software which would be capable to call your friends peer-to-peer. We so developed a server in C++11 whose role was to centralise all the informations and to allow users to communicate, and a client with QT which, after having been connected to the server, would be able to call the contacts previously added.<br/>\
            We had to communicate through the project with another group as the entire project must be compatible with the other group one\'s.',
            actions: [
                'Write the protocol\'s RFC which would be used by both groups to communicate with the server.',
                'Make the server.'
              ],
              tags: [
                'c++11', 'boost (ASIO)', 'sqlite3', 'qt5 (qml)', 'portaudio', 'opus', 'rtp protocol'
              ],
              type: 'School'
            }
          ];
  });

app.controller('ContactCtrl', function($scope) {

    $scope.sendMessage = function() {
    };

    $scope.reset = function() {
        $scope.message = {};
      };

    $scope.reset();
  });
