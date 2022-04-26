export class Users {
  public task: string;
  public description: string;
  public sexe: string;
  public complet: boolean;
  constructor(task: string, desc: string, sex: string, complet: boolean) {
    this.task = task;
    this.description = desc;
    this.sexe = sex;
    this.complet = complet;
  }
}
