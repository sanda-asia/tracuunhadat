<template>
    <!-- Modal -->
<div id="myModal2" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content register-modal-content">
      <div class="modal-body">
        <div class="tabsContainer register-tabsContainer">
        <ul class="nav nav-tabs" role="tablist">
            <li class="active"><a href="#login" role="tab" data-toggle="tab"><span class="tab-name"> Login</span></a></li>
            <li><a href="#register" role="tab" data-toggle="tab"><span class="tab-name">Register</span></a></li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade in active" id="login">
                <v-form class="box" ref="formLogin" lazy-validation>
                    <h1>Login</h1>
                    <h5>Welcome back !</h5>
                    <input type="text" v-model="usernameLogin" placeholder="Username">
                    <input type="password" v-model="passwordLogin" placeholder="Password">
                    <h6 class="error-alert">{{temp}}</h6>
                    <h6><a href="">Forot Password?</a></h6>
                    <input type="button" @click="submitLogin" value="Sign in" />
                </v-form>
            </div>
            <div class="tab-pane fade" id="register">
                 <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field
                        label="User Name"
                        v-model="username"
                        :rules="[v => !!v || 'Full name is required']"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Email"
                        v-model="email"
                        :rules="emailRules"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Phone Number"
                        v-model="phone_number"
                        :rules="[v => !!v || 'Phone number is required']"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Address"
                        v-model="address"
                        :rules="[v => !!v || 'Address is required']"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'visibility' : 'visibility_off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-text-field
                        v-model="confirm_password"
                        :append-icon="show2 ? 'visibility' : 'visibility_off'"
                        :rules="[comparePassword]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Confirm Password"
                        @click:append="show2 = !show2"
                    ></v-text-field>
                    <v-checkbox
                    v-model="agreeTerms"
                    color="green"
                    :rules="[v => v || 'Please agree our Terms before sign up']"
                    >
                    <template v-slot:label>
                        <div >
                        I agree to the 
                        <a href="" >terms of User</a>

                        </div>
                    </template>
                    </v-checkbox>
                    <v-btn
                        @click="submitRegister"
                        :disabled="!valid"
                    >
                        Submit
                    </v-btn>
                    <v-btn @click="clear">Clear</v-btn>
                </v-form>
            </div>
        </div>
    </div>

      </div>
    </div>

  </div>
</div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
data: () => {
        return {
        temp: '',
        valid: true,
        usernameLogin: 'nhi',
        passwordLogin: '1111111',
        username: '',
        email: '',
        phone_number: '',
        address: '',
        password: '',
        confirm_password: '',
        show1: false,
        show2: false,
        agreeTerms: false,
        urlPage: window.location.href,
        rules: {
          required: value => !!value || 'Password is required',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
        ],
        confirmPassword: [
            v => !!v || 'Confirm password is required'
        ]
        }
        

    },
    computed: {
     comparePassword () {
         return this.password !== this.confirm_password ? 'Passwords is not match':true;
     }
    },
    methods: {
        submitLogin(){
            if (this.$refs.formLogin.validate()){
                return axios({
                    method: 'post',
                    data: {
                        username: this.usernameLogin,
                        password: this.passwordLogin,
                    },
                    url: 'http://localhost:3000/user/dang-nhap',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    console.log(response.data)
                    if (response.data.status === false) {
                        this.temp = 'Username or Password is incorrect!'
                    } else {
                       this.temp = '';
                       swal(
                            `Welcome ${response.data.data.username}!`,
                            'Login success!',
                            'success',
                        );
                        const urlPage = window.location.href;
                        router.push({urlPage});
                        this.$refs.form.reset();
                        console.log(this.urlPage);
                    }
                }).catch((error) => {
                    console.log(error);
                })
                
            }
        },
        async submitRegister() {
            
            if (this.$refs.form.validate()) {
                
                // add proccess here
                return axios({
                    method: 'post',
                    data: {
                        username: this.username,
                        email: this.email,
                        password:this.password,
                        address: this.address,
                        phone_number: this.phoneNumber
                    },
                    url: 'http://localhost:3000/user/dang-ky',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(() => {
                        swal(
                            'Great!',
                            'You have been successfully registered!',
                            'success',
                        );
                        this.$refs.form.reset();
                        const urlPage = window.location.href;
                        router.push({urlPage});
                    })
                        .catch((error) => {
                            // const message = error.response.data.message;
                            // this.$swal('Oh oo!', 'error');
                        });
            }
            return true;
        },
        clear() {
            this.$refs.form.reset();
        },
    },
}
</script>

<style scoped>
@media(max-width: 480px){
    .register-tabsContainer {
        padding-left: 0px;
    }
    .register-tabsContainer ul.nav-tabs li {
        padding: 0px 68px;
    }
    .register-modal-content {
        margin: auto;
        margin-top: 60px !important;
        width: 100% !important;
    }
}
.register-modal-content {
    width: 390px;
    margin: auto;
    margin-top: 130px;
}
.box input[type = "text"],
.box input[type = "password"],
.box input[type = "email"],
.box input[type = "tel"]{
  border:0;
  background: none;
  display: block;
  font-size: 17px;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color:black;
  border-radius: 24px;
  transition: 0.25s;
}
.register input[type = "text"],
.register input[type = "password"],
.register input[type = "email"],
.register input[type = "tel"]{
  border:0;
  background: none;
  display: block;
  margin: 12px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 12px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 14px;
  transition: 0.25s;
}
input[type = "text"]:focus,input[type = "password"]:focus,
.box input[type = "email"]:focus,
.box input[type = "tel"]:focus{
  width: 280px;
  border-color: #2ecc71;
}
input[type = "button"]{
  border:0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
input[type = "button"]:hover{
  background: #2ecc71;
}
span.tab-name{
  text-transform: uppercase;
  font-weight: 200;
}
.register-tabsContainer ul.nav-tabs li {
    padding: 0px 62px;
}
.modal-body>.register-tabsContainer>ul.nav-tabs>li.active::after{
    height: 6px;
    transform: translateY(4px)
}
div#login, #register {
    border: 1px solid silver;
}

input[type="button"] {
    color: #2ecc71;
    margin-top: 3px;
}

input[type="button"]:hover {
    color: white;
}
h1 {
    font-weight: bold;
    color: #359382;
    text-align: center;
}
h5, h6 {
    text-align: center;
}
h6{
    margin-bottom: 5px;
}
input[type="checkbox"] {
    margin-left: 66px;
}
h6.error-alert {
    color: red;
    font-size: 12px;
}
</style>
