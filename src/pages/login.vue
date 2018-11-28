<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" @keyup.enter.native="handleLogin"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "../api";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      login(this.form.username, this.form.password).then(res => {
        if (res.data.meta.status === 200) {
          this.$message("登陆成功!");
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("userInfo", JSON.stringify(res.data.data));
          this.$router.push("/home");
        } else {
          this.$message("登录失败!请重试!");
        }
      });
    }
  }
};
</script>

<style lang="less">
.login-container {
  width: 35%;
  margin: 15% auto;
  .login-btn {
    width: 100%;
  }
}
</style>