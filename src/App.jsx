import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";




function App() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);


    return (
        <>
            <Header scroll={scroll} />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollTop scroll={scroll} />
        </>
    );
}

export default App;

