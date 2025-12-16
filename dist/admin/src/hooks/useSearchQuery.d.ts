interface SearchQuery {
    pageSize: number;
    page: number;
    setNewPage: (newPage: number) => void;
    setNewPageSize: (newPageSize: number) => void;
}
declare const useSearchQuery: () => SearchQuery;
export { useSearchQuery };
