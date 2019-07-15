enum Type {
    POLL = 0,
    SREQ = 1,
    AREQ = 2,
    SRSP = 3,
}

enum Subsystem {
    RESERVED = 0,
    SYS = 1,
    MAC = 2,
    NWK = 3,
    AF = 4,
    ZDO = 5,
    SAPI = 6,
    UTIL = 7,
    DEBUG = 8,
    APP = 9,
    APP_CNF = 15,
}

const DataStart = 4;
const SOF = 0xFE;

const PositionDataLength = 1;
const PositionCmd0 = 2;
const PositionCmd1 = 3;

const MinimalMessageLength = 5;

export {
    Type, Subsystem, DataStart, SOF, PositionDataLength, MinimalMessageLength, PositionCmd0, PositionCmd1,
};