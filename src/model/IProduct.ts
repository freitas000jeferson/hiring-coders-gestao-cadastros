export default interface IProduct{
    id: number;
    name: string;
    description: string;
    price: number;
    length: Array<number>;
    color: Array<string>;
    rate: number;
    deliveryDate: number;
    isRebate: boolean;
    image:string;
};