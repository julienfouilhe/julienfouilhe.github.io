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
        description: '<b>Needbook</b> is a project willing to take the electronical book to the next step...<br/>\
        You can see my work on the <a href="https://github.com/needbook/">Github</a> and particularly on the <a href="https://github.com/needbook/scattr">Scattr</a> repository at the moment!',
        url: 'https://github.com/needbook/',
        tags: [
            'iOS', 'objective-c', 'node.js', 'c++', 'android', 'angular.js', 'ruby'
          ],
          type: 'Personal'
        },
        {
          name: 'Icebreaker',
          state: 'Finished',
          leadline: 'An application for those who want to keep it down',
          description: '<b>Icebreaker</b> is a fun messenger, where you can chat with random people from all over the world, send jokes, get to know each other and probably become friends. As we respect your privacy, you\'ll get a random identity each time you start a new chat. As soon as you want to reveal your real identity to your chat partner, you can just do it by one tap.<br/><br/>\
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
              'Develop the graphical client in Actionscript 3, which was aimed to be as professional as possible, and cross-platform. Made it available online, on Android and on iOS.'
            ],
            url: 'http://www.youtube.com/playlist?list=PLwHK5Fs4jNXKuJpJjpFE5UPQk-cRt40Lo',
            tags: [
              'actionscript3', 'c++', 'c', 'minko'
            ],
            type: 'School'
          },
          {
            name: 'Babel',
            state: 'Finished',
            leadline: 'A Skype-like',
            description: 'We had to develop a software which would be capable to call your friends peer-to-peer. Hence we developed a server in C++11 whose role was to centralise all the informations and to allow users to communicate, and a client with QT which, after having been connected to the server, would be able to call the contacts previously added.<br/>',
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
    $scope.career = [
      {
        title: 'Cloud developer',
        company: 'Blippar',
        location: 'Long Beach, USA & Melbourne, Australia',
        frame: 'November 2014 - Now',
        description: 'Develop a Visual Search browser which will enable you to have more informations about what is around you, satisfying your everyday curiosity.'
      },
      {
        title: 'Cloud developer',
        company: 'Mobile Devices',
        location: 'Paris, France',
        frame: 'March - July 2014',
        description: 'Work with the server team to imagine what the next version of the cloud architecture will be. The goal is to study the different existing solutions to see what\'s the most adapted to MDI and then implement a solution capable to handle large sets of data and furnish statistics about them.<br/>\
          Ruby on rails, Ruby, Redis, distribution, cloud architecture, message queues, databases...'
      },
      {
        title: 'Epitech Teaching Assistant',
        company: 'Epitech',
        location: 'Montpellier, France',
        frame: 'February 2013 - March 2014',
        description: 'Give courses and advices to Epitech students, during my own scholarship at Epitech, write reports on students issues, watch over them during tests, correct students projects and give a grade.<br/>\
          Epitech thinks the best way to improve global students level is exchange between students. To do so, they hire some of their students as assistants, which I am part of, to help every student needing help.'
      },
      {
        title: 'Web developer',
        company: 'Fruition Sciences',
        location: 'Montpellier, France',
        frame: 'July 2012 - January 2013',
        description: 'Improved the homemade PHP framework to add translation functionality and different timezones handling, improved the GIS application in order to offer a better user experience thanks to a timeline made in Javascript and displaying additional informations on a Google map, organized two events for winemakers eager to share their experience, one in France and one in California, creating the web page and using Eventbrite API, etc...'
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
