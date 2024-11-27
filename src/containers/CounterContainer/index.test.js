import { mapDispatchToProps } from "../CounterContainer/index";
import { mapStateToProps } from "../CounterContainer/index";
import { incrementAction, decrementAction } from "../../modules/Counter/action";
import { initialState } from "../../modules/Counter/reducer";

describe('CounterContainer test', () => {
    it('should transform state to props correctly', () => {
        const mockState = {
            homeContainer: {
                ...initialState,
                counter: 5,
            }
        };

        const props = mapStateToProps(mockState);
        expect(props.counter).toBe(5);
    })

    it('should transform actions to props correctly', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        props.onIncrement();
        expect(dispatch).toHaveBeenCalledWith(incrementAction());

        props.onDecrement();
        expect(dispatch).toHaveBeenCalledWith(decrementAction());
    })
})