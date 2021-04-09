import toastr from "toastr"
/* Utils */
import history from "../utils/history"
import EventBus from "../utils/Eventbus/EventBus"
import consts from "../consts.js"

const Message = () => {
    toastr.options.escapeHtml = true;
    /* Response 200 */
    EventBus.addListener(consts.events.login, ({ type, message, submessage }) => {
        if (type === consts.events.types.loginSuccess) {
            toastr.clear()
            toastr.success(`Merhaba ${message}. Giriş Başarılı.`)
        }
        else if (type === consts.events.types.unsuccessful) {
            toastr.clear()
            toastr.warning(message, submessage)
            localStorage.removeItem('Token')
            localStorage.removeItem('User')
            localStorage.removeItem('ContactList')
        }
    })
    EventBus.addListener(consts.events.loading, ({ type, message, submessage }) => {
        if (type === consts.events.loading) {
            toastr.info(message, null, {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-full-width",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "10",
                "hideDuration": "1000",
                "timeOut": "20000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            })
        }
    })
    EventBus.addListener(consts.events.register, ({ type, message, submessage }) => {
        if (type === consts.events.types.registerSuccess) {
            toastr.clear()
            toastr.success(message, "Mail adresinizden üyeliğinizi onaylamayı unutmayın. Giriş sayfasına yönlendiriliyorsunuz.", {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "4000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            })
            setTimeout(function () {
                history.push("/login")
            }, 4000);
        }
    })

    /* Response Error */
    EventBus.addListener(consts.events.unauthorized, ({ type, message, submessage }) => {
        if (type === consts.events.types.unauthorized) {
            toastr.clear()
            toastr.warning(message, `${submessage} Oturum açmaya yönlendiriliyorsunuz`, {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-full-width",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            })
            localStorage.removeItem('User')
            localStorage.removeItem('Token')
            localStorage.removeItem('ContactList')
            setTimeout(function () {
                window.location = "/login"
            }, 4000);
        }
    })
    EventBus.addListener(consts.events.error, ({ type, message, submessage }) => {
        if (type === '400') {
            toastr.warning("Hata kodu: 400", message)
        }
        else if (type === '500') {
            toastr.warning("Hata kodu: 500", message)
        }
        else {
            toastr.clear()
            toastr.warning(message)
        }

    })
}

export default Message