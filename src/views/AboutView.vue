<template>
  <div class="about">
    <h1>Welcome to NATURAL GLOW</h1>
    <p>
      At NATURAL GLOW, we believe that skincare should be simple, effective, and rooted in the power of nature. Our journey began with a simple mission: to provide individuals with access to high-quality skincare products made from natural ingredients that nourish and rejuvenate the skin.
    </p>
    <div class="card-container">
      <div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">Our Story</h5>
    <p class="card-text">Founded by Inganathi Stemela, a passionate skincare enthusiast, NATURAL GLOW was born out of a desire to create a brand that prioritizes transparency, sustainability, and ethical practices. Drawing inspiration from the healing properties of botanicals and botanical extracts, we set out to develop a range of skincare solutions that harness the power of nature to promote healthy, radiant skin.</p>
  </div>
</div>
</div>

<div class="card-container">
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">Our Commitment</h5>
    <p class="card-text">At NATURAL GLOW, we are committed to using only the finest natural ingredients in our products. From soothing botanical extracts to nourishing plant oils, each ingredient is carefully selected for its proven benefits and safety profile. We believe in transparency and strive to provide our customers with full disclosure of our ingredient lists, ensuring peace of mind and trust in our formulations.</p>
  </div>
</div>
</div>

<div class="card-container">
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">Our Values</h5>
    <p class="card-text">We celebrate the beauty of nature and believe in harnessing its power to enhance skin health and vitality. We believe in transparency in all aspects of our business, from ingredient sourcing to product formulation. We are committed to minimizing our environmental footprint and implementing sustainable practices throughout our supply chain. We adhere to ethical standards and strive to make a positive impact on the communities and ecosystems that support us.</p>
  </div>
</div>
</div>

<div class="card-container">
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">Our Promise</h5>
    <p class="card-text">At NATURAL GLOW, we are dedicated to providing our customers with skincare products that deliver real results without compromising on quality or integrity. Whether you're looking to address specific skin concerns or simply enhance your natural beauty, we invite you to experience the transformative power of nature with NATURAL GLOW skincare.
</p>
  </div>
</div>
</div>
<p>
      Thank you for choosing NATURAL GLOW. Here's to healthy, radiant skin, naturally.
    </p>
    </div>
</template>

<style scoped>


.card-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
}

.card {
  width: 100%;
  border: 2px solid;
  border-radius: 8px;
  overflow: hidden; 
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  flex: 0 1 20rem;
}


.card-title {
  position: relative;
  font-size: 1.5rem;
  margin-bottom: 15px;
  cursor: pointer;
}

.card-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: green;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.card-title:hover::after {
  transform: scaleX(1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-title {
  animation: fadeInUp 0.5s forwards;
}
h1, p{
  color:black;
}
</style>


