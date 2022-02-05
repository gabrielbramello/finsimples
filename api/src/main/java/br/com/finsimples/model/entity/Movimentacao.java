package br.com.finsimples.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import br.com.finsimples.model.dto.MovimentacaoDTO;

@Entity
@Table(name = "movimentacao", schema="finsimples")
public class Movimentacao {

	private static final long serialVersionUID = -1944080622703952856L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(name="descricao")
    private String descricao;
	@Column(name="valor")
    private Double valor;
	@Column(name="tipoMovimentacao")
    private Integer tipoMovimentacao;
	@Column(name="tipoMovimentacaoDescricao")
    private String tipoMovimentacaoDescricao;
	@JoinColumn(name = "id_caixa", referencedColumnName = "id")
	@ManyToOne
    private Caixa caixa;
    
	public Movimentacao() {}
	
	public Movimentacao(MovimentacaoDTO movimentacaoDTO) {
		this.descricao=movimentacaoDTO.getDescricao();
		this.valor=movimentacaoDTO.getValor();
		this.tipoMovimentacao=movimentacaoDTO.getTipoMovimentacao();
		this.tipoMovimentacaoDescricao=movimentacaoDTO.getTipoMovimentacaoDescricao();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
	public Integer getTipoMovimentacao() {
		return tipoMovimentacao;
	}
	public void setTipoMovimentacao(Integer tipoMovimentacao) {
		this.tipoMovimentacao = tipoMovimentacao;
	}
	public String getTipoMovimentacaoDescricao() {
		return tipoMovimentacaoDescricao;
	}
	public void setTipoMovimentacaoDescricao(String tipoMovimentacaoDescricao) {
		this.tipoMovimentacaoDescricao = tipoMovimentacaoDescricao;
	}
	public Caixa getCaixa() {
		return caixa;
	}
	public void setCaixa(Caixa caixa) {
		this.caixa = caixa;
	}
	
    
	    
}
