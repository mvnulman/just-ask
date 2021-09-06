import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

import '../styles/auth.scss'


export function Home () {

    //Used to create the navigation between the pages
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth()


    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new');
    }

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
                    <button onClick={handleCreateRoom} className="create-room">
                    <img src={googleIconImg} alt="google account logo" />
                    Create your room with Google
                    </button>
                    <div className="separator"> Or enter in one existent room</div>
                    <form>
                        <input type="text"
                        placeholder="Type the Room's code"
                        />
                        <Button type="submit">
                        Enter in the room
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}