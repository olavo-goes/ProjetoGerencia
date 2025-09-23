Criação do readme


🧢 Smurfs Creed — Header Component
Este projeto apresenta um componente de cabeçalho moderno e responsivo desenvolvido com React e CSS Modules, ideal para aplicações web que exigem uma interface visual elegante e funcional. O componente Header exibe um título principal, um subtítulo opcional, um texto à esquerda (como um menu ou saudação) e uma imagem de logo posicionada à direita, tudo dentro de um layout flexível e estilizado com gradiente e sombra.
A proposta é oferecer uma solução reutilizável e personalizável para a seção de topo de páginas web, com foco em estética, acessibilidade e facilidade de integração. O design é adaptável a diferentes tamanhos de tela e pode ser facilmente ajustado para atender às necessidades visuais de qualquer projeto.

<img width="200" height="250" alt="LogoSmurfsCreed" src="https://github.com/user-attachments/assets/45d1d4db-7a7e-4ba7-b8bd-b7e50adbd219" />

📦 Tecnologias utilizadas
- React
- CSS Modules
- JavaScript ES6+

📁 Estrutura do projeto
src/
├── components/
│   └── Header/
│       ├── Header.jsx
│       └── Header.module.css
├── assets/
│   └── images/
│       └── LogoSmurfsCreed.png
└── App.jsx



🚀 Como usar
- Clone o repositório:
git clone https://github.com/seu-usuario/seu-projeto.git


- Instale as dependências:
npm install


- Execute o projeto:
npm start



🧩 Como importar o componente
import Header from "./components/Header/Header";

<Header
  title="Smurfs Creed"
  subtitle="A revolução azul"
  leftText="Menu"
  logoSrc="/images/LogoSmurfsCreed.png"
  logoAlt="Logo Smurfs Creed"
/>



🎨 Estilo e personalização
O componente é totalmente estilizado com CSS Modules. Você pode personalizar:
- Cores do gradiente
- Tamanho da fonte
- Altura da logo
- Layout responsivo
Exemplo de ajuste no CSS:
.logo {
  max-height: 40px;
  width: auto;
  object-fit: contain;
}

Algumas Imagens dos Personagens:





<img width="100" height="150" alt="Shay Cormac" src="https://github.com/user-attachments/assets/84883910-9d83-40d3-a8cc-47525a81be4c" />
<img width="100" height="150" alt="Evie Frey" src="https://github.com/user-attachments/assets/84173c14-bd44-4139-9323-3e966df18ef6" />
<img width="100" height="150" alt="Bayek" src="https://github.com/user-attachments/assets/9f1c20c3-8d10-4cdf-9095-6d01fc7d671a" />


📱 Responsividade
O layout foi pensado para se adaptar bem a diferentes tamanhos de tela. Para garantir isso, use flexbox e media queries conforme necessário.
<img width="800" height="500" alt="image" src="https://github.com/user-attachments/assets/5863ecc2-3f95-4c0f-9922-7c52e8a0adc9" />
<img width="201" height="447" alt="image" src="https://github.com/user-attachments/assets/63dcfe72-9761-49fc-b61f-34c387323a1d" />







