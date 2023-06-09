export interface TaskFooterType {
  id: number;
  status: string;
  handleDelete: (id: number) => void;
  handleDone: (id: number, status: string) => void;
  setIsloading: (value: boolean) => void;
}
