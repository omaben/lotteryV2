import {AdvertisingClassificationCoreModel} from "@/core/AdvertisingCore/Model/AdvertisingClassificationCoreModel";
import {AdvertisingClassificationCoreData} from "@/core/AdvertisingCore/Data/AdvertisingClassificationCoreData";
import {AdvertisingClassificationInsertCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationInsertCoreMessage";
import {AdvertisingClassificationUpdateCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationUpdateCoreMessage";
import {AdvertisingClassificationSearchCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationSearchCoreMessage";
import {AdvertisingClassificationDeleteCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationDeleteCoreMessage";
import {AdvertisingClassificationCountCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationCountCoreMessage";
export class AdvertisingClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AdvertisingClassificationList Array<AdvertisingClassificationCoreModel>
     */
public static InsertBatch(AdvertisingClassificationList : Array<AdvertisingClassificationCoreModel>) : Promise<boolean> {
return AdvertisingClassificationCoreData.InsertBatch(AdvertisingClassificationList)
}
/**
     * 插入
     * @param AdvertisingClassification AdvertisingClassification : AdvertisingClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AdvertisingClassification : AdvertisingClassificationInsertCoreMessage) : Promise<boolean> {
return AdvertisingClassificationCoreData.Insert(AdvertisingClassification)
}
/**
     * 修改用户
     * @param AdvertisingClassification AdvertisingClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AdvertisingClassification : AdvertisingClassificationUpdateCoreMessage) : Promise<number> {
return AdvertisingClassificationCoreData.Update(AdvertisingClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AdvertisingClassificationCountCoreMessage) : Promise<number>{
return AdvertisingClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AdvertisingClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AdvertisingClassificationSearchCoreMessage) : Promise<Array<AdvertisingClassificationCoreModel>>{
return AdvertisingClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AdvertisingClassificationDeleteCoreMessage) : Promise<number>{
return AdvertisingClassificationCoreData.Delete(where);
}
}
