<template>
  <div>
    <Title text="Professores" />

    <table>
      <thead>
        <th>Cod.</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="teachers.length > 0">
        <tr v-for="(teacher, index) in teachers" :key="index">
          <td>{{ teacher.id }}</td>
          <router-link to="/alunos" tag="td" style="cursor: pointer;"
            >{{ teacher.name }} {{ teacher.surname }}</router-link
          >
          <td>
            {{ teacher.students }}
          </td>
        </tr>
      </tbody>
      <tfoot v-else>
        Nenhum aluno encontrado
      </tfoot>
    </table>
  </div>
</template>

<script>
import Title from './../_Share/Title';
export default {
  components: { Title },
  data() {
    return {
      teachers: [
        {
          id: 1,
          name: 'Hugo',
          surname: 'Prado',
          students: 3,
        },
        {
          id: 2,
          name: 'Douglas',
          surname: 'Hirem',
          students: 3,
        },
        {
          id: 1,
          name: 'Marcia',
          surname: 'Constatine',
          students: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
