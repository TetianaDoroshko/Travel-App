const saveLocalStorage = token => {
    localStorage.setItem('travel-app', token);
};

const removeLocalStorage = () => {
    localStorage.removeItem('travel-app');
};

const getLocalStorage = () => {
    localStorage.getItem('travel-app');
};

export { saveLocalStorage, removeLocalStorage, getLocalStorage };
