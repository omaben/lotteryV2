import {ShortVideoClassificationCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoClassificationCoreModel";
import {Application} from "@/lib/Application";
import {ShortVideoClassificationInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationInsertCoreMessage";
import {ShortVideoClassificationUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationUpdateCoreMessage";
import {ShortVideoClassificationSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationSearchCoreMessage";
import {ShortVideoClassificationDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationDeleteCoreMessage";
import {ShortVideoClassificationCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoClassificationCountCoreMessage";
export class ShortVideoClassificationCoreData {
/**
     * 批量插入
     * @param ShortVideoClassificationList Array<ShortVideoClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(ShortVideoClassificationList : Array<ShortVideoClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoClassification/InsertBatch.action", {Data:JSON.stringify(ShortVideoClassificationList)});
}
/**
     * 插入
     * @param ShortVideoClassification  ShortVideoClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoClassification : ShortVideoClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoClassification/Insert.action", ShortVideoClassification);
}
/**
     * 修改用户
     * @param ShortVideoClassification ShortVideoClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoClassification : ShortVideoClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoClassification/Update.action", ShortVideoClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where ShortVideoClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoClassificationSearchCoreMessage) : Promise<Array<ShortVideoClassificationCoreModel>>{
return Application.Service.GetContent("ShortVideo/ShortVideoClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where ShortVideoClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : ShortVideoClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoClassification/Delete.action", where);
}
}
