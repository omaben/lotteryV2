import {AdvertisingClassificationCoreModel} from "@/core/AdvertisingCore/Model/AdvertisingClassificationCoreModel";
import {Application} from "@/lib/Application";
import {AdvertisingClassificationInsertCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationInsertCoreMessage";
import {AdvertisingClassificationUpdateCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationUpdateCoreMessage";
import {AdvertisingClassificationSearchCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationSearchCoreMessage";
import {AdvertisingClassificationDeleteCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationDeleteCoreMessage";
import {AdvertisingClassificationCountCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingClassificationCountCoreMessage";
export class AdvertisingClassificationCoreData {
/**
     * 批量插入
     * @param AdvertisingClassificationList Array<AdvertisingClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AdvertisingClassificationList : Array<AdvertisingClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Advertising/AdvertisingClassification/InsertBatch.action", {Data:JSON.stringify(AdvertisingClassificationList)});
}
/**
     * 插入
     * @param AdvertisingClassification  AdvertisingClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AdvertisingClassification : AdvertisingClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Advertising/AdvertisingClassification/Insert.action", AdvertisingClassification);
}
/**
     * 修改用户
     * @param AdvertisingClassification AdvertisingClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AdvertisingClassification : AdvertisingClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Advertising/AdvertisingClassification/Update.action", AdvertisingClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AdvertisingClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Advertising/AdvertisingClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where AdvertisingClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AdvertisingClassificationSearchCoreMessage) : Promise<Array<AdvertisingClassificationCoreModel>>{
return Application.Service.GetContent("Advertising/AdvertisingClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where AdvertisingClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AdvertisingClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Advertising/AdvertisingClassification/Delete.action", where);
}
}
