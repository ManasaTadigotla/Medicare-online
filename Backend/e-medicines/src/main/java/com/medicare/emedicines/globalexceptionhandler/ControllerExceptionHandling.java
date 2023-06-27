package com.medicare.emedicines.globalexceptionhandler;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.server.MethodNotAllowedException;

@ControllerAdvice
public class ControllerExceptionHandling {
	
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<String> handleNoSuchElementException(NoSuchElementException noSuchElementExcep)
	{
		return new ResponseEntity<String>("Requested element is not found in the DB", HttpStatus.NOT_FOUND);
		
	}

	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	public ResponseEntity<Object> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException methodNotAllowedException)
	{
		return new ResponseEntity<Object>("http method type is mismatched", HttpStatus.METHOD_NOT_ALLOWED);
		
	}
}
