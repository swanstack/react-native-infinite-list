import React, { forwardRef, type ForwardedRef } from 'react';
import { FlatList, type FlatListProps } from 'react-native';
import type { InfiniteListRef } from './types';
import ListLoader from './ListLoader';
import InfiniteListController, {
  type InfiniteListControllerProps,
} from './InfiniteListController';

type SpecificBuilderProps<ItemT> = Omit<
  InfiniteListControllerProps<ItemT>,
  keyof FlatListProps<ItemT> | 'renderList'
>;

export interface InfiniteFlatListProps<ItemT>
  extends FlatListProps<ItemT>,
    SpecificBuilderProps<ItemT> {
  /**
   * Ref to the FlatList component.
   */
  listRef?: React.LegacyRef<FlatList<ItemT>>;
}

const EMPTY_ARRAY: any[] = [];

function InfiniteFlatList<ItemT>(
  {
    data,
    loading,
    hasMore,
    onLoadMore,
    refreshing,
    onRefresh,
    ensureMinExecutionTime,
    listRef,
    ListLoaderComponent = ListLoader,
    ListEndMessageComponent,
    ListFooterComponent,
    ...props
  }: InfiniteFlatListProps<ItemT>,
  ref: ForwardedRef<InfiniteListRef<ItemT>>
) {
  return (
    <InfiniteListController
      ref={ref}
      data={data || EMPTY_ARRAY}
      loading={loading}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      refreshing={!!refreshing}
      onRefresh={onRefresh}
      ensureMinExecutionTime={ensureMinExecutionTime}
      ListLoaderComponent={ListLoaderComponent}
      ListEndMessageComponent={ListEndMessageComponent}
      renderList={(listProps) => (
        <FlatList
          ref={listRef}
          data={listProps.data}
          refreshing={listProps.refreshing}
          onRefresh={listProps.onRefresh}
          onEndReached={listProps.onEndReached}
          onEndReachedThreshold={listProps.onEndReachedThreshold}
          ListFooterComponent={
            listProps.ListFooterComponent || ListFooterComponent
          }
          {...props}
        />
      )}
    />
  );
}

export default forwardRef(InfiniteFlatList) as <ItemT>(
  props: InfiniteFlatListProps<ItemT> & {
    ref?: ForwardedRef<InfiniteListRef<ItemT>>;
  }
) => ReturnType<typeof InfiniteFlatList>;
