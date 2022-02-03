import {AnchorClassficationCoreModel} from "@/core/AnchorCore/Model/AnchorClassficationCoreModel";
import {AnchorClassficationCoreData} from "@/core/AnchorCore/Data/AnchorClassficationCoreData";
import {AnchorClassficationInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationInsertCoreMessage";
import {AnchorClassficationUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationUpdateCoreMessage";
import {AnchorClassficationSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationSearchCoreMessage";
import {AnchorClassficationDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationDeleteCoreMessage";
import {AnchorClassficationCountCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationCountCoreMessage";
export class AnchorClassficationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnchorClassficationList Array<AnchorClassficationCoreModel>
     */
public static InsertBatch(AnchorClassficationList : Array<AnchorClassficationCoreModel>) : Promise<boolean> {
return AnchorClassficationCoreData.InsertBatch(AnchorClassficationList)
}
/**
     * 插入
     * @param AnchorClassfication AnchorClassfication : AnchorClassficationInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorClassfication : AnchorClassficationInsertCoreMessage) : Promise<boolean> {
return AnchorClassficationCoreData.Insert(AnchorClassfication)
}
/**
     * 修改用户
     * @param AnchorClassfication AnchorClassficationUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorClassfication : AnchorClassficationUpdateCoreMessage) : Promise<number> {
return AnchorClassficationCoreData.Update(AnchorClassfication);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnchorClassficationCountCoreMessage) : Promise<number>{
return AnchorClassficationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnchorClassficationSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorClassficationSearchCoreMessage) : Promise<Array<AnchorClassficationCoreModel>>{
return AnchorClassficationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnchorClassficationDeleteCoreMessage) : Promise<number>{
return AnchorClassficationCoreData.Delete(where);
}
}
