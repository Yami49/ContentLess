<template>
    <footer>
      <nav>
        <ul>
          <li><a href="/kontakt">Kontakt</a></li>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutz</a></li>
        </ul>
      </nav>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background-color: #333;
    padding: 1rem;
    text-align: center;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  nav ul li {
    margin: 0 1rem;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  nav ul li a:hover {
    color: #00bcd4;
    cursor: pointer;
  }
  </style>  