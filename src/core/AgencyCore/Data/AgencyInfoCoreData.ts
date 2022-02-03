import {AgencyInfoCoreModel} from "@/core/AgencyCore/Model/AgencyInfoCoreModel";
import {Application} from "@/lib/Application";
import {AgencyInfoInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoInsertCoreMessage";
import {AgencyInfoUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoUpdateCoreMessage";
import {AgencyInfoSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoSearchCoreMessage";
import {AgencyInfoDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoDeleteCoreMessage";
import {AgencyInfoCountCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoCountCoreMessage";
export class AgencyInfoCoreData {
/**
     * 批量插入
     * @param AgencyInfoList Array<AgencyInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AgencyInfoList : Array<AgencyInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyInfo/InsertBatch.action", {Data:JSON.stringify(AgencyInfoList)});
}
/**
     * 插入
     * @param AgencyInfo  AgencyInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyInfo : AgencyInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyInfo/Insert.action", AgencyInfo);
}
/**
     * 修改用户
     * @param AgencyInfo AgencyInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyInfo : AgencyInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyInfo/Update.action", AgencyInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AgencyInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where AgencyInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyInfoSearchCoreMessage) : Promise<Array<AgencyInfoCoreModel>>{
return Application.Service.GetContent("Agency/AgencyInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where AgencyInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AgencyInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyInfo/Delete.action", where);
}
}
