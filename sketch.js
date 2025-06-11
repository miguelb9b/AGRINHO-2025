// Variáveis globais para as cores e posições
let corCampo;
let corCidade;
let larguraCanvas = 800; // Largura do seu jogo
let alturaCanvas = 600;  // Altura do seu jogo

function setup() {
  // Cria o canvas (a "tela" do seu jogo)
  // O tamanho aqui deve ser ajustado para o que você preferir
  createCanvas(larguraCanvas, alturaCanvas);

  // Define as cores para o campo e a cidade
  // Cores em formato RGB (Vermelho, Verde, Azul)
  corCampo = color(144, 238, 144); // Verde claro para o campo
  corCidade = color(169, 169, 169); // Cinza para a cidade
}

function draw() {
  // Limpa a tela a cada frame com uma cor de fundo (azul claro para o céu)
  background(200, 230, 255);

  // --- Desenha o lado do Campo ---
  // Define a cor de preenchimento para o campo
  fill(corCampo);
  // Desenha um retângulo que ocupa a metade esquerda do canvas
  // (x, y, largura, altura)
  rect(0, 0, larguraCanvas / 2, alturaCanvas);

  // --- Desenha o lado da Cidade ---
  // Define a cor de preenchimento para a cidade
  fill(corCidade);
  // Desenha um retângulo que ocupa a metade direita do canvas
  // (x, y, largura, altura)
  rect(larguraCanvas / 2, 0, larguraCanvas / 2, alturaCanvas);

  // --- Desenha a Linha Divisória (Conexão) ---
  // Define a cor da linha (preto)
  stroke(0);
  // Define a espessura da linha
  strokeWeight(4);
  // Desenha uma linha vertical no meio do canvas, separando campo e cidade
  // (x1, y1, x2, y2)
  line(larguraCanvas / 2, 0, larguraCanvas / 2, alturaCanvas);

  // --- Adiciona alguns textos simples para identificar as áreas ---
  // Define a cor do texto (preto)
  fill(0);
  // Define o tamanho do texto
  textSize(32);
  // Alinha o texto ao centro
  textAlign(CENTER, CENTER);

  // Texto para o Campo
  // (texto, x, y)
  text("CAMPO", larguraCanvas / 4, height / 2);

  // Texto para a Cidade
  text("CIDADE", larguraCanvas * 3 / 4, height / 2);
}