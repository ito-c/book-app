import { reactive } from '@nuxtjs/composition-api'

const useSignUp = () => {
  const formData = reactive({
    user: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  const isFormValid = (formRef) => {
    return formRef.value.fields.every((f) => {
      return f.validateState === 'success'
    })
  }

  const submit = () => {
    console.log('submit')
  }

  return { formData, isFormValid, submit }
}

export default useSignUp
