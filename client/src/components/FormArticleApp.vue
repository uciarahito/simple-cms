<template lang="html">
  <el-row :gutter="20">
    <el-col :span="2"><div class="grid-content"></div></el-col>
    <el-col :span="20">
      <div class="grid-content bg-purple">
        <div style="margin-top: 15px;">
          <el-input placeholder="Please input" v-show="statusLogin">
            <el-button slot="append" icon="plus" v-on:click="addArticles"></el-button>
          </el-input>
          <el-input
            placeholder="Please input"
             v-show="statusLogin == null">
            <el-button slot="append" icon="plus" v-on:click="addArticles" :disabled="true"></el-button>
          </el-input>
        </div>
      </div>
    </el-col>

    <el-dialog title="Add New Article" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="title" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="content" :label-width="formLabelWidth">
          <el-input v-model="form.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="category" :label-width="formLabelWidth">
          <el-input v-model="form.category" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Create</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      add_article: {
        title: '',
        content: '',
        category: ''
      },
      dialogFormVisible: false
    }
  },
  methods: {
    addArticles(){
      this.dialogFormVisible = true
    },
    ...mapActions([
      "newArticles"
    ])
  },
  computed: {
    ...mapGetters({
      statusLogin: "isLogin"
    })
  }
}
</script>

<style lang="css">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
