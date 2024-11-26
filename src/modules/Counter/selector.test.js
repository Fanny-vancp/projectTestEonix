import { makeSelectHomeContainerCounter } from "./selector";
import { initialState } from "./reducer";

describe('selector counter test', () => {
    const selector = makeSelectHomeContainerCounter();

    it('should return the counter value from homeContainer state', () => {
        const mockState = {
            homeContainer: { 
                counter : 5 
            },
        };

        expect(selector(mockState)).toBe(5);
    });

    it('should return the counter value from the initial state if homeContainer does not exist', () => {
        const mockState = {};
        expect(selector(mockState)).toBe(initialState.counter);
    })
})