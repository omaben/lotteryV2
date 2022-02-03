import {ShortVideoClassificationCoreModel} from '@/core/ShortVideoCore/Model/ShortVideoClassificationCoreModel';
export class  ShortVideoInfoInsertCoreMessage{
public name : string | undefined;
public url : string | undefined;
public classification : number | undefined;
public classificationModel:ShortVideoClassificationCoreModel | undefined
public tag : string | undefined;
public showCount : number | undefined;
public mark : string | undefined;
public path : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public id : number | undefined;

}
