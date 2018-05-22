import angular from 'angular';

import './config/app.templates';

import './landing';


// Create and bootstrap application
const requires = [
  'templates',
  'app.landing'
];



var app = angular.module('evolentApp', requires);

// app.config(appConfig);
