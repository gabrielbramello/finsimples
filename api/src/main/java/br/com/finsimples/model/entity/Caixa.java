package br.com.finsimples.model.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "caixa", schema="finsimples")
public class Caixa {

	private static final long serialVersionUID = -1944080622703952856L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@JoinColumn(name = "id_usuario", referencedColumnName = "id")
	@ManyToOne
	private Usuario usuario;
	private Double valorTotal;
	@OneToMany(mappedBy = "caixa", cascade = CascadeType.ALL)
	private List<Movimentacao> movimentacoes;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public Double getValorTotal() {
		return valorTotal;
	}
	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}
	
	
	
    
}
