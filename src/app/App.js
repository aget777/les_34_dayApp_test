import './App.css';
import Header from '../header/Header';
import PayItem from '../pay-item/PayItem';


const payItems = [
  {date: '01', month: 'ЯНВ', year: '20', positive: '3000', negative: '543'},
  {date: '22', month: 'ФЕВ', year: '20', positive: '9553', negative: '17350'},
  {date: '13', month: 'МАР', year: '20', positive: '7500', negative: '9634'},
  {date: '07', month: 'СЕН', year: '20', positive: '14500', negative: '7532'},
  {date: '29', month: 'ОКТ', year: '20', positive: '700', negative: '12487'},
  {date: '17', month: 'ДЕК', year: '20', positive: '23000', negative: '4567'}
];


function App(){
  return (
<>
  <Header />
  <main>
    <div className="pay-list">
      <PayItem data={payItems[1]}/>
    </div>
  </main>
</>
  )
}

export default App;