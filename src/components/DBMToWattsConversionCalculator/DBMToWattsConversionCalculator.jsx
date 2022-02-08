import React, { useState } from 'react';
import { Route, useParams } from "react-router-dom";
import  calculatorTilesAndDESC from "./../../helper/helper";
import "./dbmToWatts.css"
import {
   NumberInput,
   Form,
   Grid,
   Row, 
   Column,
 /*  DataTable,
   Table,
   TableHead,
   TableRow,
   TableHeader,
   TableBody,
   TableCell*/
  } from 'carbon-components-react';
import LineChart from "./GoogleChart/LineChart";
import useGoogleCharts from './GoogleChart/UseGoogleCharts';

 export const DBMToWattsConversionCalculator = (props) => {
    let { id } = useParams();
    const [DBMWattsObjectState, setDBMWattsObjectState] = useState({dbm:0,watt:0});
    const [domain, setDomain] = useState(window.location.host);
    const [lang, setLang] = useState(id);

    const google = useGoogleCharts();
    const DBMWattsObjectData= [
        {
            "dBm": "-30 dBm",
            "W": "0.000001 W"
        },
        {
            "dBm": "-20 dBm",
            "W": "0.00001 W"
        },
        {
            "dBm": "-10 dBm",
            "W": "0.0001 W"
        },
        {
            "dBm": "0 dBm",
            "W": "0.001 W"
        },
        {
            "dBm": "1 dBm",
            "W": "0.0012589 W"
        },
        {
            "dBm": "2 dBm",
            "W": "0.0015849 W"
        },
        {
            "dBm": "3 dBm",
            "W": "0.0019953 W"
        },
        {
            "dBm": "4 dBm",
            "W": "0.0025119 W"
        },
        {
            "dBm": "5 dBm",
            "W": "0.0031628 W"
        },
        {
            "dBm": "6 dBm",
            "W": "0.0039811 W"
        },
        {
            "dBm": "7 dBm",
            "W": "0.0050119 W"
        },
        {
            "dBm": "8 dBm",
            "W": "0.0063096 W"
        },
        {
            "dBm": "9 dBm",
            "W": " 0.0079433 W"
        },
        {
            "dBm": "10 dBm",
            "W": "0.01 W"
        },
        {
            "dBm": "20 dBm",
            "W": "0.1 W"
        },
        {
            "dBm": "30 dBm",
            "W": "1 W"
        },
        {
            "dBm": "40 dBm",
            "W": "10 W"
        },
        {
            "dBm": "50 dBm",
            "W": " 100 W"
        }
    ]
    function dbmwatt() {
        var decibel = DBMWattsObjectState.dbm;
        if(decibel === "." || decibel === isNaN) return;
        var power = eval(decibel / 10);
        var byten = Math.pow(10, power);
        var result = eval(byten / 1000);
        var value = result === Infinity ? 0 : result;
        setDBMWattsObjectState({...DBMWattsObjectState,watt:decimalUptoThree(value)});
    
    }
    
    function wattdbm() {
        var watt = DBMWattsObjectState.watt;
        if(watt === "." || watt === isNaN) return;
        var log10 = Math.log(watt) / Math.log(10);
        var x1000 = eval(3 + log10);
        var result = eval(10 * x1000);
        result = result === -Infinity ? 0 : result;
        setDBMWattsObjectState({...DBMWattsObjectState,dbm:decimalUptoThree(result)});
        //drawCrosshairs(decimalUptoThree(result));
    }
    function decimalUptoThree(num){
        num = Number(num);
        return Math.round((num + Number.EPSILON) * 1000) / 1000;
    }
    
    function keyPressHandler(e){			   
        if ((e.charCode >= 48 && e.charCode <= 57) || (e.charCode === 9 || e.charCode === 8 || e.charCode === 0 || e.charCode === 13 || (e.charCode === 46 && e.target.value.indexOf(".") === -1))) {
            return;
        } else {
            e.preventDefault();
        }		            
    };


    const onChange = (e) => {
        var t = e.target.value;
        console.log(t.indexOf('.'),(t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 4)));
       e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 4)) : t;
        setDBMWattsObjectState({...DBMWattsObjectState,[e.target.name]:e.target.value})
    }
    const DBMToWattsConvertionChart=DBMWattsObjectData.map((value,index)=>{
        return( <tr key={index}>
            <td>{value.dBm}</td>
            <td>{value.W}</td>
         </tr>);
     });
  return (
    <div className="mkt">
        <div className="container">
            <div className="bg-full-width bg-grey-dark2 ">
                <div className="bg-full-width-inner">
                    <Grid>
                        <Row>
                            <Column lg={12} className="large-padding-top large-padding-bottom">
                                <h1 className="text-reverse header-text-large">{calculatorTilesAndDESC('HEAD','dbm',domain,lang)}</h1>
		                        <p className="text-reverse">{calculatorTilesAndDESC('DESC','dbm',domain,lang)}</p>
                            </Column>
                        </Row>
                    </Grid>
                </div>  
            </div>
        </div>
        <div className="container">
            <div className="bg-grey-light bg-full-width padding-top calculator-text-override">
                <div className="bg-full-width-inner padding-bottom">
                    <Grid>
                        <Row>
                            <Column lg={12}>
                                <h3>{calculatorTilesAndDESC('SUBHEAD','dbm',domain,lang)}</h3>
                            </Column>
                        </Row>
                        <Row>
                            <Column lg={12}>
                                <Form className="convertDBM">
                                    <Row>
                                        <Column sm={6} md={2} lg={3} className="form-group">
                                            <NumberInput id="dbm" allowEmpty={true} type="number"  label="Decibel-milliwatt" name="dbm" value={DBMWattsObjectState.dbm} onChange={onChange} onKeyPress={keyPressHandler} onKeyUp={dbmwatt} data-id="a" className="Form-control" hideSteppers={true}/>
                                        </Column>
                                        <Column lg={1} className="form-group text-center"></Column>                                
                                        <Column sm={6} md={2} lg={3} className="form-group">
                                            <NumberInput id="watt" allowEmpty={true} type="number" label="Watt" name="watt" value={DBMWattsObjectState.watt} onChange={onChange} onKeyPress={keyPressHandler} onKeyUp={wattdbm} className="Form-control" data-id="b" hideSteppers={true}/>
                                        </Column>
                                    </Row>
                                </Form>
                            </Column>
                        </Row>
                    </Grid>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="bg-white bg-full-width calculator-text-override">
                <div className="bg-full-width-inner">
                    <Grid>
                        <Row>
                            <Column lg={12}>
		                        <h3>{calculatorTilesAndDESC('CF','dbm',domain,lang)}</h3>
                            </Column>
                            <Column>
			                	<picture>
									<source className="conversionFormula" srcSet={`${process.env.PUBLIC_URL}/assets/images/calculators/calc-watt.svg`}  type="image/webp" alt="decibel to watt calculator"/>
									<source className="conversionFormula" srcSet={`${process.env.PUBLIC_URL}/assets/images/calculators/calc-watt.png`}  type="image/jpeg}" alt="decibel to watt calculator"/>
									<img className="conversionFormula" src={`${process.env.PUBLIC_URL}/assets/images/calculators/calc-watt.png`} alt="decibel to watt calculator"/>
								</picture>
		                    </Column>
						</Row>
                    </Grid>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="bg-grey-light bg-full-width calculator-text-override">
                <div className="bg-full-width-inner large-padding-bottom">
                    <Grid>
                        <Row>
                            <Column lg={12}>
                                <h3>{calculatorTilesAndDESC('GV','dbm',domain,lang)}</h3>
                                <LineChart google={google} data={DBMWattsObjectState.dbm}/>
                            </Column>
                        </Row>
                    </Grid>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="bg-white bg-full-width calculator-text-override">
                <div className="bg-full-width-inner large-padding-bottom">
                    <Grid>
                        <Row>
                            <Column lg={6}>
                                <h3>{calculatorTilesAndDESC('CHEAD','dbm',domain,lang)}</h3>
                                <table className="table bg-white table-condensed ntable" cellSpacing="0" cellPadding="3">
                                    <thead>
                                        <tr>
                                            <th>Power (dBm)</th>
                                            <th>Power (W)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {DBMToWattsConvertionChart}
                                    </tbody>
                                </table>
                            </Column>
                        </Row>
                    </Grid>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="bg-grey-light bg-full-width padding-top calculator-text-override">
                <div className="bg-full-width-inner padding-bottom">
                    <Grid>
                        <Row>
                            <Column lg={12}>
                                <a className="btn btn-secondary" href="">{calculatorTilesAndDESC('CTMB','dbm',domain,lang)}</a>
                            </Column>
                        </Row>
                    </Grid>
                </div>
            </div>
        </div>
    </div>
  )
  }