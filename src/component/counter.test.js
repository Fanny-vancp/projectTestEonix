import Counter from './counter';

describe('Counter Component', () =>{
    const mockIncrementProps = jest.fn();
    const mockDecrementProps = jest.fn();

    it('Render Counter component correctly with counter props', () => {
        const counterComponent = Counter({
            onIncrement: mockIncrementProps, 
            onDecrement: mockDecrementProps, 
            counter : 5
        });

        expect(counterComponent.props.children[1].props.children).toBe(5);
    })

    it('calls onIncrement props when "+" button is clicked', () => {
        const counterComponent = Counter({
            onIncrement: mockIncrementProps, 
            onDecrement: mockDecrementProps, 
            counter : 0
        });

        const increaseButton = counterComponent.props.children[0];
        increaseButton.props.onClick();

        expect(mockIncrementProps).toHaveBeenCalled();
    })

    it('calls onIncrement props when "-" button is clicked', () => {
        const counterComponent = Counter({
            onIncrement: mockIncrementProps, 
            onDecrement: mockDecrementProps, 
            counter : 0
        });

        const descreaseButton = counterComponent.props.children[2];
        descreaseButton.props.onClick();

        expect(mockDecrementProps).toHaveBeenCalled();
    })
})