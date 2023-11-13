import React from 'react';
import Styles from './list.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import User from '../../components/user/user';
// import Datatable from '../../components/datatable/Datatable';

export default function Listchat() {
  return (
    <div className={Styles.list}>
        <Sidebar/>
        <div className={Styles.listContainer}>
            <Navbar/>
            <User/>
        </div>
    </div>
  )
}
