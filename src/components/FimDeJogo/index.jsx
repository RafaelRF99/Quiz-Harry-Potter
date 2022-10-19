import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import './FimDeJogo.css'

const FimDeJogo = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
        <h2 className='mrg-fim'>FimDeJogo</h2>
        <h3 className='mrg-fim' >Você acertou {quizState.score} perguntas de {quizState.questoes.length}</h3>
        <button onClick={() => dispatch({type: "REINICIAR"})}>Reiniciar</button>
    </div>
    
  )
}

export default FimDeJogo;