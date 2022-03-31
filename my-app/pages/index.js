import Head from 'next/head'
import Image from 'next/image'
import { client } from '../client'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const {recipes} = props
  console.log(recipes)
  return(
    <>
    <h1>App</h1>

    
    </>
    )
}


Home.getInitialProps = async () => {
  return { recipes: await client.fetch(`*[_type == 'recipe']`)}
}
