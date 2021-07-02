<template>
  <div class="signUp">
    <p>会員登録</p>
    <el-form ref="formRef" :rules="rules" :model="formData.user">
      <el-form-item prop="name" label="名前">
        <el-input
          v-model="formData.user.name"
          placeholder="test"
          autocomplete="name"
          name="name"
        />
      </el-form-item>
      <el-form-item prop="email" label="メールアドレス">
        <el-input
          v-model="formData.user.email"
          type="email"
          placeholder="example@example.com"
          autocomplete="email"
          name="email"
        />
      </el-form-item>
      <el-form-item prop="password" label="パスワード">
        <el-input v-model="formData.user.password" type="password" />
      </el-form-item>
      <el-form-item prop="password_confirmation" label="確認用パスワード">
        <el-input
          v-model="formData.user.password_confirmation"
          type="password"
        />
      </el-form-item>
      <el-row class="buttons">
        <el-button type="primary" @click="submitHandle">
          会員登録する
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { Message } from 'element-ui'
import useSignUp from '../composables/signUp'

export default defineComponent({
  setup() {
    const formRef = ref()
    const { formData, submit, isFormValid } = useSignUp()

    const validatePasswordConfirm = (rule, value, callback) => {
      if (value !== formData.user.password) {
        callback(new Error('パスワードと一致しません'))
      } else {
        callback()
      }
    }

    const rules = {
      name: [
        {
          required: true,
          message: 'お名前を入力してください',
          trigger: 'blur',
        },
        {
          max: 30,
          message: '30文字以内で入力してください',
          trigger: 'blur',
        },
      ],
      email: [
        {
          required: true,
          message: 'メールアドレスを入力してください',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: '正しい形式のメールアドレスを入力してください',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'パスワードを入力してください',
          trigger: 'blur',
        },
        {
          min: 8,
          message: '8文字以上で入力してください',
          trigger: 'blur',
        },
        {
          max: 128,
          message: '128文字以内で入力してください',
          trigger: 'blur',
        },
      ],
      password_confirmation: [
        {
          required: true,
          message: '確認用パスワードを入力してください',
          trigger: 'blur',
        },
        { validator: validatePasswordConfirm, trigger: 'blur' },
      ],
    }

    const submitHandle = () => {
      formRef.value.validate()

      if (!isFormValid(formRef)) {
        Message.error('失敗')

        return
      }

      submit()
    }

    // formRef.value.validate()が呼ばれたらvalidateイベント発火
    // const test = () => {
    //   console.log('test')
    // }

    return { formData, rules, formRef, submitHandle, isFormValid }
  },
})
</script>

<style></style>
