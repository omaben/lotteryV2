import {GameClassificationCoreModel} from "@/core/GameCore/Model/GameClassificationCoreModel";
import {GameClassificationCoreData} from "@/core/GameCore/Data/GameClassificationCoreData";
import {GameClassificationInsertCoreMessage} from "@/core/GameCore/Message/GameClassificationInsertCoreMessage";
import {GameClassificationUpdateCoreMessage} from "@/core/GameCore/Message/GameClassificationUpdateCoreMessage";
import {GameClassificationSearchCoreMessage} from "@/core/GameCore/Message/GameClassificationSearchCoreMessage";
import {GameClassificationDeleteCoreMessage} from "@/core/GameCore/Message/GameClassificationDeleteCoreMessage";
import {GameClassificationCountCoreMessage} from "@/core/GameCore/Message/GameClassificationCountCoreMessage";
export class GameClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GameClassificationList Array<GameClassificationCoreModel>
     */
public static InsertBatch(GameClassificationList : Array<GameClassificationCoreModel>) : Promise<boolean> {
return GameClassificationCoreData.InsertBatch(GameClassificationList)
}
/**
     * 插入
     * @param GameClassification GameClassification : GameClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(GameClassification : GameClassificationInsertCoreMessage) : Promise<boolean> {
return GameClassificationCoreData.Insert(GameClassification)
}
/**
     * 修改用户
     * @param GameClassification GameClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(GameClassification : GameClassificationUpdateCoreMessage) : Promise<number> {
return GameClassificationCoreData.Update(GameClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GameClassificationCountCoreMessage) : Promise<number>{
return GameClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GameClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : GameClassificationSearchCoreMessage) : Promise<Array<GameClassificationCoreModel>>{
return GameClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GameClassificationDeleteCoreMessage) : Promise<number>{
return GameClassificationCoreData.Delete(where);
}
}
