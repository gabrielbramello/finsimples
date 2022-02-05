package br.com.finsimples.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.finsimples.model.entity.Caixa;
import br.com.finsimples.model.repository.CaixaRepository;

@RestController
public class CaixaController {
	
	@Autowired
	private CaixaRepository caixaRepository;
	
	@GetMapping("/caixa")
	public List<Caixa> lista(String loginUsuario) {
		List<Caixa> listaCaixa = caixaRepository.findByUsuarioLogin(loginUsuario);
		return listaCaixa;
	}
}
