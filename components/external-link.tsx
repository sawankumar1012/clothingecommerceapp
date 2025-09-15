import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import React, { type ComponentProps } from 'react';
import { Linking, TouchableOpacity } from 'react-native';

type Props = ComponentProps<typeof TouchableOpacity> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  const handlePress = async () => {
    if (process.env.EXPO_OS !== 'web') {
      // Open the link in an in-app browser.
      await openBrowserAsync(href, {
        presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
      });
    } else {
      // On web, use the default browser behavior
      await Linking.openURL(href);
    }
  };

  return (
    <TouchableOpacity
      {...rest}
      onPress={handlePress}
    />
  );
}
