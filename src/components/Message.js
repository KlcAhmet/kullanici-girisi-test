import toastr from "toastr"
/* Utils */
import history from "../utils/history"

const Message = (param, text, subtext) => {
    toastr.options.escapeHtml = true;
    if (param === 'loginSuccess') {
        toastr.clear()
        toastr.success(`Merhaba ${text}. Giriş Başarılı.`)
    }
    else if (param === 'loading') {
        toastr.info(`Sunucudan haber bekleniyor`, null, {
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
    else if (param === 'unsuccessful') {
        toastr.clear()
        toastr.warning(text, subtext)
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        localStorage.removeItem('ContactList')
    }
    else if (param === 'registersuccess') {
        toastr.clear()
        toastr.success(text, "Mail adresinizden üyeliğinizi onaylamayı unutmayın. Giriş sayfasına yönlendiriliyorsunuz.", {
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
    else if (param === 'UNAUTHORIZED') {
        toastr.clear()
        toastr.warning(text, `${subtext} Oturum açmaya yönlendiriliyorsunuz`, {
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
        toastr.warning(text, subtext)
    }

}

export default Message