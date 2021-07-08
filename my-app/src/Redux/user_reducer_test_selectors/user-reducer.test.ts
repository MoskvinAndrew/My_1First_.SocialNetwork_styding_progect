import usersReducer, {actions, initialStateType} from "./users-reducer";

let state:initialStateType

beforeEach(()=>{
     state = {
        users: [{
            id: 0,
            fullName: 'Andrew',
            followed: false,
            photoUrl: '',
            location: {city: '', country: ''},
            status: ''
        },{
            id: 1,
            fullName: 'Dima',
            followed: false,
            photoUrl: '',
            location: {city: '', country: ''},
            status: ''
        },{
            id: 2,
            fullName: 'Jenya',
            followed: true,
            photoUrl: '',
            location: {city: '', country: ''},
            status: ''
        },{
            id: 3,
            fullName: 'Misha',
            followed: true,
            photoUrl: '',
            location: {city: '', country: ''},
            status: ''
        }],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        disableButtons: []
    }
})

test('followAC works properly', () => {

    const newState = usersReducer(state,actions.followAC(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});
test('unfollowAC works properly', () => {

    const newState = usersReducer(state,actions.unfollowAC(2))

    expect(newState.users[3].followed).toBeTruthy();
    expect(newState.users[2].followed).toBeFalsy();
});