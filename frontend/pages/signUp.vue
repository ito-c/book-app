<template>
  <div class="signUp">
    <p>会員登録</p>
    <el-form
      ref="formRef"
      :rules="rules"
      :model="formData.user"
      @validate="validate"
      @submit.native.prevent="submit"
    >
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
        <el-input v-model="formData.password_confirmation" type="password" />
      </el-form-item>
      <el-row class="buttons">
        <el-button type="primary" @click="submit">会員登録する</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useSignUp from '@/frontend/composables/useSignUp'

export default defineComponent({
  setup() {
    const formRef = ref()
    const { formData } = useSignUp()

    const rules = {
      name: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'change',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'change',
        },
      ],
      email: [{}],
      password: [{}],
      password_confirmation: [{}],
    }

    return { formData, rules, formRef }
  },
})
</script>

<style scoped lang="scss">
.signUp {
}

// SP
@media (max-width: 960px) {
}

// PC
@media (min-width: 961px) {
}
</style>
