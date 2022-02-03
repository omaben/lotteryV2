import {AnchorCollectCoreModel} from "@/core/AnchorCore/Model/AnchorCollectCoreModel";
import {Application} from "@/lib/Application";
import {AnchorCollectInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectInsertCoreMessage";
import {AnchorCollectUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectUpdateCoreMessage";
import {AnchorCollectSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectSearchCoreMessage";
import {AnchorCollectDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectDeleteCoreMessage";
import {AnchorCollectCountCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectCountCoreMessage";
export class AnchorCollectCoreData {
/**
     * 批量插入
     * @param AnchorCollectList Array<AnchorCollectInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnchorCollectList : Array<AnchorCollectInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorCollect/InsertBatch.action", {Data:JSON.stringify(AnchorCollectList)});
}
/**
     * 插入
     * @param AnchorCollect  AnchorCollectInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorCollect : AnchorCollectInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorCollect/Insert.action", AnchorCollect);
}
/**
     * 修改用户
     * @param AnchorCollect AnchorCollectUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorCollect : AnchorCollectUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorCollect/Update.action", AnchorCollect);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnchorCollectCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorCollect/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnchorCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorCollectSearchCoreMessage) : Promise<Array<AnchorCollectCoreModel>>{
return Application.Service.GetContent("Anchor/AnchorCollect/Search.action", where);
}
/**
     * 删除用户
     * @param where AnchorCollectDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnchorCollectDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorCollect/Delete.action", where);
}
}
