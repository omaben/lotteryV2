import {UserClassificationCoreModel} from '@/core/UserCore/Model/UserClassificationCoreModel';
export class  UserInfoCoreModel{
public id : number | undefined;
public name : string | undefined;
public password : string | undefined;
public classification : number | undefined;
public classificationModel:UserClassificationCoreModel | undefined
public sex : number | undefined;
public money : number | undefined;
public tel : string | undefined;
public email : string | undefined;
public path : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;
public birthDay : string | undefined;
public avatar : string | undefined;
public salt : number | undefined;
public withdrawPassword : string | undefined;

}
