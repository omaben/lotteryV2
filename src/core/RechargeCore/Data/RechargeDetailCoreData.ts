import {RechargeDetailCoreModel} from "@/core/RechargeCore/Model/RechargeDetailCoreModel";
import {Application} from "@/lib/Application";
import {RechargeDetailInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailInsertCoreMessage";
import {RechargeDetailUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailUpdateCoreMessage";
import {RechargeDetailSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailSearchCoreMessage";
import {RechargeDetailDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailDeleteCoreMessage";
import {RechargeDetailCountCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailCountCoreMessage";
export class RechargeDetailCoreData {
/**
     * 批量插入
     * @param RechargeDetailList Array<RechargeDetailInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(RechargeDetailList : Array<RechargeDetailInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeDetail/InsertBatch.action", {Data:JSON.stringify(RechargeDetailList)});
}
/**
     * 插入
     * @param RechargeDetail  RechargeDetailInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeDetail : RechargeDetailInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeDetail/Insert.action", RechargeDetail);
}
/**
     * 修改用户
     * @param RechargeDetail RechargeDetailUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeDetail : RechargeDetailUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeDetail/Update.action", RechargeDetail);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : RechargeDetailCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeDetail/Count.action", where);
}
/**
     * 搜索用户
     * @param where RechargeDetailSearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeDetailSearchCoreMessage) : Promise<Array<RechargeDetailCoreModel>>{
return Application.Service.GetContent("Recharge/RechargeDetail/Search.action", where);
}
/**
     * 删除用户
     * @param where RechargeDetailDeleteCoreMessage
     * @constructor
     */
public static Delete(where : RechargeDetailDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeDetail/Delete.action", where);
}
}
