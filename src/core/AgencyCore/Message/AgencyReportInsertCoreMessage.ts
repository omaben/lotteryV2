import {AgencyInfoCoreModel} from '@/core/AgencyCore/Model/AgencyInfoCoreModel';
export class  AgencyReportInsertCoreMessage{
public id : number | undefined;
public betMoney : number | undefined;
public Commission : number | undefined;
public yesterdayCommission : number | undefined;
public todayCommission : number | undefined;
public reportTime : string | undefined;
public profit : number | undefined;
public path : string | undefined;
public mark : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public agencyInfo : number | undefined;
public agencyInfoModel:AgencyInfoCoreModel | undefined

}
