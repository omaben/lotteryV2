import {GameClassificationCoreModel} from '@/core/GameCore/Model/GameClassificationCoreModel';
export class  GameInfoInsertCoreMessage{
public id : number | undefined;
public name : string | undefined;
public picture : string | undefined;
public classification : number | undefined;
public classificationModel:GameClassificationCoreModel | undefined
public path : string | undefined;
public mark : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public sort : number | undefined;
public recommend : number | undefined;
public currentDrawNumber : string | undefined;
public currentIssue : string | undefined;
public nextIssues : string | undefined;
public nextDrawTime : string | undefined;
public betList : string | undefined;
public drawTime : string | undefined;
public drawLength : number | undefined;

}
