'use strict';

angular.module('vandyTestBankApp')
  .controller('SubjectsCtrl', function ($scope) {
    $scope.subjects = [
      'Art', 'Biology', 'Chemical Engineering', 'Chemistry',
      'Civil Engineering', 'Computer Engineering', 'Computer Science',
      'Economics', 'Electrical Engineering', 'Engineering Modules',
      'English', 'History', 'HOD', 'Languages', 'Math',
      'Mechanical Engineering', 'Music', 'Neuroscience',
      'Philosophy', 'Physics', 'Political Science', 'Psychology',
      'Religious Studies', 'Sociology'
    ];
  }).controller('CoursesCtrl', function ($scope) {
    $scope.art = [];
    $scope.biology = [];
    $scope.chemicalEng = [];
    $scope.chemistry = [];
    $scope.civilEng = [];
    $scope.computerEng = [];
    $scope.computerScience = ['CS 101', 'CS 201'];
    $scope.economics = ['Econ 100', 'Econ 101', 'Econ 231'];
    $scope.electricalEng = ['EECE 116'];
    $scope.engModules = ['Computer Engineering', 'Computer Science', 'Electrical Engineering'];
    $scope.english = [];
    $scope.histories = []; // history is a protected name
    $scope.hod = [];
    $scope.languages = [];
    $scope.math = ['Math 174', 'Math 194', 'Math 198'];
    $scope.mechanicalEng = [];
    $scope.music = [];
    $scope.neuroscience = [];
    $scope.philosophy = ['Philosophy 105'];
    $scope.physics = [];
    $scope.politicalScience = [];
    $scope.psych = [];
    $scope.religiousStudies = [];
    $scope.sociology = [];
  });
