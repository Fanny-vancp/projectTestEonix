import { incrementAction, decrementAction } from "./action";
import { INCREMENT, DECREMENT } from "./constant";

describe('Counter action', () => {
    it('should return the action with type INCREMENT', () => {
        expect(incrementAction().type).toBe(INCREMENT);
    })

    it('should return the action with type DECREMENT', () => {
        expect(decrementAction().type).toBe(DECREMENT);
    })
})