import { IDolgnostnoeLico } from './DolgnostnoeLico';
import { IPolzovatel } from './Polzovatel';

export interface IRegistraciya{

    polzovatel: IPolzovatel;
    dolgnostnoelico?: IDolgnostnoeLico;


}