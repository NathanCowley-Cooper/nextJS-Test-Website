import Head from 'next/head'
import styles from '../../styles/Ninja.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {ninjas: data}
    }
}

const Ninjas = ( {ninjas} ) => {
    return ( 
    <>
        <Head>
            <title>User List | User Page Listing</title>
            <meta name ="keywords" content="user"/>
        </Head>
        <div>
            <h1>All Users</h1>

            {ninjas.map(ninja =>(
                <Link href={'user/' + ninja.id} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}

        </div> 
    </>
    );
}
 
export default Ninjas;