import {AgencyMemberCoreModel} from "@/core/AgencyCore/Model/AgencyMemberCoreModel";
import {Application} from "@/lib/Application";
import {AgencyMemberInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberInsertCoreMessage";
import {AgencyMemberUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberUpdateCoreMessage";
import {AgencyMemberSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberSearchCoreMessage";
import {AgencyMemberDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberDeleteCoreMessage";
import {AgencyMemberCountCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberCountCoreMessage";
export class AgencyMemberCoreData {
/**
     * 批量插入
     * @param AgencyMemberList Array<AgencyMemberInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AgencyMemberList : Array<AgencyMemberInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyMember/InsertBatch.action", {Data:JSON.stringify(AgencyMemberList)});
}
/**
     * 插入
     * @param AgencyMember  AgencyMemberInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyMember : AgencyMemberInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyMember/Insert.action", AgencyMember);
}
/**
     * 修改用户
     * @param AgencyMember AgencyMemberUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyMember : AgencyMemberUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyMember/Update.action", AgencyMember);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AgencyMemberCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyMember/Count.action", where);
}
/**
     * 搜索用户
     * @param where AgencyMemberSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyMemberSearchCoreMessage) : Promise<Array<AgencyMemberCoreModel>>{
return Application.Service.GetContent("Agency/AgencyMember/Search.action", where);
}
/**
     * 删除用户
     * @param where AgencyMemberDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AgencyMemberDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyMember/Delete.action", where);
}
}
