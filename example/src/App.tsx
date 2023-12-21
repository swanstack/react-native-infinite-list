import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import FlatListDemo from './FlatListDemo';
import SectionListDemo from './SectionListDemo';
import VirtualizedListDemo from './VirtualizedListDemo';
import FlashListDemo from './FlashListDemo';
import AnimatedListDemo from './AnimatedListDemo';

const queryClient = new QueryClient();

export default function App() {
  const [listId, setListId] = useState('FlatList');

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.screen}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>React Native Infinite List</Text>
            <View style={styles.row}>
              <Button
                title="FlatList"
                onPress={() => setListId('FlatList')}
                color={listId === 'FlatList' ? '#26C2A0' : '#fff'}
              />
              <Button
                title="SectionList"
                onPress={() => setListId('SectionList')}
                color={listId === 'SectionList' ? '#26C2A0' : '#fff'}
              />
              <Button
                title="VirtualizedList"
                onPress={() => setListId('VirtualizedList')}
                color={listId === 'VirtualizedList' ? '#26C2A0' : '#fff'}
              />
              <Button
                title="FlashList"
                onPress={() => setListId('FlashList')}
                color={listId === 'FlashList' ? '#26C2A0' : '#fff'}
              />
              <Button
                title="AnimatedList"
                onPress={() => setListId('AnimatedList')}
                color={listId === 'AnimatedList' ? '#26C2A0' : '#fff'}
              />
            </View>
          </View>
          <View style={styles.lists}>
            {listId === 'FlatList' ? (
              <FlatListDemo />
            ) : listId === 'SectionList' ? (
              <SectionListDemo />
            ) : listId === 'VirtualizedList' ? (
              <VirtualizedListDemo />
            ) : listId === 'FlashList' ? (
              <FlashListDemo />
            ) : listId === 'AnimatedList' ? (
              <AnimatedListDemo />
            ) : null}
          </View>
        </SafeAreaView>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTitle: {
    marginBottom: 16,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    marginHorizontal: -14,
    padding: 6,
    gap: 16,
  },
  lists: {
    flex: 1,
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
});
