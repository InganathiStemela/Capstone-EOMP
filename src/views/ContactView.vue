<template>
    <div class="container">

      <h1>CONTACT US</h1>
      <div class="form">
        <form action="" method="POST">
          <label for="name">Name:</label><br>
          <input type="text" class="input-field" req placeholder="Please enter your Name" required="name"  oninvalid="this.setCustomValidity('Please Enter Your Name')"
          oninput="this.setCustomValidity('')"><br>
          <label for="email">Email:</label><br>
          <input type="email" name="email" class="input-field" placeholder="Enter your email address"  required="email" oninvalid="this.setCustomValidity('Please Enter Your Email')"
          oninput="this.setCustomValidity('')"><br>
          <label>Message:</label><br>
          <textarea name="message" class="textarea-field" placeholder="Please type your message" required="message"   oninvalid="this.setCustomValidity('Please Enter Your Message')"
          oninput="this.setCustomValidity('')"></textarea><br>
          <button type="submit" class="submit-button">Send</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  export default {
  }
  </script>
  <style scoped>
  .form {
    padding: 20px;
    justify-content: center;
  }
  .container{
    width: 40%;
    margin: auto;
    border-radius: 8px;
    border:1px solid green;
    box-shadow: 4px 8px 0px green;
  }
  .input-field,
  .textarea-field {
    width: 40%;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  .submit-button {
    background-color: #D9D9D9;
    color: black;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  .submit-button:hover {
    background-color: #45A049;
  }
  label {
    font-weight: bold;
  }
  </style>