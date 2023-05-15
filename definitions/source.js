["USERS"].forEach((table) =>
    declare({
        type: "declaration",
        database: "int-data-department",
        schema: "giai_test",
        name: table,
        tags: ["raw"],
    })
);
