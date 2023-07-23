import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchContext } from '../../App';

import styles from './Table.module.css';

const Table = () => {
    const [sorting, setSorting] = useState([]);
    const [addClass, setAddClass] = useState(false);
    const { searchValue } = useContext(SearchContext);
    const items = useSelector((state) => state.posts.items);

    const setSortHandler = (a) => {
        setAddClass(!addClass);
        const newItems = [...items];
        let sortedItems;
        if (a === 'id') sortedItems = newItems.sort((a, b) => b.id - a.id);
        if (a === 'title')
            sortedItems = newItems.sort((a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            });
        if (a === 'body')
            sortedItems = newItems.sort((a, b) => {
                if (a.body < b.body) return -1;
                if (a.body > b.body) return 1;
                return 0;
            });

        setSorting(sortedItems);
    };
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>
                        ID
                        <button
                            className={`button ${addClass ? 'active' : ''}`}
                            onClick={() => setSortHandler('id')}
                        >
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="0.353553"
                                    y1="0.646447"
                                    x2="6.18011"
                                    y2="6.47301"
                                    stroke="#FCFCFC"
                                />
                                <line
                                    x1="5.64645"
                                    y1="6.30331"
                                    x2="11.3033"
                                    y2="0.646453"
                                    stroke="white"
                                />
                            </svg>
                        </button>
                    </td>
                    <td>
                        Заголовок
                        <button
                            className={`button ${addClass ? 'active' : ''}`}
                            onClick={() => setSortHandler('title')}
                        >
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="0.353553"
                                    y1="0.646447"
                                    x2="6.18011"
                                    y2="6.47301"
                                    stroke="#FCFCFC"
                                />
                                <line
                                    x1="5.64645"
                                    y1="6.30331"
                                    x2="11.3033"
                                    y2="0.646453"
                                    stroke="white"
                                />
                            </svg>
                        </button>
                    </td>
                    <td>
                        Описание
                        <button
                            className={`button ${addClass ? 'active' : ''}`}
                            onClick={() => setSortHandler('body')}
                        >
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="0.353553"
                                    y1="0.646447"
                                    x2="6.18011"
                                    y2="6.47301"
                                    stroke="#FCFCFC"
                                />
                                <line
                                    x1="5.64645"
                                    y1="6.30331"
                                    x2="11.3033"
                                    y2="0.646453"
                                    stroke="white"
                                />
                            </svg>
                        </button>
                    </td>
                </tr>
            </thead>
            <tbody>
                {sorting.length > 0
                    ? sorting
                          .filter((obj) => {
                              if (
                                  obj.title
                                      .toLowerCase()
                                      .includes(searchValue.toLowerCase())
                              ) {
                                  return true;
                              }
                              return false;
                          })
                          .map((item) => (
                              <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.title}</td>
                                  <td>{item.body}</td>
                              </tr>
                          ))
                    : items
                          .filter((obj) => {
                              if (
                                  obj.title
                                      .toLowerCase()
                                      .includes(searchValue.toLowerCase())
                              ) {
                                  return true;
                              }
                              return false;
                          })
                          .map((item) => (
                              <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.title}</td>
                                  <td>{item.body}</td>
                              </tr>
                          ))}
            </tbody>
        </table>
    );
};

export default Table;
