export const loadState = () => {
    try {
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
        console.dir(state);

        if (localStorage.getItem(Object.keys(state)) === null) {
            const serialState = JSON.stringify(state);
            localStorage.setItem(Object.keys(state), serialState);
        }
        else {
            if (Object.keys(state)[0] === 'User') {
                const serialState = JSON.stringify(state);
                localStorage.setItem(Object.keys(state), serialState);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
