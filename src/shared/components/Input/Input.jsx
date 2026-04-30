import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ onSearch }) => { 
  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchValue); 
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input 
          type="text" 
          className={styles.searchInput} 
          placeholder="Search..." 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className={styles.searchIcon} onClick={() => onSearch(searchValue)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.glow}></div>
    </div>
  );
};

export default Input;