import React from 'react';
interface PaginationProps {
    activePage: number;
    pageCount: number;
    handlePageChange: (newPage: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export { Pagination };
