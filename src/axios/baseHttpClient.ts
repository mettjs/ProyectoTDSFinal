import apiRoute from "@/common/constants/apiRoute";
import axios, { AxiosRequestConfig } from "axios";

export default class BaseHttpClient {
  private static authHeader: { Authorization: string } | undefined;
  private static formDataHeader: { "Content-Type": "multipart/form-data" };
  static interceptor = axios.create({
    baseURL: apiRoute,
  });

  private static async request<T>(requestConfig: AxiosRequestConfig, formData: boolean = false) {

    const hasFormData = formData ? this.formDataHeader : '';

    return BaseHttpClient.interceptor.request<T>({
      ...requestConfig,
      headers: {
        ...this.authHeader,
        ...hasFormData
      },
    });
  }

  static setAuthHeader(token: string | undefined) {
    if (!token) {
      this.authHeader = undefined;
      return;
    }

    this.authHeader = { Authorization: `Bearer ${token}` };
  }

  static async get<T>(url: string, params?: object) {
    return (await this.request<T>({ method: "get", params, url }, true)).data;
  }

  static async getAll<T>(url: string, params?: object) {
    return await this.get<T>(url, params);
  }

  static async post<T>(url: string, body: any, formData: boolean = false) {
    return (await this.request<T>({ method: "post", data: body, url }, formData)).data;
  }

  static async update<T>(url: string, body: any) {
    return (await this.request<T>({ method: "put", data: body, url })).data;
  }

  static async delete<T>(url: string) {
    return (await this.request<T>({ method: "delete", url })).data;
  }

  static async patch<T>(url: string, body: any) {
    return (await this.request<T>({ method: "patch", data: body, url })).data;
  }
}
