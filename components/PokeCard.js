import styles from "../styles/PokeCard.module.css"
import Link from "next/link";
import Image from "next/image"

export default function PokeCard({ pokemon }) {

    
    return (
        <>
        <div className={styles.card}>
        <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
        width="120" height="120" alt={pokemon.name} 
      />
        <h3>{pokemon.name}</h3>
        <button className={styles.button} ><Link href={`pokemon/${pokemon.id}`}>Ver detalhes</Link></button>
        </div>
        </>
    )
}