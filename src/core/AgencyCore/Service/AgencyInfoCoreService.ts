import {AgencyInfoCoreModel} from "@/core/AgencyCore/Model/AgencyInfoCoreModel";
import {AgencyInfoCoreData} from "@/core/AgencyCore/Data/AgencyInfoCoreData";
import {AgencyInfoInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoInsertCoreMessage";
import {AgencyInfoUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoUpdateCoreMessage";
import {AgencyInfoSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoSearchCoreMessage";
import {AgencyInfoDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoDeleteCoreMessage";
import {AgencyInfoCountCoreMessage} from "@/core/AgencyCore/Message/AgencyInfoCountCoreMessage";
export class AgencyInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AgencyInfoList Array<AgencyInfoCoreModel>
     */
public static InsertBatch(AgencyInfoList : Array<AgencyInfoCoreModel>) : Promise<boolean> {
return AgencyInfoCoreData.InsertBatch(AgencyInfoList)
}
/**
     * 插入
     * @param AgencyInfo AgencyInfo : AgencyInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyInfo : AgencyInfoInsertCoreMessage) : Promise<boolean> {
return AgencyInfoCoreData.Insert(AgencyInfo)
}
/**
     * 修改用户
     * @param AgencyInfo AgencyInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyInfo : AgencyInfoUpdateCoreMessage) : Promise<number> {
return AgencyInfoCoreData.Update(AgencyInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AgencyInfoCountCoreMessage) : Promise<number>{
return AgencyInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AgencyInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyInfoSearchCoreMessage) : Promise<Array<AgencyInfoCoreModel>>{
return AgencyInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AgencyInfoDeleteCoreMessage) : Promise<number>{
return AgencyInfoCoreData.Delete(where);
}
}
