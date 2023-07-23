import { useEffect, useState, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from './redux/slices/postsSlice';
import { setCurrentPage } from './redux/slices/filterSlice';

import Table from './components/Table';
import Search from './components/Search';
import Pagination from './components/Pagination';

import './index.css';

export const SearchContext = createContext('');

function App() {
    const [searchValue, setSearchValue] = useState('');
    const curentPage = useSelector((state) => state.filter.curentPage);
    const dispatch = useDispatch();

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    };

    useEffect(() => {
        dispatch(fetchPosts(curentPage));
    }, [dispatch, curentPage]);

    return (
        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                    <Search />
                    <Table />
                    <Pagination
                        curentPage={curentPage}
                        onChangePage={onChangePage}
                    />
                </SearchContext.Provider>
            </div>
        </div>
    );
}

export default App;
