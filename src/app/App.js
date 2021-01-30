import './App.css';
import Header from '../header/Header';


function App(){
  return (
<>
  <Header />
  <main>
    <div className="pay-list">
      <div className="pay-item">
          <div className="pay-item__date">
            <div className="pay-item__day">07</div>
            <div className="pay-item__month">ЯНВ</div>
            <div className="pay-item__year">20</div>
          </div>
          <div className="pay-item__info">
            <div className="pay-item__positive">+ 3000</div>
            <div className="pay-item__negative">- 543</div>
          </div>
          <div className="saldo">
            +2457
          </div>
      </div>
    </div>
  </main>
</>
  )
}

export default App;