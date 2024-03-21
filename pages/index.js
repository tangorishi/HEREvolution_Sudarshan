import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar";
import HeaderTab from "../components/header_tab";
import SearchBar from "../components/search_bar";
export default function Home() {
    return (
        <>
            <Navbar/>

            <div className="h-[26rem] w-full bg-primary text-white pt-24">
                <div className="p-2 w-full max-w-7xl mx-auto flex gap-2 h-12">
                    <HeaderTab title="Places" active={true}/>
                    <HeaderTab title="Hotels"/>
                    <HeaderTab title="Rentals"/>
                    <HeaderTab title="Attractions"/>
                </div>
                <div className="h-20"/>
                <div className="p-2 w-full max-w-7xl mx-auto">
                    <div className="poppins text-5xl font-bold">Explore Beyond Borders</div>
                    <div className="text-2xl mt-2 font-medium">Your Gateway to Adventures!</div>
                </div>
            </div>

            <SearchBar/>


        </>
    )
}
