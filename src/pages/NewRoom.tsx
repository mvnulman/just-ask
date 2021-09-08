import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'


import '../styles/auth.scss'


export function NewRoom () {
 const { user } = useAuth()
 const [newRoom, setNewRoom] = useState('');

async function handleCreateRoom (event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
        return
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id,
    })
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
                    <h2>Create a new room</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                        type="text"
                        placeholder="Room's name"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
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