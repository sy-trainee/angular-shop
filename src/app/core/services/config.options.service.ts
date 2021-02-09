import { Injectable } from '@angular/core';

export class ConfigModel {
  id: string;
  login: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configModel: ConfigModel = new ConfigModel();

  constructor() { }

  getId(): string {
    return this.configModel.id;
  }

  setConfig(configModel: Partial<ConfigModel>): void {
    // this.configModel.id = configModel.id;
    // this.configModel.email = configModel.email;
    // this.configModel.login = configModel.login;
    this.configModel = {...this.configModel, ...configModel};
  }

  setLogin(login: string): void {
    this.configModel.login = login;
  }

  getLogin(): string {
    return this.configModel.login;
  }

  setEmail(email: string): void {
    this.configModel.email = email;
  }

  getEmail(): string {
    return this.configModel.email;
  }
}
