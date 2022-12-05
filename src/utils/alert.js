import Swal from 'sweetalert2'

const evaluateOption = (result, onConfirm, onClose) => {
  if (result.isConfirmed) {
    if (onConfirm) onConfirm()
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    if (onClose) onClose()
  }
}

class Alerts {
  success(message, action, title, acceptText) {
    Swal.fire({
      icon: 'success',
      title: title || 'Completado',
      html: message,
      focusConfirm: true,
      confirmButtonText: `${acceptText || 'Aceptar'}`,
    }).then(result => {
      // evaluateOption(result, action)
      console.log(result)
    })
  }
  error(message, action, title, acceptText) {
    Swal.fire({
      icon: 'error',
      title: title || 'Alerta',
      html: message,
      focusConfirm: true,
      confirmButtonText: `${acceptText || 'Aceptar'}`,
    }).then(result => {
      evaluateOption(result, action)
    })
  }
  warning(message) {
    notify({
      title: "Warning",
      text: message,
      type: 'warning'
    });
  }

  confirm(message, action, title, acceptText, cancelText) {
    Swal.fire({
      icon: 'warning',
      title: title || 'Confirmar',
      html: message,
      focusConfirm: true,
      showCancelButton: true,
      confirmButtonText: `${acceptText || 'Aceptar'}`,
      cancelButtonText: cancelText || 'Cancelar'
    }).then(result => {
      evaluateOption(result, action)
    })
  }
}

export default new Alerts();