import {AgencyClassificationCoreModel} from "@/core/AgencyCore/Model/AgencyClassificationCoreModel";
import {Application} from "@/lib/Application";
import {AgencyClassificationInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationInsertCoreMessage";
import {AgencyClassificationUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationUpdateCoreMessage";
import {AgencyClassificationSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationSearchCoreMessage";
import {AgencyClassificationDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationDeleteCoreMessage";
import {AgencyClassificationCountCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationCountCoreMessage";
export class AgencyClassificationCoreData {
/**
     * 批量插入
     * @param AgencyClassificationList Array<AgencyClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AgencyClassificationList : Array<AgencyClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyClassification/InsertBatch.action", {Data:JSON.stringify(AgencyClassificationList)});
}
/**
     * 插入
     * @param AgencyClassification  AgencyClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyClassification : AgencyClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyClassification/Insert.action", AgencyClassification);
}
/**
     * 修改用户
     * @param AgencyClassification AgencyClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyClassification : AgencyClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyClassification/Update.action", AgencyClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AgencyClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where AgencyClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyClassificationSearchCoreMessage) : Promise<Array<AgencyClassificationCoreModel>>{
return Application.Service.GetContent("Agency/AgencyClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where AgencyClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AgencyClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyClassification/Delete.action", where);
}
}
