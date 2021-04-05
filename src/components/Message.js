import toastr from "toastr"
/* Utils */
import history from "../utils/history"
import EventBus from "../utils/Eventbus/EventBus"

const Message = () => {
    toastr.options.escapeHtml = true;
    EventBus.addListener("login", ({ type, message, submessage }) => {
        if (type === 'loginSuccess') {
            toastr.clear()
            toastr.success(`Merhaba ${message}. Giriş Başarılı.`)
        }
        else if (type === 'unsuccessful') {
            toastr.clear()
            toastr.warning(message, submessage)
            localStorage.removeItem('Token')
            localStorage.removeItem('User')
            localStorage.removeItem('ContactList')
        }
    })
    EventBus.addListener("loading", ({ type, message, submessage }) => {
        if (type === 'loading') {
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


    /*  
        
        else if (type === 'registersuccess') {
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
        else if (type === 'UNAUTHORIZED') {
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
        else {
            toastr.warning(message, submessage)
        } */

}

export default Message