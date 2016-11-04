/**
 * Created by t on 10/17/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import CookieBanner from './components/CookieBanner.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
var GNBI = {};
GNBI.gnbConfigs = {};
GNBI.gnbConfigs.showHeader = true;
GNBI.gnbConfigs.showCookieBanner = true;
GNBI.gnbConfigs.showFooter = true;
GNBI.gnbConfigs.helpUrl = "#";
GNBI.clientCallbacks = [];

if(window.gnbConfigs){
    GNBI.gnbConfigs = Object.assign(GNBI.gnbConfigs, window.gnbConfigs);
}

if(GNBI.gnbConfigs.showHeader){
    document.body.insertAdjacentHTML("afterBegin", "<div id='gnbHeader'></div>");
    ReactDOM.render(<Header />, document.getElementById('gnbHeader'))
}

if(GNBI.gnbConfigs.showCookieBanner){
    document.body.insertAdjacentHTML("afterBegin", "<div id='gnbCookieBanner'></div>");
    ReactDOM.render(<CookieBanner />, document.getElementById('gnbCookieBanner'))
}

if(GNBI.gnbConfigs.showFooter){
    document.body.insertAdjacentHTML("beforeEnd", "<div id='gnbFooter'></div>");
    ReactDOM.render(<Footer />, document.getElementById('gnbFooter'))
}


GNBI.clientCallbacks.helpClickCallback = function(e){
    console.log("help click callback");
}

GNBI.clientCallbacks.updateLocaleCallback = function(e){
    console.log("update locale callback");
}


if(window.clientCallbacks){
    GNBI.clientCallbacks = Object.assign(GNBI.clientCallbacks, window.clientCallbacks);
}
GNBI.clientCallbacks.helpClickCallback();