import styles from "../styles/Home.module.css"
import Nav from "./Nav"

export default function Layout({children}) {
    return(
        <div>
        <Nav />
        <div>
            <main>
             {children}   
            </main>

        </div>
        </div>
        
    )
}