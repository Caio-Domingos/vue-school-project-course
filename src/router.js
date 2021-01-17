import Vue from 'vue';
import Router from 'vue-router';

import Professores from './components/Professor/Professores.vue';
import Alunos from './components/Aluno/Alunos.vue';
import About from './components/About/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/professores',
      name: 'Professores',
      component: Professores,
    },
    {
      path: '/alunos',
      name: 'Alunos',
      component: Alunos,
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: About,
    },
  ],
});
