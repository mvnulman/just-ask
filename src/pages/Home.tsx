import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'


export function Home () {
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
                    <button className="create-room">
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