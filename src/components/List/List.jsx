import React from 'react';
import { useList, useTheme } from '../../hooks/appContext';
import styles from './List.css';

const List = () => {
  const theme = useTheme();
  const list = useList();

  const listItems = list.map(item => (
    <li key={item.url}>
      {item.name}
    </li>
  ));
  return (
    <div className={styles[`List-${theme}`]}>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default List;
