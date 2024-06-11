import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import tw from 'twrnc'; 
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  children: ReactElement;
}>;

export default function ParallaxScrollView({
  children,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();



  return (
    <ThemedView style={styles.container}>
      <View style={tw`w-full h-10 bg-neutral-200`}/>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>

        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
