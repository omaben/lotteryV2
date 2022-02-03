import {ShortVideoClassificationCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoClassificationCoreModel";
import {ShortVideoClassificationCoreData} from "@/core/ShortVideoCore/Data/ShortVideoClassificationCoreData";
import {ShortVideoClassificationInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationInsertCoreMessage";
import {ShortVideoClassificationUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationUpdateCoreMessage";
import {ShortVideoClassificationSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationSearchCoreMessage";
import {ShortVideoClassificationDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationDeleteCoreMessage";
import {ShortVideoClassificationCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationCountCoreMessage";
export class ShortVideoClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param ShortVideoClassificationList Array<ShortVideoClassificationCoreModel>
     */
public static InsertBatch(ShortVideoClassificationList : Array<ShortVideoClassificationCoreModel>) : Promise<boolean> {
return ShortVideoClassificationCoreData.InsertBatch(ShortVideoClassificationList)
}
/**
     * 插入
     * @param ShortVideoClassification ShortVideoClassification : ShortVideoClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoClassification : ShortVideoClassificationInsertCoreMessage) : Promise<boolean> {
return ShortVideoClassificationCoreData.Insert(ShortVideoClassification)
}
/**
     * 修改用户
     * @param ShortVideoClassification ShortVideoClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoClassification : ShortVideoClassificationUpdateCoreMessage) : Promise<number> {
return ShortVideoClassificationCoreData.Update(ShortVideoClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoClassificationCountCoreMessage) : Promise<number>{
return ShortVideoClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where ShortVideoClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoClassificationSearchCoreMessage) : Promise<Array<ShortVideoClassificationCoreModel>>{
return ShortVideoClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : ShortVideoClassificationDeleteCoreMessage) : Promise<number>{
return ShortVideoClassificationCoreData.Delete(where);
}
}
