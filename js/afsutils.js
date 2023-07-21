
dmgMulPerLvl = 1.11611          // based off testing in excel (yes, I still use excel)
attacksPerMin = 60              // estimated apm
defaultOpenPerHour = 592.1      // how many opens an be done in an hour
defaultMaxOpensPerHour = 40     // how many max opens can be done in a hour
defaultSellRate = 0.25          // value returned for sell (avg)
modLetters = " KMBTQEZYXWVU"    // modifiers for currency


passiveData = {
    "nopass": { name: "No Pass", type: "None", image: "images/nopass.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "protagonist": { name: "Protagonist", type: "Secret", image: "images/protag.png", dmgMul: 1.4, dmgBMul: 1.4, attSpd: 1.25, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 0.4, lvllimit: "+5" },
    "monster": { name: "Monster", type: "Secret", image: "images/monster.png", dmgMul: 2.8, dmgBMul: 2.8, attSpd: 1.25, movSpd: 1.5, ultChg: 0, usize: 1.5, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "god": { name: "God", type: "Secret", image: "images/god.png", dmgMul: 2.25, dmgBMul: 2.25, attSpd: 1.5, movSpd: 3, ultChg: -2, usize: 1.2, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "timelord": { name: "Time Lord", type: "Secret", image: "images/timelord.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 3, movSpd: 10, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0.25, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "prodigy": { name: "Prodigy", type: "Mythical", image: "images/prodigy.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 0.5, lvllimit: 0 },
    "mercenary": { name: "Mercenary", type: "Mythical", image: "images/mercenary.png", dmgMul: 1.65, dmgBMul: 2.35, attSpd: 1.2, movSpd: 1, ultChg: 0, usize: 1, yen: "-1", drops: "-0.5", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "leader3": { name: "Leader 3", type: "Mythical", image: "images/leader3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0.25, expReq: 1, lvllimit: 0 },
    "ace": { name: "Ace", type: "Mythical", image: "images/ace.png", dmgMul: 2.8, dmgBMul: 2.8, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "blessing": { name: "Blessing", type: "Mythical", image: "images/bless.png", dmgMul: 1.75, dmgBMul: 1.75, attSpd: 1, movSpd: 2.5, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "ghostly": { name: "Ghostly", type: "Mythical", image: "images/ghost.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 1.5, movSpd: 10, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "solidgold": { name: "Solid Gold", type: "Mythical", image: "images/solid.png", dmgMul: 1.75, dmgBMul: 1.75, attSpd: 0.8, movSpd: 0.75, ultChg: 0, usize: 1.5, yen: "+0.4", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "draconic": { name: "Draconic", type: "Mythical", image: "images/draconic.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 0.8, movSpd: 1.25, ultChg: 0, usize: 1, yen: "+0.2", drops: "+0.4", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "lucky3": { name: "Lucky 3", type: "Mythical", image: "images/lucky3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0.5, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "blizzard": { name: "Blizzard", type: "Mythical", image: "images/blizzard.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 2, movSpd: 3, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "yeti": { name: "Yeti", type: "Mythical", image: "images/yeti.png", dmgMul: 2, dmgBMul: 2, attSpd: 0.7, movSpd: 0.8, ultChg: 0, usize: 1.8, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "diligent3": { name: "Diligent 3", type: "Mythical", image: "images/diligent3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: "+5" },
    "tank": { name: "Tank", type: "Legendary", image: "images/tank.png", dmgMul: 1.65, dmgBMul: 1.65, attSpd: 1, movSpd: 0.5, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "giant": { name: "Giant", type: "Legendary", image: "images/giant.png", dmgMul: 1.65, dmgBMul: 1.65, attSpd: 1, movSpd: 0.8, ultChg: 0, usize: 1.55, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "tactical3": { name: "Tactical 3", type: "Legendary", image: "images/tac3.png", dmgMul: 1, dmgBMul: 2, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "genius3": { name: "Genius 3", type: "Legendary", image: "images/genius3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 0.5, lvllimit: 0 },
    "collector3": { name: "Collector 3", type: "Legendary", image: "images/collector3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0.3", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "sorcerer3": { name: "Sorcerer 3", type: "Legendary", image: "images/sorcerer3.png", dmgMul: 1.2, dmgBMul: 1.2, attSpd: 1, movSpd: 1, ultChg: -4, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "tiny": { name: "Tiny", type: "Legendary", image: "images/tiny.png", dmgMul: 1.2, dmgBMul: 1.2, attSpd: 1.65, movSpd: 5, ultChg: 0, usize: 0.6, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "lucky2": { name: "Lucky 2", type: "Legendary", image: "images/lucky2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0.25, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "generous": { name: "Generous", type: "Legendary", image: "images/generous.png", dmgMul: 1.25, dmgBMul: 1.25, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0.4", drops: "+0.4", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "diligent2": { name: "Diligent 2", type: "Legendary", image: "images/diligent2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: "+3" },
    "leader2": { name: "Leader 2", type: "Epic", image: "images/leader2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0.12, expReq: 1, lvllimit: 0 },
    "strong3": { name: "Strong 3", type: "Epic", image: "images/strong3.png", dmgMul: 1.5, dmgBMul: 1.5, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "tactical2": { name: "Tactical 2", type: "Epic", image: "images/tac2.png", dmgMul: 1, dmgBMul: 1.5, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "rich3": { name: "Rich 3", type: "Epic", image: "images/rich3.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0.3", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "collector2": { name: "Collector 2", type: "Epic", image: "images/collector2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0.2", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "speedy": { name: "Speedy", type: "Epic", image: "images/speedy.png", dmgMul: 1, dmgBMul: 1, attSpd: 1.3, movSpd: 3, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "sorcerer2": { name: "Scorcerer 2", type: "Epic", image: "images/sorcerer2.png", dmgMul: 1.1, dmgBMul: 1.1, attSpd: 1, movSpd: 1, ultChg: -2, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "leader1": { name: "Leader 1", type: "Rare", image: "images/leader1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0.05, expReq: 1, lvllimit: 0 },
    "strong2": { name: "Strong 2", type: "Rare", image: "images/strong2.png", dmgMul: 1.25, dmgBMul: 1.25, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "rich2": { name: "Rich 2", type: "Rare", image: "images/rich2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0.2", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "genius2": { name: "Genius 2", type: "Rare", image: "images/genius2.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 0.7, lvllimit: 0 },
    "collector1": { name: "Collector 1", type: "Rare", image: "images/collector1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0.1", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "sorcerer1": { name: "Sorcerer 1", type: "Rare", image: "images/sorcerer1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: -1, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "lucky1": { name: "Lucky 1", type: "Rare", image: "images/lucky1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0.1, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "diligent1": { name: "Diligent 1", type: "Rare", image: "images/diligent1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: "+1" },
    "tactical1": { name: "Tactical 1", type: "Common", image: "images/tactical1.png", dmgMul: 1, dmgBMul: 1.25, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "strong1": { name: "Strong 1", type: "Common", image: "images/strong1.png", dmgMul: 1.1, dmgBMul: 1.1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "rich1": { name: "Rich 1", type: "Common", image: "images/rich1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+.1", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "genius1": { name: "Genius 1", type: "Common", image: "images/genius1.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 0.85, lvllimit: 0 },
    "slow": { name: "Slow", type: "Bad", image: "images/slow.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 0.5, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 },
    "dumb": { name: "Dumb", type: "Bad", image: "images/dumb.png", dmgMul: 1, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1.2, lvllimit: 0 },
    "weak": { name: "Weak", type: "Bad", image: "images/weak.png", dmgMul: 0.8, dmgBMul: 1, attSpd: 1, movSpd: 1, ultChg: 0, usize: 1, yen: "+0", drops: "+0", luck: 0, time: 0, globalDmg: 0, expReq: 1, lvllimit: 0 }
}

raidBase = { soloNorm: "1.13Q", fullNorm: "4.45Q", soloMass: "6.18Q", fullMass: "26.6Q" }

// DPC REQ FOR RAIDS MATH ((WORLD NUMEBR -1 ^ 1.105) * RAID BASE)
// RAID BASES (SN 1.13Q, FN 4.5Q, SM 6.81Q, FM 26.6Q)
worldData = {
    "1": { name: "Super Island", starCost: "80", maxopenCost: "21", worldImage: "https://tr.rbxcdn.com/591d22418690d4c762afb8bbc1c116dd/150/150/Image/Png", divine1: "Vegtable", divine2: "None", divineSpec: "" },
    "2": { name: "Ninja Village", starCost: "300", maxopenCost: "53", worldImage: "https://tr.rbxcdn.com/4e27cb7e5fe792c839e19ba3c56a82a3/150/150/Image/Png", divine1: "Vegtable", divine2: "None", divineSpec: "" },
    "3": { name: "Crazy Town", starCost: "2.5K", maxopenCost: "227", worldImage: "https://tr.rbxcdn.com/b13b29bad076b4d2186799b8b23dd9bc/150/150/Image/Png", divine1: "Vegtable", divine2: "None", divineSpec: "" },
    "4": { name: "Fruits Island", starCost: "10K", maxopenCost: "593", worldImage: "https://tr.rbxcdn.com/1874cd70ca4a52906a61c42de87e8829/150/150/Image/Png", divine1: "Vegtable", divine2: "None", divineSpec: "" },
    "5": { name: "Hero University", starCost: "50K", maxopenCost: "1.8K", worldImage: "https://tr.rbxcdn.com/1aa4fed60c225ba95d2b50b1db47f34c/150/150/Image/Png", divine1: "Vegtable", divine2: "None", divineSpec: "" },
    "6": { name: "Walled City", starCost: "250K", maxopenCost: "5.51K", worldImage: "https://tr.rbxcdn.com/4ef34249b41b2fea53d28ca69c571de7/150/150/Image/Png", divine1: "Great Ninja", divine2: "Vegtable", divineSpec: "" },
    "7": { name: "Slayer Army", starCost: "800K", maxopenCost: "12.3K", worldImage: "https://tr.rbxcdn.com/b89d53f8ba3394ae55c81e6f6885b672/150/150/Image/Png", divine1: "Great Ninja", divine2: "Vegtable", divineSpec: "" },
    "8": { name: "Ghoul Town", starCost: "3M", maxopenCost: "30.8K", worldImage: "https://tr.rbxcdn.com/e509880fb5d2712bb7afff34db49757a/150/150/Image/Png", divine1: "Great Ninja", divine2: "Vegtable", divineSpec: "" },
    "9": { name: "Chimera jungle", starCost: "10M", maxopenCost: "71.1K", worldImage: "https://tr.rbxcdn.com/9c38d441e6c9ccf4dbc3784c026d7ce5/150/150/Image/Png", divine1: "Great Ninja", divine2: "Vegtable", divineSpec: "" },
    "10": { name: "Virtual Castle", starCost: "40M", maxopenCost: "185K", worldImage: "https://tr.rbxcdn.com/fabecb3e963f8efaa14efd9d515ee12a/150/150/Image/Png", divine1: "Great Ninja", divine2: "Vegtable", divineSpec: "" },
    "11": { name: "Empty Dimension", starCost: "150M", maxopenCost: "464K", worldImage: "https://tr.rbxcdn.com/7a9a96d07615282e2bc34ababe80eb29/150/150/Image/Png", divine1: "Hernando", divine2: "Great Ninja", divineSpec: "" },
    "12": { name: "Cursed High", starCost: "500M", maxopenCost: "1.07M", worldImage: "https://tr.rbxcdn.com/f1ca0da25f04ce7e52ab669c4708ff25/150/150/Image/Png", divine1: "Hernando", divine2: "Great Ninja", divineSpec: "" },
    "13": { name: "XYZ Metropolis", starCost: "1.5B", maxopenCost: "2.29M", worldImage: "https://tr.rbxcdn.com/a180156ac58a9b81b337bf38258bf8a0/150/150/Image/Png", divine1: "Hernando", divine2: "Great Ninja", divineSpec: "" },
    "14": { name: "9 Crimes Island", starCost: "5B", maxopenCost: "5.28M", worldImage: "https://tr.rbxcdn.com/da5fcbc732c07a2f21c4cd5e70004a1a/150/150/Image/Png", divine1: "Hernando", divine2: "Great Ninja", divineSpec: "" },
    "15": { name: "Destinty Island", starCost: "20B", maxopenCost: "13.8M", worldImage: "https://tr.rbxcdn.com/04915f68cb25a208aaa11f06685edfcc/150/150/Image/Png", divine1: "Hernando", divine2: "Great Ninja", divineSpec: "" },
    "16": { name: "Lucky Kingdom", starCost: "80B", maxopenCost: "36M", worldImage: "https://tr.rbxcdn.com/71bd5618fd1fbf84703a5854c86984d2/150/150/Image/Png", divine1: "Engineered Alien", divine2: "Hernando", divineSpec: "" },
    "17": { name: "Land Of Alchemy", starCost: "250B", maxopenCost: "79.5M", worldImage: "https://tr.rbxcdn.com/013dda1f9971b9433ce201835e6bef89/150/150/Image/Png", divine1: "Engineered Alien", divine2: "Hernando", divineSpec: "" },
    "18": { name: "Slimey Island", starCost: "780B", maxopenCost: "174M", worldImage: "https://tr.rbxcdn.com/4384c5c633b993d471030dd7cd582311/150/150/Image/Png", divine1: "Engineered Alien", divine2: "Hernando", divineSpec: "" },
    "19": { name: "Flame City", starCost: "2T", maxopenCost: "336M", worldImage: "https://tr.rbxcdn.com/26fb75d9712a69dcec07191e816c3bd1/150/150/Image/Png", divine1: "Red Bat", divine2: "Engineered Alien", divineSpec: "" },
    "20": { name: "Divine Colosseum", starCost: "7T", maxopenCost: "800M", worldImage: "https://tr.rbxcdn.com/26623a22523c972a36087251f70c6435/150/150/Image/Png", divine1: "Red Bat", divine2: "Engineered Alien", divineSpec: "" },
    "21": { name: "Kingdom Of Four", starCost: "20T", maxopenCost: "1.65B", worldImage: "https://tr.rbxcdn.com/95fa9f90a696c87fe419c073167bdd55/150/150/Image/Png", divine1: "Red Bat", divine2: "Engineered Alien", divineSpec: "" },
    "22": { name: "Icy Wastes", starCost: "80T", maxopenCost: "3.75B", worldImage: "https://tr.rbxcdn.com/64c45bf97f2e436ab53188ffbce207b8/150/150/Image/Png", divine1: "Flaming Hero", divine2: "Red Bat", divineSpec: "" },
    "23": { name: "The Underworld", starCost: "200T", maxopenCost: "8.17B", worldImage: "https://tr.rbxcdn.com/56818c6130a10d86219691da436dd509/150/150/Image/Png", divine1: "Flaming Hero", divine2: "Red Bat", divineSpec: "" },
    "24": { name: "Psychic City", starCost: "650T", maxopenCost: "18.5B", worldImage: "https://tr.rbxcdn.com/3ac492b63d270a00c856532655ab1e4f/150/150/Image/Png", divine1: "Flaming Hero", divine2: "Red Bat", divineSpec: "" },
    "25": { name: "The Hole", starCost: "2Q", maxopenCost: "40.3B", worldImage: "https://tr.rbxcdn.com/ae70fbea93e25ffafa05026afe1ad012/150/150/Image/Png", divine1: "True Golden King", divine2: "Flaming Hero", divineSpec: "" },
    "26": { name: "Ninja City", starCost: "6Q", maxopenCost: "86.4B", worldImage: "https://tr.rbxcdn.com/7e6fc22b1e5a5ea874a7cd7c23e126e9/150/150/Image/Png", divine1: "True Golden King", divine2: "Flaming Hero", divineSpec: "" },
    "27": { name: "Time Travel Tokyo", starCost: "20Q", maxopenCost: "199B", worldImage: "https://tr.rbxcdn.com/4a8e125a2ccbd7e5d070fbc18944d9fc/150/150/Image/Png", divine1: "True Golden King", divine2: "Flaming Hero", divineSpec: "" },
    "28": { name: "Orca Road Prison", starCost: "66Q", maxopenCost: "455B", worldImage: "https://tr.rbxcdn.com/10d7c517f7075ca0b185c7e00f1b4f41/150/150/Image/Png", divine1: "Dragon-King", divine2: "True Golden King", divineSpec: "" },
    "29": { name: "World Of Games", starCost: "220Q", maxopenCost: "1.04T", worldImage: "https://tr.rbxcdn.com/0f2e2fb750ccaa895372d53480bc8c70/150/150/Image/Png", divine1: "Dragon-King", divine2: "True Golden King", divineSpec: "" },
    "30": { name: "Fashion Empire", starCost: "780Q", maxopenCost: "2.24T", worldImage: "https://tr.rbxcdn.com/45e245fb74bb4f9086ffaa55a8e9721a/150/150/Image/Png", divine1: "Dragon-King", divine2: "True Golden King", divineSpec: "" },
    "31": { name: "Land Of Guts", starCost: "1.98E", maxopenCost: "4.81T", worldImage: "https://tr.rbxcdn.com/3d7769f34b59a6c0c43c2b26632c5ba7/150/150/Image/Png", divine1: "Sensitive Slayer", divine2: "Dragon-King", divineSpec: "" },
    "32": { name: "Hero Village", starCost: "6E", maxopenCost: "10.3T", worldImage: "https://tr.rbxcdn.com/0fad08b52c65e0984f89da05e10383c1/150/150/Image/Png", divine1: "Sensitive Slayer", divine2: "Dragon-King", divineSpec: "" },
    "33": { name: "Sorcerer Empire", starCost: "18E", maxopenCost: "22.2T", worldImage: "https://tr.rbxcdn.com/fbc245a58b0164cd83a257a4764d598a/150/150/Image/Png", divine1: "Sensitive Slayer", divine2: "Dragon-King", divineSpec: "" },
    "34": { name: "Soul Academy", starCost: "60E", maxopenCost: "47.5T", worldImage: "https://tr.rbxcdn.com/7e380df16830522e145408c9752fe4b2/150/150/Image/Png", divine1: "Cheif Maid", divine2: "Sensitive Slayer", divineSpec: "" },
    "35": { name: "World At War", starCost: "162E", maxopenCost: "101T", worldImage: "https://tr.rbxcdn.com/eba1776108cbf6248683b95f50d385ca/150/150/Image/Png", divine1: "Cheif Maid", divine2: "Sensitive Slayer", divineSpec: "" },
    "36": { name: "The Abyss", starCost: "486E", maxopenCost: "218T", worldImage: "https://tr.rbxcdn.com/f2fa0e544cf8bedf6d3a6627c5f97f9d/150/150/Image/Png", divine1: "Cheif Maid", divine2: "Sensitive Slayer", divineSpec: "" },
    "37": { name: "TBC", starCost: "1.47Z", maxopenCost: "354T", worldImage: "https://tr.rbxcdn.com/f6afd8d9c4076d191afae5f29c640a0c/150/150/Image/Png", divine1: "Cheif Maid", divine2: "Sensitive Slayer", divineSpec: "" },
    "38": { name: "TBC", starCost: "1.4Z", maxopenCost: "581T", worldImage: "https://tr.rbxcdn.com/2a96e5d61b67a4c538d0fc696d21adb1/150/150/Image/Png", divine1: "Cheif Maid", divine2: "Sensitive Slayer", divineSpec: "" },
    "39": { name: "TBC", starCost: "450Z", maxopenCost: "900T", worldImage: "images/nextworld-icon.png", divine1: "Cheif Maid", divine2: "Sensitive Slayer", divineSpec: "" }
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

function timeBetweenMO(mop, tem, tlm) {
    mopm = (mop) ? 2 : 1
    mot = 90 * (1 / mopm) * (1 / (tem + tlm))
    mot = parseFloat(mot.toFixed(2))
    return mot
}

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
    return costModConvert(strv);;
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
/**
 * get cost for 1 hour of opening
 * @param {number} cps cost per star
 * @param {number} opens opens at once
 * @param {bool} gpass has ast open game pass
 * @param {bool} fiftyk has 50k opens badge
 * @param {number} fuse fusing or selling
 * @param {bool} vip has vip pass
 */
function getCostOfHourOpens(cps, opens, gpass, fiftyk, fuse, vip) {
    if (vip) {
        cps = cps * 0.75 // 25% discount for VIP
    }
    gpmul = gpass ? 1 : 2
    k50mul = fiftyk ? 1 : 2
    fc = cps * opens * defaultOpenPerHour * gpmul * k50mul
    if (fuse == false) {
        fc = fc * (1 - defaultSellRate)
    }
    return fc
}

/**
 * get the cost of an hour of max opens
 * @param {number} cps cost per star
 * @param {number} invSpace space in inv
 * @param {bool} doFuse is fusing units
 * @param {bool} vip is vip
 * @param {bool} mop max open pass 
 */
function getCostOfHourMaxOpen(cps, invSpace, doFuse, vip, mop, tem, tlm) {
    mopm = (mop) ? 2 : 1

    if (vip) {
        cps = cps * 0.75 // 25% discount for VIP
    }

    fc = cps * ((defaultMaxOpensPerHour * mopm) * (tem + tlm)) * invSpace
    sellprice = 0
    if (doFuse == false) {
        sellprice = fc * defaultSellRate
    }
    return (fc * 0.5) - sellprice
}

/**
 * get amount of stars opened per hour
 * @param {number} opens amount of opens at once
 * @param {bool} gpass has game pass
 * @param {bool} fiftyk has 50k badge
 */
function getHourOpens(opens, gpass, fiftyk) {
    to = opens * defaultOpenPerHour * gpass * fiftyk
    return to
}

/**
 * get an hour of max opens
 * @param {number} invSpace amount of space in inv
 * @param {bool} mop true if owns max open pass
 * @param {number} tem time event multiplyer
 * @param {number} tlm time lord multiplier
 */
function getHourMaxOpen(invSpace, mop, tem, tlm) {
    mopm = (mop) ? 2 : 1
    to = ((defaultMaxOpensPerHour * mopm) * (tem + tlm)) * invSpace
    return to
}

/** 
 * Get tokens for 1 hour of max opens
 * @param {number} invSpace amount of space in inv
 * @param {bool} mop true if owns max open pass
 * @param {number} tem time event multiplyer
 * @param {number} tlm time lord multiplier
 */
function getOneHourMaxToken(cpmo, mop, tem, tlm) {
    mopm = (mop) ? 2 : 1
    return cpmo * ((defaultMaxOpensPerHour * mopm) * (tem + tlm))
}