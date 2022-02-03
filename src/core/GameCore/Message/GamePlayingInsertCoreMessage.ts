import {GamePlayingClassificationCoreModel} from '@/core/GameCore/Model/GamePlayingClassificationCoreModel';
export class  GamePlayingInsertCoreMessage{
public name : string | undefined;
public path : string | undefined;
public mark : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public classification : number | undefined;
public classificationModel:GamePlayingClassificationCoreModel | undefined
public id : number | undefined;
public bonus : number | undefined;
public commission : number | undefined;
public maxBet : number | undefined;
public minBet : number | undefined;
public sort : number | undefined;
public content : string | undefined;
public drawMark : string | undefined;

}
