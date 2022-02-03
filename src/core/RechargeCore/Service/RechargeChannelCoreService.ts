import {RechargeChannelCoreModel} from "@/core/RechargeCore/Model/RechargeChannelCoreModel";
import {RechargeChannelCoreData} from "@/core/RechargeCore/Data/RechargeChannelCoreData";
import {RechargeChannelInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelInsertCoreMessage";
import {RechargeChannelUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelUpdateCoreMessage";
import {RechargeChannelSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelSearchCoreMessage";
import {RechargeChannelDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelDeleteCoreMessage";
import {RechargeChannelCountCoreMessage} from "@/core/RechargeCore/Message/RechargeChannelCountCoreMessage";
export class RechargeChannelCoreService {
/**
     * 批量插入
     * @constructor
	 * @param RechargeChannelList Array<RechargeChannelCoreModel>
     */
public static InsertBatch(RechargeChannelList : Array<RechargeChannelCoreModel>) : Promise<boolean> {
return RechargeChannelCoreData.InsertBatch(RechargeChannelList)
}
/**
     * 插入
     * @param RechargeChannel RechargeChannel : RechargeChannelInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeChannel : RechargeChannelInsertCoreMessage) : Promise<boolean> {
return RechargeChannelCoreData.Insert(RechargeChannel)
}
/**
     * 修改用户
     * @param RechargeChannel RechargeChannelUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeChannel : RechargeChannelUpdateCoreMessage) : Promise<number> {
return RechargeChannelCoreData.Update(RechargeChannel);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : RechargeChannelCountCoreMessage) : Promise<number>{
return RechargeChannelCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where RechargeChannelSearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeChannelSearchCoreMessage) : Promise<Array<RechargeChannelCoreModel>>{
return RechargeChannelCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : RechargeChannelDeleteCoreMessage) : Promise<number>{
return RechargeChannelCoreData.Delete(where);
}
}
