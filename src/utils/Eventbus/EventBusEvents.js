import EventBus from './EventBus'

export function Events(event, type, message) {
    if (event === 'login' && type === 'success') EventBus.emit("login", { type: "success", message: { message } });
}
