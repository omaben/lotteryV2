import {AnchorGiftCoreModel} from "@/core/AnchorCore/Model/AnchorGiftCoreModel";
import {Application} from "@/lib/Application";
import {AnchorGiftInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftInsertCoreMessage";
import {AnchorGiftUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftUpdateCoreMessage";
import {AnchorGiftSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftSearchCoreMessage";
import {AnchorGiftDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftDeleteCoreMessage";
import {AnchorGiftCountCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftCountCoreMessage";
export class AnchorGiftCoreData {
/**
     * 批量插入
     * @param AnchorGiftList Array<AnchorGiftInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnchorGiftList : Array<AnchorGiftInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorGift/InsertBatch.action", {Data:JSON.stringify(AnchorGiftList)});
}
/**
     * 插入
     * @param AnchorGift  AnchorGiftInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorGift : AnchorGiftInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorGift/Insert.action", AnchorGift);
}
/**
     * 修改用户
     * @param AnchorGift AnchorGiftUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorGift : AnchorGiftUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorGift/Update.action", AnchorGift);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnchorGiftCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorGift/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnchorGiftSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorGiftSearchCoreMessage) : Promise<Array<AnchorGiftCoreModel>>{
return Application.Service.GetContent("Anchor/AnchorGift/Search.action", where);
}
/**
     * 删除用户
     * @param where AnchorGiftDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnchorGiftDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorGift/Delete.action", where);
}
}
