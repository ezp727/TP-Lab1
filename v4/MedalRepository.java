package com.example.olympics.repository;

import com.example.olympics.model.Medal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedalRepository extends JpaRepository<Medal, Long> {
}
