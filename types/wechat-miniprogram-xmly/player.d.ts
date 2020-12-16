/**
 * 声音类型
 */
export enum TRACK_TYPE {
    FREE = 'free', // 免费声音
    PAID = 'paid', // 付费声音
    PAID_FREE_ALL = 'paid_free_all', // 付费 - 整条免费试听
    PAID_FREE_FEW = 'paid_free_few', // 付费 - 部分免费试听
}

// 播放模式
export enum PLAY_MODE {
    ORDER = 'order', // 顺序播放（同列表循环，到最后一个会切到第一个继续播）
    LOOP = 'loop', // 单曲循环播放
    RANDOM = 'random', // 随机播放（到最后一个会切到第一个继续播）
    SINGLE = 'single', // 单个播放（播完即止）
}

/**
 * 播放倍率
 */
export enum PLAY_BACK_RATE {
    HALF = 0.5, // 半速
    ONE = 1,
    DOUBLE = 2,
}

/**
 * 播放器状态
 */
export enum PLAY_STATE {
    READY = 'ready', // 初始状态
    LOADING = 'loading', // 加载中（1.播放，2.恢复播放，3.seek）引起的声音加载
    PLAYING = 'playing', // 播放中
    PAUSED = 'paused', // 暂停
    STOPED = 'stoped', // 停止
    ERROR = 'error', // 播放器异常
}

/**
 * 播放相关事件
 */
export enum PLAY_EVENT {
    PLAY = 'play', // 播放
    CANPLAY = 'canplay', // 进入可播放状态
    PAUSE = 'pause', // 暂停
    RESUME = 'resume', // 续播
    STOP = 'stop', // 停止
    END = 'end', // 播放结束
    NEXT = 'next', // 点击下一首, 或自动切换下一首
    PREV = 'prev', // 点击上一首
    LOADING = 'loading', // 因为加载阻塞播放触发
    TIME_UPDATE = 'timeupdate', // 播放进度更新
    SOUND_CHANGE = 'change.sound', // 声音切换
    PLAYLIST_CHANGE = 'change.playlist', // 播放列表切换
    PLAYSTATE_CHANGE = 'change.playState', // 播放状态切换
    PLAYMODE_CHANGE = 'change.playMode', // 切换播放模式
    PLAYBACKRATE_CHANGE = 'change.playbackRate', // 播放速率切换
    ERROR = 'error', // 错误
    ERROR_ACCESSTOKEN = 'error.accessToken', // access_token 过期、失效、不存在事件
    NEED_PAY = 'sound.needPay', // 需要购买
}

/**
 * 播放器通用声音, 可直接播放(用户传入的第三方声音、喜马声音解析后生成)
 */
export interface Sound {
    id: number; // 音频 id
    src: string; // 播放地址（目前支持 m4a, aac, mp3, wav 格式）
    title: string; // 音频标题, 原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
    coverImgUrl?: string; // 音频背景图
    epname?: string; // 专辑名称
    singer?: string; // 歌手名
    duration?: number; // 音频时长(单位: 秒)
}

/**
 * 声音集合
 */
interface Sounds<T> {
    [k: string]: T;
}

/**
 * 播放列表
 */
type PlayList = number[];

export default class XMplayer {
    /**
     * 播放
     * @param id 声音 ID | 空
     */
    play(option?: number): Promise<void>;
    /**
     * 预加载声音
     * @param  id 声音id
     */
    preloadSound(id: number): Promise<void>;
    /**
     * 获取当前 sound
     *  - 当前播放器加载的，未必是正在播放
     */
    getSound(): Sound | void;
    /**
     * 是否在广告播放中
     */
    isAdvertising(): boolean;
    /**
     * 断点续播
     * 小程序会直接播放，如果只需要恢复数据可手动暂停
     */
    recover(): void;
    /**
     * 续播之前播放的音频
     */
    protected resume(): void;
    /**
     * 按播放列表索引播放
     * @param index 播放列表中的索引
     */
    playByIndex(index: number): void;
    /**
     * 上一个/上一曲
     * （自动切到最后一个）
     */
    prev(): void;
    /**
     * 下一个/下一曲
     * （自动切到第一个）
     */
    next(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 停止，重新播放会从头播。
     */
    stop(): void;
    /**
     * 获取当前播放声音在播放列表中的索引
     */
    getCurrentIndex(): number;
    /**
     * 跳转到指定播放位置
     *  - 超过总时长会触发 end 事件，随后自动切换播放下一首
     *
     * @param position 指定的播放位置，单位：秒
     */
    seek(position: number): void;
    /**
     * 前进，向后（向结束位置）拖动
     * @param  dif 间距，正数（单位：秒）
     */
    seekForward(dif?: number): void;
    /**
     * 后退，向前（向开始位置）拖动
     * @param  dif 间距，正数（单位：秒）
     */
    seekBack(dif?: number): void;
    /**
     * 设置 sounds
     * @param sounds 声音集合
     */
    setSounds(sounds: Sounds<Sound>): void;
    /**
     * 获取 sounds
     */
    getSounds(): Sounds<Sound>;
    /**
     * 获取当前音频的播放位置，单位：秒
     */
    getCurrentTime(): number;
    /**
     * 获取正在播放音频的总播放时长（单位：秒）
     *  - 只有在有合法 src 时返回
     */
    getDuration(): number;
    /**
     * 获取当前音频已缓冲的时间
     */
    getBuffered(): number;
    /**
     * 设置播放列表
     * @param playlist 播放列表
     */
    setPlaylist(playlist?: PlayList): void;
    /**
     * 获取播放列表
     * @param isCurrent 是否返回当前播放列表，即：是否与播放模式有关
     *  - true：与播放模式有关，例如：随机播放模式，当前的播放列表会乱序，与原始设置的列表数组比较，元素顺序已改变；
     *  - false：与播放模式无关，即：初始化时或setPlaylist()时设置的 playlist；
     */
    getPlaylist(isCurrent?: boolean): PlayList;
    /**
     * 设置播放模式
     * @param playMode 播放模式
     */
    setPlayMode(playMode: PLAY_MODE): void;
    /**
     * 获取播放模式
     */
    getPlayMode(): PLAY_MODE;
    /**
     * 设置播放速度
     *  - 基础库 2.11.0 开始支持
     *  - Android 需要 6 及以上版本
     *  - 切换上一个、下一个音频，倍速会恢复正常的速度
     *
     * @param playbackRate 播放速度（0.5、1、2）
     */
    setPlaybackRate(playbackRate: PLAY_BACK_RATE): void;
    /**
     * 获取当前播放速度
     */
    getPlaybackRate(): number;
    /**
     * 获取当前播放器状态
     */
    getPlayState(): PLAY_STATE;
    /**
     * 设置自动跳过
     *
     * @param autoskip
     */
    setAutoskip(autoskip: boolean): void;
    /**
     * 销毁播放器
     */
    destory(): void;
}
