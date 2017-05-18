<template lang="html">
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Simple CMS</el-menu-item>
      <div class="auth_button" v-show="statusLogin == null">
        <el-menu-item index="1" v-on:click="signupdialog">SignUp</el-menu-item>
        <el-menu-item index="1" v-on:click="signindialog">SignIn</el-menu-item>
      </div>
      <div v-show="statusLogin" style="float:right;">
        <el-menu-item index="1">My Article</el-menu-item>
        <el-menu-item index="2" v-on:click="signout">SignOut</el-menu-item>
      </div>
    </el-menu>
    <el-dialog title="Signup" v-model="dialogFormVisibleSignup">
      <el-form :model="form_signup">
        <el-form-item>
          <el-input v-model="form_signup.name" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.email" placeholder="Email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignup = false">Cancel</el-button>
        <el-button type="primary" v-on:click="signUp(form_signup);dialogFormVisibleSignup = false;notification()">Register</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Signin" v-model="dialogFormVisibleSignin">
      <el-form :model="form_signin">
        <el-form-item>
          <el-input v-model="form_signin.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signin.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignin = false">Cancel</el-button>
        <el-button type="primary" v-on:click="signIn(form_signin);dialogFormVisibleSignin = false;">Login</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
      return {
        activeIndex: '1',
        form_signin: {
          username: '',
          password: ''
        },
        form_signup: {
          name: '',
          username: '',
          password: '',
          email: ''
        },
        dialogFormVisibleSignin: false,
        dialogFormVisibleSignup: false
      }
    },
    methods: {
      signindialog() {
        this.dialogFormVisibleSignin = true
      },
      signupdialog() {
        this.dialogFormVisibleSignup = true
      },
      signout() {
        window.localStorage.clear()
        window.location = "/"
      },
      notification() {
        alert('Registration success, you must login first!')
        // this.$notify({
        //   title: 'Success',
        //   message: 'Registration success, you must login first!',
        //   type: 'success'
        // })
      },
      ...mapActions([
        "signIn",
        "signUp"
      ])
    },
    computed: {
      ...mapGetters({
        statusLogin: "isLogin"
      })
    }
}
</script>
  .auth_button{
    float: right;
  }
  .el-select {
    width: 100%;
  }
  .el-menu{
    margin-top: -50px;
    border: 1px solid #d9d9d9;
    background-color: #fff
  }
<style lang="css">
</style>
