import React, { useCallback, useMemo, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  type VirtualizedList,
  type ListRenderItemInfo,
} from 'react-native';
import { useQueryClient, useInfiniteQuery } from 'react-query';
import {
  InfiniteVirtualizedList,
  ListLoader,
  type InfiniteListRef,
} from '@swanstack/react-native-infinite-list';
import { fetchFakePage, type ItemInfo, type PageInfo } from './utils';

const ListItem = ({ item }: ListRenderItemInfo<ItemInfo>) => (
  <View style={styles.item}>
    <Text style={styles.label}>{item.label}</Text>
  </View>
);

const keyExtractor = (_item: ItemInfo, index: number) => index.toString();

const VirtualizedListDemo = () => {
  const ref = useRef<InfiniteListRef<ItemInfo>>(null);
  const listRef = useRef<VirtualizedList<ItemInfo>>(null);

  const queryClient = useQueryClient();

  const {
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['virtualized-list-items'],
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
      ['virtualized-list-items'],
      (oldData) => ({
        pageParams: [1],
        pages: oldData?.pages[0] ? [oldData.pages[0]] : [],
      })
    );
    // refetch pages
    await refetch();
  }, [queryClient, refetch]);

  return (
    <InfiniteVirtualizedList
      ref={ref}
      listRef={listRef}
      data={listData}
      loading={isFetching}
      hasMore={hasNextPage ?? false}
      onLoadMore={fetchNextPage}
      refreshing={isRefetching}
      onRefresh={handleRefresh}
      renderItem={ListItem}
      keyExtractor={keyExtractor}
      getItemCount={(items) => items.length}
      getItem={(items, index) => items[index]}
      contentContainerStyle={styles.contentContainer}
      ListLoaderComponent={ListLoader}
      ListEmptyComponent={<Text>No data</Text>}
      ListEndMessageComponent={<Text>Nothing more to load</Text>}
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

export default VirtualizedListDemo;
