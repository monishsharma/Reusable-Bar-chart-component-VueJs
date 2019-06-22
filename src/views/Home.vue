<template>
  <div id="app">
    <div class="hero">
      <div class="hero__overlay hero__overlay--gradient"></div>
      <div class="hero__mask"></div>
      <div class="hero__inner">
        <div class="container">
          <div class="hero__content">
            <div class="hero__content__inner" id='navConverter'>
              <h1 class="hero__title">Drip Capital - Reusable Bar Chart Component</h1>
              <p class="hero__text">
                  A Reusable bar chart component made on VueJs<br>
                  Click on the below button to view <br>
                  Made By - Monish Sharma 
              </p>
              <router-link to="/chartjs"  class= "button hero__button ">View Chart</router-link>
              <router-link to="/reused"  class= "button hero__button">Reusable Chart</router-link>
            </div>
          </div>
        </div>
      </div>
	  </div>
    <router-view></router-view>
  </div>
</template>

<style>
@import url('../../assets/css/style.css');

</style>