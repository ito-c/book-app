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

  const isFormValid = () => {}

  const submit = () => {}

  return { formData }
}

export default useSignUp
