import {AdvertisingInfoCoreModel} from "@/core/AdvertisingCore/Model/AdvertisingInfoCoreModel";
import {AdvertisingInfoCoreData} from "@/core/AdvertisingCore/Data/AdvertisingInfoCoreData";
import {AdvertisingInfoInsertCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoInsertCoreMessage";
import {AdvertisingInfoUpdateCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoUpdateCoreMessage";
import {AdvertisingInfoSearchCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoSearchCoreMessage";
import {AdvertisingInfoDeleteCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoDeleteCoreMessage";
import {AdvertisingInfoCountCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoCountCoreMessage";
export class AdvertisingInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AdvertisingInfoList Array<AdvertisingInfoCoreModel>
     */
public static InsertBatch(AdvertisingInfoList : Array<AdvertisingInfoCoreModel>) : Promise<boolean> {
return AdvertisingInfoCoreData.InsertBatch(AdvertisingInfoList)
}
/**
     * 插入
     * @param AdvertisingInfo AdvertisingInfo : AdvertisingInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AdvertisingInfo : AdvertisingInfoInsertCoreMessage) : Promise<boolean> {
return AdvertisingInfoCoreData.Insert(AdvertisingInfo)
}
/**
     * 修改用户
     * @param AdvertisingInfo AdvertisingInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AdvertisingInfo : AdvertisingInfoUpdateCoreMessage) : Promise<number> {
return AdvertisingInfoCoreData.Update(AdvertisingInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AdvertisingInfoCountCoreMessage) : Promise<number>{
return AdvertisingInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AdvertisingInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AdvertisingInfoSearchCoreMessage) : Promise<Array<AdvertisingInfoCoreModel>>{
return AdvertisingInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AdvertisingInfoDeleteCoreMessage) : Promise<number>{
return AdvertisingInfoCoreData.Delete(where);
}
}
