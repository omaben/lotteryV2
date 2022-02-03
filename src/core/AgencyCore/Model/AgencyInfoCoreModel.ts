import {AgencyClassificationCoreModel} from '@/core/AgencyCore/Model/AgencyClassificationCoreModel';
export class  AgencyInfoCoreModel{
public id : number | undefined;
public name : string | undefined;
public password : string | undefined;
public tel : string | undefined;
public money : number | undefined;
public path : string | undefined;
public classification : number | undefined;
public classificationModel:AgencyClassificationCoreModel | undefined
public commission : number | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;
public agencyEmail : string | undefined;

}
