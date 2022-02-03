import {ShortVideoInfoCoreModel} from '@/core/ShortVideoCore/Model/ShortVideoInfoCoreModel';
import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
export class  ShortVideoCollectInsertCoreMessage{
public shortVideo : number | undefined;
public shortVideoModel:ShortVideoInfoCoreModel | undefined
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined
public path : string | undefined;
public mark : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public id : number | undefined;

}
