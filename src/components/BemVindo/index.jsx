import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import './BemVindo.css';

const BemVindo = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <section className="container">
            <h1 className="title">Quiz de Harry Potter</h1>
            <h3 className="sub-title">Seja Bem-Vindo!</h3>
            <p className="alert">Clique no botão abaixo para começar...</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Entrar</button>
        </section>
    )
}

export default BemVindo;