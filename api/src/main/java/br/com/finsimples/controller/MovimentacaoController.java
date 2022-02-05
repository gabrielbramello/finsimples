package br.com.finsimples.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.finsimples.model.dto.MovimentacaoDTO;
import br.com.finsimples.model.entity.Caixa;
import br.com.finsimples.model.entity.Movimentacao;
import br.com.finsimples.model.repository.CaixaRepository;
import br.com.finsimples.model.repository.MovimentacaoRepository;

@RestController
public class MovimentacaoController {

	@Autowired
	private MovimentacaoRepository movimentacaoRepository;
	
	@Autowired
	private CaixaRepository caixaRepository;
	
	
	@GetMapping(value="/movimentacao")
	public List<Movimentacao> listaMovimentacao(){
		return movimentacaoRepository.findAll();
	}
	
	@PostMapping(value="/movimentacao")
	public ResponseEntity<Movimentacao> insereMovimentacao(@RequestBody MovimentacaoDTO movimentacaoDTO) {
		Caixa caixa = caixaRepository.findById(movimentacaoDTO.getIdCaixa()).get();
		Movimentacao movimentacao = new Movimentacao(movimentacaoDTO);
		movimentacao.setCaixa(caixa);
		movimentacaoRepository.save(movimentacao);
		
		return new ResponseEntity<Movimentacao>(movimentacao, HttpStatus.CREATED);	
	}
	
	@DeleteMapping(value="/movimentacao/{id}")
	public ResponseEntity<Long> deletaMovimentacao(@PathVariable(value = "id") Long idMovimentacao) {
		movimentacaoRepository.deleteById(idMovimentacao);
		return new ResponseEntity<Long>(idMovimentacao,HttpStatus.OK);
		
	}
	
	@PutMapping(value="/movimentacao/{id}")
	public ResponseEntity<Movimentacao> atualizaMovimentacao(@PathVariable(value = "id") Long idMovimentacao, @RequestBody MovimentacaoDTO movimentacaoDTO) {
		Movimentacao movimentacao = movimentacaoRepository.findById(idMovimentacao).get();
		Caixa caixa = caixaRepository.findById(movimentacaoDTO.getIdCaixa()).get();
		
		movimentacao.setCaixa(caixa);
		movimentacao.setDescricao(movimentacao.getDescricao());
		movimentacao.setTipoMovimentacao(movimentacao.getTipoMovimentacao());
		movimentacao.setTipoMovimentacaoDescricao(movimentacao.getTipoMovimentacaoDescricao());
		movimentacao.setValor(movimentacaoDTO.getValor());
		
		movimentacaoRepository.save(movimentacao);

		return new ResponseEntity<Movimentacao>(movimentacao, HttpStatus.OK);
	}
	
}
