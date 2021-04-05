import EventBus from './EventBus'

export function Events(event, type, message, submessage) {
    // RESPONSE 200
    /* Login */
    if (event === 'login' && type === 'loginSuccess') EventBus.emit("login", { type: "loginSuccess", message: message });
    else if (event === 'login' && type === 'unsuccessful') EventBus.emit("login", { type: "unsuccessful", message: message });
    /* Loading */
    else if (event === 'loading' && type === 'loading') EventBus.emit("loading", { type: "loading", message: message });
    /* Register */
    else if (event === 'register' && type === 'registersuccess') EventBus.emit("register", { type: "registersuccess", message: message });

    // RESPONSE ERROR
    else if (event === 'error') EventBus.emit("error", { type: type, message: message });
    else if (event === 'UNAUTHORIZED' && type === 'UNAUTHORIZED') EventBus.emit("UNAUTHORIZED", { type: "UNAUTHORIZED", message: message, submessage: submessage });
}
