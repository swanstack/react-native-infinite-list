const TOTAL_ELEMENTS = 100;
const PAGE_LIMIT = 30;

export interface ItemInfo {
  label: string;
}

export interface PageInfo {
  data: ItemInfo[];
  totalCount: number;
  nextPage: number | null;
  prevPage: number | null;
}

export function fetchFakePage(page: number) {
  return new Promise<PageInfo>((resolve) => {
    setTimeout(() => {
      if ((page - 1) * PAGE_LIMIT > TOTAL_ELEMENTS) {
        resolve({
          data: [],
          totalCount: TOTAL_ELEMENTS,
          nextPage: null,
          prevPage: page > 1 ? page - 1 : null,
        });
      } else {
        const n = Math.min(
          PAGE_LIMIT,
          TOTAL_ELEMENTS - (page - 1) * PAGE_LIMIT
        );
        const data: ItemInfo[] = Array.from({ length: n }, (_, i) => ({
          label: `Item ${i + (page - 1) * PAGE_LIMIT + 1}`,
        }));
        resolve({
          data,
          totalCount: TOTAL_ELEMENTS,
          nextPage: page * PAGE_LIMIT < TOTAL_ELEMENTS ? page + 1 : null,
          prevPage: page > 1 ? page - 1 : null,
        });
      }
    }, 240);
  });
}
