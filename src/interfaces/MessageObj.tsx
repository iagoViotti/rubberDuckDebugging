export interface MessageObj {
  id: number;
  text: string;
  time: string;
  sender: "user" | "duck";
}