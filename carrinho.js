// var removeItem = function (e) {
// 	e.preventDefault();
// 	var self = $(this);
// 	var atual = parseInt($('#quantidade-de-itens').text());
// 	var novaQuantidade = atual - 1;
// 	$('#quantidade-de-itens').text(novaQuantidade);
// 	self.closest("tr").remove(); // closest pega o pai mais próximo - No caso aqui está pegando o tr pai
//
// 	// Diminuindo valor
// 	var precoAtual = parseFloat($('#valor-total').text()),
// 		  preco = parseFloat(self.closest("tr").find('.item-total').text());
// 			precoFinal = precoAtual - preco;
// 	$('#valor-total').text(precoFinal);
//
// };
// var aposCarregar = function() {
// 	var itens = $(".item-total"),
// 		total = 0;
// 	for (var i = 0; i < itens.length; i++) {
// 		var item = $(itens[i]),
// 			valor = parseFloat(item.text());
// 			total = total + valor;
// 	};
// 	console.log(total);
// 	$('#valor-total').text(total);
// 	$('#quantidade-de-itens').text(itens.length);
// 	$('.remove-item').click(removeItem);
// };

// Codigo refatorado

// Criando propagandas
var umaPropaganda = function () {
  var propagandas = ["O qua acha de comprar uma motocicleta ?",
                      "O que acha de comprar um lancha?",
                      "O que acha de comprar um bicileta?",
                      "O que acha de comprar um carro?"
                    ];
  var posicao = Math.floor(propagandas.length * Math.random());
  var texto = propagandas[posicao];
  // Criando a tag
  var tr = $('<tr>').addClass('propaganda')
                    .append("<td>");
  // busca a tag criada e coloca o texto dentro
  tr.find("td").attr('colspan', '6')
              .text(texto);
  return tr
}

// Atualizando valores
var atualizaDados = function () {
  var carrinhos = $('.carrinho');
  carrinhos.each(function () {
    var carrinho = $(this);
    var itens = carrinho.find(".item-total:visible");
  			total = 0;
  	for (var i = 0; i < itens.length; i++) {
  		var item = $(itens[i]),
  				valor = parseFloat(item.text());
  				total = total + valor;
  	}
  	carrinho.find('.valor-total').text(total);
  	carrinho.find('.quantidade-de-itens').text(itens.length);
  });
}

var removeItem = function (e) {
	e.preventDefault();
	var self = $(this);
	self.closest("tr").hide();
	atualizaDados();
};

var undo = function () {
  var carrinho = $(this).closest('.carrinho');
  carrinho.find('tr:visible').removeClass('recuperado');
  var trs = carrinho.find("tr:hidden");
  trs.addClass('recuperado')
     .show();
  atualizaDados();
};

var aposInicializado = function() {
  atualizaDados();
  $('.undo').click(undo)
	$('.remove-item').click(removeItem);
  // Forma para selecionar a terceira linha de cada carrinho
  $('.carrinho').each(function () {
    // $(this).find('tr').each(function (i) {
    //   if (i % 3 == 0) {
    //     if(i != 0) {
    //       var terceiraLinha = $(this);
    //       console.log();
    //       terceiraLinha.append().text('opa');
    //       umaPropaganda().insertAfter($(this));
    //     }
    //   }
    // })
    // Forma otimizada
    $(this).find('tr:nth-child(3n)').each(function (i) {
      umaPropaganda().insertAfter($(this));
    })
  });

};
$(aposInicializado);
