import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
import {VideoInfoCoreModel} from '@/core/VideoCore/Model/VideoInfoCoreModel';
export class  VideoCommentInsertCoreMessage{
public content : string | undefined;
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined
public mark : string | undefined;
public insertTime : string | undefined;
public path : string | undefined;
public updateTime : string | undefined;
public id : number | undefined;
public videoInfo : number | undefined;
public videoInfoModel:VideoInfoCoreModel | undefined

}
