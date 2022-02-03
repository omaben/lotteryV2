import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
export class  UserAgencyInfoCoreModel{
public id : number | undefined;
public parent : number | undefined;
public parentModel:UserInfoCoreModel | undefined
public children : number | undefined;
public childrenModel:UserInfoCoreModel | undefined
public path : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined

}
