import './App.css';
import Header from '../header/Header';
import PayList from '../pay-list/PayList';


const payItems = [
  {day: '01', month: 'ЯНВ', year: '20', positive: '3000', negative: '543'},
  {day: '22', month: 'ФЕВ', year: '20', positive: '9553', negative: '17350'},
  {day: '13', month: 'МАР', year: '20', positive: '7500', negative: '9634'},
  {day: '07', month: 'СЕН', year: '20', positive: '14500', negative: '7532'},
  {day: '29', month: 'ОКТ', year: '20', positive: '700', negative: '12487'},
  {day: '17', month: 'ДЕК', year: '20', positive: '23000', negative: '4567'}
];


function App(){
  return (
<>
  <Header />
  <PayList payItems={payItems}/>
</>
  )
}

export default App;