package com.example.Frisbee.KabookStore;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
 
@SpringBootApplication
public class KabookStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(KabookStoreApplication.class, args);
	}

	@Bean
	public CorsFilter corsFilter() { 
	    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

	    final CorsConfiguration config = new CorsConfiguration();
	    config.setAllowCredentials(true);
	    config.setAllowedOrigins(Collections.singletonList("*"));
	    config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
	    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

	    source.registerCorsConfiguration("/**", config);
	    return new CorsFilter(source);
	}
	
	
	
}
/*
spring.main.banner-mode=off
logging.level.org.springframework=ERROR

spring.datasource.url=jdbc:mysql://frisbeekabook2.mysql.database.azure.com/sql2333246?useSSL=false&serverTimezone=UTC
spring.datasource.username=frisbeeadmin@frisbeekabook2

spring.datasource.password=Frisbee06

*/