"use strict";(self.webpackChunkreact_native_infinite_list_docs=self.webpackChunkreact_native_infinite_list_docs||[]).push([[497],{5763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(5893),s=t(1151);const r={id:"infinite-flat-list",slug:"infinite-flat-list",title:"InfiniteFlatList"},a="InfiniteFlatList",d={id:"usage/infinite-flat-list",title:"InfiniteFlatList",description:"Props",source:"@site/docs/usage/infinite-flat-list.md",sourceDirName:"usage",slug:"/usage/infinite-flat-list",permalink:"/react-native-infinite-list/usage/infinite-flat-list",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"infinite-flat-list",slug:"infinite-flat-list",title:"InfiniteFlatList"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/react-native-infinite-list/"},next:{title:"InfiniteSectionList",permalink:"/react-native-infinite-list/usage/infinite-section-list"}},l={},o=[{value:"Props",id:"props",level:2},{value:"FlatListProps",id:"flatlistprops",level:3},{value:"<code>loading</code>",id:"loading",level:3},{value:"<code>hasMore</code>",id:"hasmore",level:3},{value:"<code>onLoadMore</code>",id:"onloadmore",level:3},{value:"<code>ensureMinExecutionTime</code>",id:"ensureminexecutiontime",level:3},{value:"<code>ListLoaderComponent</code>",id:"listloadercomponent",level:3},{value:"<code>ListEndMessageComponent</code>",id:"listendmessagecomponent",level:3},{value:"<code>listRef</code>",id:"listref",level:3},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"infiniteflatlist",children:"InfiniteFlatList"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import {\n  InfiniteFlatList,\n  ListLoader,\n} from "@swanstack/react-native-infinite-list";\n\n<InfiniteFlatList\n  data={data}\n  loading={isFetching}\n  hasMore={hasNextPage}\n  onLoadMore={fetchNextPage}\n  refreshing={isRefetching}\n  onRefresh={handleRefresh}\n  renderItem={({ item }) => <Text>{item.label}</Text>}\n  keyExtractor={(_item, index) => index.toString()}\n  ListLoaderComponent={<ListLoader />}\n  ListEmptyComponent={<Text>No data</Text>}\n  ListEndMessageComponent={<Text>Nothing more to load</Text>}\n/>;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(n.h3,{id:"flatlistprops",children:(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/flatlist#props",children:"FlatListProps"})}),"\n",(0,i.jsxs)(n.p,{children:["Inherits ",(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/flatlist#props",children:"FlatListProps"})," from ",(0,i.jsx)(n.code,{children:"react-native"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"loading",children:(0,i.jsx)(n.code,{children:"loading"})}),"\n",(0,i.jsx)(n.p,{children:"Controls whether the component is in a loading state."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"YES"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"hasmore",children:(0,i.jsx)(n.code,{children:"hasMore"})}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether there are more items to be fetched."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"YES"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"onloadmore",children:(0,i.jsx)(n.code,{children:"onLoadMore"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"() => void;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Callback function triggered when more items need to be loaded. See more: ",(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/virtualizedlist#onendreached",children:"onEndReached"}),", ",(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/virtualizedlist#onendreachedthreshold",children:"onEndReachedThreshold"})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"YES"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"ensureminexecutiontime",children:(0,i.jsx)(n.code,{children:"ensureMinExecutionTime"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the minimum time, in milliseconds, to wait for the asynchronous ",(0,i.jsx)(n.code,{children:"onLoadMore"})," function to complete. This helps prevent the loader from disappearing too quickly, providing a smoother user experience."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"NO"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"listloadercomponent",children:(0,i.jsx)(n.code,{children:"ListLoaderComponent"})}),"\n",(0,i.jsx)(n.p,{children:"Rendered when the data is fetching. Can be a React Component Class, a render function, or a rendered element."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"component, element"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ListLoader"})}),(0,i.jsx)(n.td,{children:"NO"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"listendmessagecomponent",children:(0,i.jsx)(n.code,{children:"ListEndMessageComponent"})}),"\n",(0,i.jsx)(n.p,{children:"Rendered at the bottom of all the items when there are no more items to fetch. Can be a React Component Class, a render function, or a rendered element."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"component, element"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"NO"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"listref",children:(0,i.jsx)(n.code,{children:"listRef"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { type FlatList } from "react-native";\n\ntype ItemInfo { /* your item properties */ }\n\nconst listRef = useRef<FlatList<ItemInfo>>(null);\nlistRef.current?.scrollToOffset({ offset: 0, animated: false });\n\n<InfiniteFlatList listRef={listRef} />;\n'})}),"\n",(0,i.jsx)(n.p,{children:"Ref to the FlatList component."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reference"}),(0,i.jsx)(n.td,{children:"undefined"}),(0,i.jsx)(n.td,{children:"NO"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Here is a simple usage of the ",(0,i.jsx)(n.strong,{children:"InfiniteFlatList"})," and ",(0,i.jsx)(n.code,{children:"react-query"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import React, { useCallback, useMemo, useRef } from "react";\nimport {\n  StyleSheet,\n  Text,\n  View,\n  type FlatList,\n  type ListRenderItemInfo,\n} from "react-native";\nimport { useQueryClient, useInfiniteQuery } from "react-query";\nimport {\n  InfiniteFlatList,\n  ListLoader,\n  type InfiniteListRef,\n} from "@swanstack/react-native-infinite-list";\n\n// Define the structure of each item in the list\ninterface ItemInfo {\n  label: string;\n}\n\n// Define the structure of data for each page\ninterface PageInfo {\n  data: ItemInfo[];\n  totalCount: number;\n  nextPage: number | null;\n  prevPage: number | null;\n}\n\n// Function to fetch data for a specific page\nconst fetchPage = async (page: number) => {\n  const response = await fetch(\n    `https://your-api-endpoint.com/api/data?page=${page}&pageLimit=30`\n  );\n  const data = await response.json();\n  return data as PageInfo;\n};\n\nconst ListItem = ({ item }: ListRenderItemInfo<ItemInfo>) => (\n  <View style={styles.item}>\n    <Text style={styles.label}>{item.label}</Text>\n  </View>\n);\n\nconst keyExtractor = (_item: ItemInfo, index: number) => index.toString();\n\nconst ProjectList = () => {\n  const ref = useRef<InfiniteListRef<ItemInfo>>(null);\n  const listRef = useRef<FlatList<ItemInfo>>(null);\n\n  const queryClient = useQueryClient();\n\n  const {\n    data,\n    isFetching,\n    hasNextPage,\n    fetchNextPage,\n    isRefetching,\n    refetch,\n  } = useInfiniteQuery({\n    queryKey: ["projects"],\n    queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),\n    getNextPageParam: (lastPage) => lastPage.nextPage,\n    getPreviousPageParam: (firstPage) => firstPage.prevPage,\n  });\n\n  const listData = useMemo(\n    () => data?.pages.flatMap((page) => page.data) ?? [],\n    [data?.pages]\n  );\n\n  const handleRefresh = useCallback(async () => {\n    // remove all pages except the first one\n    queryClient.setQueryData(["projects"], {\n      pageParams: [1],\n      pages: data?.pages[0] ? [data.pages[0]] : [],\n    });\n    // refetch pages\n    await refetch();\n  }, [data?.pages[0]]);\n\n  return (\n    <InfiniteFlatList\n      ref={ref}\n      listRef={listRef}\n      data={listData}\n      loading={isFetching}\n      hasMore={hasNextPage ?? false}\n      onLoadMore={fetchNextPage}\n      refreshing={isRefetching}\n      onRefresh={handleRefresh}\n      renderItem={ListItem}\n      keyExtractor={keyExtractor}\n      contentContainerStyle={styles.contentContainer}\n      ListLoaderComponent={ListLoader}\n      ListEmptyComponent={<Text>No data</Text>}\n      ListEndMessageComponent={<Text>Nothing more to load</Text>}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  contentContainer: {\n    paddingTop: 16,\n    paddingBottom: 40,\n    paddingHorizontal: 16,\n  },\n  item: {\n    backgroundColor: "rgba(0,0,0,0.1)",\n    padding: 16,\n    height: 50,\n    marginBottom: 10,\n  },\n  label: {\n    fontWeight: "bold",\n    fontSize: 14,\n  },\n});\n\nexport default ProjectList;\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);