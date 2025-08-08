function handleUnionType(value) {
    if (typeof value === "string") {
        console.log("".concat(value.length, " k\u00FD t\u1EF1"));
    }
    else {
        if (value % 2 === 0) {
            console.log("Đây là số chẵn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(7);
