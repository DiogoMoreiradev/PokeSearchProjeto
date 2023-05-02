import styles from "../../styles/Pokemon.module.css"
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async() => {    // Faz o mapeamnto geral
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // retorna o params
  const paths = data.results.map((pokemon, index) => {  // O results vem da api
    return {
      params: {pokemonId: (index + 1).toString()},  // (pokemonId) tem que ser igual ao nome do arquivo
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async(context) => {   // Faz o mapeamento individual
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  }
}

export default function Pokemon({pokemon}) {
    return (
      <>
      <div className={styles.container}>
        <Link href="/content"><button className={styles.quit}>Voltar</button></Link>

        <div className={styles.container_poke}>
                <Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
              width="120" height="120" alt={pokemon.name} 
              />
            <h3>{pokemon.name}</h3>
        </div>
              <div className={styles.info}>
                <h3>Tipo:{pokemon.types.map((item, index) => ( 
                  <span 
                  key={index}
                  className={` ${styles.type} ${styles['type_' + item.type.name]} `}
                  >{item.type.name}</span>))}</h3>
                  <div className={styles.info_poke}>
                <h3>Altura: {pokemon.height * 10} cm</h3>
                <h3>Peso: {pokemon.weight / 10} kg</h3>
                  </div>
              </div>
      </div>
      </>
    )
}