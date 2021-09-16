import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
import { database } from "../services/firebase";
import '../styles/room.scss'



type RoomParams = {
  id: string;
}


export function Room() {
  const {user} = useAuth()
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');
  const { title, questions } = useRoom(roomId)

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if(newQuestion.trim() ===''){
      return
    }

    if(!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false
    };

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="just ask logo" />
          <RoomCode code={params.id}/>
        </div>
      </header>

      <main className="content">
          <div className="room-title">
              <h1>Room {title}</h1>
              { questions.length > 0 && <span>{questions.length} question(s)</span>}
          </div>
          <form onSubmit={handleSendQuestion}>
              <textarea
                placeholder="What you would like to ask?"
                onChange={event => setNewQuestion(event.target.value)}
                value={newQuestion}
              />
            <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>To submit questions, <button>login</button>.</span>
            ) }
            <Button type="submit" disabled={!user}>Submit question</Button>
            </div> 
          </form>

          <div className="question-list">
          {questions.map(question => {
            return (
              <Question 
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
          </div>
      </main>
    </div>
  );
}
