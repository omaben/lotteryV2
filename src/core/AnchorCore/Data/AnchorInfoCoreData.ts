import {AnchorInfoCoreModel} from "@/core/AnchorCore/Model/AnchorInfoCoreModel";
import {Application} from "@/lib/Application";
import {AnchorInfoInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoInsertCoreMessage";
import {AnchorInfoUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoUpdateCoreMessage";
import {AnchorInfoSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoSearchCoreMessage";
import {AnchorInfoDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoDeleteCoreMessage";
import {AnchorInfoCountCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoCountCoreMessage";
export class AnchorInfoCoreData {
/**
     * 批量插入
     * @param AnchorInfoList Array<AnchorInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnchorInfoList : Array<AnchorInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorInfo/InsertBatch.action", {Data:JSON.stringify(AnchorInfoList)});
}
/**
     * 插入
     * @param AnchorInfo  AnchorInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorInfo : AnchorInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorInfo/Insert.action", AnchorInfo);
}
/**
     * 修改用户
     * @param AnchorInfo AnchorInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorInfo : AnchorInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorInfo/Update.action", AnchorInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnchorInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnchorInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorInfoSearchCoreMessage) : Promise<Array<AnchorInfoCoreModel>>{
return Application.Service.GetContent("Anchor/AnchorInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where AnchorInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnchorInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorInfo/Delete.action", where);
}
}
