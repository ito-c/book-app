import { reactive } from '@nuxtjs/composition-api'

const useSignUp = () => {
  const formData = reactive({})

  return { formData }
}

export default useSignUp
