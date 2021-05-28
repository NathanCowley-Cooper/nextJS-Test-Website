import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return ( 
            <nav>
                <Link href="/">
                    <div className="logo">
                        <Image src="/logo.png" width={128} height={77} alt="Logo"/>
                    </div>
                </Link>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/user"><a>User Listing</a></Link>

            </nav> 
    );
}
 
export default NavBar;