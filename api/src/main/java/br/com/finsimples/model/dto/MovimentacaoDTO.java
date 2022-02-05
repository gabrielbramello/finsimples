package br.com.finsimples.model.dto;

public class MovimentacaoDTO {

    private String descricao;	
    private Double valor;
    private Integer tipoMovimentacao;
    private String tipoMovimentacaoDescricao;
    private Long idCaixa;
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
	public Long getIdCaixa() {
		return idCaixa;
	}
	public void setIdCaixa(Long idCaixa) {
		this.idCaixa = idCaixa;
	}
    
    
	
}
