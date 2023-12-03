import About from "./About";
import Hero from "./Hero";
import MostPopular from "./MostPopular";
import NewRelease from "./NewRelease";
import Platforms from "./Platforms";

function Home() {
    return (
        <main>
            <Hero />
            <MostPopular />
            <NewRelease />
            <About />
            <Platforms />
        </main>
    );
}

export { Home as Component };

export default Home;
