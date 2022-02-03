import {AdvertisingInfoCoreModel} from "@/core/AdvertisingCore/Model/AdvertisingInfoCoreModel";
import {Application} from "@/lib/Application";
import {AdvertisingInfoInsertCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoInsertCoreMessage";
import {AdvertisingInfoUpdateCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoUpdateCoreMessage";
import {AdvertisingInfoSearchCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoSearchCoreMessage";
import {AdvertisingInfoDeleteCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoDeleteCoreMessage";
import {AdvertisingInfoCountCoreMessage} from "@/core/AdvertisingCore/Message/AdvertisingInfoCountCoreMessage";
export class AdvertisingInfoCoreData {
/**
     * 批量插入
     * @param AdvertisingInfoList Array<AdvertisingInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AdvertisingInfoList : Array<AdvertisingInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Advertising/AdvertisingInfo/InsertBatch.action", {Data:JSON.stringify(AdvertisingInfoList)});
}
/**
     * 插入
     * @param AdvertisingInfo  AdvertisingInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AdvertisingInfo : AdvertisingInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Advertising/AdvertisingInfo/Insert.action", AdvertisingInfo);
}
/**
     * 修改用户
     * @param AdvertisingInfo AdvertisingInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AdvertisingInfo : AdvertisingInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Advertising/AdvertisingInfo/Update.action", AdvertisingInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AdvertisingInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Advertising/AdvertisingInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where AdvertisingInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AdvertisingInfoSearchCoreMessage) : Promise<Array<AdvertisingInfoCoreModel>>{
return Application.Service.GetContent("Advertising/AdvertisingInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where AdvertisingInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AdvertisingInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Advertising/AdvertisingInfo/Delete.action", where);
}
}
