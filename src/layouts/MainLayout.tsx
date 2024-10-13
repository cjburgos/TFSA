import React from 'react';
import Header from '../components/header/header';
import SidePanel from '../components/navbar/sidePanel';
import "./MainLayout.css";

const MainLayout = ({ children }) => {
    return (
    <div>
    <main className="main-layout">
    <Header/>
    {children}
    <SidePanel/>
    </main>
    <footer>
    {/* Footer content goes here */}
    </footer>
    </div>
    );
   };
export default MainLayout;