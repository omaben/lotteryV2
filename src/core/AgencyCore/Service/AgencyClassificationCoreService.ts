import {AgencyClassificationCoreModel} from "@/core/AgencyCore/Model/AgencyClassificationCoreModel";
import {AgencyClassificationCoreData} from "@/core/AgencyCore/Data/AgencyClassificationCoreData";
import {AgencyClassificationInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationInsertCoreMessage";
import {AgencyClassificationUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationUpdateCoreMessage";
import {AgencyClassificationSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationSearchCoreMessage";
import {AgencyClassificationDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationDeleteCoreMessage";
import {AgencyClassificationCountCoreMessage} from "@/core/AgencyCore/Message/AgencyClassificationCountCoreMessage";
export class AgencyClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AgencyClassificationList Array<AgencyClassificationCoreModel>
     */
public static InsertBatch(AgencyClassificationList : Array<AgencyClassificationCoreModel>) : Promise<boolean> {
return AgencyClassificationCoreData.InsertBatch(AgencyClassificationList)
}
/**
     * 插入
     * @param AgencyClassification AgencyClassification : AgencyClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyClassification : AgencyClassificationInsertCoreMessage) : Promise<boolean> {
return AgencyClassificationCoreData.Insert(AgencyClassification)
}
/**
     * 修改用户
     * @param AgencyClassification AgencyClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyClassification : AgencyClassificationUpdateCoreMessage) : Promise<number> {
return AgencyClassificationCoreData.Update(AgencyClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AgencyClassificationCountCoreMessage) : Promise<number>{
return AgencyClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AgencyClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyClassificationSearchCoreMessage) : Promise<Array<AgencyClassificationCoreModel>>{
return AgencyClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AgencyClassificationDeleteCoreMessage) : Promise<number>{
return AgencyClassificationCoreData.Delete(where);
}
}
