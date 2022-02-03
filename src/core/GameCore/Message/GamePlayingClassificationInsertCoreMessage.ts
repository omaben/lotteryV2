import {GameInfoCoreModel} from '@/core/GameCore/Model/GameInfoCoreModel';
export class  GamePlayingClassificationInsertCoreMessage{
public name : string | undefined;
public path : string | undefined;
public mark : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public gameInfo : number | undefined;
public gameInfoModel:GameInfoCoreModel | undefined
public id : number | undefined;

}
