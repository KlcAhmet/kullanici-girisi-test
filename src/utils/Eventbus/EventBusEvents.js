import EventBus from './EventBus'
import consts from '../../consts.js'
export function Events(event, type, message, submessage) {
    // RESPONSE 200
    /* Login */
    if (event === consts.events.login && type === consts.events.types.loginSuccess) EventBus.emit(consts.events.login, { type: consts.events.types.loginSuccess, message: message });
    else if (event === consts.events.login && type === consts.events.types.unsuccessful) EventBus.emit(consts.events.login, { type: consts.events.types.unsuccessful, message: message });
    /* Loading */
    else if (event === consts.events.loading && type === consts.events.types.loading) EventBus.emit(consts.events.loading, { type: consts.events.types.loading, message: message });
    /* Register */
    else if (event === consts.events.register && type === consts.events.types.registerSuccess) EventBus.emit(consts.events.register, { type: consts.events.types.registerSuccess, message: message });

    // RESPONSE ERROR
    else if (event === consts.events.error) EventBus.emit(consts.events.error, { type: type, message: message });
    else if (event === consts.events.unauthorized && type === consts.events.types.unauthorized) EventBus.emit(consts.events.unauthorized, { type: consts.events.types.unauthorized, message: message, submessage: submessage });
}
