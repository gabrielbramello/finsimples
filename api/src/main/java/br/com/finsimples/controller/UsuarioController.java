package br.com.finsimples.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.finsimples.model.dto.UsuarioDTO;
import br.com.finsimples.model.entity.Usuario;
import br.com.finsimples.model.repository.UsuarioRepository;

@RestController
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@PostMapping(value="/usuario")
	public ResponseEntity<Usuario> findUsuario(@RequestBody UsuarioDTO usuarioDTO) {
		try {
			Usuario usuario = usuarioRepository.findByLoginAndSenha(usuarioDTO.getLogin(), usuarioDTO.getSenha()).get();
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Usuario>(new Usuario(), HttpStatus.BAD_REQUEST);
		}
		
	}
}
