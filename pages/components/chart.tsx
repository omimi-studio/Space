import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// @ts-ignore
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Charts",
    },
  },
  scales: {
    x: {
      display: false,
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

//   type: "line",
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Grid Line Settings",
//       },
//     },
//     scales: {
//       x: {
//         border: {
//           display: BORDER,
//         },
//         grid: {
//           display: DISPLAY,
//           drawOnChartArea: CHART_AREA,
//           drawTicks: TICKS,
//         },
//       },
//       y: {
//         border: {
//           display: false,
//         },
//         grid: {
//           color: function (context) {
//             if (context.tick.value > 0) {
//               return Utils.CHART_COLORS.green;
//             } else if (context.tick.value < 0) {
//               return Utils.CHART_COLORS.red;
//             }

//             return "#000000";
//           },
//         },
//       },
//     },
//   },
// };
// const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sun"];

function Last7Days() {
  const label = [];
  for (let idx = 0; idx < 7; idx++) {
    const d = new Date();
    d.setDate(d.getDate() - idx);
    label.push(
      d.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    );
  }

  return label.reverse();
}

const labels = Last7Days();

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "nQNT",
      data: labels.map(() => faker.datatype.number({ min: 5000, max: 10000 })),
      tension: 0.5,
      borderColor: "#000000",
      backgroundColor: "rgba(0, 0, 0, 0.09)",
    },
  ],
};

export default function Chart() {
  return <Line options={options} data={data} />;
}
