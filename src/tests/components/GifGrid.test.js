import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre el componente <GifGrid/>', () => {
    const category = 'Goku';

    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe mostrar los elementos de imagenes cuando se cargan del useFetchGifs', () => {
        const images = [{
            id: 86876354,
            url: 'https://localhost/image.png',
            title: 'Esto es un titulo'
        }];
        useFetchGifs.mockReturnValue({
            data: images,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(images.length)
    
    })
})
