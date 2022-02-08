
import calculatorTilesAndDESCURL from '../common/calculatorTitlesAndDescriptions.json';
import {get} from 'lodash';
 
const calculatorTilesAndDESC = (type,calName,domain,lang) => {
    var dataURL='';
    switch(type){
              case 'HEAD':
                dataURL=(lang)?
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorHeader.${lang}`):
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorHeader`);
                     return dataURL; 
                  break;
              
              case 'DESC':
                dataURL=(lang)?
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorDescription.${lang}`):
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorDescription`);
                      return dataURL;  
                  break;
  
              case 'SUBHEAD':
                dataURL=(lang)?
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorSubHeader.${lang}`):
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorSubHeader`);
                      return dataURL; 
                  break;
          
              case 'CF':
                dataURL=(lang)?
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}ConversionFormula.${lang}`):
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}ConversionFormula`);
                      return dataURL; 
                  break;
          
              case 'GV':
                dataURL=(lang)?
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}GraphView.${lang}`):
                      get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}GraphView`);
                      return dataURL; 
                  break;
              case 'CHEAD':
                 dataURL=(lang)?
                    get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorChartHeader.${lang}`):
                    get(calculatorTilesAndDESCURL,`${domain}.${calName}Calculator.${calName}CalculatorChartHeader`);
                    return dataURL;
                  break;
              
              case 'CTMB':
                 dataURL=(lang)?
                    get(calculatorTilesAndDESCURL,`${domain}.calculatorToolsMenuButton.${lang}`):
                    get(calculatorTilesAndDESCURL,`${domain}.calculatorToolsMenuButton`);
                return dataURL;
                  break;
              default:
                return dataURL; 
      }
 
 }
 export default calculatorTilesAndDESC;