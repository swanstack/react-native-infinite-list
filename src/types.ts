export interface InfiniteListRef<ItemT> {
  data: ItemT[]; // we cannot use ItemT[] since we are unable to determine whether an array is readonly (SectionList) or not (FlatList), luckily we don't need it
  loading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  refreshing: boolean;
  refresh: () => void;
}

export {};
