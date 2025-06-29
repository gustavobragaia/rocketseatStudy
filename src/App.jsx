import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/sidebar'
import { Post } from './components/Post'

function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post></Post>
        </main>
      </div>
    </>
  )
}

export default App
