import * as ActionTypes from '../action-types'
import Http from '../../Http'
import {storeService} from "../../services/storeService";

const user = {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null
};

const initialState = {
    isAuthenticated : false,
    isAdmin: false,
    user
};

const Auth = (state= initialState,{type,payload = null}) => {
    switch(type){
        case ActionTypes.AUTH_LOGIN:
            return authLogin(state,payload);
        case ActionTypes.AUTH_CHECK:
            return checkAuth(state);
        case ActionTypes.AUTH_LOGOUT:
            return logout(state);
        default:
            return state;
    }
};

const authLogin = (state,payload) => {
    
    if(!payload.success){
         return Object.assign({}, state, {
            isAuthenticated: false
        });
    }
    const jwtToken = payload.data.auth_token;
    payload.user = {
        id: payload.data.id,
        email: payload.data.email,
        name: payload.data.name
    };
    if(!!payload.user.admin){
        localStorage.setItem('is_admin',true);
    } else {
        localStorage.setItem('is_admin',false);
    }
    localStorage.setItem('jwt_token',jwtToken);
    Http.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    state = Object.assign({}, state, {
        isAuthenticated: true,
        isAdmin: localStorage.getItem('is_admin') === 'true',
        user
    });
    return state;
};

const checkAuth = (state) =>{
    state =Object.assign({},state,{
        isAuthenticated : !!localStorage.getItem('jwt_token'),
        isAdmin : localStorage.getItem('is_admin'),
    });
    if(state.isAuthenticated){
        Http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`;
    }
    return state;
};

const logout = (state) => {
    localStorage.removeItem('jwt_token');
    //localStorage.setItem('is_admin',false);
    state = Object.assign({},state,{
        isAuthenticated: false,
        isAdmin : false,
        user
    });

    storeService.logout()
    return state;
};

export default Auth;
