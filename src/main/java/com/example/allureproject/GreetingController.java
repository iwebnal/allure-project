package com.example.allureproject;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    public static CustomerRepository repositoryData;
    public static ReportRepository reportsData;

    private static final Logger log = LoggerFactory.getLogger(AllureProjectApplication.class);

    @CrossOrigin
    @GetMapping("/greeting")
    public ArrayList<Object> greeting() {
        ArrayList<Object> customers = new ArrayList<>();

        for (Customer customer : repositoryData.findAll()) {
            customers.add(customer.getData());
        }

        return customers;
    }

    @CrossOrigin
    @GetMapping("/reports")
    public ArrayList<Object> getReports() {
        ArrayList<Object> reports = new ArrayList<>();

        for (Report report : reportsData.findAll()) {
            reports.add(report.getData());
        }

        return reports;
    }

    @Bean
    public CommandLineRunner demo(CustomerRepository repository) {
        return (args) -> {
            // save a few customers
            repository.save(new Customer("Jack", "Bauer"));
            repository.save(new Customer("Chloe", "O'Brian"));
            repository.save(new Customer("Kim", "Bauer"));
            repository.save(new Customer("David", "Palmer"));
            repository.save(new Customer("Michelle", "Dessler"));

            repositoryData = repository;

            // fetch all customers
            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (Customer customer : repository.findAll()) {
                log.info(customer.toString());
            }
            log.info("");

            // fetch an individual customer by ID
            Customer customer = repository.findById(1L);
            log.info("Customer found with findById(1L):");
            log.info("--------------------------------");
            log.info(customer.toString());
            log.info("");

            // fetch customers by last name
            log.info("Customer found with findByLastName('Bauer'):");
            log.info("--------------------------------------------");
            repository.findByLastName("Bauer").forEach(bauer -> {
                log.info(bauer.toString());
            });
            // for (Customer bauer : repository.findByLastName("Bauer")) {
            //  log.info(bauer.toString());
            // }
            log.info("");
        };
    }

    @Bean
    public CommandLineRunner reportsData(ReportRepository reportRepository) {
        return (args) -> {
            // save a few reports
            reportRepository.save(new Report("Report1", 100, 0, 5, 2, false, true));
            reportRepository.save(new Report("Report2", 95, 45, 4, 0, false, false));
            reportRepository.save(new Report("Report3", 90, 15, 3, 1, true, true));
            reportRepository.save(new Report("Report4", 85, 0, 10, 0, false, true));
            reportRepository.save(new Report("Report5", 80, 30, 15, 1, false, false));
            reportRepository.save(new Report("Report6", 75, 25, 0, 0, true, true));
            reportRepository.save(new Report("Report7", 70, 15, 1, 2, false, true));
            reportRepository.save(new Report("Report8", 65, 5, 5, 0, false, false));
            reportRepository.save(new Report("Report9", 60, 0, 5, 3, true, true));
            reportRepository.save(new Report("Report10", 55, 10, 10, 0, false, true));
            reportRepository.save(new Report("Report11", 50, 15, 15, 2, false, false));
            reportRepository.save(new Report("Report12", 45, 20, 1, 0, true, true));
            reportRepository.save(new Report("Report13", 40, 0, 12, 1, false, true));
            reportRepository.save(new Report("Report14", 35, 5, 1, 0, true, false));
            reportRepository.save(new Report("Report15", 30, 10, 0, 1, false, true));

            reportsData = reportRepository;
        };
    }
}
