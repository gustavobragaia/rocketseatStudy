import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Cover Image" 
            />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://github.com/gustavobragaia.png" 
                    alt="Avatar" />
                
                <div className={styles.authorInfo}>
                    <strong>Diego Fernandes</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}