<template>
    <div class="users-table vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 class="display-1 text-center">
          <span class="underline">SIGN UP</span>
        </h1>
        <form class="p-3 rounded" @submit.prevent="register">
          <div class="mb-3 row">
            <div class="col">
              <input v-model="USERNAME" type="text" class="form-control" placeholder="UserName" required>
            </div>
          </div>
          <div class="mb-3">
            <input v-model="EMAIL" type="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="mb-3">
            <input v-model="PASSWORD" type="password" class="form-control" placeholder="Password" required>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" v-model="saveAccount">
            <label class="form-check-label">Save account for future logins</label>
          </div>
          <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
          <button type="submit" class="btn btn-primary d-block mx-auto" :disabled="submitting">
            {{ submitting ? 'Creating Account...' : 'Create an account' }}
          </button>
        </form>
      </div>
    </div>
  </template>

<!-- <script>
import { createStore } from 'vuex';
import axios from 'axios';

export default {
    components: {createStore,
    axios},
  data() {
    return {
      USERNAME: '',
      EMAIL: '',
      PASSWORD: '',
      saveAccount: false,
      submitting: false,
    };
  },
  methods: {
    async register(req, res){
        const data = req.body;
        data.PASSWORD = await hash(data.PASSWORD, 15);

        const user = {
            EMAIL: data.EMAIL,
            PASSWORD: data.PASSWORD
        };
        const query = `INSERT INTO users SET ?;`
        db.query(query, [data], (err)=>{
            if(err) throw err;
            let token = createToken(user);
            res.json({
                status: res.statusCode,
                msg: 'You are registered',
            });
        });
    }
  }
}
</script> -->

<script>
import axios from 'axios';

export default {
  data() {
    return {
      USERNAME: '',
      EMAIL: '',
      PASSWORD: '',
      submitting: false,
    };
  },
  methods: {
    async register() {
      this.submitting = true;
      try {
        const response = await axios.post('http://localhost:3000/users/register', {
          USERNAME: this.USERNAME,
          EMAIL: this.EMAIL,
          PASSWORD: this.PASSWORD,
        });
        console.log(response.data); 
        this.$router.push('/');
              } catch (err) {
        console.error('Error signing up:', err);
      } finally {
        this.submitting = false;
      }
    }
  }
}
</script>

  <style scoped>
  .underline {
    border-bottom: 2px solid black;
    padding-bottom: 5px;
    display: inline-block;
  }
  </style>
  