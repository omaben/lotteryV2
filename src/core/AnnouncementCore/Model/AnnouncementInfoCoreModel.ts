import {AnnouncementClassificationCoreModel} from '@/core/AnnouncementCore/Model/AnnouncementClassificationCoreModel';
export class  AnnouncementInfoCoreModel{
public id : number | undefined;
public title : string | undefined;
public content : string | undefined;
public classification : number | undefined;
public classificationModel:AnnouncementClassificationCoreModel | undefined
public insertTime : string | undefined;
public updateTime : string | undefined;
public path : string | undefined;
public mark : string | undefined;

}
