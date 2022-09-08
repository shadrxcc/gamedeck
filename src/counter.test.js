import { counter } from "./counter";

const games = [{
    id:'1',
    name: 'Grand Theft Auto',
    genre: 'action'
},

{
    id: '2',
    name: 'God of War',
    genre: 'Action'        
},

{
    id: '3',
    name: 'Transformers',
    genre: 'Action'
},

{
    id: '4',
    name: 'Batman',
    genre: 'Action'
},

{
    id: '5',
    name: 'Justice League',
    genre: 'Action'
},

]

describe('Test count function', () => {
    test('returns total number of games', () => {
        expect(counter(games)).toBe(5);
    });
});
