
import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { NavBar } from "./components/NavBar/NavBar"
import { Proyects } from "./components/Proyects/Proyects"

function App() {
 
  return(
    <div className={styles.App}>
    <NavBar />
    <Hero />
    <About />
    <Experience/>
    <Proyects/>
    <Contact/>
    </div>
  )
}

export default App
