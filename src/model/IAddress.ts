export default interface IAddress{
    recipientName:string;
    typeAddress: string;
    cep: string;
    numberAddress: string;
    address: string;
    referencePoint?:string;
    complement?:string;
    neighborhood?:string;
    city: string;
    state: string;
    country: string;
}