import { Biography } from "./components/Biography";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Posts } from "./components/Posts";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Team } from "./components/Team";

export function HomePage() {

    return (
        <>
        <Header />
        <Portfolio />
        <Services />
        <Team />
        <Biography />
        <Stats />
        <Posts />
        <ContactUs />
        <Footer />
        </>
    )
}