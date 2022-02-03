import {AnchorSendGiftRecordCoreModel} from "@/core/AnchorCore/Model/AnchorSendGiftRecordCoreModel";
import {Application} from "@/lib/Application";
import {AnchorSendGiftRecordInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordInsertCoreMessage";
import {AnchorSendGiftRecordUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordUpdateCoreMessage";
import {AnchorSendGiftRecordSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordSearchCoreMessage";
import {AnchorSendGiftRecordDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordDeleteCoreMessage";
import {AnchorSendGiftRecordCountCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordCountCoreMessage";
export class AnchorSendGiftRecordCoreData {
/**
     * 批量插入
     * @param AnchorSendGiftRecordList Array<AnchorSendGiftRecordInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnchorSendGiftRecordList : Array<AnchorSendGiftRecordInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorSendGiftRecord/InsertBatch.action", {Data:JSON.stringify(AnchorSendGiftRecordList)});
}
/**
     * 插入
     * @param AnchorSendGiftRecord  AnchorSendGiftRecordInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorSendGiftRecord : AnchorSendGiftRecordInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorSendGiftRecord/Insert.action", AnchorSendGiftRecord);
}
/**
     * 修改用户
     * @param AnchorSendGiftRecord AnchorSendGiftRecordUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorSendGiftRecord : AnchorSendGiftRecordUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorSendGiftRecord/Update.action", AnchorSendGiftRecord);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnchorSendGiftRecordCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorSendGiftRecord/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnchorSendGiftRecordSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorSendGiftRecordSearchCoreMessage) : Promise<Array<AnchorSendGiftRecordCoreModel>>{
return Application.Service.GetContent("Anchor/AnchorSendGiftRecord/Search.action", where);
}
/**
     * 删除用户
     * @param where AnchorSendGiftRecordDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnchorSendGiftRecordDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorSendGiftRecord/Delete.action", where);
}
}
