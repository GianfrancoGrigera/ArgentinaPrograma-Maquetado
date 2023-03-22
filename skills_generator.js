const technicalChartList = [
    "htmlChart", "javascriptChart", 
    "cssChart", "angularChart", 
    "typescriptChart", "ionicChart", 
    "bootstrapChart", "phpChart", 
    "cSharpChart", "sqlChart", 
    "netChart", "unityChart", 
    "mongoDBChart", "azureWSChart",
    "gitChart"
];

const technicalChartListNames = [
    "HTML", "Javascript",
    "CSS", "Angular",
    "Typescript", "Ionic",
    "Bootstrap", "PHP",
    "C#", "SQL",
    ".NET", "Unity",
    "MongoDB", "Azure Web Services",
    "GIT"
];

const personalChartList = [
    "collaborationChart", "communicationChart",
    "innovationChart", "flexibilityChart",
    "organizationChart", "leadershipChart",
    "problemResolutionChart", "teamworkChart", 
    "responsibility"
];

const personalChartListNames = [
    "Colaboración", "Comunicación",
    "Innovación", "Flexibilidad",
    "Organización", "Liderazgo",
    "Resolución de problemas", "Trabajo en equipo",
    "Responsabilidad"
];

function loadCharts() {
    generateTechnicalCharts();
    generatePersonalCharts();
}

function generateTechnicalCharts() {
    for (let index = 0; index < technicalChartList.length; index++) {
        var value = generateRandomValue();
        var data = {
            labels: [
                technicalChartListNames[index],
                ""
            ],
            datasets: [
                {
                    data: [value, 100-value],
                    backgroundColor: [
                        "#3174A7",
                        "#AAAAAA"
                    ],
                    hoverBorderColor: [
                        "#3174A7",
                        "#AAAAAA"
                    ]
                }
            ]
        };

        var skillChart = new Chart(document.getElementById(technicalChartList[index]), {
            type: "doughnut",
            data: data,
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                cutoutPercentage: 70,
                tooltips: {
                    filter: function(item, data) {
                        var label = data.labels[item.index];
                        if (label) return item;
                    }
                }
            }
        });
    }
}

function generatePersonalCharts() {
    for (let index = 0; index < personalChartList.length; index++) {
        var value = generateRandomValue();
        var data = {
            labels: [
                personalChartListNames[index],
                ""
            ],
            datasets: [
                {
                    data: [value, 100-value],
                    backgroundColor: [
                        "#1D4564",
                        "#FFFFFF"
                    ],
                    hoverBorderColor: [
                        "#1D4564",
                        "#FFFFFF"
                    ]
                }
            ]
        };

        var skillChart = new Chart(document.getElementById(personalChartList[index]), {
            type: "doughnut",
            data: data,
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                cutoutPercentage: 70,
                tooltips: {
                    filter: function(item, data) {
                        var label = data.labels[item.index];
                        if (label) return item;
                    }
                }
            }
        });
    }
}


function generateRandomValue() {
    return Math.floor((Math.random() * (100 - 1 + 1)) + 1);
}