import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

let decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'O que é React?',
                answer: 'React é uma biblioteca de javascript escrita pelos desenvolvedores do Facebook para criar componentes reutilizáveis ​​mais limpos'
            },
            {
                question: 'O que é estado em React?',
                answer: 'Estado é um objeto que determina o comportamento de um componente'
            },
        ]
    },
    Datastructures: {
        title: 'Data Structures',
        questions: [
            {
                question: 'What is an array in C?',
                answer: 'An array is a sequence of elements of similar datatype'
            },
            {
                question: 'What is a string?',
                answer: 'An string is a sequence of characters'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}