import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
    return ( 
        <>
        <Head>
            <title>User List | About</title>
            <meta name ="keywords" content="user"/>
        </Head>
        <div>
            <h1 className={styles.title}>About Page</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ipsum, arcu diam ac nunc.</p>
        </div>
        </>
     );
}
 
export default About;