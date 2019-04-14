import { uuid } from "./generic";

export interface ICard{
  name: string,
  description: string | undefined,
  tasks: uuid[],
  labels: uuid[],
  book: uuid,
  comments: uuid[],
}