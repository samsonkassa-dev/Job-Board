import Navbar from "./Navbar";
import { ReactElement } from 'react';
import Head from 'next/head'


export const Layout = ({children}:{children:ReactElement}) => {
  return (

    <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
    </>
  );
}

export default Layout;