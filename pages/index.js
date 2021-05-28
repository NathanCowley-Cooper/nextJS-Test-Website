import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>User List | Home</title>
        <meta name ="keywords" content="user"/>
    </Head>
    <div>

      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc.</p>

      <Link href="/user">
        <a className={styles.btn}>See User Listing</a>
      </Link>
    </div>
  </>
  )
}
