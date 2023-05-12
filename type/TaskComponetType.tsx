import { TaskType } from "./TaskType";
export interface TaskComponetType {
  tasks: TaskType[];
  handleDelete: (id: number) => void;
  handleDone: (id: number, status: string) => void;
  setIsloading: (value: boolean) => void;
}
