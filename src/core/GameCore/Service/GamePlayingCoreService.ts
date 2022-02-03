import {GamePlayingCoreModel} from "@/core/GameCore/Model/GamePlayingCoreModel";
import {GamePlayingCoreData} from "@/core/GameCore/Data/GamePlayingCoreData";
import {GamePlayingInsertCoreMessage} from "@/core/GameCore/Message/GamePlayingInsertCoreMessage";
import {GamePlayingUpdateCoreMessage} from "@/core/GameCore/Message/GamePlayingUpdateCoreMessage";
import {GamePlayingSearchCoreMessage} from "@/core/GameCore/Message/GamePlayingSearchCoreMessage";
import {GamePlayingDeleteCoreMessage} from "@/core/GameCore/Message/GamePlayingDeleteCoreMessage";
import {GamePlayingCountCoreMessage} from "@/core/GameCore/Message/GamePlayingCountCoreMessage";
export class GamePlayingCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GamePlayingList Array<GamePlayingCoreModel>
     */
public static InsertBatch(GamePlayingList : Array<GamePlayingCoreModel>) : Promise<boolean> {
return GamePlayingCoreData.InsertBatch(GamePlayingList)
}
/**
     * 插入
     * @param GamePlaying GamePlaying : GamePlayingInsertCoreMessage
     * @constructor
     */
public static Insert(GamePlaying : GamePlayingInsertCoreMessage) : Promise<boolean> {
return GamePlayingCoreData.Insert(GamePlaying)
}
/**
     * 修改用户
     * @param GamePlaying GamePlayingUpdateCoreMessage
     * @constructor
     */
public static Update(GamePlaying : GamePlayingUpdateCoreMessage) : Promise<number> {
return GamePlayingCoreData.Update(GamePlaying);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GamePlayingCountCoreMessage) : Promise<number>{
return GamePlayingCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GamePlayingSearchCoreMessage
     * @constructor
     */
public static Search(where : GamePlayingSearchCoreMessage) : Promise<Array<GamePlayingCoreModel>>{
return GamePlayingCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GamePlayingDeleteCoreMessage) : Promise<number>{
return GamePlayingCoreData.Delete(where);
}
}
