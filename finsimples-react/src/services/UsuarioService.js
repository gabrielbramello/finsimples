import api from "./api";

const REST_API_URL = 'usuario';

class UsuarioService {
    async getAll() {
        return await api.get(REST_API_URL);
    }

    async findByLoginAndSenha(usuario) {
        return await api.post(REST_API_URL, usuario)
    }

    async insert(values) {
        return await api.post(REST_API_URL + "/insert", values);
    }

    async update(id, values) {
        return await api.put(REST_API_URL + "/update/id/" + id, values);
    }
}

export default new UsuarioService();