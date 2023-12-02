import Hero from "../Hero";
import MostPopular from "./MostPopular";

function Home() {
    return (
        <>
            <Hero />
            <MostPopular />
        </>
    );
}

export { Home as Component };

export default Home;
