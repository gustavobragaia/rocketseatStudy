
import styles from './Comment.module.css'
import { TrashIcon, ThumbsUpIcon } from '@phosphor-icons/react'


export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/52480533?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Bragaia</strong>
                            <time title="23 de junho ás 15:08" dateTime="2022-06-23 15:08">Cerca de 2h</time>
                        </div>
                        <button title='Deletar comentário'>
                            <TrashIcon></TrashIcon>
                        </button>
                    </header>

                    <p>Conteudo do comentário</p>
                </div>

                <footer>
                    <ThumbsUpIcon></ThumbsUpIcon>
                    Aplaudir <span>28</span>
                </footer>
            </div>

        </div>
    )
}