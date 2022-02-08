import { useEffect, useState } from "react";

function LineChart (props) {
  const [chart, setChart] = useState(null);
    var xVal=props.data;
  useEffect(() => {
    if (props.google && !chart) {
        var data = new props.google.visualization.DataTable();		      
        data.addColumn('number', 'X');
        data.addColumn('number', 'P(Watts)');		      
        if(!xVal){
            data.addRows([]);
        }else{
            var rowX, decibel =  xVal;
            var dataSet=[];
            var pointRadius = [];
            for (var i = -8, j=0; i < 2; i++, j++) {
                const db = decibel * 1.0 + i;
                const p = Math.pow(10, db / 10) / 1000;
                dataSet[j] = [parseFloat(db.toPrecision(3)), parseFloat((p.toPrecision(3)))];
//		          dataSet[j] = [parseFloat(db.toPrecision(3)), (p.toPrecision(3) * 1.0).toExponential()];
                if (i !== 0) {
                    pointRadius.push(0.1);
                }
                else {
                    pointRadius.push(5);
                }
                if(i===1)rowX=j-1;
            }
            data.addRows( dataSet );
        }		     
      
        var options = {
          title: 'dBm to Watts',
          legend: 'none',
          hAxis: {
            title: 'dBm'
          },
          vAxis: {
            title: 'Watts',
          //   format: 'short'
            format: 'scientific'
          //   format: '#,##0.000'
          },
          colors: ['#a52714', '#097138'],
          crosshair: {
            color: 'grey',
            trigger: 'selection'
          }
        };		 
        var chart = new props.google.visualization.LineChart(document.getElementById('lineChart'));		 
        chart.draw(data, options);
        chart.setSelection([{row: rowX, column: 1}]);
    }
  }, [props.google,xVal,chart]);

  return (
    <>
      {!props.google}
      <div id="lineChart" className={!props.google ? 'd-none' : ''} />
    </>
  )
}

export default LineChart;