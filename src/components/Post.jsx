import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <>
        {/* cabecalho */}
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>

                        <img 
                        className={styles.avatar}
                        src="https://github.com/gustavobragaia.png" 
                        alt="Avatar" />

                        <div className={styles.authorInfo}>
                            <strong>Jane Cooper</strong>
                            <span>Dev Front End</span>
                        </div>

                    </div>

                    <time title="23 de junho ás 15:08" dateTime="2022-06-23 15:08">Publicado há 1h</time>
                </header>

                
                {/* coluna dir */}
                <div className={styles.content}>
                    <p>Fala Galera</p>
                    <p>Eu vou ser rico yeah</p>
                    <a href='#'>Travis Scott Hell Yeah</a>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea
                        placeholder='Deixe um comentário'
                    ></textarea>

                    <footer>
                        <button type='submit'>Comentar</button>
                    </footer>
                </form>
        
                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </article>
        </>
    )
}