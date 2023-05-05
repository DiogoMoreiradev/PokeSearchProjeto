import Image from "next/image"
import styles from "../styles/About.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"

export default function About() {
    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        <title>Sobre o projeto</title>
        </Head>
        <Navbar />
        <div className={styles.container}>
        <div className={styles.title}>
            <h1 className={styles.h1} >Como Funciona?</h1>
        </div>
        <div className={styles.container_about}>
            <p>O projeto funciona como uma <span>pokedex</span>, procure o <span>pokémon</span> que deseja scrollando a página, depois clique em <span>mais detalhes</span> para ver sobre aquele pokémon. </p>
            <Image src="/images/charizard.png" width={300} height={300}/>
        </div>
        <Footer />

        </div>
        </>
    )
}