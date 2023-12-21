import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, type ListRenderItemInfo } from 'react-native';
import Animated from 'react-native-reanimated';
import { useQueryClient, useInfiniteQuery } from 'react-query';
import {
  InfiniteListController,
  ListLoader,
} from '@swanstack/react-native-infinite-list';
import { fetchFakePage, type ItemInfo, type PageInfo } from './utils';

const ListItem = ({ item }: ListRenderItemInfo<ItemInfo>) => (
  <View style={styles.item}>
    <Text style={styles.label}>{item.label}</Text>
  </View>
);

const keyExtractor = (item: ItemInfo) => item.label;

const AnimatedListDemo = () => {
  const listRef = useRef<Animated.FlatList<ItemInfo>>(null);

  const queryClient = useQueryClient();

  const {
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['animated-list-items'],
    queryFn: ({ pageParam = 1 }) => fetchFakePage(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    getPreviousPageParam: (firstPage) => firstPage.prevPage,
  });

  const listData = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data?.pages]
  );

  const handleRefresh = useCallback(async () => {
    // remove all pages except the first one
    queryClient.setQueryData<{ pages: PageInfo[] }>(
      ['animated-list-items'],
      (oldData) => ({
        pageParams: [1],
        pages: oldData?.pages[0] ? [oldData.pages[0]] : [],
      })
    );
    // refetch pages
    await refetch();
  }, [queryClient, refetch]);

  return (
    <InfiniteListController
      data={listData}
      loading={isFetching}
      hasMore={hasNextPage ?? false}
      onLoadMore={fetchNextPage}
      refreshing={isRefetching}
      onRefresh={handleRefresh}
      ListLoaderComponent={ListLoader}
      ListEndMessageComponent={<Text>Nothing more to load</Text>}
      renderList={(listProps) => (
        <Animated.FlatList
          ref={listRef}
          data={listProps.data}
          refreshing={listProps.refreshing}
          onRefresh={listProps.onRefresh}
          onEndReachedThreshold={0.3}
          onEndReached={listProps.onEndReached}
          renderItem={ListItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={<Text>No data</Text>}
          ListFooterComponent={listProps.ListFooterComponent}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    height: 50,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AnimatedListDemo;
