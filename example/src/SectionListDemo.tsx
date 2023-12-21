import React, { useCallback, useMemo, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  type SectionList,
  type SectionListRenderItemInfo,
  type SectionListData,
} from 'react-native';
import { useQueryClient, useInfiniteQuery } from 'react-query';
import {
  InfiniteSectionList,
  ListLoader,
  type InfiniteListRef,
} from '@swanstack/react-native-infinite-list';
import { fetchFakePage, type ItemInfo, type PageInfo } from './utils';

const ListItem = ({ item }: SectionListRenderItemInfo<ItemInfo>) => (
  <View style={styles.item}>
    <Text style={styles.label}>{item.label}</Text>
  </View>
);

const SectionHeader = ({ section }: { section: SectionListData<ItemInfo> }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
  </View>
);

const keyExtractor = (item: ItemInfo) => item.label;

const SectionListDemo = () => {
  const ref = useRef<InfiniteListRef<SectionListData<ItemInfo>>>(null);
  const listRef = useRef<SectionList<ItemInfo>>(null);

  const queryClient = useQueryClient();

  const {
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['section-list-items'],
    queryFn: ({ pageParam = 1 }) => fetchFakePage(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    getPreviousPageParam: (firstPage) => firstPage.prevPage,
  });

  const sections = useMemo(
    () =>
      data?.pages.flatMap((page, index) => ({
        title: `Group ${index + 1}`,
        data: page.data,
      })) ?? [],
    [data?.pages]
  );

  const handleRefresh = useCallback(async () => {
    // remove all pages except the first one
    queryClient.setQueryData<{ pages: PageInfo[] }>(
      ['section-list-items'],
      (oldData) => ({
        pageParams: [1],
        pages: oldData?.pages[0] ? [oldData.pages[0]] : [],
      })
    );
    // refetch pages
    await refetch();
  }, [queryClient, refetch]);

  return (
    <InfiniteSectionList
      ref={ref}
      listRef={listRef}
      sections={sections}
      loading={isFetching}
      hasMore={hasNextPage ?? false}
      onLoadMore={fetchNextPage}
      refreshing={isRefetching}
      onRefresh={handleRefresh}
      keyExtractor={keyExtractor}
      renderItem={ListItem}
      renderSectionHeader={SectionHeader}
      contentContainerStyle={styles.contentContainer}
      ListLoaderComponent={<ListLoader />}
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
  sectionHeader: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
    height: 50,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  sectionHeaderLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SectionListDemo;
