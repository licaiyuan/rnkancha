import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({});
var initState = {
	dlzhxx: 'xcxzc',

}
const reducer = (state, action) => {
	switch (action.type) {
		case 'login':
			console.log(action.zhxx)
			console.log(state)
			// state.meauitem=action.item
			return { ...state, dlzhxx: action.zhxx };
		default:
			return state;
	}
};

export const Color = props => {
	const [color, dispatch] = useReducer(reducer, initState);
	return <ColorContext.Provider value={{ color, dispatch }}>{props.children}</ColorContext.Provider>;
};
