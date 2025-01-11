import { User, Job } from "@prisma/client"
import { ValidatedState } from "./actions/server_actions"
import { DeleteState } from "./actions/table_actions"
/* eslint-disable no-unused-vars */
export type Confirm={
    action:(state:DeleteState,id:number)=>Promise<DeleteState|null>,
    button:string
}

export type FlattenOptional<T>=RecordOptional<T,string[]|undefined>
type RecordOptional<T,P>={[K in keyof T]?:P}

export type ValidatingAction<T>=(state:ValidatedState<T>|null, formData:FormData)=>Promise<ValidatedState<T>|null>
export type FormAuthAction=ValidatingAction<User>
export type CreateJobAction=(state:ValidatedState<Job>,form:FormData)=>Promise<ValidatedState<Job>>

export enum Errors{
    auth="El usuario o la contraseña son incorrectos",
}

export type DeepTypeOf<T> = T extends object
  ? { [K in keyof T]: DeepTypeOf<T[K]> }
  : T;
/* eslint-enable no-unused-vars */