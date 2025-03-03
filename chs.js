/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Join the Discord!": "加入 Discord!",
    "Alchemy": "炼金术",
    "Buildings": "建筑",
    "Alchidle": "炼金放置",
    "Exploration": "探索",
    "Gather": "收集",
    "Gear": "装备",
    "Manages your economy.": "管理你的经济。",
    "Money": "金钱",
    "Multipliers": "乘数",
    "News": "新闻",
    "Reincarnation": "转生",
    "Research": "研究",
    "Reset": "重置",
    "Researches new technologies.": "研究新技术。",
    "Science": "科学",
    "Talents": "天赋",
    "Stats": "统计",
    "Workers": "工人",
    "Unlocks the ability to explore the world.": "解锁探索世界的能力。",
    "Mining...": "采矿中...",
    "Stealing...": "偷取中...",
    "Studying...": "研究中...",
    "Close": "关闭",
    "Game was saved": "游戏已保存",
    "Import Save File": "导入存档文件",
    "Paste Save File Here": "在这里粘贴存档字符串",
    "Armor": "护甲",
    "Blacksmithing": "锻造",
    "Click on the Explore button to find monsters and gather resources.": "点击探索按钮寻找怪物和收集资源。",
    "Efficiency": "效率",
    "Explore": "探索",
    "Explore the map to find monsters to fight!": "探索地图，寻找怪物战斗吧！",
    "Improves your own efficiency, doubling production rate (2x).": "提高你自己的效率，加倍生产率（2x）。",
    "Increases your mining storage by 100%.": "增加你的采矿存储100%。",
    "Mines for ores.": "开采矿石。",
    "Mining": "采矿",
    "Unlocks the ability buy miners and craft weapons and armor.": "解锁购买矿工、制造武器和防具的能力。",
    "Weapon": "武器",
    "You have unlocked the ability to explore the world.": "你已经解锁了探索世界的能力。",
    "Your Mining storage is full!": "你的 采矿 存储已经满了！",
    "Your Money storage is full!": "你的 金钱 存储已经满了！",
    "Your Science storage is full!": "你的 科学 存储已经满了！",
    "Attack": "攻击",
    "Attack Multiplier:": "攻击乘数:",
    "Attack speed increases by 10%": "攻击速度提高10%",
    "Attack Speed Multiplier:": "攻击速度倍增：",
    "Blocking Multiplier:": "格挡乘数：",
    "Decrease enemy health by 5%": "降低敌人生命值5%",
    "Decrease worker cost by 5%": "减少5%的工人成本",
    "Decreases enemy damage by 5%": "降低敌人5%的伤害",
    "Drop Multiplier:": "掉落乘数：",
    "Dungeons": "地下城",
    "Each worker increases output by 1%": "每个工人增加1%的产出",
    "Health Multiplier:": "生命乘数：",
    "Improve your blacksmithing skills, making your gear 5% cheaper": "提高你的锻造技能，使你的装备便宜5%",
    "Improves your bankers, doubling their efficiency (2x).": "提高你的银行家，加倍他们的效率（2倍）。",
    "Improves your miners, doubling their efficiency (2x).": "提高你的矿工，加倍他们的效率（2倍）。",
    "Increase alchemists effiency by 10%": "增加炼金术士10%的效率",
    "Increase drop amount by 10%": "增加掉落量10%",
    "Increase health regeneration by 5%": "增加5%生命回复",
    "Increases damage by 5%": "增加5%的伤害",
    "Increases defense by 5%": "增加5%的防御",
    "Increases health by 5%": "增加5%生命值",
    "Increases player output by 25%": "增加玩家输出25%",
    "Increases workers output by 10%": "使工人产量提高10%",
    "Mathematics": "数学",
    "Monster Damage Multiplier:": "怪物伤害乘数:",
    "Monster Health Multiplier:": "怪物生命值乘数:",
    "Production Multiplier:": "生产乘数:",
    "Regen Multiplier:": "回复乘数:",
    "Storage increase by 5%": "存储空间增加5%",
    "Storage Multiplier:": "存储乘数:",
    "Troglodyte": "穴居人",
    "Worker Multiplier:": "工人乘数:",
    "Patch Notes": "更新日志",
    "Gnome": "地精",
    "Golem": "魔像",
    "Improves your scientists, doubling their efficiency (2x).": "提高你的科学家，双倍他们的效率（2x）。",
    "Troll": "巨魔",
    "Vampire": "吸血鬼",
    "You collected some interesting books from your foe, somehow earning you 5 science points.": "你从敌人那里收集了一些有趣的书籍，从而获得5个科学点数。",
    "You didn't get anything from your foe.": "你没有从敌人那里得到任何东西。",
    "Stop": "停止",
    "Auto Attack": "自动攻击",
    "Blocking": "格挡",
    "Combat Training": "战斗训练",
    "Blocking Training": "格挡训练",
    "Upgrade Priest": "升级牧师",
    "Auto Attack started.": "自动攻击开始。",
    "Auto Attack stopped.": "自动攻击已停止",
    "Fortification": "工事",
    "Improves your priests, doubling their healing power.": "提高你的牧师，加倍他们的治疗能力。",
    "Improves your trainers, doubling their blocking.": "提高你的训练师，加倍他们的阻挡。",
    "Proceeding to the next map...": "前往下一张地图……",
    "That was a tough one, but you made it!": "这个问题很难回答，但你做到了！",
    "Trainer Upgrade": "训练师升级",
    "Unlocks the ability to automatically attack monsters.": "解锁自动攻击怪物的能力。",
    "Unlocks trainers, who can train your defence. Protects you from incoming damage.": "解锁训练师，训练你的防御。保护你免受伤害。",
    "Witch": "女巫",
    "You have been defeated. Lets recover to full health.": "你被击败了。让我们恢复到满血。",
    "You have defeated all monsters in this map!": "你已经击败了这张地图上所有的怪物！",
    "Worker Hut": "工人小屋",
    "Alchemist": "炼金术士",
    "Upgrade": "升级",
    "Advanced Alchemy": "高级炼金术",
    "Alchemy allows you to create powerful infusions that can be used to enhance your abilities.": "炼金术允许你创造强大的灌注，可以用来增强你的能力。",
    "Enchants every aspect of your life.": "使你生活的方方面面都充满魅力。",
    "Further improves your alchemists, doubling their efficiency (2x).": "进一步提升你的炼金术士，使他们的效率翻倍（2倍）",
    "Unlock the secrets of alchemy. Enchant every aspect of your life.": "解开炼金术的秘密。让你生活的方方面面都充满魔力。",
    "Unlocks the ability to build hospitals, increasing your health regen.": "解锁建造医院的能力，提高你的生命回复。",
    "Unlocks the ability to build worker huts, boosting their life qualities and production.": "解锁建造工人小屋的能力，提高他们的生活质量和产量。",
    "Unlocks the ability to reincarnate. Reset your progress and gain a bonus.": "解锁转世的能力。重置进度并获得奖励。",
    "You have found a map leading to a forgotten city, wonder what secrets you'll find there...": "你找到了一张通往一个被遗忘的城市的地图，想知道在那里你会发现什么秘密……",
    "You have found a map leading to a unknown temple, wonder what secrets you'll find there...": "你找到了一张通往未知寺庙的地图，想知道在那里你会发现什么秘密……",
    "You should hire alchemists to start infusing!": "你应该雇佣炼金术士开始灌注！",
    "Clear": "清除",
    "Confirm": "确认",
    "This will reset your progress and give you a bonus on your chosen talents.": "这将重置你的进度，并给你所选择的天赋一个奖励。",
    "Exit": "退出",
    "The forgotten city": "被遗忘的城市",
    "You entered the map and encountered some new monsters!": "你进入了地图，遇到了一些新的怪物！",
    "The unknown temple": "未知的寺庙",
    "Copied to clipboard": "已复制到剪贴板",
    "Copy to Clipboard": "复制到剪贴板",
    "Export Save File": "导出存档文件",
    "Save File": "保存为文件",
    "Cancel": "取消",
    "Are you sure you want to start over? All your progress and your save file will be deleted.": "你确定要重新开始吗？您的所有进度和保存文件将被删除。",
    "Game has been reset": "游戏已经重置",
    "Reset Game": "重置游戏",
    "Welcome Back!": "欢迎回来！",
    "Hospital": "医院",
    "Yes, I am sure": "是的，我确定",
    "Resources generated while you were away:": "当你离开时所生成的资源：",
    "They generated 25% of what they would have generated if you were active.": "它们产生的收益只有你活跃时的25%。",
    "Your workers have been slacking off, but they still managed to generate some resources for you.": "你的工人们一直在偷懒，但他们还是为你生产了一些资源。",
    "Woah! You've reincarnated, let's see what you've learned...": "哇！你已经转世了，让我们看看你学到了什么……",
    "TEST3": "测试3",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'IX': 'IX',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Science Lab ": "科学实验室 ",
    "Scientist ": "科学家 ",
    "Priest ": "牧师 ",
    "Trainer ": "培训师 ",
    "Axe ": "斧子 ",
    "Boots ": "靴子 ",
    "Mighty Blade ": "巨刃 ",
    "Chestplate ": "护胸 ",
    "Hjelmet ": "头盔 ",
    "Hands ": "手套 ",
    "Knife ": "小刀 ",
    "Mine ": "矿山 ",
    "Hospital ": "医院 ",
    "Alchemist ": "炼金术士 ",
    "Barracks ": "军营 ",
    "Miner ": "矿工 ",
    "Sword ": "剑 ",
    "Pants ": "裤子 ",
    "Stick ": "棍子 ",
    "Bank ": "银行 ",
    "Banker ": "银行家 ",
    "Increases regen by ": "提高回复 ",
    "Increases your money storage by ": "提高你的金钱存储 ",
    "Increases your science storage by ": "提高你的科学存储 ",
    "Map: ": "地图: ",
    "Increases your attack by ": "提高你的攻击 ",
    "Increases defence by ": "提高防御 ",
    "Increases your defense power by ": "提高你的防御力 ",
    "Weapon Infusion: ": "武器灌注: ",
    "Efficiency Infusion: ": "效率灌注: ",
    "Health Infusion: ": "生命灌注: ",
    "Block Infusion: ": "格挡灌注: ",
    "Armor Infusion: ": "护甲灌注: ",
    "Power Infusion: ": "力量灌注: ",
    "Regen Infusion: ": "回复灌注: ",
    "Weapon Infusion ": "武器灌注 ",
    "Efficiency Infusion ": "效率灌注 ",
    "Health Infusion ": "生命灌注 ",
    "Block Infusion ": "格挡灌注 ",
    "Armor Infusion ": "护甲灌注 ",
    "Power Infusion ": "力量灌注 ",
    "Regen Infusion ": "回复灌注 ",
    "Level: ": "等级: ",
    "Points: ": "点数: ",
    "Spent: ": "花费: ",
    "Costs: ": "成本: ",
    "Effiency: ": "效率: ",
    "Workers: ": "工人: ",
    "Blueprint: ": "蓝图: ",
    "Increases all weapons damage by ": "提升全部 武器伤害 ",
    "Increases all armors defense by ": "提升全部 护甲防御 ",
    "Increases blocking multiplier by ": "提升格挡乘数 ",
    "Increases production rate by ": "提升生产速率 ",
    "Increases regeneration rate by ": "提升回复速率 ",
    "Increases health regeneration rate by ": "提升生命值回复速率 ",
    "Increases health by ": "提升生命值 ",
    "Increases attack by ": "提升攻击 ",
    "Increases workers production by ": "提升工人生产 ",
    "Worker Hut": "工人小屋 ",
    "Test": "测试",
    "test": "测试",
    "Increases attack, defence, health and regen by ": "提升 攻击，防御，生命值 和 回复 ",
    "Mining: ": "采矿: ",
    "Money: ": "金钱: ",
    "Science: ": "科学: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' IX': ' IX',
    ' XV': ' XV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "/s": "/秒",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^(\+[\d\.]+)$/,
    /^(.+) \/ (.+)$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)T$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^\+ ([\d\.]+)$/,
    /^\+ ([\d\.]+)K$/,
    /^\+ ([\d\.]+)M$/,
    /^\+ ([\d\.]+)B$/,
    /^\+ ([\d\.]+)T$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\+([\d\.,]+)K$/,
    /^\+([\d\.,]+)M$/,
    /^\+([\d\.,]+)B$/,
    /^\+([\d\.,]+)T$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You\'ve completed map (.+) and gained (.+) talent points!$/, '你已经完成了地图 $1 并获得了 $2 天赋点！'],
    [/^You collected some interesting books from your foe, somehow earning you (.+) science points.$/, '你从敌人那里收集了一些有趣的书，从而获得 $1 科学点数。'],
    [/^You collected (.+) gold coins from your foe!$/, '你从敌人那里收集了 $1 金币！'],
    [/^You collected (.+) mining resources from your foe!$/, '你从敌人那里收集了 $1 采矿资源！'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Generates (.+)$/, '生成 $1'],
    [/^You were gone for ([\d\.,]+) days, ([\d\.,]+) hours, ([\d\.,]+) minutes, ([\d\.,]+) seconds.$/, '你离开了 $1 天 $2 小时 $3 分钟，$4 秒。'],
    [/^You were gone for ([\d\.,]+) hours, ([\d\.,]+) minutes, ([\d\.,]+) seconds.$/, '你离开了 $1 小时 $2 分钟，$3 秒。'],
    [/^You were gone for ([\d\.,]+) hours, ([\d\.,]+) minutes.$/, '你离开了 $1 小时 $2 分钟。'],
    [/^You were gone for ([\d\.,]+) minutes, ([\d\.,]+) seconds.$/, '你离开了 $1 分钟 $2 秒。'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);