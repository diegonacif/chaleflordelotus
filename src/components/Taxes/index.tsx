import { useState } from "react";
import { TaxesCalculator, TaxesContainer, TaxesLists } from "./styles";

export function Taxes() {
  const [days, setDays] = useState(1)
  const [people, setPeople] = useState(0)
  const daysCalc = days === 1 ? 400 : days === 2 ? 700 : days > 2 ? 700 + ((days - 2) * 300) : 0
  const peopleCalc = people <= 4 ? 0 : (people - 4) * (daysCalc * 0.04)
  
  const finalPrice = daysCalc + peopleCalc
  const finalPriceConverted = finalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  return (
    <TaxesContainer>
      <h2>Tarifas</h2>

      <TaxesCalculator>
        <div className="inputs-wrapper">
          <div className="calc-input">
            <span>Qtd de pessoas</span>
            <input type="number" value={people} onChange={e => setPeople(Number(e.target.value))} />
          </div>
          <div className="calc-input">
            <span>Qtd de diárias</span>
            <input type="number" min={1} value={days} onChange={e => setDays(Number(e.target.value))} />
          </div>
        </div>

        <div className="calc-total">
          <span>Total:&nbsp;</span>
          <span>{finalPriceConverted}</span>
        </div>

        <span id="calc-obs">* Tarifas sujeitas a reajustes ou alterações de acordo com data. Nos contate para confirmação dos valores no momento da reserva.</span>
      </TaxesCalculator>

      <TaxesLists>
        <h3>Formas de Pagamento</h3>
        <ul>
          <li>Para efetivação de reserva, solicitamos uma transferência bancária ou PIX de 10% do valor total em até 24 horas após a solicitação. Também trabalhamos com cartão de crédito através de link de pagamento.</li>
          <li>O pagamento do restante deve ser feito no check-in através de transferência bancária, PIX ou cartão de crédito ou débito;</li>
          <li>Para pagamentos a serem efetuados com cartão de crédito parcelado, haverá cobrança de taxas, consulte-nos pelo Whatsapp;</li>
        </ul>
      </TaxesLists>
      <TaxesLists>
        <h3>Política de Reserva</h3>
        <ul>
          <li>As reservas são pessoais e não podem ser transferidas;</li>
          <li>Reservas para terceiros é cobrado 100% de forma antecipada;</li>
          <li>Recebemos apenas maiores de 18 anos;</li>
          <li>Check-in e check-out das 08:00 às 18:00;</li>
        </ul>
      </TaxesLists>
      <TaxesLists>
        <h3>Política de Cancelamento</h3>
        <ul>
          <li>Cancelamento com 15 dias, ou mais, antes da data da entrada, é oferecido crédito do valor do depósito para outra reserva. A remarcação da data pode ser realizada uma única vez e o crédito permanece válido por 24 meses. Não é realizada a restituição de valores pagos;</li>
          <li>Cancelamento com 14 dias, ou menos, antes da data de entrada, não é oferecido crédito ou restituição de valores pagos;</li>
          <li>Cancelamento com 7 dias, ou menos, antes da data de entrada, resultará na cobrança do valor total da hospedagem. Não é oferecido crédito ou restituição de valores pagos;</li>
          <li>Em caso de saída antecipada ou chegada atrasada, por qualquer motivo, será cobrado o valor total da hospedagem. Não é oferecido crédito, desconto ou restituição de valores pagos.</li>
        </ul>
      </TaxesLists>
    </TaxesContainer>
  )
}