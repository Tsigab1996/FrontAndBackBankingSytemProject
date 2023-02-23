package edu.miu.bankingsystem.controller;

import edu.miu.bankingsystem.domain.Transaction;
import edu.miu.bankingsystem.service.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/transactions")
@CrossOrigin
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    public List<Transaction> getAllTransactions(){
        return transactionService.getAllTransactions();
    }

    @GetMapping("/get/{id}")
    public Transaction getATransactionById(@PathVariable long id){
        return transactionService.getATransactionById(id);
    }

    @PostMapping

    public void saveATransaction(@RequestBody Transaction transaction){
        transactionService.saveATransaction(transaction);
    }

    @DeleteMapping("/delete/{id}")

    public void deleteTransaction(@PathVariable long id){
        transactionService.deleteATransaction(id);
    }

    @PutMapping("/update/{id}")

    public void updateATransaction(@PathVariable long id, @RequestBody Transaction transaction){
        transactionService.updateATransaction(id, transaction);
    }


    @GetMapping("/{a}/account/{b}/viewTransactions")
    public List<Transaction> getAllTransactionsByUserByAccount(@PathVariable long a, @PathVariable long b){
        return transactionService.getAllTransactionsByUserByAccount(a,b);
    }

    @GetMapping("/transactions/{id}")
    public List<Transaction> getAllTransactions(@PathVariable long id){
       return transactionService.findAllByAccount_Id(id);
    }

}
