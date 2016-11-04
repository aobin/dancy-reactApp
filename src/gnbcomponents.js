/**
 * Created by t on 10/12/2016.
 */
import React from 'react';

import CookieBanner from './components/CookieBanner.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import App from './components/App.jsx';
import HpcTou from './components/HpcTou.jsx';

var gnbComponents = {};
gnbComponents.cookiebanner = <CookieBanner />;
gnbComponents.header = <Header />;
gnbComponents.footer = <Footer />;
gnbComponents.app = <App />;
gnbComponents.tou = <HpcTou />;

window.gnbComponents = gnbComponents;