import {RechargeChannelCoreModel} from "@/core/RechargeCore/Model/RechargeChannelCoreModel";
import {Application} from "@/lib/Application";
import {RechargeChannelInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelInsertCoreMessage";
import {RechargeChannelUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelUpdateCoreMessage";
import {RechargeChannelSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelSearchCoreMessage";
import {RechargeChannelDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelDeleteCoreMessage";
import {RechargeChannelCountCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelCountCoreMessage";
export class RechargeChannelCoreData {
/**
     * 批量插入
     * @param RechargeChannelList Array<RechargeChannelInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(RechargeChannelList : Array<RechargeChannelInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeChannel/InsertBatch.action", {Data:JSON.stringify(RechargeChannelList)});
}
/**
     * 插入
     * @param RechargeChannel  RechargeChannelInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeChannel : RechargeChannelInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Recharge/RechargeChannel/Insert.action", RechargeChannel);
}
/**
     * 修改用户
     * @param RechargeChannel RechargeChannelUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeChannel : RechargeChannelUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeChannel/Update.action", RechargeChannel);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : RechargeChannelCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeChannel/Count.action", where);
}
/**
     * 搜索用户
     * @param where RechargeChannelSearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeChannelSearchCoreMessage) : Promise<Array<RechargeChannelCoreModel>>{
return Application.Service.GetContent("Recharge/RechargeChannel/Search.action", where);
}
/**
     * 删除用户
     * @param where RechargeChannelDeleteCoreMessage
     * @constructor
     */
public static Delete(where : RechargeChannelDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Recharge/RechargeChannel/Delete.action", where);
}
}
