import React from 'react'
import "../../index.css"
// import Image from 'next/image';
import Head from '../../components/Head';
import Nav from '../../components/Nav';
import Project2 from './Project2'

export default function page() {
  return (
    <main className="bg-slate-300 relative">
        <section>
            {/* <!-- Site logo, navigation, and header content --> */}
            <Head />
        </section>
        <section>
            <Nav />
        </section>
        <section>
            <h1>project 2</h1>
            <Project2 />
        </section>   
    </main>
  )
}


