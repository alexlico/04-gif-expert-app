import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Prubas sobre <GifGridItem>', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/imagen.png';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('Debe tener un imagen con la url y el alt con el title', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
        
    })
    
})