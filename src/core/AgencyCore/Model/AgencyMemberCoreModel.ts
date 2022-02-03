import {AgencyInfoCoreModel} from '@/core/AgencyCore/Model/AgencyInfoCoreModel';
import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
export class  AgencyMemberCoreModel{
public id : number | undefined;
public agencyInfo : number | undefined;
public agencyInfoModel:AgencyInfoCoreModel | undefined
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined
public path : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;

}
