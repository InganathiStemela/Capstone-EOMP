<!-- <template>
    <div>
      <h2>Add User</h2>
      <input v-model="newUser.USERNAME" placeholder="USERNAME" />
      <input v-model="newUser.EMAIL" placeholder="EMAIL" />
      <input v-model="newUser.PASSWORD" placeholder="PASSWORD" type="password" />
      <button @click="registerUser">Register User</button>
      <hr />
      <h2>Users</h2>
      <div v-for="user in users" :key="user.ID">
        <p>Username: {{ user.USERNAME }}</p>
        <p>Email: {{ user.EMAIL }}</p>
        <input v-model="updatedUserData[user.ID].USERNAME" placeholder="New Username" />
        <input v-model="updatedUserData[user.ID].EMAIL" placeholder="New Email" />
        <button @click="updateUser(user.ID)">Update</button>
        <button @click="deleteUser(user.ID)">Delete</button>
      </div>
    </div>
  </template> -->


  <template>
    <div>
      <h2>Add User</h2>
      <table>
        <tr>
          <td>USERNAME:</td>
          <td><input v-model="newUser.USERNAME" placeholder="USERNAME" /></td>
        </tr>
        <tr>
          <td>EMAIL:</td>
          <td><input v-model="newUser.EMAIL" placeholder="EMAIL" /></td>
        </tr>
        <tr>
          <td>PASSWORD:</td>
          <td><input v-model="newUser.PASSWORD" placeholder="PASSWORD" type="password" /></td>
        </tr>
        <tr>
          <td colspan="2"><button @click="registerUser">REGISTER USER</button></td>
        </tr>
      </table>
      <hr />
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.ID">
            <td>{{ user.USERNAME }}</td>
            <td>{{ user.EMAIL }}</td>
            <td>
              <input v-model="updatedUsers[user.ID].USERNAME" placeholder="New USERNAME" />
              <input v-model="updatedUsers[user.ID].EMAIL" placeholder="New EMAIL" />
              <button @click="updateUser(user.ID)">UPDATE</button>
              <button @click="deleteUser(user.ID)">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        newUser: {
          USERNAME: "",
          EMAIL: "",
          PASSWORD: "",
        },
        updatedUsers: {}, 
      };
    },
    computed: {
      users() {
        return this.$store.state.users;
      },
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get("http://localhost:3000/users");
          this.$store.commit("setUsers", response.data);
          this.updatedUsers = response.data.reduce((acc, user) => {
            acc[user.ID] = { USERNAME: user.USERNAME, EMAIL: user.EMAIL };
            return acc;
          }, {});
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      },
      async registerUser() {
        try {
          await axios.post("http://localhost:3000/users", this.newUser);
          console.log("User registered successfully!");
          this.newUser = { USERNAME: "", EMAIL: "", PASSWORD: "" };
          this.fetchUsers();
        } catch (error) {
          console.error("Error registering user:", error);
        }
      },
      async updateUser(ID) {
        try {
          const userData = this.updatedUsers[ID];
          await axios.patch(`http://localhost:3000/users/${ID}`, userData);
          console.log("User updated successfully!");
          this.fetchUsers();
        } catch (error) {
          console.error("Error updating user:", error);
        }
      },
      async deleteUser(ID) {
        const confirmed = confirm("Are you sure you want to delete this user?");
        if (confirmed) {
          try {
            await axios.delete(`http://localhost:3000/users/${ID}`);
            console.log("User deleted successfully!");
            this.fetchUsers();
          } catch (error) {
            console.error("Error deleting user:", error);
          }
        }
      },
    },
  };
</script>

  
  <style scoped>
 
  </style>