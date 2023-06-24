import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){

    const format = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard 
            formatUserName = {format}
            userName='F'
            name = "Matias Villalon"

            />

            <TwitterFollowCard 
            formatUserName = {format}
            userName='Vee'
            name = "Victoria Navarrete"
            />

           
        </section>
    
    )
}

export function Mapa(){
    return(
        <div>
            <h1>Twitter Card</h1>
            <p>Cola cola de 2 litros</p>
        </div>
    
    )
}




