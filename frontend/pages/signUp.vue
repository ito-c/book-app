<template>
  <div class="signUp">
    <p>会員登録</p>
    <el-form
      ref="formRef"
      :rules="rules"
      :model="state.form.user"
      @validate="validate"
      @submit.native.prevent="submit"
    >
      <el-form-item prop="name" label="名前">
        <el-input
          v-model="state.form.user.name"
          placeholder="test"
          autocomplete="name"
          name="name"
        />
      </el-form-item>
      <el-form-item prop="email" label="メールアドレス">
        <el-input
          v-model="state.form.user.email"
          type="email"
          placeholder="example@web-package.jp"
          autocomplete="email"
          name="email"
        />
      </el-form-item>
      <el-form-item prop="password" label="パスワード">
        <el-input v-model="state.form.user.password" type="password" />
      </el-form-item>
      <el-form-item prop="password_confirmation" label="確認用パスワード">
        <el-input
          v-model="state.form.user.password_confirmation"
          type="password"
        />
      </el-form-item>
      <el-row class="buttons">
        <el-button
          :disabled="!state.form.canSubmit"
          type="primary"
          @click="submit"
        >
          会員登録する
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useSignUp from '@/frontend/composables/useSignUp'

export default defineComponent({
  setup() {
    const { formData } = useSignUp()

    return { formData }
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
