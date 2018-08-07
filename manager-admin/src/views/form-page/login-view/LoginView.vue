<template>
  <div class="login-view">
    <a-card title="登陆表单" class="card-wrapper">
      <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item label='Note' :labelCol="{ span: 5 }" :wrapperCol="{ span: 12 }" fieldDecoratorId="note" :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your note!' }]}">
          <a-input />
        </a-form-item>
        <a-form-item label='Gender' :labelCol="{ span: 5 }" :wrapperCol="{ span: 12 }" fieldDecoratorId="gender" :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select your gender!' }]}">
          <a-select placeholder='Select a option and change input text above' @change="this.handleSelectChange">
            <a-select-option value='male'>male</a-select-option>
            <a-select-option value='female'>female</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 12, offset: 5 }">
          <a-button type='primary' htmlType='submit'>
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card title="inline Login" class="card-wrapper">
      <a-form layout='inline' @submit="handleSubmit1" :autoFormCreate="(form)=>{this.form = form}">
        <template v-if="form">
        <a-form-item
          :validateStatus="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
          fieldDecoratorId="userName"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your username!' }]}"
        >
          <a-input placeholder='Username'>
            <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item
          :validateStatus="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
          fieldDecoratorId="password"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Password!' }]}"
        >
          <a-input type='password' placeholder='Password'>
            <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type='primary'
            htmlType='submit'
            :disabled="hasErrors(form.getFieldsError())"
          >
            Log in
          </a-button>
        </a-form-item>
</template>

</a-form>
    </a-card>
  </div>
</template>

<script>
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }
  export default {
    name: 'LoginView',
    data() {
      return {
        formLayout: 'horizontal',
        hasErrors,
        form: null,
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
          }
        })
      },
      handleSelectChange(value) {
        console.log(value)
        this.form.setFieldsValue({
          note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        })
      },
      userNameError() {
        const {
          getFieldError,
          isFieldTouched
        } = this.form
        return isFieldTouched('userName') && getFieldError('userName')
      },
      // Only show error after a field is touched.
      passwordError() {
        const {
          getFieldError,
          isFieldTouched
        } = this.form
        return isFieldTouched('password') && getFieldError('password')
      },
      handleSubmit1(e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
          }
        })
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .login-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>