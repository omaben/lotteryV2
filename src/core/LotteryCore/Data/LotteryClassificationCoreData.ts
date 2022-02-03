import {LotteryClassificationCoreModel} from "@/core/LotteryCore/Model/LotteryClassificationCoreModel";
import {Application} from "@/lib/Application";
import {LotteryClassificationInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationInsertCoreMessage";
import {LotteryClassificationUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationUpdateCoreMessage";
import {LotteryClassificationSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationSearchCoreMessage";
import {LotteryClassificationDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationDeleteCoreMessage";
import {LotteryClassificationCountCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationCountCoreMessage";
export class LotteryClassificationCoreData {
/**
     * 批量插入
     * @param LotteryClassificationList Array<LotteryClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(LotteryClassificationList : Array<LotteryClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryClassification/InsertBatch.action", {Data:JSON.stringify(LotteryClassificationList)});
}
/**
     * 插入
     * @param LotteryClassification  LotteryClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryClassification : LotteryClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Lottery/LotteryClassification/Insert.action", LotteryClassification);
}
/**
     * 修改用户
     * @param LotteryClassification LotteryClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryClassification : LotteryClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryClassification/Update.action", LotteryClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : LotteryClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where LotteryClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryClassificationSearchCoreMessage) : Promise<Array<LotteryClassificationCoreModel>>{
return Application.Service.GetContent("Lottery/LotteryClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where LotteryClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : LotteryClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Lottery/LotteryClassification/Delete.action", where);
}
}
