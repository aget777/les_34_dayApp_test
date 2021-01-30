import './PayItem.css';

function PayItem({day, month, year,  positive, negative}){
    const saldo = positive - negative;

    return (
        <div className="pay-item">
          <div className="pay-item__date">
            <div className="pay-item__date">{day}</div>
            <div className="pay-item__month">{month}</div>
            <div className="pay-item__year">{year}</div>
          </div>
          <div className="pay-item__info">
            <div className="pay-item__positive">+ {positive}</div>
            <div className="pay-item__negative">- {negative}</div>
          </div>
          <div className={'pay-item__saldo ' + (saldo < 0 && 'pay-item__saldo-negative')}>
            {saldo > 0 ? '+' : '-'} {Math.abs(saldo)}
          </div>
      </div>
    )
}


export default PayItem;