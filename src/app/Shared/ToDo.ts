// src/app/shared/models/todo.interface.ts

export enum TodoStatus {
    NotDone = 'NotDone',
    InProgress = 'InProgress',
    Done = 'Done'
  }
  
  export interface Todo {
    id: string;         
    title: string;         
    targetDate: Date;       
    status: TodoStatus;     
  }