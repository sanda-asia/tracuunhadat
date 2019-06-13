<template>
  <div class="wrapper">
      <div class="emp-profile">
          <div class="row">
              <div class="col-md-3">
                  <div class="profile-img">
                      <div class="card">
                        <div class="card-header">
                          <div class="profile_pic">
                            <img src="https://bootsnipp.com/img/avatars/92ff0456eb6106d0c1ae8ab5f1fe0afe2d2d25f2.jpg">
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="d-lfex justify-content-center flex-column">
                            <div class="name_container">
                              <div class="name">Samim</div>
                            </div>
                            <div class="address">Kuala Lumpur, Malaysia</div>
                          </div>
                          <!-- <div class="follow">
                            <div class="follow_btn">Follow</div>
                          </div> -->
                          <div class="info_container">
                            <div class="info">
                              <p>followers</p>
                              <p>2.89M</p>								
                            </div>
                            <div class="info">
                              <p>followings</p>
                              <p>456</p>							
                            </div>
                            <div class="info">
                              <p>posts</p>
                              <p>3.56K</p>						
                            </div>			
                          </div>
                        </div>
                      </div>
                  </div>
                  
                  <div class="profile-work">
                      <p>WORK LINK</p>
                      <a href="">Website Link</a><br/>
                      <a href="">Bootsnipp Profile</a><br/>
                      <a href="">Bootply Profile</a>
                      <p>SKILLS</p>
                      <a href="">Web Designer</a><br/>
                      <a href="">Web Developer</a><br/>
                      <a href="">WordPress</a><br/>
                      <a href="">WooCommerce</a><br/>
                      <a href="">PHP, .Net</a><br/>
                  </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                    <div class="col-md-10">
                        <div class="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                      <div class="tab-content profile-tab" id="myTabContent">
                          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>User Id</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>Kshiti123</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Name</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>Kshiti Ghelani</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Email</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>kshitighelani@gmail.com</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Phone</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>123 456 7890</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Profession</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>Web Developer and Designer</p>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Experience</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>Expert</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Hourly Rate</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>10$/hr</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Total Projects</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>230</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>English Level</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>Expert</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <label>Availability</label>
                                  </div>
                                  <div class="col-md-6">
                                      <p>6 months</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-12">
                                      <label>Your Bio</label><br/>
                                      <p>Your detail description</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>       
        </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
body{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}

.wrapper{
  height: 997px;
  padding: 0 100px;
  overflow-y: scroll;
  background-color: white;
}

.emp-profile{
    margin-top: 1%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}

.card-header{
  background-image: url('http://www.latestseotutorial.com/wp-content/uploads/2016/12/love-dp-for-facebook.jpg') !important;
  padding: 0 !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  text-align:center;
}
.card{
  overflow: hidden;
}
.profile_pic{
  position: absolute;
  bottom: -50px;
  height: 112px;
  width: 112px;
  padding: 5px;
  border: 2px solid #f39c12;
  border-radius: 50%;
}
.card-body{
  padding-top: 55px !important;
}
.profile_pic img{
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.name_container{
  display: flex;
  justify-content: center;

}
.name{
  font-size: 20px;
  font-weight: 700;
  color: gray;
  position: relative;
}
.name::after{
  font-family: "Font Awesome 5 Free";
  content: '\f058';
  position: absolute;
  right: -15px;
  top:0;
  font-size: 15px;
  font-weight: 700;
  color: #4CAF50;
}
.address{
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: gray;
}
.follow{
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.follow_btn{
  background: #2196F3;
  padding: 7px;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
}

.follow_btn::before{
  font-family: "Font Awesome 5 Free";
  content: "\f234";
  font-weight: 600;
  margin-right: 5px;



}
.follow_btn:hover{
  background: #f39c12;
}
.info_container{
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.info{
  display: flex;
  flex-direction: column;
  padding: 0px;
}
.info p:first-child{
  margin-bottom: 0;
  font-size: 12px;
  color: gray;
  text-transform: uppercase;
  text-align: center;
}
.info p:last-child{
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 700;
  color: gray;
  text-transform: uppercase;
  text-align: center;
}

</style>
