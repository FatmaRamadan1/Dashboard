import React from 'react';
import Styles from './list.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

export default function List() {
  return (
    <div className={Styles.list}>
        <Sidebar/>
        <div className={Styles.listContainer}>
            <Navbar/>
            <Datatable/>
        </div>
    </div>
  )
}
