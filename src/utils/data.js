export const data = [
    {
        name: "Folder 1",
        isFolder: true,
        children: [
            {
                name: "File 1",
                isFolder: false
            },
            {
                name: "Folder 2",
                isFolder: true,
                children: [
                    {
                        name: "File 3",
                        isFolder: false
                    },
                    {
                        name: "File 4",
                        isFolder: false
                    },
                ]
            },
        ]
    },
    {
        name: "File 5",
        isFolder: false,
    },
    {
        name: "Folder 3",
        isFolder: true,
        children: [
            {
                name: "Folder 4",
                isFolder: true,
                children: [
                    {
                        name: "File 6",
                        isFolder: false
                    },
                    {
                        name: "File 7",
                        isFolder: false
                    }
                ]
            },
            {
                name: "File 8",
                isFolder: false
            },
        ]

    }

]