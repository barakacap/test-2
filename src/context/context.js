import React from 'react';

// set the defaults
const sTimer = React.createContext({
    showTimer: true,
    setShowTimer: () => {}
});

export default sTimer;
