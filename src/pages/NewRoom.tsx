import { Link } from 'react-router-dom'


import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
// import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'


export function NewRoom () {
    return  (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Q&A illustration" />
                <strong>Create Q&amp;A live rooms</strong>
                <p>Ask your audience questions in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="just ask logo" />
                    <h2>Create a new room</h2>
                    <form>
                        <input type="text"
                        placeholder="Room's name"
                        />
                        <Button type="submit">
                        Create Room
                        </Button>
                    </form>
                    <p>
                    Want to join an existing room? <Link to="/">Click here</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}