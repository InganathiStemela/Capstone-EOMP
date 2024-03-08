<template>
    <div class="contact">
    <div class="contact-form-wrapper">
    <form action="https://formspree.io/f/xdoqoqjz" class="contact-form" method="post">

      <div>
        <input type="text" class="form-control rounded border-black mb-3 form-input" id="name" name="name" placeholder="Name" required>
      </div>
      <div>
        <input type="email" class="form-control rounded border-black mb-3 form-input" id="email" name="email" placeholder="Email" required>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-black mb-3 form-text-area" name="message" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Submit" class="sub">
      </div>



      <aside class="contact-info">
        <div>
      <i class="fas fa-phone black"></i> 
      <span>Phone: +27 68 227 2351</span>
    </div>
    <div>
      <i class="fab fa-github black"></i> 
      <span>GitHub: <a href="https://github.com/InganathiStemela">InganathiStemela</a></span>
    </div>
    
    <div>
      <i class="fab fa-linkedin black"></i> 
      <span>LinkedIn: <a href="https://www.linkedin.com/in/inganathi-stemela-5624362b6/">Inganathi Stemela</a></span>
    </div>
  
    <div>
      <i class="far fa-envelope black"></i>
      <span>Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">inganathistemela13@gmail.com</a></span>
    </div>
  </aside>
    </form>
  </div>
  </div>
  </template>
  
  <script>
  
  </script>
  <style scoped>
  .contact-form-wrapper {
  display: flex;
  justify-content: center;
  border: 2px solid black; 
  padding: 20px;
}

.title {
  border-bottom: 2px solid black; 
  margin-bottom: 20px; 
  text-align: center;
}

.sub {
  margin: 0 0 0 35%;
  background-color: black;
  color: white;
}

.contact-info {
  margin-top: 20px;
  text-align: center;
}

.contact-info div {
  margin-bottom: 10px;
}

.contact-info i {
  margin-right: 10px;
}

.black {
  color: rgb(219, 68, 68);
}
</style>