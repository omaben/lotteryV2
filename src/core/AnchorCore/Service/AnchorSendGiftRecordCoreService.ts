import {AnchorSendGiftRecordCoreModel} from "@/core/AnchorCore/Model/AnchorSendGiftRecordCoreModel";
import {AnchorSendGiftRecordCoreData} from "@/core/AnchorCore/Data/AnchorSendGiftRecordCoreData";
import {AnchorSendGiftRecordInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordInsertCoreMessage";
import {AnchorSendGiftRecordUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordUpdateCoreMessage";
import {AnchorSendGiftRecordSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordSearchCoreMessage";
import {AnchorSendGiftRecordDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordDeleteCoreMessage";
import {AnchorSendGiftRecordCountCoreMessage} from "@/core/AnchorCore/Message/AnchorSendGiftRecordCountCoreMessage";
export class AnchorSendGiftRecordCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnchorSendGiftRecordList Array<AnchorSendGiftRecordCoreModel>
     */
public static InsertBatch(AnchorSendGiftRecordList : Array<AnchorSendGiftRecordCoreModel>) : Promise<boolean> {
return AnchorSendGiftRecordCoreData.InsertBatch(AnchorSendGiftRecordList)
}
/**
     * 插入
     * @param AnchorSendGiftRecord AnchorSendGiftRecord : AnchorSendGiftRecordInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorSendGiftRecord : AnchorSendGiftRecordInsertCoreMessage) : Promise<boolean> {
return AnchorSendGiftRecordCoreData.Insert(AnchorSendGiftRecord)
}
/**
     * 修改用户
     * @param AnchorSendGiftRecord AnchorSendGiftRecordUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorSendGiftRecord : AnchorSendGiftRecordUpdateCoreMessage) : Promise<number> {
return AnchorSendGiftRecordCoreData.Update(AnchorSendGiftRecord);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnchorSendGiftRecordCountCoreMessage) : Promise<number>{
return AnchorSendGiftRecordCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnchorSendGiftRecordSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorSendGiftRecordSearchCoreMessage) : Promise<Array<AnchorSendGiftRecordCoreModel>>{
return AnchorSendGiftRecordCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnchorSendGiftRecordDeleteCoreMessage) : Promise<number>{
return AnchorSendGiftRecordCoreData.Delete(where);
}
}
