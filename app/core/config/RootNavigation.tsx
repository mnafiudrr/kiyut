/* eslint-disable no-nested-ternary */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashNavigation from '~/app/features/splash/config/Navigation';
import HomeNavigation from '~/app/features/home/config/Navigation';
import { SplashContext } from './SplashContext';
import { StatusBar } from 'expo-status-bar';

const Root = createStackNavigator();

function listScreen() {
  return [
    ...HomeNavigation.getNavigation(Root),
  ];
}

function splashScreen() {
  return [
    ...SplashNavigation.getNavigation(Root),
  ]
}

function RootNavigation() {
  const [splashLoading, setSplashLoading] = useState(true);
  const [defaultData, setDefaultData] = useState({
    video: '',
    logo: '',
    tagline: '',
    header: '',
  });

  return (
    <SplashContext.Provider
    value={{ splashLoading, setSplashLoading, defaultData, setDefaultData }}>
      <Root.Navigator>
        {
          splashLoading ?
            splashScreen()
              :
            listScreen()
        }
      </Root.Navigator>
    </SplashContext.Provider>
  );
}

export default RootNavigation;
