import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
export class  ArticleInfoCoreModel{
public id : number | undefined;
public user : number | undefined;
public userModel:UserInfoCoreModel | undefined
public picture : string | undefined;
public intro : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public content : string | undefined;
public path : string | undefined;
public mark : string | undefined;

}
