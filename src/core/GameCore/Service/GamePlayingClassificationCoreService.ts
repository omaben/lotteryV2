import {GamePlayingClassificationCoreModel} from "@/core/GameCore/Model/GamePlayingClassificationCoreModel";
import {GamePlayingClassificationCoreData} from "@/core/GameCore/Data/GamePlayingClassificationCoreData";
import {GamePlayingClassificationInsertCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationInsertCoreMessage";
import {GamePlayingClassificationUpdateCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationUpdateCoreMessage";
import {GamePlayingClassificationSearchCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationSearchCoreMessage";
import {GamePlayingClassificationDeleteCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationDeleteCoreMessage";
import {GamePlayingClassificationCountCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationCountCoreMessage";
export class GamePlayingClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GamePlayingClassificationList Array<GamePlayingClassificationCoreModel>
     */
public static InsertBatch(GamePlayingClassificationList : Array<GamePlayingClassificationCoreModel>) : Promise<boolean> {
return GamePlayingClassificationCoreData.InsertBatch(GamePlayingClassificationList)
}
/**
     * 插入
     * @param GamePlayingClassification GamePlayingClassification : GamePlayingClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(GamePlayingClassification : GamePlayingClassificationInsertCoreMessage) : Promise<boolean> {
return GamePlayingClassificationCoreData.Insert(GamePlayingClassification)
}
/**
     * 修改用户
     * @param GamePlayingClassification GamePlayingClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(GamePlayingClassification : GamePlayingClassificationUpdateCoreMessage) : Promise<number> {
return GamePlayingClassificationCoreData.Update(GamePlayingClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GamePlayingClassificationCountCoreMessage) : Promise<number>{
return GamePlayingClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GamePlayingClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : GamePlayingClassificationSearchCoreMessage) : Promise<Array<GamePlayingClassificationCoreModel>>{
return GamePlayingClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GamePlayingClassificationDeleteCoreMessage) : Promise<number>{
return GamePlayingClassificationCoreData.Delete(where);
}
}
