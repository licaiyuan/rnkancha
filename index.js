/**
 * @format
 */
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
import React, { useState, useEffect } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import AppRouter from './AppRouter'
import { createAppContainer } from 'react-navigation'
import { Color } from './publicState';
AppRegistry.registerComponent(appName, () =>( <Color> {createAppContainer(AppRouter)}</Color>));
