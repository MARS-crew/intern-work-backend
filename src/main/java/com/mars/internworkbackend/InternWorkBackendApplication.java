package com.mars.internworkbackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.mars.internworkbackend.mapper")  // 이거 추가
public class InternWorkBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(InternWorkBackendApplication.class, args);
	}

}