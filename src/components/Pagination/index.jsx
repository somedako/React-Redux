import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.css';

const Pagination = ({ curentPage, onChangePage }) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel="Далее"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={10}
            pageCount={5}
            forcePage={curentPage - 1}
            previousLabel="Назад"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
