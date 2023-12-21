import React, { forwardRef, type ForwardedRef } from 'react';
import { VirtualizedList, type VirtualizedListProps } from 'react-native';
import type { InfiniteListRef } from './types';
import ListLoader from './ListLoader';
import InfiniteListController, {
  type InfiniteListControllerProps,
} from './InfiniteListController';

type SpecificBuilderProps<ItemT> = Omit<
  InfiniteListControllerProps<ItemT>,
  keyof VirtualizedListProps<ItemT> | 'renderList'
>;

export interface InfiniteVirtualizedListProps<ItemT>
  extends VirtualizedListProps<ItemT>,
    SpecificBuilderProps<ItemT> {
  /**
   * Ref to the VirtualizedList component.
   */
  listRef?: React.LegacyRef<VirtualizedList<ItemT>>;
}

function InfiniteVirtualizedList<ItemT>(
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
  }: InfiniteVirtualizedListProps<ItemT>,
  ref: ForwardedRef<InfiniteListRef<ItemT>>
) {
  return (
    <InfiniteListController
      ref={ref}
      data={data}
      loading={loading}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      refreshing={!!refreshing}
      onRefresh={onRefresh}
      ensureMinExecutionTime={ensureMinExecutionTime}
      ListLoaderComponent={ListLoaderComponent}
      ListEndMessageComponent={ListEndMessageComponent}
      renderList={(listProps) => (
        <VirtualizedList
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

export default forwardRef(InfiniteVirtualizedList) as <ItemT>(
  props: InfiniteVirtualizedListProps<ItemT> & {
    ref?: ForwardedRef<InfiniteListRef<ItemT>>;
  }
) => ReturnType<typeof InfiniteVirtualizedList>;
