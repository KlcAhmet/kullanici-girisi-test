export const loadState = () => {
    try {
        console.log(Object.keys(localStorage));
        const serialState = localStorage.getItem();
        if (serialState === null) {
            return undefined;
        }
        return JSON.parse(serialState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        if (localStorage.getItem(Object.keys(state)) === null) {
            const serialState = JSON.stringify(state);
            localStorage.setItem(Object.keys(state), serialState);
        }
        else {
            if (Object.keys(state)[0] === 'User') {
                const serialState = JSON.stringify(state);
                localStorage.setItem(Object.keys(state), serialState);
            }
            if (Object.keys(state)[0] === 'ContactList') {
                const serialState = JSON.stringify(state);
                localStorage.setItem(Object.keys(state), serialState);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
