<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <h2>Willkommen auf der Hauptseite</h2>
      <p>Das ist der Hauptinhalt der Seite.</p>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
@import './assets/styles.css';

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f4;
  text-align: center;
}
</style>