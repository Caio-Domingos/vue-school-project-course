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
          <td>{{ student.id }}</td>
          <td>{{ student.name }} {{ student.surname }}</td>
          <td>
            <button class="btn" @click="remove(student)">Remover</button>
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
      students: [],
    };
  },
  props: {},
  methods: {
    addStudent() {
      let _student = {
        name: this.name,
        surname: 'Domingos',
      };

      this.$http
        .post('http://localhost:3000/alunos/', _student)
        .then((result) => {
          console.log('result', result);
          this.students.push(result.body);
        })
        .catch((err) => {
          console.error('error', err);
        });

      this.name = '';
      console.log('my students', this.students);
    },
    remove(student) {
      this.$http
        .delete(`http://localhost:3000/alunos/${student.id}`)
        .then((result) => {
          console.log('result', result);
          const index = this.students.indexOf(student);
          this.students.splice(index, 1);
          console.log('my students', this.students);
        })
        .catch((err) => {
          console.error('error', err);
        });
    },
  },
  created() {
    this.$http
      .get('http://localhost:3000/alunos/')
      .then((result) => {
        console.log('result', result);
        this.students = result.body;
      })
      .catch((err) => {
        console.error('error', err);
      });
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
