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
	$('.remove-item').click(removeItem);
  $('.undo').click(undo)
	atualizaDados();
};
$(aposInicializado);
