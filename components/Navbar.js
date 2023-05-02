import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

export default function Navbar() {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap" rel="stylesheet" />
        </Head>
        <div className={styles.nav}>
            <Image src="/images/pokeball.png" alt="Pokebola logo" width={50} height={50}/><h3>PokeSearch</h3>
        <ul>
            <li><Link href="/"><span>Ho</span>me</Link></li>
            <li><Link href="/content"><span>Buscar</span> pokémon</Link></li>
            <li><Link href="/about"><span>Sobre o</span> projeto</Link></li>
        </ul>
        </div>
        </>
    )
}