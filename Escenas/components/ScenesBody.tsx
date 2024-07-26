// Movies/components/ScenesBody.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Scene {
  id: string;
  title: string;
  director: string;
  duration: string;
}

interface Props {
  scenes: Scene[];
}

const ScenesBody: React.FC<Props> = ({ scenes }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={scenes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.details}>Director: {item.director}</Text>
            <Text style={styles.details}>Duration: {item.duration}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});

export default ScenesBody;
