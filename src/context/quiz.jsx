import { createContext, useReducer } from "react";
import questoes from '../data/questoes';

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questoes,
    numeroDeQuestoes: 0,
    score: 0,
    resposta: false,
};

const quizReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "REORDENAR_QUEST":
            const reordenarQuestao = questoes.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reordenarQuestao,
            };

        case "CHANGE_QUEST":
            const proximaQuest = state.numeroDeQuestoes + 1;
            let Fim = false;

            if (!questoes[proximaQuest]) {
                Fim = true;
            }

            return {
                ...state,
                numeroDeQuestoes: proximaQuest,
                gameStage: Fim ? STAGES[2] : state.gameStage,
            };

        case "REINICIAR":
            return initialState;

        case "CHECK_PERGUNTA":
            const answer = action.payload.answer;
            const option = action.payload.option;
            let respotaCorreta = 0;

            if(answer === option) respotaCorreta = 1;

            return {
                ...state,
                score: state.score + respotaCorreta,
                resposta: option,
            }

        default:
            return state;
    }
};

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};