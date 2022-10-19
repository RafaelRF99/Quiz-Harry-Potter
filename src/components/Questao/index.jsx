import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import Perguntas from '../Perguntas';

import './Questao.css';


const Questao = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const numeroDeQuestoes = quizState.questoes[quizState.numeroDeQuestoes];

  const onSelecao = (pergunta) => {
    dispatch({
      type: "CHECK_PERGUNTA",
      payload: {answer: numeroDeQuestoes.answer, pergunta},
    });
  };

  return (
    <div className='questao'>
      <p className='status'>Pergunta {quizState.numeroDeQuestoes + 1} de {quizState.questoes.length}</p>
      <h1 className='quest-title'>{numeroDeQuestoes.question}</h1>
      <div className='options-container'>
        {numeroDeQuestoes.options.map((pergunta) => (
          <Perguntas pergunta={pergunta} key={pergunta} answer={numeroDeQuestoes.answer}
          selecaoQuest={() => onSelecao(pergunta)}/>
        ))}
      </div>
        <button onClick={() => dispatch({type: "CHANGE_QUEST"})}>Próximo</button>
    </div>
  )
}

export default Questao;