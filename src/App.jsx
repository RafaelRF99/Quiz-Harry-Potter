//REACT, COMPONENTES, CSS
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import BemVindo from './components/BemVindo';
import Questao from './components/Questao';
import FimDeJogo from './components/FimDeJogo';

import './App.css';

function App() {
  const [quizState, dispatch ] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDENAR_QUEST"})
  }, [])

  return (
    <div className='App'>
      {quizState.gameStage === "Start" && <BemVindo />}
      {quizState.gameStage === "Playing" && <Questao />}
      {quizState.gameStage === "End" && <FimDeJogo />}
      
      
    </div>
  )
}

export default App;