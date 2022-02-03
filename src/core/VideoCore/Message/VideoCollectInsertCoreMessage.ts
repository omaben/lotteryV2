import {VideoInfoCoreModel} from '@/core/VideoCore/Model/VideoInfoCoreModel';
import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
export class  VideoCollectInsertCoreMessage{
public videoInfo : number | undefined;
public videoInfoModel:VideoInfoCoreModel | undefined
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined
public path : string | undefined;
public mark : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public id : number | undefined;

}
