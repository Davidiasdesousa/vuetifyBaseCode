<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex md6>
        <v-card
          class="mb-3"
          v-for="(tarefa, index) in listaTarefas"
          :key="index"
        >
          <v-card-text>
            <v-chip class="ma-2  ml-0" color="pink" label text-color="white">
              <v-icon left>mdi-label</v-icon>{{ tarefa.title }} #{{
                tarefa.id
              }}</v-chip
            >
            <p>{{ tarefa.description }}</p>
            <v-btn color="warning mx-2 ml-0" @click="editar(index)"
              >Editar</v-btn
            >
            <v-btn color="error mx-2" @click="eliminarTarefa(tarefa.id)"
              >Apagar</v-btn
            >
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="addForm">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="adicionarTarefa">
            <v-text-field
              v-model="title"
              :counter="10"
              label="Título da Tarefa"
              required
            ></v-text-field>
            <v-textarea
              v-model="description"
              name="input-7-1"
              label="Descrição da Tarefa"
              hint="Use para detalhar suas tarefas de maneira clara e objetiva"
            ></v-textarea>
            <v-btn color="success" type="submit">Adicionar Tarefa</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="!addForm">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarefa">
            <v-text-field
              v-model="title"
              :counter="122"
              label="Título da Tarefa"
              required
            ></v-text-field>
            <v-textarea
              v-model="description"
              name="input-7-1"
              label="Descrição da Tarefa"
              hint="Use para detalhar suas tarefas de maneira clara e objetiva"
            ></v-textarea>
            <v-btn color="warning" type="submit">Editar Tarefa</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar" top center>
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      title: "",
      description: "",
      addForm: true,
      message: "",
      tarefaIndex: "",
      listaTarefas: [
        {
          id: 1,
          title: "Título da Tarefa",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.              Molestiae alias soluta sequi rerum nemo reiciendis"
        },
        {
          id: 2,
          title: "Título da Tarefa",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.              Molestiae alias soluta sequi rerum nemo reiciendis"
        }
      ]
    };
  },
  methods: {
    adicionarTarefa() {
      if (this.title === "" || this.description === "") {
        this.snackbar = true;
        this.message = "Preencha todos os campos";
      } else {
        this.listaTarefas.push({
          id: Date.now(),
          title: this.title,
          description: this.description
        });
        this.title = "";
        this.description = "";
        this.snackbar = true;
        this.message = "Tarefa adicionada!";
        this.addForm = true;
      }
    },
    eliminarTarefa(id) {
      this.listaTarefas = this.listaTarefas.filter(e => e.id != id);
    },
    editar(id) {
      this.addForm = false;
      this.tarefaIndex = id;
      this.title = this.listaTarefas[id].title;
      this.description = this.listaTarefas[id].description;
    },
    editarTarefa() {
      this.listaTarefas[this.tarefaIndex].description = this.description;
      this.listaTarefas[this.tarefaIndex].title = this.title;
      this.title = "";
      this.description = "";
      this.tarefaIndex = "";
      this.addForm = true;
    }
  }
};
</script>