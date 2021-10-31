import requests from "../requests";

class Users {
  static BASE_PATH = "/users"

  async getAll() {
    return requests.get(`${Users.BASE_PATH}`);
  }

  async update(data) {
    return requests.post(`${Users.BASE_PATH}/update`, data);
  }
}

export default new Users();