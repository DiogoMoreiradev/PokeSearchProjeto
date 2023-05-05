
 import styles from '../styles/Content.module.css'
 import PokeCard from '../components/PokeCard'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

 export async function getStaticProps() {
   const maxPokemons = 70;
   const api = "https://pokeapi.co/api/v2/pokemon/"
   const res = await fetch(`${api}/?limit=${maxPokemons}`);
   const data = await res.json()

   data.results.forEach((item, index) => {                 
     item.id = index + 1;    
   })
   return {
     props: {
       pokemons: data.results,
     },
   }
}

 export default function Home({pokemons}) {
   return (
     <> 
     <Navbar />
       <div className={styles.container}>
         {pokemons.map((pokemon) => (
           <PokeCard key={pokemon.id} pokemon={pokemon} />
         ))}
         </div>
         <Footer />
     </>    
   )
 }
