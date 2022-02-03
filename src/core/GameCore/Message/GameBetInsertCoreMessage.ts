import {UserInfoCoreModel} from '@/core/UserCore/Model/UserInfoCoreModel';
import {LotteryPlayingCoreModel} from '@/core/LotteryCore/Model/LotteryPlayingCoreModel';
export class  GameBetInsertCoreMessage{
public id : number | undefined;
public userInfo : number | undefined;
public userInfoModel:UserInfoCoreModel | undefined
public gamePlaying : number | undefined;
public gamePlayingModel:LotteryPlayingCoreModel | undefined
public betMoney : number | undefined;
public content : string | undefined;
public status : number | undefined;
public path : string | undefined;
public insertTime : string | undefined;
public updateTime : string | undefined;
public mark : string | undefined;
public currentIssue : string | undefined;

}
