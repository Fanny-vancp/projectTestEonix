import Home from './Home';

describe('Home Component', () =>{
    it('Render Home component correctly with counter props', () => {
        const homeComponent = Home({
            onIncrement: jest.fn(), 
            onDecrement: jest.fn(), 
            counter : 5
        });

        expect(homeComponent.props.children[0].props.children[1]).toBe(5);
    })

    /*it('It should increase number correctly', () => {

    })

    it('It should descrease number correctly', () => {
        
    })*/
})