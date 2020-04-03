module.exports = [
    {
        "key": "DefName",
        "name": "DEF name",
        "type": "string"
    },
    {
        "key": "Position",
        "name": "Offset byte",
        "type": "number",
        "min": 0,
        "max": 10000,
        "step": 1
    },
    {
        "key": "DefType",
        "name": "type of data",
        "type": "select",
        "options": [
            {
                "name": "Byte - 1 byte",
                "key": "byte1"
            },
            {
                "name": "uint16 - 2bytes",
                "key": "uint16"
            },
            {
                "name": "int16 - 2bytes",
                "key": "int16"
            },
            {
                "name": "uint32 - 4bytes",
                "key": "uint32"
            },
            {
                "name": "int32 - 4bytes",
                "key": "int32"
            },
            {
                "name": "uint64 - 8bytes",
                "key": "uint64"
            },
            {
                "name": "int64 - 8bytes",
                "key": "int64"
            },
            {
                "name": "skillid - 8bytes",
                "key": "skillid"
            },
            {
                "name": "vec3 - 12bytes",
                "key": "vec3"
            },
            {
                "name": "angle - 2bytes",
                "key": "angle"
            }
        ]
    }
];
