import {VideoClassificationCoreModel} from '@/core/VideoCore/Model/VideoClassificationCoreModel';
export class  VideoInfoInsertCoreMessage{
public name : string | undefined;
public url : string | undefined;
public classfication : number | undefined;
public classficationModel:VideoClassificationCoreModel | undefined
public tag : string | undefined;
public showCount : number | undefined;
public mark : string | undefined;
public path : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public id : number | undefined;

}
