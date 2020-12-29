export interface IStates {
  id: number;
  nome: string;
  regiao: IRegiao;
  sigla: string;
}

export interface IRegiao {
  id: number;
  nome: string;
  sigla: string;
}
