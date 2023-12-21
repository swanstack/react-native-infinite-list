import React, { forwardRef, type ForwardedRef } from 'react';
import {
  SectionList,
  type DefaultSectionT,
  type SectionListData,
  type SectionListProps,
} from 'react-native';
import type { InfiniteListRef } from './types';
import ListLoader from './ListLoader';
import InfiniteListController, {
  type InfiniteListControllerProps,
} from './InfiniteListController';

type SpecificBuilderProps<ItemT, SectionT = DefaultSectionT> = Omit<
  InfiniteListControllerProps<SectionListData<ItemT, SectionT>>,
  keyof SectionListProps<ItemT, SectionT> | 'renderList'
>;

export interface InfiniteSectionListProps<ItemT, SectionT = DefaultSectionT>
  extends SectionListProps<ItemT, SectionT>,
    SpecificBuilderProps<ItemT, SectionT> {
  /**
   * Ref to the SectionList component.
   */
  listRef?: React.LegacyRef<SectionList<ItemT, SectionT>>;
}

function InfiniteSectionList<ItemT, SectionT = DefaultSectionT>(
  {
    sections,
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
  }: InfiniteSectionListProps<ItemT, SectionT>,
  ref: ForwardedRef<InfiniteListRef<SectionListData<ItemT, SectionT>>>
) {
  return (
    <InfiniteListController
      ref={ref}
      data={sections}
      loading={loading}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      refreshing={!!refreshing}
      onRefresh={onRefresh}
      ensureMinExecutionTime={ensureMinExecutionTime}
      ListLoaderComponent={ListLoaderComponent}
      ListEndMessageComponent={ListEndMessageComponent}
      renderList={(listProps) => (
        <SectionList
          ref={listRef}
          sections={listProps.data}
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

export default forwardRef(InfiniteSectionList) as <
  ItemT,
  SectionT = DefaultSectionT
>(
  props: InfiniteSectionListProps<ItemT, SectionT> & {
    ref?: ForwardedRef<InfiniteListRef<SectionListData<ItemT, SectionT>>>;
  }
) => ReturnType<typeof InfiniteSectionList>;
