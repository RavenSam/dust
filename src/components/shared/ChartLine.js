import moment from "moment"

import { Chart, Geom, Axis } from "bizcharts"

const data = [
   { date: "20200228", value: "60" },
   { date: "20200229", value: "80" },
   { date: "20200301", value: "99" },
   { date: "20200302", value: "89" },
   { date: "20200303", value: "79" },
   { date: "20200304", value: "89" },
   { date: "20200305", value: "49" },
   { date: "20200306", value: "79" },
   { date: "20200307", value: "69" },
]

export default function ChartLine() {
   const scale = {
      value: {
         type: "linear",
         formatter: (val) => {
            return val + "%"
         },
         tickCount: 5,
         ticks: ["0", "25", "50", "75", "100"],
      },
   }

   return (
      <Chart
         height={400}
         data={data.map((item) => {
            const date = moment(item.date).format("YYYY-MM-DD")
            return Object.assign({ date }, item)
         })}
         scale={scale}
      >
         <Axis name="date" />
         <Axis name="value" />
         <Geom type="line" position="date*value" shape="smooth" />
      </Chart>
   )
}
