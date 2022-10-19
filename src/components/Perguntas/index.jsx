import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './Perguntas.css'

const Perguntas = ({pergunta, selecaoQuest, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div onClick={() => selecaoQuest()}>
        <p className='frase'>{pergunta}</p>
    </div>
  )
}

export default Perguntas;