import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';

export default function DataGraph( { event, dataType } ) {

    return(
        <div className="graph">
            <LineChart width={300} height={200} data={event} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey={dataType} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="short_title" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}