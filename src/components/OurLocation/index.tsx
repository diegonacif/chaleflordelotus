import { OurLocationContainer } from "./styles";

export function OurLocation() {
  return (
    <OurLocationContainer>
      <h2>Onde estamos</h2>
      <div className="google-map-code">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10591.496510461482!2d-37.91047072740657!3d-6.08645920309901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bad7e2c494ca61%3A0x93f746f116cdb461!2zQ2hhbMOpIEZsb3IgZGUgTMOzdHVz!5e0!3m2!1spt-BR!2sbr!4v1716330699896!5m2!1spt-BR!2sbr" 
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          tabIndex={0}
        />
      </div>
    </OurLocationContainer>
  )
}