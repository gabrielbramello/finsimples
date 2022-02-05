package br.com.finsimples.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.finsimples.model.entity.Caixa;

@Repository
public interface CaixaRepository extends JpaRepository<Caixa, Long>{

	List<Caixa> findByUsuarioNome(String nomeUsuario);
	List<Caixa> findByUsuarioLogin(String loginUsuario);

}
