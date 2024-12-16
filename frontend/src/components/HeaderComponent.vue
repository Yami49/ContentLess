<template>
    <header>
      <div class="logo">
        <a href="#">
          <img src="@/assets/logo.jpeg" alt="Logo" />
        </a>
      </div>
      <nav :class="{ open: isMenuOpen }">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Über Uns</a></li>
          <li><a href="#services">Leistungen</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
      <div class="burger" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  
  .logo img {
    height: 50px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav ul li {
    margin: 0 1rem;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  
  nav ul li a:hover {
    color: #00bcd4;
  }
  
  /* Burger-Menü-Stil */
  .burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .burger .line {
    background-color: #fff;
    height: 3px;
    width: 25px;
    margin: 3px 0;
    transition: all 0.3s ease;
  }
  
  /* Mobile Ansicht */
  @media (max-width: 768px) {
    nav {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #444;
      width: 100%;
      display: none;
      flex-direction: column;
      text-align: center;
      z-index: 1;
    }
  
    nav.open {
      display: flex;
    }
  
    nav ul {
      flex-direction: column;
      padding: 0;
    }
  
    nav ul li {
      margin: 1rem 0;
    }
  
    .burger {
      display: flex;
    }
  }
  </style>  