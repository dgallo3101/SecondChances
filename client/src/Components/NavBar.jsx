import styles from './NavBar.module.css'


const NavBar = () => {

    return (
        <div className={styles.divNavBar}>
            <div>
                <h3 className={styles.h3}>SOBRE NOSOTROS</h3>
            </div>

            <div>
                <h3 className={styles.h3}>CÓMO AYUDAR</h3>
            </div>

            <div>
                <h3 className={styles.h3}>EVENTOS</h3>
            </div>

            <div>
                <h3 className={styles.h3}>SECOND CHANCES CLOSET</h3>
            </div>

            <div>
                <button>COMPRA AQUÍ</button>
            </div>
        </div>
    )
}

export default NavBar;