import EventBus from './EventBus'

export function Events(event, type, message, submessage) {
    /* Login */
    if (event === 'login' && type === 'loginSuccess') EventBus.emit("login", { type: "loginSuccess", message: message });
    else if (event === 'login' && type === 'unsuccessful') EventBus.emit("login", { type: "unsuccessful", message: message });
    /* Loading */
    else if (event === 'loading' && type === 'loading') EventBus.emit("loading", { type: "loading", message: message });
}
