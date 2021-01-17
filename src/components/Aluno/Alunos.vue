<template>
  <div>
    <Title text="Alunos" />
    <div class="input-content">
      <input
        type="text"
        name="aluno"
        id="aluno"
        placeholder="Nome do Aluno"
        v-model="name"
        v-on:keyup.enter="addStudent()"
      />
      <button class="btn btn-input" @click="addStudent()">+</button>
    </div>
    <br />
    <table>
      <thead>
        <th>Mat.</th>
        <th>Nome</th>
        <th>Opcoes</th>
      </thead>
      <tbody v-if="students.length > 0">
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>
            <button class="btn" @click="remove(index)">Remover</button>
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
      title: 'Aluno',
      name: '',
      students: [
        {
          id: 1,
          name: 'Marcos',
        },
        {
          id: 1,
          name: 'Carlos',
        },
        {
          id: 1,
          name: 'Isabela',
        },
      ],
    };
  },
  props: {},
  methods: {
    addStudent() {
      this.students.push({ id: this.students.length, name: this.name });
      this.name = '';
      console.log('my students', this.students);
    },
    remove(index) {
      this.students.splice(index, 1);
      console.log('my students', this.students);
    },
  },
};
</script>

<style scoped>
.input-content {
  display: flex;
}

input {
  flex: 1;
  width: 100%;
  margin-right: 10px;
  border: 0;
  padding: 20px;
  font-size: 1.3rem;
  color: #687f7f;
}

.btn-input {
  width: 150px;
  border: 0px;
  padding: 20px;
  font-size: 1.3rem;
  background-color: rgb(115, 115, 115);
}
</style>
