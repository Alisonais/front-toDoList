export interface ITask {
  id?: number,
  description: string,
  completed?: number
};

export interface ICards {
  cards: [
    {
      id: number;
      description: string;
      completed: number;
    }
  ]
};
