// Movies/ScenesScreen.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScenesHeader from './components/ScenesHeader';
import ScenesFooter from './components/ScenesFooter';
import ScenesBody from './components/ScenesBody';
import BackgroundScenes from './components/Background';
import useScenes from './hooks/useScenes';

const ScenesScreen = () => {
  const { scenes, loading, error } = useScenes();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackgroundScenes />
      <ScenesHeader />
      <ScenesBody scenes={scenes} />
      <ScenesFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ScenesScreen;
