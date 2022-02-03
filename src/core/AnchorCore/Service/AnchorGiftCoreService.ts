import {AnchorGiftCoreModel} from "@/core/AnchorCore/Model/AnchorGiftCoreModel";
import {AnchorGiftCoreData} from "@/core/AnchorCore/Data/AnchorGiftCoreData";
import {AnchorGiftInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftInsertCoreMessage";
import {AnchorGiftUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftUpdateCoreMessage";
import {AnchorGiftSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftSearchCoreMessage";
import {AnchorGiftDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftDeleteCoreMessage";
import {AnchorGiftCountCoreMessage} from "@/core/AnchorCore/Message/AnchorGiftCountCoreMessage";
export class AnchorGiftCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnchorGiftList Array<AnchorGiftCoreModel>
     */
public static InsertBatch(AnchorGiftList : Array<AnchorGiftCoreModel>) : Promise<boolean> {
return AnchorGiftCoreData.InsertBatch(AnchorGiftList)
}
/**
     * 插入
     * @param AnchorGift AnchorGift : AnchorGiftInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorGift : AnchorGiftInsertCoreMessage) : Promise<boolean> {
return AnchorGiftCoreData.Insert(AnchorGift)
}
/**
     * 修改用户
     * @param AnchorGift AnchorGiftUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorGift : AnchorGiftUpdateCoreMessage) : Promise<number> {
return AnchorGiftCoreData.Update(AnchorGift);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnchorGiftCountCoreMessage) : Promise<number>{
return AnchorGiftCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnchorGiftSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorGiftSearchCoreMessage) : Promise<Array<AnchorGiftCoreModel>>{
return AnchorGiftCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnchorGiftDeleteCoreMessage) : Promise<number>{
return AnchorGiftCoreData.Delete(where);
}
}
