import toastr from "toastr"

const Message = (param, text, subtext) => {
    /*  toastr.options.escapeHtml = true; */
    if (param === 'loginSuccess') {
        toastr.success(`Merhaba ${text}. Giriş Başarılı.`)
        /*   return (
              toastr["success"](
                  <div>
                      <p>test</p>
                  </div>
              )
          ) */
    }
    else if (param === 'unsuccessful') {
        toastr.warning(text, subtext)
    }
    else if (param === 'UNAUTHORIZED') {
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
    }
    else {
        toastr.warning(text, subtext)
    }

}

export default Message