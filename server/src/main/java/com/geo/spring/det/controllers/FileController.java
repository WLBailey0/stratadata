package com.geo.spring.det.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.http.HttpResponse;


@RestController
@RequestMapping("/api/chem")
public class FileController {

    @PostMapping("/chem_file_upload")
    public ResponseEntity<?> uploadChemFile(@RequestParam("file")MultipartFile uploadChemFileRequest){

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
