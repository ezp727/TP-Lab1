package com.example.olympics.controller;

import com.example.olympics.model.Medal;
import com.example.olympics.repository.MedalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MedalController {

    @Autowired
    private MedalRepository medalRepository;

    @GetMapping("/")
    public String index(Model model) {
        List<Medal> medals = medalRepository.findAll();
        model.addAttribute("medals", medals);
        return "index";
    }

    @PostMapping("/addMedal")
    public String addMedal(@RequestParam String country,
                           @RequestParam int gold,
                           @RequestParam int silver,
                           @RequestParam int bronze) {
        Medal medal = new Medal();
        medal.setCountry(country);
        medal.setGold(gold);
        medal.setSilver(silver);
        medal.setBronze(bronze);
        medalRepository.save(medal);
        return "redirect:/";
    }
}
