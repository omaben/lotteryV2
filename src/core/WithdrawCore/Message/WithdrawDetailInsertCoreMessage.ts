import {WithdrawClassificationCoreModel} from '@/core/WithdrawCore/Model/WithdrawClassificationCoreModel';
import {AccountInfoCoreModel} from '@/core/AccountCore/Model/AccountInfoCoreModel';
export class  WithdrawDetailInsertCoreMessage{
public updateTime : string | undefined;
public path : string | undefined;
public mark : string | undefined;
public withdrawClassification : number | undefined;
public withdrawClassificationModel:WithdrawClassificationCoreModel | undefined
public id : number | undefined;
public accountInfo : number | undefined;
public accountInfoModel:AccountInfoCoreModel | undefined
public status : number | undefined;
public insertTime : string | undefined;
public withdrawAmount : number | undefined;

}
