import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home () {
    return  (
        <div>
            <aside>
                <img src={illustrationImg} alt="Q&A illustration" />
                <strong>Create Q&amp;A live rooms</strong>
                <p>Ask your audience questions in real time</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="just ask logo" />
                    <button>
                    <img src={googleIconImg} alt="google account logo" />
                    Create rooms with your Google account
                    </button>
                    <div> Or enter in one existent room</div>
                    <form>
                        <input type="text"
                        placeholder="Type the Room's code"
                        />
                        <button type="submit">
                        Enter in the room
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}