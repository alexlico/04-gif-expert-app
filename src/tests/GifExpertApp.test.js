import {shallow} from 'enzyme'
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas sobre el componente <GifExpertApp/>', () => {
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot()
    })
   
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Cats', 'Dog']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
        
    })
    
})
