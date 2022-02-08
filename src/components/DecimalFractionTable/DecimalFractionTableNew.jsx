import React, { useState,useContext } from 'react';
//import { GlobalContext } from "../../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import properties from "./../../common/globalCompanyNames.json";
import {
   NumberInput,Form,Grid, Row, Column
  } from 'carbon-components-react';

 const DecimalFractionTable = () => {
    const [decimalObjectState, setDecimalObjectState] = useState({decimal:'',wholeNumber:'',numerator:'',denominator:''});
    const history = useHistory();
    const dFConvertionData= [
        {"Fraction":"1/2","EFraction":["2/4","3/6","4/8","5/10","6/12","7/14","8/16","9/18","10/20","11/22","12/24"],"Decimal":".5"},
        {"Fraction":"1/3","EFraction":["2/6","3/9","4/12","5/15","6/18","7/21","8/24","9/27","10/30","11/33","12/36"],"Decimal":".333"},
        {"Fraction":"2/3","EFraction":["4/6","6/9","8/12","10/15","12/18","14/21","16/24","18/27","20/30","22/33","24/36"],"Decimal":".666"},
        {"Fraction":"1/4","EFraction":["2/8","3/12","4/16","5/20","6/24","7/28","8/32","9/36","10/40","11/44","12/48"],"Decimal":".25"},
        {"Fraction":"3/4","EFraction":["6/8","9/12","12/16","15/20","18/24","21/28","24/32","27/36","30/40","33/44","36/48"],"Decimal":".75"},
        {"Fraction":"1/5","EFraction":["2/10","3/15","4/20","5/25","6/30","7/35","8/40","9/45","10/50","11/55","12/60"],"Decimal":".2"},
        {"Fraction":"2/5","EFraction":["4/10","6/15","8/20","10/25","12/30","14/35","16/40","18/45","20/50","22/55","24/60"],"Decimal":".4"},
        {"Fraction":"3/5","EFraction":["6/10","9/15","12/20","15/25","18/30","21/35","24/40","27/45","30/50","33/55","36/60"],"Decimal":".6"},
        {"Fraction":"4/5","EFraction":["8/10","12/15","16/20","20/25","24/30","28/35","32/40","36/45","40/50","44/55","48/60"],"Decimal":".8"},
        {"Fraction":"1/6","EFraction":["2/12","3/18","4/24","5/30","6/36","7/42","8/48","9/54","10/60","11/66","12/72"],"Decimal":".166"},
        {"Fraction":"5/6","EFraction":["10/12","15/18","20/24","25/30","30/36","35/42","40/48","45/54","50/60","55/66","60/72"],"Decimal":".833"},
        {"Fraction":"1/7","EFraction":["2/14","3/21","4/28","5/35","6/42","7/49","8/56","9/63","10/70","11/77","12/84"],"Decimal":".143"},
        {"Fraction":"2/7","EFraction":["4/14","6/21","8/28","10/35","12/42","14/49","16/56","18/63","20/70","22/77","24/84"],"Decimal":".286"},
        {"Fraction":"3/7","EFraction":["6/14","9/21","12/28","15/35","18/42","21/49","24/56","27/63","30/70","33/77","36/84"],"Decimal":".429"},
        {"Fraction":"4/7","EFraction":["8/14","12/21","16/28","20/35","24/42","28/49","32/56","36/63","40/70","44/77","48/84"],"Decimal":".571"},
        {"Fraction":"5/7","EFraction":["10/14","15/21","20/28","25/35","30/42","35/49","40/56","45/63","50/70","55/77","60/84"],"Decimal":".714"},
        {"Fraction":"6/7","EFraction":["12/14","18/21","24/28","30/35","36/42","42/49","48/56","54/63","60/70","66/77","72/84"],"Decimal":".857"},
        {"Fraction":"1/8","EFraction":["2/16","3/24","4/32","5/40","6/48","7/56","8/64","9/72","10/80","11/88","12/96"],"Decimal":".125"},
        {"Fraction":"3/8","EFraction":["6/16","9/24","12/32","15/40","18/48","21/56","24/64","27/72","30/80","33/88","36/96"],"Decimal":".375"},
        {"Fraction":"5/8","EFraction":["10/16","15/24","20/32","25/40","30/48","35/56","40/64","45/72","50/80","55/88","60/96"],"Decimal":".625"},
        {"Fraction":"7/8","EFraction":["14/16","21/24","28/32","35/40","42/48","49/56","56/64","63/72","70/80","77/88","84/96"],"Decimal":".875"},
        {"Fraction":"1/9","EFraction":["2/18","3/27","4/36","5/45","6/54","7/63","8/72","9/81","10/90","11/99","12/108"],"Decimal":".111"},
        {"Fraction":"2/9","EFraction":["4/18","6/27","8/36","10/45","12/54","14/63","16/72","18/81","20/90","22/99","24/108"],"Decimal":".222"},
        {"Fraction":"4/9","EFraction":["8/18","12/27","16/36","20/45","24/54","28/63","32/72","36/81","40/90","44/99","48/108"],"Decimal":".444"},
        {"Fraction":"5/9","EFraction":["10/18","15/27","20/36","25/45","30/54","35/63","40/72","45/81","50/90","55/99","60/108"],"Decimal":".555"},
        {"Fraction":"7/9","EFraction":["14/18","21/27","28/36","35/45","42/54","49/63","56/72","63/81","70/90","77/99","84/108"],"Decimal":".777"},
        {"Fraction":"8/9","EFraction":["16/18","24/27","32/36","40/45","48/54","56/63","64/72","72/81","80/90","88/99","96/108"],"Decimal":".888"}
    ]

    //const { decimalObject } = useContext(GlobalContext);
    function keyPressHandler(e) {	
        if (e.target.dataset.pattern == "number" && 
                (e.charCode >= 48 && e.charCode <= 57 || (e.charCode == 9 || e.charCode == 8 || e.charCode == 0 || e.charCode == 13))) {
            return;
        } else if (e.target.dataset.pattern == "decimal" && 
                (e.charCode >= 48 && e.charCode <= 57 || (e.charCode == 9 || e.charCode == 8 || e.charCode == 0 || e.charCode == 13 || (e.charCode == 46 && e.target.value.indexOf(".") == -1)))) {
            return;
        } else {
            e.preventDefault();
        }
    }
    function decimalHandler() {
        setDecimalObjectState({...decimalObjectState,wholeNumber:'',numerator:'',denominator:''});
      
            var decimal1 = decimalObjectState.decimal;        
            if (String(decimal1) == "") {                   // If no valid decimal value, do not show fractional value.
                return;
            }
        
            if (String(decimal1).split('.')[0] == "") {
                decimal1 = 0 + decimal1;
            }
        
            var gcd = function (a, b) {
                if (b < 0.0000001) return a;                // Since there is a limited precision we need to limit the value.
                return gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
            };
        
            var whole;
            var fraction = decimal1;
            var len = fraction.toString().length - 2;
            if (len == "") { len = "0"; }
            var denominator = Math.pow(10, len);
            var numerator = fraction * denominator;
            var divisor = gcd(numerator, denominator);    
        
            numerator /= divisor;                         
            denominator /= divisor;
        
            if (denominator == 1) {
                whole = Math.floor(numerator);
                numerator = "";
                denominator = "";
            } else if (numerator > denominator) {
                whole = String(decimal1).split('.')[0];
                numerator = +numerator - (whole * denominator);
                denominator = denominator;
            } else {
                whole = "0";
            }
        setDecimalObjectState({...decimalObjectState,wholeNumber:(whole == 0) ? "0" : whole,numerator:Math.floor(numerator),denominator:Math.floor(denominator)});
    }
    function fractionHandler() {
        setDecimalObjectState({...decimalObjectState,decimal:''});	
        var whole = decimalObjectState.wholeNumber;
        var numerator1 = decimalObjectState.numerator;
        var denomiator1 = decimalObjectState.denominator;
    
        if (String(denomiator1) == "" || String(numerator1) == "") {
            if (String(whole) == "") {
                return;
            }
            setDecimalObjectState({...decimalObjectState,decimal:whole});
            return;
        } 
    
        if (whole >= 0 && denomiator1 > 0 && numerator1 >= 0) {
            numerator1 = (Number(whole) * Number(denomiator1)) + Number(numerator1);
        }
        var improperFraction = numerator1 / denomiator1;
        var decimal1 = improperFraction;
        setDecimalObjectState({...decimalObjectState,decimal:parseFloat(decimal1.toFixed(5))});
    }
    const onChange = (e) => {
        setDecimalObjectState({...decimalObjectState,[e.target.name]:e.target.value})
    }
    const convertionChart=dFConvertionData.map((value,index)=>{
        console.log(value.Fraction,index);
       return( <tr key={index}>
            <td  className="headerCol">{value.Fraction}</td>
            {value.EFraction.map((contentVal,i)=><td  className="contentCol" key={i} >{contentVal}</td>)}
            <td  className="contentCol">{value.Decimal}</td>
        </tr>);
    });

  return (
    <div className="mkt">
        <div className="container">
            <div className="bg-full-width bg-grey-dark2 ">
                <div className="bg-full-width-inner">
                    <div className="row">
                        <div className="col-sm-12 large-padding-top large-padding-bottom ">
                            <h1 className="text-reverse header-text-large">Fraction and Decimal Conversion Table</h1>
                            <p className="text-reverse">{properties.companyNameGlobal}'s decimal and fraction conversion chart gives you the decimal equivalent for commonly used fractions along with other fractions that express the same value (2/4 and 3/6, for example) as well as lowest common denominators.</p>
                        </div>
                    </div>

                </div>  
            </div>
        </div>
        <div className="container">
            <div className="bg-grey-light bg-full-width padding-top calculator-text-override">
                <div className="bg-full-width-inner padding-bottom">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Decimal and Fraction Conversion</h3>
                        </div>
                    </div>
                    <div className="row">
                        <Form className= "col-sm-12">
                            <div className="row">
                                <div className="col-sm-3 form-group">
                                    <NumberInput id="decimal" allowEmpty="true" type="number"  label="Decimal" name="decimal" value={decimalObjectState.decimal} onChange={onChange} onKeyPress={keyPressHandler} onKeyUp={decimalHandler} data-pattern="decimal" className="Form-control" hideSteppers="true"/>
                                </div>
                                <span className="col-sm-1 col-xs-1 equalSymbol">=</span>
                        
                                <div className="col-sm-2 form-group WNumber">
                                    <NumberInput id="wholeNumber" allowEmpty="true" type="number" label="Whole Number" name="wholeNumber" value={decimalObjectState.wholeNumber} onChange={onChange} onKeyUp={fractionHandler} className="Form-control" data-pattern="number" max={999} hideSteppers="true"/>
                                </div>
                                <div className="col-sm-5 col-xs-12 form-group FDeciaml">
                                    <div className="col-sm-5 col-xs-5 form-group numeratorDiv">
                                        <NumberInput id="numerator" allowEmpty="true" type="number" label="Fraction" name="numerator" value={decimalObjectState.numerator} onChange={onChange} onKeyUp={fractionHandler} className="Form-control" data-pattern="number" maxLength="5" hideSteppers="true"/>
                                    </div>
                                    <span className="col-sm-1 col-xs-1 dividerSymbol">/</span>
                                    <div className="col-sm-5 col-xs-5 form-group denominatorDiv" >
                                        <NumberInput id="denominator" allowEmpty="true" type="number" name="denominator" value={decimalObjectState.denominator} onChange={onChange} onKeyUp={fractionHandler} className="Form-control" data-pattern="number" maxLength="5" hideSteppers="true"/>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="bg-white bg-full-width padding-top calculator-text-override">
                <div className="bg-full-width-inner larger-padding-bottom">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Decimal and Fraction Conversion Chart</h3>
                            <div className="form-force-width">
                                <table className="table table-condensed bg-white" cellSpacing="0" cellPadding="3">
                                    <thead>
                                        <tr>
                                            <th className="headerCol">Fraction</th>
                                            <th className="contentCol" colSpan="11">Equivalent Fractions</th>
                                            <th className="contentCol">Decimal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {convertionChart}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="bg-grey-light bg-full-width padding-top calculator-text-override">
                <div className="bg-full-width-inner padding-bottom">
                    <div className="row">
                        <div className="col-sm-12">
                            <a className="btn btn-secondary" href="">Calculator & Conversion Charts Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default DecimalFractionTable;