import {LotteryClassificationCoreModel} from '@/core/LotteryCore/Model/LotteryClassificationCoreModel';
export class  LotteryInfoInsertCoreMessage{
public id : number | undefined;
public name : string | undefined;
public icon : string | undefined;
public classification : number | undefined;
public classificationModel:LotteryClassificationCoreModel | undefined
public path : string | undefined;
public sort : number | undefined;
public recommend : number | undefined;
public currentDrawNumber : string | undefined;
public nextDrawTime : string | undefined;
public currentIssue : string | undefined;
public nextIssue : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;

}
