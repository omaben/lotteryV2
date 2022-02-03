import {LotteryDrawTimeCoreModel} from "@/core/LotteryCore/Model/LotteryDrawTimeCoreModel";
import {Application} from "@/lib/Application";
import {LotteryDrawTimeInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeInsertCoreMessage";
import {LotteryDrawTimeUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeUpdateCoreMessage";
import {LotteryDrawTimeSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeSearchCoreMessage";
import {LotteryDrawTimeDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeDeleteCoreMessage";
import {LotteryDrawTimeCountCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeCountCoreMessage";
export class LotteryDrawTimeCoreData {
/**
     * 批量插入
     * @param LotteryDrawTimeList Array<LotteryDrawTimeInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(LotteryDrawTimeList : Array<LotteryDrawTimeInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryDrawTime/InsertBatch.action", {Data:JSON.stringify(LotteryDrawTimeList)});
}
/**
     * 插入
     * @param LotteryDrawTime  LotteryDrawTimeInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryDrawTime : LotteryDrawTimeInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryDrawTime/Insert.action", LotteryDrawTime);
}
/**
     * 修改用户
     * @param LotteryDrawTime LotteryDrawTimeUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryDrawTime : LotteryDrawTimeUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryDrawTime/Update.action", LotteryDrawTime);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : LotteryDrawTimeCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryDrawTime/Count.action", where);
}
/**
     * 搜索用户
     * @param where LotteryDrawTimeSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryDrawTimeSearchCoreMessage) : Promise<Array<LotteryDrawTimeCoreModel>>{
return Application.Service.GetContent("Lottery/LotteryDrawTime/Search.action", where);
}
/**
     * 删除用户
     * @param where LotteryDrawTimeDeleteCoreMessage
     * @constructor
     */
public static Delete(where : LotteryDrawTimeDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryDrawTime/Delete.action", where);
}
}
