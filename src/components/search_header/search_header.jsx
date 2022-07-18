import React from 'react'
import styles from './search_header.module.css'

const SearchHeader=(props)=>{

    const onClick = ()=>{
console.log("onClick");
    }
    const onKeyPress=()=>{
        console.log("onKeyPress");
    }
    return(
<header className={styles.header}>
    <div className={styles.log}>
    <img className={styles.img}src="/images/logo.png" alt="logo"></img>
    <h1 className={styles.title}>Youtube</h1>
    </div>
    <input className={styles.input}type="search" placeholder='Search..' onKeyPress={onKeyPress}/>
    <button className={styles.button} onClick={onClick}type="submit">
        <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
    </button>
</header>
    );

}


export default SearchHeader;