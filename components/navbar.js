import {useEffect} from "react";

export default function Navbar() {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            alert("Scrolled")
        });

    }, []);
    return <header
        className="sticky top-0 w-full shadow-sm z-[999] backdrop-blur transition-colors dark:border-slate-50/[0.05] border-slate-900/[0.05] border-b-2 p-2 Component_mainHeader__N49Wn bg-primary">
        <div
            className="p-4 w-full h-full max-w-7xl mx-auto justify-between flex items-center flex-row poppins">
            <span className="samarkan text-5xl text-white">Sudarshan</span>
        </div>
    </header>
}

