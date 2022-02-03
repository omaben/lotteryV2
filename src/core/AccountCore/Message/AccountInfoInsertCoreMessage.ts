import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
export class  AccountInfoInsertCoreMessage{
public id : number | undefined;
public bankCardNum : string | undefined;
public name : string | undefined;
public bankAddress : string | undefined;
public bankName : string | undefined;
public path : string | undefined;
public mark : string | undefined;
public inserTime : string | undefined;
public updateTime : string | undefined;
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined

}
