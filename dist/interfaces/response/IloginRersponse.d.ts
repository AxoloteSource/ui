import { IUser } from '../models/User/user.interface';
export interface ILoginResponse {
    user: IUser;
    access_token: string;
}
