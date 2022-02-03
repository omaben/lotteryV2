import {LotteryPlayingCoreModel} from "@/core/LotteryCore/Model/LotteryPlayingCoreModel";
import {Application} from "@/lib/Application";
import {LotteryPlayingInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingInsertCoreMessage";
import {LotteryPlayingUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingUpdateCoreMessage";
import {LotteryPlayingSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingSearchCoreMessage";
import {LotteryPlayingDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingDeleteCoreMessage";
import {LotteryPlayingCountCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingCountCoreMessage";
export class LotteryPlayingCoreData {
/**
     * 批量插入
     * @param LotteryPlayingList Array<LotteryPlayingInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(LotteryPlayingList : Array<LotteryPlayingInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryPlaying/InsertBatch.action", {Data:JSON.stringify(LotteryPlayingList)});
}
/**
     * 插入
     * @param LotteryPlaying  LotteryPlayingInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryPlaying : LotteryPlayingInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryPlaying/Insert.action", LotteryPlaying);
}
/**
     * 修改用户
     * @param LotteryPlaying LotteryPlayingUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryPlaying : LotteryPlayingUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryPlaying/Update.action", LotteryPlaying);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : LotteryPlayingCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryPlaying/Count.action", where);
}
/**
     * 搜索用户
     * @param where LotteryPlayingSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryPlayingSearchCoreMessage) : Promise<Array<LotteryPlayingCoreModel>>{
return Application.Service.GetContent("Lottery/LotteryPlaying/Search.action", where);
}
/**
     * 删除用户
     * @param where LotteryPlayingDeleteCoreMessage
     * @constructor
     */
public static Delete(where : LotteryPlayingDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryPlaying/Delete.action", where);
}
}
