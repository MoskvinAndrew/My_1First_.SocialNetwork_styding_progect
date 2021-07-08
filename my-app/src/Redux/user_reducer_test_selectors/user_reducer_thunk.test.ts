import {actions, FollowTC, UnFollowTC} from "./users-reducer";
import {FollowResponseType, usersAPI} from "../../api/usersApi";
import {ResultCodesEnum} from "../../types/typesForAuthAxiosResponse";

jest.mock("../../api/usersApi");
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getState = jest.fn();

beforeEach(()=>{
    dispatchMock.mockClear()
    getState.mockClear()
    usersAPIMock.Follow.mockClear()
    usersAPIMock.Unfollow.mockClear()

})

const result: FollowResponseType = {
    resultCode: ResultCodesEnum.success,
    messages: [],
    data: {}
}

usersAPIMock.Follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.Unfollow.mockReturnValue(Promise.resolve(result))

test('success Follow Thunk', async () => {
    const thunk = FollowTC(1)
    await thunk(dispatchMock,getState,{})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setTogleFollowingProgressAC(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followAC(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setTogleFollowingProgressAC(false, 1))


});

test('success UnFollow Thunk', async () => {
    const thunk = UnFollowTC(3)
    await thunk(dispatchMock,getState,{})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setTogleFollowingProgressAC(true, 3))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowAC(3))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setTogleFollowingProgressAC(false, 3))


})