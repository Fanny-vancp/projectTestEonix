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

    it('calls onIncrement props when "+" button is clicked', () => {
        const homeComponent = Home({
            onIncrement: mockIncrementProps, 
            onDecrement: mockDecrementProps, 
            counter : 0
        });

        const increaseButton = homeComponent.props.children[1];
        increaseButton.props.onClick();

        expect(mockIncrementProps).toHaveBeenCalled();
    })

    it('calls onIncrement props when "-" button is clicked', () => {
        const homeComponent = Home({
            onIncrement: mockIncrementProps, 
            onDecrement: mockDecrementProps, 
            counter : 0
        });

        const descreaseButton = homeComponent.props.children[2];
        descreaseButton.props.onClick();

        expect(mockDecrementProps).toHaveBeenCalled();
    })
})