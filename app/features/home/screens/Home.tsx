import { ScrollView, Text, View } from 'react-native';
import React, { useContext } from 'react';
import AppView from '~/app/core/component/AppView';
import {CompositeNavigationProp} from '@react-navigation/native';
import { SplashContext } from '~/app/core/config/SplashContext';
import AppText from '~/app/core/component/AppText';


export default function Home({navigation}: {navigation: CompositeNavigationProp<any, any>}) {


  return (
    <AppView withSafeArea>
      <View>
        <AppText>
          Test
        </AppText>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}>
      </ScrollView>
    </AppView>
  )
}