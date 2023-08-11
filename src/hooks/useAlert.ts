import Swal from 'sweetalert2';

const useAlert = () => {

  const alertMixin = Swal.mixin({
    allowOutsideClick: false,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'OK',
    confirmButtonColor: '#003876',
    cancelButtonColor: '#ED232A',
    cancelButtonText: 'Cancelar',
    imageUrl: undefined,
    timer: undefined,
    customClass: '',
    backdrop: true,
    html: undefined,
    allowEscapeKey: true,
    inputPlaceholder: '',
    inputValue: '',
    showLoaderOnConfirm: false
  })

  const error = (title?: string, text?: string) => {
    return alertMixin.fire({
      title: title ?? 'Error',
      text: text ?? '',
      icon: 'error'
    });
  }

  const success = (title?: string, text?: string) => {
    return alertMixin.fire({
      title: title ?? 'Éxito',
      text: text ?? '',
      icon: 'success'
    });
  }

  const timerSuccess = (title?: string, text?: string) => {
    return alertMixin.fire({
      title: title ?? 'Éxito',
      text: text ?? '',
      icon: 'success',
      timer: 1500,
      position: 'top-end',
      showConfirmButton: false,
      backdrop: false
    });
  }

  const info = (title?: string, text?: string) => {
    return alertMixin.fire({
      title: title ?? 'Info',
      text: text ?? '',
      icon: 'info'
    });
  }

  return {
    error,
    success,
    info,
    timerSuccess
  }
}
export default useAlert;