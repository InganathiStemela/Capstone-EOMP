<template>
  <div>
    <div class="container">
      <h1 class="text-center fs-1">About Us</h1>
      <p class="text-center" id="par">NATURAL GLOW is a skincare brand founded by Inganathi Stemela, focusing on providing high-quality products made from natural ingredients that nourish and rejuvenate the skin. The brand is committed to transparency, sustainability, and ethical practices, using only the finest natural ingredients. NATURAL GLOW values natural beauty, transparency, sustainability, and ethical practices. They aim to minimize their environmental footprint and make a positive impact on the communities and ecosystems that support them. The company promises to deliver real results without compromising on quality or integrity, addressing specific skin concerns or enhancing natural beauty.</p>
      <div class="founder-section">
        <h2 class="text-center">Meet the Founder</h2>
        <div class="founder-info">
          <div class="founder-image">
            <img src="https://i.postimg.cc/jjp7HGR3/inga.jpg" alt="Founder - Inganathi Stemela" />
          </div>
          <div class="founder-text">
            <p>Hello, I'm Inganathi Stemela, the founder of Natural Glow. <br>With a deep love for healthy, radiant skin,<br> I started this journey to provide skincare products<br> made from natural ingredients that nourish and rejuvenate the skin. <br>My goal is to create a brand that prioritizes transparency, sustainability and ethical practices!</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
  name: 'AboutPage',
  components:{
    NavbarComp,
    FooterComp
  }
};
</script>

<style scoped>
span{
  background-color: #F4DAF0;
}
.about-page{
  margin-top: 100px;
}
.container{
  color:black;
  font-family: Arial, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
}
.founder-section {
  
  padding-top: 10px;
  border-top: 4px solid green;
  color:black;
}
.text-center{
  font-weight: bolder;
  
}
.founder-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
}
.founder-image {
  flex: 1;
  max-width: 500px;
  text-align: center;
}
.founder-image img {
  max-width: 50%;
  border: green;
  border-radius: 30%;
}
.founder-text {
  flex: 2;
  text-align: left;
}
.founder-text p {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-top: 20px;
  color: black;
}
#par{
  font-weight:lighter;
  font-size: 1.5rem;
  line-height: 1.6;
  margin-top: 20px;
  color: black;
}
</style>