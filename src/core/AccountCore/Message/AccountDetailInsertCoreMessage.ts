import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
import {AccountClassificationCoreModel} from '@/core/AccountCore/Model/AccountClassificationCoreModel';
export class  AccountDetailInsertCoreMessage{
public id : number | undefined;
public money : number | undefined;
public notes : string | undefined;
public picture : string | undefined;
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined
public classification : number | undefined;
public classificationModel:AccountClassificationCoreModel | undefined
public path : string | undefined;
public transactionNumber : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;
public status : number | undefined;

}
