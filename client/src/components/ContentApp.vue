<template lang="html">
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <el-card class="box-card" v-for="(article, index) in this.$store.state.dataArticles" :key="index">
          <div slot="header" class="clearfix">
            <span style="line-height: 35px;">{{article.title}}</span>
            <el-button-group style="float: right" v-show="statusLogin">
              <el-button type="primary" icon="edit" v-on:click="cekEditArticle(article)"></el-button>
              <el-button type="danger" icon="delete" v-on:click="deleteArticle(article)"></el-button>
            </el-button-group>
          </div>
          <div class="text item">
            <span>{{article.author.name}} | {{article.createdAt}}</span>
            <hr>
            <h4>{{article.content}}</h4>
            <h4>Kategori: {{article.category}}</h4>
          </div>
        </el-card>
      </div>
      <el-dialog title="edit Article" v-model="dialogFormVisibleEdit">
        <el-form :model="edit_article">
          <el-form-item>
            <el-input v-model="edit_article.title" placeholder="Title"></el-input>
            <el-input v-model="edit_article.id" placeholder="Id" type="hidden"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="edit_article.content" placeholder="Content"></el-input>
            <el-input v-model="edit_article.author" placeholder="Author" type="hidden"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="edit_article.category" placeholder="Category"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button v-on:click="dialogFormVisibleEdit = false">Cancel</el-button>
          <el-button type="primary" v-on:click="editArticle(edit_article);dialogFormVisibleEdit = false;">Edit</el-button>
        </span>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      edit_article: {
        title: '',
        content: '',
        category: ''
      },
      dialogFormVisibleEdit: false
    }
  },
  methods: {
    cekEditArticle(data) {
      if (data.author.username != window.localStorage.getItem('user')) {
        this.notification("You are not authorized to edit this article!")
      }else{
        this.dialogFormVisibleEdit= true;
        this.edit_article.id = data._id;
        this.edit_article.title = data.title;
        this.edit_article.content = data.content;
        this.edit_article.category = data.category;
        this.edit_article.author = window.localStorage.getItem('id');
      }
    },
    notification(notif="You are not authorized to edit this article!") {
      if (notif == "You are not authorized to delete this article!") {
        alert('Sorry, you are not authorized to delete this article!')
      } else if (notif="You are not authorized to edit this article!") {
        alert('Sorry, you are not authorized to edit this article!')
      }
    },
    ...mapActions([
      'editArticle',
      'deleteArticle'
    ])
  },
  created() {
    this.$store.dispatch("dataArticles")
  },
  computed: {
    ...mapGetters({
      dataArticles: 'dataArticles',
      statusLogin: 'isLogin'
    })
  }
}
</script>

<style lang="css">
  .el-card {
    margin-top: 20px;
  }
  .el-row {
    margin-top: 20px;
  }
  .el-col{
    text-align: left;
  }
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
