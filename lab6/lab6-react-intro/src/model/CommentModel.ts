import {UserModel} from "./UserModel";

export interface CommentModel {
    rpid: number;
    content: string;
    ctime: string;
    like: number;
    user: UserModel;
}