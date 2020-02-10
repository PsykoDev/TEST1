module.exports = [
    {
        "key": "DefName",
        "name": "DEF 名称",
        "type": "string"
    },
    {
        "key": "Position",
        "name": "偏移字节",
        "type": "number",
        "min": 0,
        "max": 10000,
        "step": 1
    },
    {
        "key": "DefType",
        "name": "数据类型",
        "type": "select",
        "options": [
            {
                "name": "Byte - 1字节",
                "key": "byte1"
            },
            {
                "name": "uint16 - 2字节",
                "key": "uint16"
            },
            {
                "name": "int16 - 2字节",
                "key": "int16"
            },
            {
                "name": "uint32 - 4字节",
                "key": "uint32"
            },
            {
                "name": "int32 - 4字节",
                "key": "int32"
            },
            {
                "name": "uint64 - 8字节",
                "key": "uint64"
            },
            {
                "name": "int64 - 8字节",
                "key": "int64"
            },
            {
                "name": "skillid - 8字节",
                "key": "skillid"
            },
            {
                "name": "vec3 - 12字节",
                "key": "vec3"
            },
            {
                "name": "angle - 2字节",
                "key": "angle"
            }
        ]
    }
];
