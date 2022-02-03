import {AdvertisingClassificationCoreModel} from '@/core/AdvertisingCore/Model/AdvertisingClassificationCoreModel';
export class  AdvertisingInfoInsertCoreMessage{
public id : number | undefined;
public title : string | undefined;
public picture : string | undefined;
public startTime : string | undefined;
public endTime : string | undefined;
public classification : number | undefined;
public classificationModel:AdvertisingClassificationCoreModel | undefined
public path : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;

}
