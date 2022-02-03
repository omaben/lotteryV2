import {AgencyMemberCoreModel} from "@/core/AgencyCore/Model/AgencyMemberCoreModel";
import {AgencyMemberCoreData} from "@/core/AgencyCore/Data/AgencyMemberCoreData";
import {AgencyMemberInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberInsertCoreMessage";
import {AgencyMemberUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberUpdateCoreMessage";
import {AgencyMemberSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberSearchCoreMessage";
import {AgencyMemberDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberDeleteCoreMessage";
import {AgencyMemberCountCoreMessage} from "@/core/AgencyCore/Message/AgencyMemberCountCoreMessage";
export class AgencyMemberCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AgencyMemberList Array<AgencyMemberCoreModel>
     */
public static InsertBatch(AgencyMemberList : Array<AgencyMemberCoreModel>) : Promise<boolean> {
return AgencyMemberCoreData.InsertBatch(AgencyMemberList)
}
/**
     * 插入
     * @param AgencyMember AgencyMember : AgencyMemberInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyMember : AgencyMemberInsertCoreMessage) : Promise<boolean> {
return AgencyMemberCoreData.Insert(AgencyMember)
}
/**
     * 修改用户
     * @param AgencyMember AgencyMemberUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyMember : AgencyMemberUpdateCoreMessage) : Promise<number> {
return AgencyMemberCoreData.Update(AgencyMember);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AgencyMemberCountCoreMessage) : Promise<number>{
return AgencyMemberCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AgencyMemberSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyMemberSearchCoreMessage) : Promise<Array<AgencyMemberCoreModel>>{
return AgencyMemberCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AgencyMemberDeleteCoreMessage) : Promise<number>{
return AgencyMemberCoreData.Delete(where);
}
}
