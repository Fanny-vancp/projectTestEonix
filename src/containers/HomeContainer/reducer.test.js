import homeContainerReducer, { initialState } from "./reducer";
import { INCREMENT, DECREMENT } from "./constant";

describe('homeContainerReducer fonction', () => {
    it('should increment counter when action is INCREMENT', () => {
        const state = homeContainerReducer(initialState, { type: INCREMENT });
        expect(state.counter).toBe(1);
    });

    it('should decrement counter when action is DECREMENT', () => {
        const state = homeContainerReducer({counter: 2}, { type: DECREMENT });
        expect(state.counter).toBe(1);
    });

    it('should not decrement below 0', () => {
        const state = homeContainerReducer({counter: 0}, { type: DECREMENT });
        expect(state.counter).toBe(0);
    })
})