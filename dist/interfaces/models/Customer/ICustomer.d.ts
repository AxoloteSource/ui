export interface ICustomerWallet {
    points: number;
    expiration_date: string | null;
}
export interface ICustomer {
    id: number;
    name: string;
    last_name_paternal: string;
    last_name_maternal: string;
    email: string;
    phone: string;
    created_at: string;
    wallet?: ICustomerWallet | null;
}
