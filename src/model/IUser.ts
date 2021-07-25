import IAddress from "./IAddress";

export default interface IUser{
    id: string;
    email:string;
    password:string;
    fullName:string;
    cpfOrCnpj:string;
    birthdate:string;
    phone:string;
    addres: IAddress;
}