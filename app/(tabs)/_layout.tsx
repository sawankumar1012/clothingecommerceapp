import { Tabs } from 'expo-router';
import React from 'react';

import Octicons from '@expo/vector-icons/build/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
  
        tabBarStyle:{
          backgroundColor:Colors[colorScheme ?? 'light'].background,
          borderTopWidth:0,
          height:60,
          paddingBottom:10,
        }
        ,
        tabBarItemStyle:{
          paddingBottom:10,
        }
        ,
        tabBarLabelStyle:{
          fontSize:12,
          fontWeight:'bold',
        }
        
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) =><Octicons name="home" size={24} color={color} /> ,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
         tabBarShowLabel:false,
          tabBarIcon: ({ color }) =>    <FontAwesome name="bookmark" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
