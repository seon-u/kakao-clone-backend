// Auth
const AUTH = '/auth';
const JOIN = '/join';
const DUPLICATE_CHECK = '/duplicateCheck';
const LOGIN = '/login';
const LOGOUT = '/logout';

// User
const USER = '/user';
const EDIT_USER = `/edit/:id`;
const ME = '/me/:username';
const USER_DETAIL = '/:username';
const GET_FRIENDS = '/friends';
const ADD_FRIEND = '/addFriend';
const DELETE_FRIEND = '/deleteFrined';

// Room
const ROOM = '/room';
const ROOMS = '/rooms';
const ADD_ROOM = '/addRoom';
const EDIT_ROOM = '/editRoom';
const DELETE_ROOM = '/deleteRoom';
const GET_ROOM = '/:id';

// Chat
const CHAT = '/chat';
const CHATS = '/chats';

export const authRoute = {
    auth : AUTH,
    join : JOIN,
    duplicateCheck : DUPLICATE_CHECK,
    login : LOGIN,
    logout : LOGOUT
};

export const userRoute = {
    user : USER,
    editUser : EDIT_USER,
    me : ME,
    userDetail : USER_DETAIL,
    getFreinds : GET_FRIENDS,
    addFriend : ADD_FRIEND,
    deleteFrined : DELETE_FRIEND
};

export const roomRoute = {
    room : ROOM,
    rooms : ROOMS,
    addRoom : ADD_ROOM,
    editRoom : EDIT_ROOM,
    deleteRoom : DELETE_ROOM,
    getRoom : GET_ROOM
};

export const chatRoute = {
    chat : CHAT,
    chats : CHATS
};