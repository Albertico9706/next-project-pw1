import { UUID } from "crypto";
import { EntityBD } from "../../store/lowdb";

export const API_HOST="http://localhost:3001"

export interface Restaurant extends EntityBD{
    id: string;
      name: string;
      image: string;
      description: string;
      address: string;
      score: number;
      ratings: number;
}



export interface Comment extends EntityBD{
  id:UUID,
  user_id:string,
  restaurant_id:string,
  content:string
}



export class ControllerRestaurant{
  private rests:Restaurant[]

  constructor(rests:Restaurant[]){
    this.rests=rests
  }
}



