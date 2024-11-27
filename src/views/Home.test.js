import Home from './Home';

describe('Home Component', () =>{
    const mockIncrementProps = jest.fn();
    const mockDecrementProps = jest.fn();

    it('Render Home component correctly with counter props', () => {
        const homeComponent = Home({
            onIncrement: mockIncrementProps, 
            onDecrement: mockDecrementProps, 
            counter : 5
        });

        expect(homeComponent.props.children[0].props.children[1]).toBe(5);
    })
})