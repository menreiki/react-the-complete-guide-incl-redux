import React from 'react';

// set default values for better auto-completion in IDE
const authContext = React.createContext({
	authenticated: false,
	login: () => {},
});

export default authContext;
