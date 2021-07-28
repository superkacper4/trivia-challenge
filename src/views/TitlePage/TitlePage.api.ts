import { api } from '../../Router/routes'

export const getQuestions = (ammount: string, difficulty: string) => {
    fetch(`${api}amount=${ammount}&difficulty=${difficulty}&type=boolean`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => data)
        .catch((error) => {
            console.error('Error:', error);
            return error
        });
}