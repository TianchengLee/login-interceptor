<template>
  <div class="home-container">
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">用户管理</el-menu-item>
          <el-menu-item index="2">商品管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="user-info" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        欢迎: {{ userInfo.username }}
        <el-button size="small" type="primary" @click="handleLogout">退出</el-button>
      </el-col>
    </el-row>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      userInfo: {}
    };
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (parseInt(key)) {
        case 1:
          this.$router.push('/users')
          break;
        case 2:
          break;
      }
    },
    handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      this.$message("退出成功!");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less">
.home-container {
  padding: 0 20px;
  .el-menu-demo {
    border: none;
  }
  .user-info {
    line-height: 61px;
    text-align: right;
  }
}
</style>