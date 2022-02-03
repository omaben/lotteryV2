import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
import {ShortVideoInfoCoreModel} from '@/core/ShortVideoCore/Model/ShortVideoInfoCoreModel';
export class  ShortVideoCommentInsertCoreMessage{
public content : string | undefined;
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined
public path : string | undefined;
public mark : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public id : number | undefined;
public shortVideoInfo : number | undefined;
public shortVideoInfoModel:ShortVideoInfoCoreModel | undefined

}
