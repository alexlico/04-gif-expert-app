import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory';
describe('Pruebas sobre el componente <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('Debe mostrar el componente correctamente', () => {    
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe cambiar el contenido de la caja de texto', () => {    
        const value = 'Goku';
        wrapper.find('input').simulate('change', { target:{value} } )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('input').prop('value').trim()).toBe(value)    
    })

    test('No debe enviar la informacion del submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Goku';

        wrapper.find('input').simulate('change', { target: {value} });
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value').trim()).toBe('');

    })
})
