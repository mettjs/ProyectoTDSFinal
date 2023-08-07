import BaseHttpClient from "@/axios/baseHttpClient";

export default abstract class BaseCrudService<T> {
  controller: string;

  constructor(controller: string) {
    this.controller = controller + "/";
  }

  async getAll(action = "", params?: object) {
    return BaseHttpClient.getAll<T[]>(
      this.controller + action,
      params
    );
  }

  async getById(id: string, params?: object, action = "") {
    return BaseHttpClient.get<T>(`${this.controller + action}${id}`, params);
  }

  async create(body: T, action = "") {
    return BaseHttpClient.post<T>(this.controller + action, body);
  }

  async update(id: string, action = "", body: Partial<T> = {}) {
    return BaseHttpClient.update<T>(
      `${this.controller}${action}${id}`,
      body
    );
  }

  async delete(id: string) {
    return BaseHttpClient.delete<T>(`${this.controller}${id}`);
  }

}
