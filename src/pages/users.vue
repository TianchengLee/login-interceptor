<template>
  <div class="users-container">
    <el-table stripe :data="users" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="role_name" label="角色"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button
            :type="scope.row.mg_state ? 'success' : 'danger'"
            size="small"
          >{{scope.row.mg_state ? '启用' : '禁用'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUsers } from "../api";
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      // const token = localStorage.getItem("token");
      getUsers(1, 10).then(res => {
        console.log(res);
        if (res.data.meta.status === 200) {
          this.users = res.data.data.users;
        } else if (res.data.meta.status === 400) {
          this.$message(res.data.meta.msg);
        }
      });
    }
  }
};
</script>

<style lang="less">
.users-container {
  .cell {
    text-align: center;
  }
}
</style>