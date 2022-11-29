

chrome.runtime.sendMessage("get-metrics", (response)=> {
    console.log("received metrics data", response)
    
})

console.log(chrome)

// chrome.runtime.onMessage.addListener((obj, sender, response) => {
//     console.log("obj", obj)
// })

// // Bar chart [200, 520, 74]
// new Chart(document.getElementById("bar-chart"), {
//     type: 'bar',
//     data: {
//         labels: ["Connections", "Messages", "Followers"],
//         datasets: [
//             {
//                 label: "User Info",
//                 backgroundColor: ["#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
//                 data: [200, 520, 74]
//             },
//         ]
//     },
//     options: {
//         legend: { display: true },
//         title: {
//             display: true,
//             text: 'Your LinkedIn Metrics'
//         }
//     }
// });