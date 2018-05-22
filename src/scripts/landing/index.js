import angular from 'angular';
import 'angular-route';
import appConfig from '../app.config';
import contactService from '../contact.service';

// Create the module where our functionality can attach to
let landingModule = angular.module('app.landing', ['ngRoute']);

landingModule.config(appConfig);

//factory methods
landingModule.factory('ContactService', [contactService])

//services
landingModule.service('nameService', function () {
    this.getFullName = function (fname, lname) {

        return fname + " " + lname;
    };
});

// Components
import LandingPage from './landing-page.component';
landingModule.component('landingPage', LandingPage);

import AppHeader from './header.component';
landingModule.component('appHeader', AppHeader);

import AppFooter from './footer.component';
landingModule.component('appFooter', AppFooter);

import Contact from './../components/contact/contact.component';
landingModule.component('contact', Contact);

import ContactInfo from './../components/contact-info/contact-info.component';
landingModule.component('contactInfo', ContactInfo);

import ContactForm from './../components/contact-form/contact-form.component';
landingModule.component('contactForm', ContactForm);


export default landingModule;
