import {RechargeActivityCoreModel} from "@/core/RechargeCore/Model/RechargeActivityCoreModel";
import {Application} from "@/lib/Application";
import {RechargeActivityInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityInsertCoreMessage";
import {RechargeActivityUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityUpdateCoreMessage";
import {RechargeActivitySearchCoreMessage} from "@/core/RechargeCore/Message/RechargeActivitySearchCoreMessage";
import {RechargeActivityDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityDeleteCoreMessage";
import {RechargeActivityCountCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityCountCoreMessage";
export class RechargeActivityCoreData {
/**
     * 批量插入
     * @param RechargeActivityList Array<RechargeActivityInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(RechargeActivityList : Array<RechargeActivityInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeActivity/InsertBatch.action", {Data:JSON.stringify(RechargeActivityList)});
}
/**
     * 插入
     * @param RechargeActivity  RechargeActivityInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeActivity : RechargeActivityInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeActivity/Insert.action", RechargeActivity);
}
/**
     * 修改用户
     * @param RechargeActivity RechargeActivityUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeActivity : RechargeActivityUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeActivity/Update.action", RechargeActivity);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : RechargeActivityCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeActivity/Count.action", where);
}
/**
     * 搜索用户
     * @param where RechargeActivitySearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeActivitySearchCoreMessage) : Promise<Array<RechargeActivityCoreModel>>{
return Application.Service.GetContent("Recharge/RechargeActivity/Search.action", where);
}
/**
     * 删除用户
     * @param where RechargeActivityDeleteCoreMessage
     * @constructor
     */
public static Delete(where : RechargeActivityDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeActivity/Delete.action", where);
}
}
