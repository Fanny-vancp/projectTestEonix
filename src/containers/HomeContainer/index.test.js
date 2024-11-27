import { mapStateToProps } from "../HomeContainer/index";
import { initialState } from "../../modules/Counter/reducer";

describe('HomeContainer test', () => {
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
})