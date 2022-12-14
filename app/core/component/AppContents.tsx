import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppVideoContent from './AppVideoContent';
import AppImageContent from './AppImageContent';
import AppTextContent from './AppTextContent';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import HomeScreen from '~/app/features/home/config/Screens';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import AppThumbnail from './AppThumbnail';

type contentsProps = {
  contents: Array<any>,
  title: string
}

const dummy_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const dummy_image = 'https://via.placeholder.com/400x400.png/0077ff?text=animals+veritatis';
const dummy_video = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

export default function AppContents({contents, title}: contentsProps) {

  const navigation = useNavigation<CompositeNavigationProp<any, any>>();

  return (
    <View>
      {
        contents.map((item, index) => {

          if(item.value == null) return null;

          if(item.content_type_id === 1) {
            return <AppTextContent key={index} value={item.value} />
          }else if(item.content_type_id === 2) {
            return <AppImageContent key={index} uri={item.value}/>
          }else if(item.content_type_id === 3) {
            const thumbnail = `${item.value.replace('https://www.youtube.com/watch?v=', 'https://img.youtube.com/vi/')}/0.jpg`;
            // return <AppVideoContent key={index} url={item.value} />
            return <AppThumbnail key={index} uri={thumbnail} onPress={() => HomeScreen.VIDEO.navigate(navigation, {title, url: item.value})} />;
            return (
              <TouchableOpacity key={index} onPress={() => HomeScreen.VIDEO.navigate(navigation, {title: title , url: item.value})}>
                {/* <Text style={{ textAlign: 'center' }}>
                  Watch Video
                </Text> */}
              </TouchableOpacity>
            )
          }else if(item.content_type_id ===4){
            return (
              <TouchableOpacity key={index} onPress={() => HomeScreen.PDF.navigate(navigation, {title: title , url: item.value})}>
                <Image source={require(`~/assets/doc_icon.png`)} style={{ width: 50, height: 50, marginLeft: 25 }}/>
              </TouchableOpacity>
            )
            return <Text key={index}>{item.value}</Text>
          }else{
            return null;
          }

        })
      }
    </View>
  )
}

const styles = StyleSheet.create({})