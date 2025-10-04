import axios from "axios";

const headerJson = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: "https://aos-2025-2-eight.vercel.app",
});

export async function getTarefas() {
  const { data } = await instance.get("/tasks");
  return data;
}

export async function updateTarefa(tarefa) {
  const { data } = await instance.put(
    `/tasks/${tarefa.objectId}`,
    { descricao: tarefa.descricao, concluida: tarefa.concluida },
  );
  return data;
}

export async function addTarefa({ descricao }) {
  const { data } = await instance.post(
    `/tasks`,
    { descricao },
  );
  return data;
}

export async function deleteTarefa(tarefa) {
  const { data } = await instance.delete(`/tasks/${tarefa.objectId}`);
  return data;
}
