import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return(
        <section className="App">
            <TwitterFollowCard isFollowing userName='Piwi'>
                Matias Villalon
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName='Vee'>
                Victoria Navarrete
            </TwitterFollowCard>
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




