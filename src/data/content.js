export const whatsapp = {
  number: '5583991472953',
  displayNumber: '+55 83 99147-2953',
  defaultMessage: 'Olá! Gostaria de solicitar uma cotação de frete/mudança.',
}

export const waLink = (message) =>
  `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message || whatsapp.defaultMessage)}`

export const servicos = [
  {
    nome: 'Mudanças Residenciais',
    descricao: 'Transporte completo de móveis e itens da casa, com cuidado e organização.',
  },
  {
    nome: 'Mudanças Comerciais',
    descricao: 'Transferência de escritórios, lojas e estruturas comerciais com planejamento logístico.',
  },
  {
    nome: 'Fretes',
    descricao: 'Transporte de cargas em geral para João Pessoa, Petrolina, Recife e todo o Nordeste.',
  },
  {
    nome: 'Pequenos Fretes',
    descricao: 'Soluções ágeis para volumes menores, com o mesmo padrão de segurança.',
  },
  {
    nome: 'Reboque de Moto',
    descricao: 'Transporte especializado de motocicletas, com fixação adequada durante o trajeto.',
  },
  {
    nome: 'Transporte de Veículos',
    descricao: 'Deslocamento de veículos entre cidades com segurança e rastreamento do trajeto.',
  },
]

export const seguranca = [
  { t: 'Carga segura', d: 'Embalagem e fixação adequadas para cada tipo de item transportado.' },
  { t: 'CT-e', d: 'Emissão de Conhecimento de Transporte Eletrônico para toda a operação.' },
  { t: 'MDF-e', d: 'Manifesto Eletrônico de Documentos Fiscais em conformidade com a legislação.' },
  { t: 'Seguro de carga', d: 'Cobertura para tranquilidade durante todo o transporte.' },
]

export const rotas = [
  'João Pessoa - PB',
  'Petrolina - PE',
  'Recife - PE',
  'Demais destinos no Nordeste',
]

export const diferenciais = [
  { t: 'Desde 2017', d: 'Anos de atuação consolidada em fretes e mudanças no Nordeste.' },
  { t: 'Cobertura regional', d: 'Rotas regulares entre João Pessoa, Petrolina, Recife e região.' },
  { t: 'Com ou sem embalagem', d: 'Você escolhe o nível de serviço que melhor atende sua necessidade.' },
]

export const contato = {
  regiao: 'João Pessoa — PB e Nordeste',
}
