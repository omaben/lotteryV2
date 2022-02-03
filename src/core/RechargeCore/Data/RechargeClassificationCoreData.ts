import {RechargeClassificationCoreModel} from "@/core/RechargeCore/Model/RechargeClassificationCoreModel";
import {Application} from "@/lib/Application";
import {RechargeClassificationInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationInsertCoreMessage";
import {RechargeClassificationUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationUpdateCoreMessage";
import {RechargeClassificationSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationSearchCoreMessage";
import {RechargeClassificationDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationDeleteCoreMessage";
import {RechargeClassificationCountCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationCountCoreMessage";
export class RechargeClassificationCoreData {
/**
     * 批量插入
     * @param RechargeClassificationList Array<RechargeClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(RechargeClassificationList : Array<RechargeClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeClassification/InsertBatch.action", {Data:JSON.stringify(RechargeClassificationList)});
}
/**
     * 插入
     * @param RechargeClassification  RechargeClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeClassification : RechargeClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeClassification/Insert.action", RechargeClassification);
}
/**
     * 修改用户
     * @param RechargeClassification RechargeClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeClassification : RechargeClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeClassification/Update.action", RechargeClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : RechargeClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where RechargeClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeClassificationSearchCoreMessage) : Promise<Array<RechargeClassificationCoreModel>>{
return Application.Service.GetContent("Recharge/RechargeClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where RechargeClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : RechargeClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeClassification/Delete.action", where);
}
}
