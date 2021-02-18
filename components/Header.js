import headerSyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div >
            <h1 className={headerSyles.title}>
                NextProject WebDev News
            </h1>
        </div>
    )
}

export default Header