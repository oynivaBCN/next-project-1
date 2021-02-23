import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">News</Link>
                </li>
                <li>
                    <Link href="/image">Image</Link>
                </li>
                <li>
                    <Link href="/psiousNews">PsiousNews</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav