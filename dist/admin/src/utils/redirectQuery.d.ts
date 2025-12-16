interface QueryParams {
    sortBy: string;
    sortOrder: string;
    pageSize: number;
    page: number;
    searchQuery: string;
}
declare const redirectQuery: ({ sortBy, sortOrder, pageSize, page, searchQuery, }: QueryParams) => Record<string, any>;
export { redirectQuery };
