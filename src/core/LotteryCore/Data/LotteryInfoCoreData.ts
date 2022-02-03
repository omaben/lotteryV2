import {LotteryInfoCoreModel} from "@/core/LotteryCore/Model/LotteryInfoCoreModel";
import {Application} from "@/lib/Application";
import {LotteryInfoInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoInsertCoreMessage";
import {LotteryInfoUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoUpdateCoreMessage";
import {LotteryInfoSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoSearchCoreMessage";
import {LotteryInfoDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoDeleteCoreMessage";
import {LotteryInfoCountCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoCountCoreMessage";
export class LotteryInfoCoreData {
/**
     * 批量插入
     * @param LotteryInfoList Array<LotteryInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(LotteryInfoList : Array<LotteryInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryInfo/InsertBatch.action", {Data:JSON.stringify(LotteryInfoList)});
}
/**
     * 插入
     * @param LotteryInfo  LotteryInfoInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryInfo : LotteryInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryInfo/Insert.action", LotteryInfo);
}
/**
     * 修改用户
     * @param LotteryInfo LotteryInfoUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryInfo : LotteryInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryInfo/Update.action", LotteryInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : LotteryInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where LotteryInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryInfoSearchCoreMessage) : Promise<Array<LotteryInfoCoreModel>>{
return Application.Service.GetContent("Lottery/LotteryInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where LotteryInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : LotteryInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryInfo/Delete.action", where);
}
}
