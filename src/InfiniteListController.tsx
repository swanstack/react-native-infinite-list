import React, {
  forwardRef,
  type ForwardedRef,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import type { InfiniteListRef } from './types';
import type { VirtualizedListProps } from 'react-native';

export interface InfiniteListControllerProps<ItemT> {
  data: ArrayLike<ItemT>;
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  refreshing?: boolean;
  onRefresh?: (() => void) | null | undefined;
  ensureMinExecutionTime?: number;
  /**
   * Render function that receives the VirtualizedListProps and returns a list component.
   */
  renderList: (
    props: Pick<
      VirtualizedListProps<ItemT>,
      | 'data'
      | 'refreshing'
      | 'onRefresh'
      | 'onEndReachedThreshold'
      | 'ListFooterComponent'
    > & {
      onEndReached?: (() => void) | null | undefined;
    }
  ) => React.ReactNode;
  /**
   * Rendered when the data is fetching. Can be a React Component Class, a render function, or
   * a rendered element.
   */
  ListLoaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  /**
   * Rendered at the bottom of all the items. Can be a React Component Class, a render function, or
   * a rendered element.
   */
  ListEndMessageComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

function InfiniteListController<ItemT>(
  {
    data,
    loading,
    hasMore,
    onRefresh,
    refreshing,
    onLoadMore,
    ensureMinExecutionTime,
    renderList,
    ListLoaderComponent,
    ListEndMessageComponent,
  }: InfiniteListControllerProps<ItemT>,
  ref: ForwardedRef<InfiniteListRef<ItemT>>
) {
  const cachedData = useRef<ItemT[]>([]);

  const handleRefresh = useCallback(async () => {
    if (!loading) {
      await onRefresh?.();
    }
  }, [loading, onRefresh]);

  const handleLoadMore = useCallback(async () => {
    if (hasMore && !loading && data?.length) {
      const asyncTask = async () => {
        await onLoadMore();
      };
      if (ensureMinExecutionTime !== undefined) {
        // wait for the async function to complete,
        // but ensure it takes at least X seconds
        // to avoid flashing loader too quickly
        await Promise.all([
          asyncTask,
          new Promise((resolve) =>
            setTimeout(resolve, Math.abs(ensureMinExecutionTime))
          ),
        ]);
      } else {
        await asyncTask();
      }
    }
  }, [data?.length, ensureMinExecutionTime, hasMore, loading, onLoadMore]);

  useEffect(() => {
    cachedData.current = data as ItemT[];
  }, [data]);

  // prevent data loss during the loading of new data (e.g. when pulling to refresh)
  const listData = refreshing ? cachedData.current : (data as ItemT[]);

  useImperativeHandle(
    ref,
    () => ({
      data: listData,
      loading,
      hasMore,
      loadMore: handleLoadMore,
      refreshing: !!refreshing,
      refresh: handleRefresh,
    }),
    [listData, loading, hasMore, handleLoadMore, refreshing, handleRefresh]
  );

  if (!listData.length && loading && ListLoaderComponent) {
    if (typeof ListLoaderComponent === 'function') {
      // If it's a functional component, render it directly
      return <ListLoaderComponent />;
    } else if (React.isValidElement(ListLoaderComponent)) {
      // If it's a React element, render it directly
      return ListLoaderComponent;
    } else {
      console.warn('Invalid ListLoaderComponent type');
      return null;
    }
  }

  return (
    <>
      {renderList({
        data: listData,
        refreshing: onRefresh ? refreshing : undefined,
        onRefresh: onRefresh ? handleRefresh : undefined,
        onEndReached: handleLoadMore,
        onEndReachedThreshold: 0.3,
        ListFooterComponent: hasMore
          ? ListLoaderComponent
          : !loading && ListEndMessageComponent
          ? ListEndMessageComponent
          : undefined,
      })}
    </>
  );
}

export default forwardRef(InfiniteListController) as <ItemT>(
  props: InfiniteListControllerProps<ItemT> & {
    ref?: ForwardedRef<InfiniteListRef<ItemT>>;
  }
) => ReturnType<typeof InfiniteListController>;
