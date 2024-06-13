
import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CardsList from '@/components/CardsList';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView>
      <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">QUE QUIERES CALCULAR?</ThemedText>
      </ThemedView>
      <CardsList />
      </>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8,
  },
});
