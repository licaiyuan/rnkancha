/**
 * @format
 */
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
import React, { useState, useEffect } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Luwt from './luwt'
import { name as appName } from './app.json';
import AppRouter from './AppRouter'
import { createAppContainer } from 'react-navigation'

AppRegistry.registerComponent(appName, () => Luwt);
