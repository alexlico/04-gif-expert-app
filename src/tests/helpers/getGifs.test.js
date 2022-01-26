import { getGifs } from "../../helpers/getGifs"

describe('Prubas sobre la funcion getGifs', () => {
    test('Debe traer 10 elementos', async() => {
        const category = 'Goku';
        const images = await getGifs(category);
        expect(images.length).toBe(10);
    })
   
    test('Debe traer 0 elementos', async() => {
        const category = '';
        const images = await getGifs(category);
        expect(images.length).toBe(0);
    })
    
})
