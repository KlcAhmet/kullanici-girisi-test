import EventBus from './EventBus'

export function Events(event, type, message) {
    if (event === 'login' && type === 'loginSuccess') EventBus.emit("login", { type: "loginSuccess", message: { message } });
}
