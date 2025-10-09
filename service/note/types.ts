export type Note = {
  id: string;
  name: string;
  content: string;
  owner: {
    id: string;
    username: string;
  };
};
