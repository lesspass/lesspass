var toastr = require('toastr');
require('toastr/build/toastr.min.css');

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

module.exports = {
    error(message){
        toastr.error(message);
    },
    success(message){
        toastr.success(message);
    },
    warning(message){
        toastr.warning(message);
    },
    clear(){
        toastr.clear();
    }
};
