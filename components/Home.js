import styles from "../styles/Home.module.css"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        <title>Home</title>
        </Head>
        <div className={styles.container}> 
        <h1>Comece agora a procurar seus pokémons!</h1>
        <Link href="/content">
            <button>Clicando aqui</button>
        </Link>
        <Image src="/images/home.jpg" width={400} height={300} />
        </div>
        </>
    )
}