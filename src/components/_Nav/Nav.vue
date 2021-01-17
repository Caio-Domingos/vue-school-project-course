<template>
  <div class="topbar">
    <nav class="main-margin">
      <router-link to="Alunos">Alunos</router-link>
      <router-link to="Professores">Professores</router-link>
      <router-link to="Sobre">Sobre</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topbar {
  background-color: rgb(230, 230, 230);
}

.main-margin {
  width: 50%;
  margin: auto;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  text-decoration: none;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

.router-link-active {
  background-color: rgb(160, 160, 160);
  color: white;
}
</style>
