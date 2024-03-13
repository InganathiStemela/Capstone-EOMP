<template>
  <div> 
    <div class="home">
      <h1>NATURAL <br> GLOW</h1>
      <div class="img">
        <img src="https://i.postimg.cc/nhFvfwRv/Green-Watercolor-Instagram-Story-Background-1-removebg-preview.png" alt="">
      </div>
      <div class="paragraph">
      <p class="inga"> MADE WITH 100% <br> NATURAL INGREDIENTS</p>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  
}
</script>
<style scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: white;
  font-weight: bolder;
  font-size: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
  margin-bottom: 20px;
  text-align: left;
}

.img {
  width: 100%;
  position: relative;
}

.img img {
  max-width: 100%;
}

@media (max-width: 768px) {
  .home {
    flex-direction: column-reverse;
    align-items: center;
  }

  h1 {
    position: static;
    text-align: center;
  }
}
.inga {
  margin-left: 850px; 
  text-align: right;
  color: white;
  /* margin-top: -150px; */
}

@media (min-width: 768px) {
  .inga {
    margin-top: -10px;
  }
}

</style>