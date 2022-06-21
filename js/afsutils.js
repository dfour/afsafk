
dmgMulPerLvl = 1.11611          // based off testing in excel (yes, I still use excel)
attacksPerMin = 60              // estimated apm
defaultOpenPerHour = 592.1      // how many opens an be done in an hour
defaultMaxOpensPerHour = 40     // how many max opens can be done in a hour
defaultSellRate = 0.25          // value returned for sell (avg)
modLetters = " KMBTQEZYXWVU"    // modifiers for currency


passiveData = {
    "nopass": { name: "No Pass", type: "None", image: "images/nopass.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "monster": { name: "Monster", type: "Secret", image: "images/monster.png", dmgMul: 2.8, dmgBMul: 2.8, attSpd: 1.25, movSpd: 1.5, ultChg: 0, usize: 1.5, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "god": { name: "God", type: "Secret", image: "images/god.png", dmgMul: 2.25, dmgBMul: 2.25, attSpd: 1.5, movSpd: 3, ultChg: -2, usize: 1.2, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "timelord": { name: "Time Lord", type: "Secret", image: "images/timelord.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 3, movSpd: 10, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0.25, globalDmg: 0, expReq: 1 },
    "leader3": { name: "Leader 3", type: "Mythical", image: "images/leader3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0.25, expReq: 1 },
    "ace": { name: "Ace", type: "Mythical", image: "images/ace.png", dmgMul: 2.8, dmgBMul: 2.8, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "blessing": { name: "Blessing", type: "Mythical", image: "images/bless.png", dmgMul: 1.75, dmgBMul: 1.75, attSpd: 1, movSpd: 2.5, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "ghostly": { name: "Ghostly", type: "Mythical", image: "images/ghost.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 1.5, movSpd: 10, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "solidgold": { name: "Solid Gold", type: "Mythical", image: "images/solid.png", dmgMul: 1.75, dmgBMul: 1.75, attSpd: 0.8, movSpd: 0.75, ultChg: 0, usize: 1.5, yen: 0.4, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "draconic": { name: "Draconic", type: "Mythical", image: "images/draconic.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 0.8, movSpd: 1.25, ultChg: 0, usize: 1, yen: 0.2, drops: 0.4, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "lucky3": { name: "Lucky 3", type: "Mythical", image: "images/lucky3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0.5, time: 0, globalDmg: 0, expReq: 1 },
    "blizzard": { name: "Blizzard", type: "Mythical", image: "images/blizzard.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 2, movSpd: 3, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "yeti": { name: "Yeti", type: "Mythical", image: "images/yeti.png", dmgMul: 2, dmgBMul: 2, attSpd: 0.7, movSpd: 0.8, ultChg: 0, usize: 1.8, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "tank": { name: "Tank", type: "Legendary", image: "images/tank.png", dmgMul: 1.65, dmgBMul: 1.65, attSpd: 1, movSpd: 0.5, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "giant": { name: "Giant", type: "Legendary", image: "images/giant.png", dmgMul: 1.65, dmgBMul: 1.65, attSpd: 1, movSpd: 0.8, ultChg: 0, usize: 1.55, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "tactical3": { name: "Tactical 3", type: "Legendary", image: "images/tac3.png", dmgMul: 1, dmgBMul: 2, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "genius3": { name: "Genius 3", type: "Legendary", image: "images/genius3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 0.5 },
    "collector3": { name: "Collector 3", type: "Legendary", image: "images/collector3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0.3, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "sorcerer3": { name: "Sorcerer 3", type: "Legendary", image: "images/sorcerer3.png", dmgMul: 1.2, dmgBMul: 1.2, attSpd: 1, movSpd: 1, ultChg: -4, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "tiny": { name: "Tiny", type: "Legendary", image: "images/tiny.png", dmgMul: 1.2, dmgBMul: 1.2, attSpd: 1.65, movSpd: 5, ultChg: 0, usize: 0.6, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "lucky2": { name: "Lucky 2", type: "Legendary", image: "images/lucky2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0.25, time: 0, globalDmg: 0, expReq: 1 },
    "generous": { name: "Generous", type: "Legendary", image: "images/generous.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0.4, drops: 0.4, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "leader2": { name: "Leader 2", type: "Epic", image: "images/leader2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0.12, expReq: 1 },
    "strong3": { name: "Strong 3", type: "Epic", image: "images/strong3.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "tactical2": { name: "Tactical 2", type: "Epic", image: "images/tac2.png", dmgMul: 1, dmgBMul: 1.5, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "rich3": { name: "Rich 3", type: "Epic", image: "images/rich3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0.3, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "collector2": { name: "Collector 2", type: "Epic", image: "images/collector2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0.2, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "speedy": { name: "Speedy", type: "Epic", image: "images/speedy.png", dmgMul: 1, dmgBMul: 1, attSpd: 1.3, movSpd: 3, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "sorcerer2": { name: "Scorcerer 2", type: "Epic", image: "images/sorcerer2.png", dmgMul: 1.1, dmgBMul: 1.1, attSpd: 1, movSpd: 1, ultChg: -2, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "leader1": { name: "Leader 1", type: "Rare", image: "images/leader1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0.05, expReq: 1 },
    "strong2": { name: "Strong 2", type: "Rare", image: "images/strong2.png", dmgMul: 1.25, dmgBMul: 1.25, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "rich2": { name: "Rich 2", type: "Rare", image: "images/rich2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0.2, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "genius2": { name: "Genius 2", type: "Rare", image: "images/genius2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 0.7 },
    "collector1": { name: "Collector 1", type: "Rare", image: "images/collector1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0.1, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "sorcerer1": { name: "Sorcerer 1", type: "Rare", image: "images/sorcerer1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: -1, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "lucky1": { name: "Lucky 1", type: "Rare", image: "images/lucky1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0.1, time: 0, globalDmg: 0, expReq: 1 },
    "tactical1": { name: "Tactical 1", type: "Common", image: "images/tactical1.png", dmgMul: 1, dmgBMul: 1.25, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "strong1": { name: "Strong 1", type: "Common", image: "images/strong1.png", dmgMul: 1.1, dmgBMul: 1.1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "rich1": { name: "Rich 1", type: "Common", image: "images/rich1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0.1, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "genius1": { name: "Genius 1", type: "Common", image: "images/genius1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 0.85 },
    "slow": { name: "Slow", type: "Bad", image: "images/slow.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 0.5, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 },
    "dumb": { name: "Dumb", type: "Bad", image: "images/dumb.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1.2 },
    "weak": { name: "Weak", type: "Bad", image: "images/weak.png", dmgMul: 0.8, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: 0, drops: 0, luck: 0, time: 0, globalDmg: 0, expReq: 1 }
}

raidBase = { soloNorm: "1.13Q", fullNorm: "4.45Q", soloMass: "6.18Q", fullMass: "26.6Q" }

// DPC REQ FOR RAIDS MATH ((WORLD NUMEBR -1 ^ 1.105) * RAID BASE)
// RAID BASES (SN 1.13Q, FN 4.5Q, SM 6.81Q, FM 26.6Q)
worldData = {
    "1": { name: "Super Island", starCost: "80", maxopenCost: "21", worldImage: "https://tr.rbxcdn.com/591d22418690d4c762afb8bbc1c116dd/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "2": { name: "Ninja Village", starCost: "300", maxopenCost: "53", worldImage: "https://tr.rbxcdn.com/2c915090a107336152de93967f74bff4/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "3": { name: "Crazy Town", starCost: "2.5K", maxopenCost: "227", worldImage: "https://tr.rbxcdn.com/b13b29bad076b4d2186799b8b23dd9bc/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "4": { name: "Fruits Island", starCost: "10K", maxopenCost: "593", worldImage: "https://tr.rbxcdn.com/e43597c02ff9af75fdd57733768787dc/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "5": { name: "Hero University", starCost: "50K", maxopenCost: "1.8K", worldImage: "https://tr.rbxcdn.com/1aa4fed60c225ba95d2b50b1db47f34c/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "6": { name: "Walled City", starCost: "250K", maxopenCost: "5.51K", worldImage: "https://tr.rbxcdn.com/870db5469eccce6323b0fb22a7f1d1ef/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "7": { name: "Slayer Army", starCost: "800K", maxopenCost: "12.3K", worldImage: "https://tr.rbxcdn.com/119c3b15816cebaf4be1a819647672e6/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "8": { name: "Ghoul Town", starCost: "3M", maxopenCost: "30.8K", worldImage: "https://tr.rbxcdn.com/e509880fb5d2712bb7afff34db49757a/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "9": { name: "Chimera jungle", starCost: "10M", maxopenCost: "71.1K", worldImage: "https://tr.rbxcdn.com/9c38d441e6c9ccf4dbc3784c026d7ce5/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "10": { name: "Virtual Castle", starCost: "40M", maxopenCost: "185K", worldImage: "https://tr.rbxcdn.com/fabecb3e963f8efaa14efd9d515ee12a/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "11": { name: "Empty Dimension", starCost: "150M", maxopenCost: "464K", worldImage: "https://tr.rbxcdn.com/7a9a96d07615282e2bc34ababe80eb29/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "12": { name: "Cursed High", starCost: "500M", maxopenCost: "1.07M", worldImage: "https://tr.rbxcdn.com/214692f1e31ad36f515baa9da81b2f04/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "13": { name: "XYZ Metropolis", starCost: "1.5B", maxopenCost: "2.29M", worldImage: "https://tr.rbxcdn.com/040a984578d6109da1a9acd67e4e424d/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "14": { name: "9 Crimes Island", starCost: "5B", maxopenCost: "5.28M", worldImage: "https://tr.rbxcdn.com/da5fcbc732c07a2f21c4cd5e70004a1a/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "15": { name: "Destinty Island", starCost: "20B", maxopenCost: "13.8M", worldImage: "https://tr.rbxcdn.com/32aae8f01170443510ead07727605b6f/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "16": { name: "Lucky Kingdom", starCost: "80B", maxopenCost: "36M", worldImage: "https://tr.rbxcdn.com/71bd5618fd1fbf84703a5854c86984d2/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "17": { name: "Land Of Alchemy", starCost: "250B", maxopenCost: "79.5M", worldImage: "https://tr.rbxcdn.com/013dda1f9971b9433ce201835e6bef89/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "18": { name: "Slimey Island", starCost: "780B", maxopenCost: "174M", worldImage: "https://tr.rbxcdn.com/4384c5c633b993d471030dd7cd582311/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "19": { name: "Flame City", starCost: "2T", maxopenCost: "336M", worldImage: "https://tr.rbxcdn.com/26fb75d9712a69dcec07191e816c3bd1/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "20": { name: "Divine Colosseum", starCost: "7T", maxopenCost: "800M", worldImage: "https://tr.rbxcdn.com/e1dbcec32ec674b126db04b969e2d287/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "21": { name: "Kingdom Of Four", starCost: "20T", maxopenCost: "1.65B", worldImage: "https://tr.rbxcdn.com/95fa9f90a696c87fe419c073167bdd55/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "22": { name: "Icy Wastes", starCost: "80T", maxopenCost: "3.75B", worldImage: "https://tr.rbxcdn.com/64c45bf97f2e436ab53188ffbce207b8/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "23": { name: "The Underworld", starCost: "200T", maxopenCost: "8.17B", worldImage: "https://tr.rbxcdn.com/56818c6130a10d86219691da436dd509/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "24": { name: "Psychic City", starCost: "650T", maxopenCost: "18.5B", worldImage: "https://tr.rbxcdn.com/3ac492b63d270a00c856532655ab1e4f/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "25": { name: "The Hole", starCost: "2Q", maxopenCost: "40.3B", worldImage: "https://tr.rbxcdn.com/ae70fbea93e25ffafa05026afe1ad012/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "26": { name: "Ninja City", starCost: "6Q", maxopenCost: "86.4B", worldImage: "https://tr.rbxcdn.com/055924f05b61bd0a32b0ca688e0f8ad0/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "27": { name: "Time Travel Tokyo", starCost: "20Q", maxopenCost: "199B", worldImage: "https://tr.rbxcdn.com/4a8e125a2ccbd7e5d070fbc18944d9fc/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "28": { name: "Orca Road Prison", starCost: "66Q", maxopenCost: "455B", worldImage: "https://tr.rbxcdn.com/10d7c517f7075ca0b185c7e00f1b4f41/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "29": { name: "World Of Games", starCost: "220Q", maxopenCost: "1.04T", worldImage: "https://tr.rbxcdn.com/0f2e2fb750ccaa895372d53480bc8c70/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "30": { name: "Fashion Empire", starCost: "780Q", maxopenCost: "2.24T", worldImage: "https://tr.rbxcdn.com/45e245fb74bb4f9086ffaa55a8e9721a/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "31": { name: "Land Of Guts", starCost: "1.98E", maxopenCost: "4.81T", worldImage: "https://tr.rbxcdn.com/3d7769f34b59a6c0c43c2b26632c5ba7/150/150/Image/Png", divine1: "", divine2: "", divineSpec: "" },
    "32": { name: "???", starCost: "5.95E", maxopenCost: "10T", worldImage: "file:///C:/Users/darkd/Desktop/afscalcgit/afsafk/images/nextworld-icon.png", divine1: "", divine2: "", divineSpec: "" },
    "33": { name: "???", starCost: "20E", maxopenCost: "22.5T", worldImage: "file:///C:/Users/darkd/Desktop/afscalcgit/afsafk/images/nextworld-icon.png", divine1: "", divine2: "", divineSpec: "" },
}




///////////// Non AFS functions //////////////////////
/**
 * Convert the string to a number and if fails return 1
 * @param {string} sv string to always return a number
 */
function forceNumber(sv) {
    if ($.isNumeric(sv)) {
        return parseInt(sv)
    } else {
        return 1
    }
}

///////////// AFS Functions /////////////////////////

function getPassiveByName(strName) {
    rtarr = []
    for (const [key, value] of Object.entries(passiveData)) {
        if (value.name == strName) {
            rtarr = value
        }
    }
    return rtarr
}

/**
 * Get the damage per hit for the unit at a certain level
 * @param {number} baseDMG The base damage of the unit
 * @param {number} level The level of the unit
 * @param {bool} shiny True If the unit is shiny
 */
function getDmgForLevel(baseDMG, level, shiny) {
    if (shiny) {
        baseDMG *= 1.75
    }
    powlvl = Math.pow(dmgMulPerLvl, (level - 1))
    return powlvl * baseDMG
}

/**
 * Gets a string representing the percentage change for a talent value
 * @param {number} talVal The talent value for attack
 */
function dmgTalToPer(talVal) {
    return (((talVal - 5) * 6) + "%")
}

/**
 * Gets the multiplicative value for multiplying against damage
 * @param {number} talVal The talent value
 */
function dmgTalToMod(talVal) {
    return (1 + ((talVal - 5) * 6) / 100)
}

/**
 * Converts the value up through the modifying letters
 * @param {number} value The number value
 * @param {string} mod The Current letter used to identify value
 */
function convertToFormatted(value, mod) {
    if (mod === undefined) {
        mod = " "
    }
    cmodpos = modLetters.indexOf(mod.toUpperCase())
    while (Math.ceil(Math.log10(value + 1)) > 3) {
        cmodpos += 1 // move to next modifier
        value = value * 0.001// divide val by 1000 to mve 3 places down
    }

    return parseFloat(value.toFixed(2)) + modLetters[cmodpos]
    //return value.toPrecision(3) + modLetters[cmodpos];
}

/**
 * Shorthand convertToFormatted
 * @param {number} v the number value
 * @param {string} m Optional: the letter modifier
 */
function ctf(v, m) {
    return convertToFormatted(v, m)
}

/**
 *  Convert AFS value to number and letter modifier
 * @param {string} stringVal AF format value
 */
function costModConvert(stringVal) {
    if (stringVal === undefined) {
        return;
    }
    lastChar = String(stringVal).slice(-1)
    if ($.isNumeric(lastChar)) {
        return [stringVal, ""]
    } else {
        return [stringVal.slice(0, stringVal.length - 1), lastChar]
    }
}

/**
 *  shorthand costModConvert
 * @param {string} strv AF format value
 * @returns 
 */
function cmc(strv) {
    return costModConvert(stringVal);;
}

/**
 * Converts AFS format number to standard format
 * @param {number} decimal 
 * @param {string} mod 
 */
function getDecimalValue(decimal, mod) {
    cmodpos = modLetters.indexOf(mod.toUpperCase())
    fullVal = Math.pow(1000, cmodpos) * decimal
    return fullVal
}

/**
 * Shorthand to convert AFS to normal number
 * @param {string} strval normal format number
 */
function qfv(strval) {
    decmod = costModConvert(strval)
    return getDecimalValue(decmod[0], decmod[1])
}