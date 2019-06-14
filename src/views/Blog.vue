<template>
  <div class="wrapper">
        <div class="lists" style="width: 90%; margin: auto;">
            <div>
                <section class="search-sec">
                    <div class="px-0">
                        <form action="#" method="post" novalidate="novalidate" class="width-full">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 p-0">
                                        <input type="text" class="form-control search-slt" placeholder="Enter Pickup City">
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select class="form-control search-slt" id="exampleFormControlSelect1">
                                            <option>Tỉnh - Thành Phố</option>
                                            <option>Example one</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="button" class="btn btn-danger wrn-btn">Search</button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </section>
              <h3>
                <span>Tất cả</span>
              </h3>
              <div class="row" v-if="blogs">
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3 pr-0" v-for="blog in blogs" :key="blog.index">
                      <router-link :to="{name: 'blogDetail', params:{title: blog.headerBlog, blogId: blog._id}}" class="card">
                          <div class="figure">
                              <img :src="`http://localhost:3000/upload/blog/${blog.imageSrc}` " />
                         </div>
                          <h4>{{blog.headerBlog}}</h4>
                          <div class="metafooter">
                              <div class="wrapfooter">
                                  <span class="meta-footer-thumb">
                                      <img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal">
                                  </span>
                                  <span class="author-meta">
                                    <span class="post-name">{{ blog.author }}</span><br>
                                    <span class="post-date">{{ (new Date(blog.timePost)).toLocaleDateString() }}</span>
                                    <span class="post-read-more">
                                        <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
                                            <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">

                                            </path>
                                        </svg>
                                    </span>
                                  </span>
                              </div>
                          </div>
                          <div class="clearfix"></div>
                      </router-link>
                  </div>
                  <!-- <div class="col-12 col-sm-12 col-md-3 col-lg-3 pr-0">
                      <router-link :to="{name: 'blogDetail', params:{title:'test'}}" class="card">
                          <div class="figure">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRTM-udgEBWeS6uPw53Wx_oMaws2jJN7F7rbrh7MU80W67L5q" alt="image">
                          </div>
                          <h4>Giải thích hiện tượng giá đất đà nẵng tăng mạnh trong thời gian gần đây!</h4>
                          <div class="metafooter">
                              <div class="wrapfooter">
                                  <span class="meta-footer-thumb">
                                      <img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal">
                                  </span>
                                  <span class="author-meta">
                                    <span class="post-name">Dân Trí</span><br>
                                    <span class="post-date">27/05/2019</span>
                                    <span class="post-read-more">
                                        <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
                                            <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">

                                            </path>
                                        </svg>
                                    </span>
                                  </span>
                              </div>
                          </div>
                          <div class="clearfix"></div>
                      </router-link>
                  </div>
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3 pr-0">
                      <router-link :to="{name: 'blogDetail', params:{title:'test'}}" class="card">
                          <div class="figure">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRTM-udgEBWeS6uPw53Wx_oMaws2jJN7F7rbrh7MU80W67L5q" alt="image">
                          </div>
                          <h4>Giải thích hiện tượng giá đất đà nẵng tăng mạnh trong thời gian gần đây!</h4>
                          <div class="metafooter">
                              <div class="wrapfooter">
                                  <span class="meta-footer-thumb">
                                      <img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal">
                                  </span>
                                  <span class="author-meta">
                                    <span class="post-name">Dân Trí</span><br>
                                    <span class="post-date">27/05/2019</span>
                                    <span class="post-read-more">
                                        <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
                                            <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">

                                            </path>
                                        </svg>
                                    </span>
                                  </span>
                              </div>
                          </div>
                          <div class="clearfix"></div>
                      </router-link>
                  </div>
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3 pr-0">
                      <router-link :to="{name: 'blogDetail', params:{title:'test'}}" class="card">
                          <div class="figure">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRTM-udgEBWeS6uPw53Wx_oMaws2jJN7F7rbrh7MU80W67L5q" alt="image">
                          </div>
                          <h4>Giải thích hiện tượng giá đất đà nẵng tăng mạnh trong thời gian gần đây!</h4>
                          <div class="metafooter">
                              <div class="wrapfooter">
                                  <span class="meta-footer-thumb">
                                      <img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal">
                                  </span>
                                  <span class="author-meta">
                                    <span class="post-name">Dân Trí</span><br>
                                    <span class="post-date">27/05/2019</span>
                                    <span class="post-read-more">
                                        <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
                                            <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">

                                            </path>
                                        </svg>
                                    </span>
                                  </span>
                              </div>
                          </div>
                          <div class="clearfix"></div>
                      </router-link>
                  </div> -->
              </div>
            </div>
        </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import axios from 'axios'
import {Modal} from '../components/Modal'

export default {
  components: {
    Modal
  },
  name: "blog",
  data() {
    return {
        blogs : [],
    };
  },
  created(){
      this.initialize()
  },
  methods: {
      initialize () {
        axios.get('http://localhost:3000/blog')
          .then(res => this.blogs = res.data.listBlog)
          .catch(err => console.log(err));
      },
  }
};
</script>
<style lang="scss" scoped>
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}


.wrapper{
  height: 697px;
  overflow-y: scroll;
  background-color: white;
}

.lists{
  padding: 25px 0;
}

.lists h3 {
    font-size: 18px;
    line-height: 16px;
    margin: 10px 0 15px;
    /* padding: 0 0 0 10px; */
    font-weight: bold;
    border-bottom: 1px solid #ccc;
}

.lists h3 span {
    border-bottom: 1px solid rgba(0,0,0,.44);
    display: inline-block;
    padding-bottom: 20px;
    margin-bottom: -1px;
}

a.card, div.card {
    display: block;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.13);
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;
}

.figure {
    background-color: #000;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.figure > img{
    width: 100%;
    height: auto;
}

a.card h4, div.card h4 {
  /* font-weight: bold; */
  font-size: 18px;
  line-height: 29px;
  /* margin: 0 10px 0 0; */
  padding: 0 10px 10px 10px;
  color: #333;
  text-decoration: none;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  float: none;
}

.wrapfooter {
    font-size: 12px;
    margin: 10px 10px 20px;
}

.author-thumb {
    width: 40px;
    height: 40px;
    float: left;
    margin-right: 13px;
    border-radius: 100%;
}

.author-meta {
    flex: 1 1 auto;
    white-space: nowrap!important;
    text-overflow: ellipsis!important;
    overflow: hidden!important;
}

span.post-read-more {
    align-items: center;
    display: inline-block;
    float: right;
    margin-top: -15px;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

.search-sec{
    padding: 2rem;
    margin-bottom: 20px;
}
.search-slt{
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    height: calc(3rem + 2px) !important;
    border-radius:0;
}
.wrn-btn{
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
    border-radius:0;
}
@media (min-width: 992px){
    .search-sec{
        position: relative;
        background: rgba(26, 70, 104, 0.51);
    }
}

@media (max-width: 992px){
    .search-sec{
        background: #1A4668;
    }
}

.width-full{
    width: 100%;
}


</style>
