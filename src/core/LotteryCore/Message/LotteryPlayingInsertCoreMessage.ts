import {LotteryClassificationCoreModel} from '@/core/LotteryCore/Model/LotteryClassificationCoreModel';
export class  LotteryPlayingInsertCoreMessage{
public classification : number | undefined;
public classificationModel:LotteryClassificationCoreModel | undefined
public id : number | undefined;
public name : string | undefined;
public bonus : number | undefined;
public commission : number | undefined;
public sort : number | undefined;
public mark : string | undefined;
public maxBet : number | undefined;
public minBet : number | undefined;
public path : string | undefined;
public content : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;

}
