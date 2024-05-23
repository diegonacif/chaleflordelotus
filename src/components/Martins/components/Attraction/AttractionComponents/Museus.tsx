import { AttractionComponentContainer } from "./styles";

export function Museus() {
  return (
    <AttractionComponentContainer>
    <p className="mt-2">Descubra a rica história e cultura de Martins visitando seus museus. Esses espaços oferecem exposições sobre a história local, arte e tradições culturais. Ideal para quem quer aprender mais sobre a região e apreciar seu patrimônio histórico.</p>

    <div>
      <h3>Museus:</h3>
      <span>Clique e veja no mapa</span>
      <ul>
        <li>
          <aside>
            <a href="https://maps.app.goo.gl/GEbhpaWGNfd97rA56" target="_blank">
              Museu Cultural Demétrio Lemos
            </a>
          </aside>
        </li>
        <li>
          <aside>
            <a href="https://maps.app.goo.gl/YinQyGh7Xrc37MaW9" target="_blank">
              Museu Histórico de Martins
            </a>
          </aside>
        </li>
        <li>
          <aside>
            <a href="https://maps.app.goo.gl/E9sSvTrWeden2vWk9" target="_blank">
              Memorial Manoel Lino de Paiva
            </a>
          </aside>
        </li>
        <li>
          <aside>
            <a href="https://maps.app.goo.gl/Z34c4jzFbWGtBzYQA" target="_blank">
              Museu do Automóvel Deusdedit Maia
            </a>
          </aside>
        </li>
      </ul>
    </div>
    </AttractionComponentContainer>
  )
}