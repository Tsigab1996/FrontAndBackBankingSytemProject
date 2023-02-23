package edu.miu.bankingsystem.service.imp;

import edu.miu.bankingsystem.domain.Transaction;
import edu.miu.bankingsystem.repository.TransactionRepo;
import edu.miu.bankingsystem.service.TransactionService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TransactionServiceImp implements TransactionService {

    private final TransactionRepo transactionRepo;

    public TransactionServiceImp(TransactionRepo transactionRepo) {
        this.transactionRepo = transactionRepo;
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepo.findAll();
    }

    @Override
    public Transaction getATransactionById(long id) {
        return transactionRepo.findById(id).get();
    }

    @Override
    public void saveATransaction(Transaction transaction) {
      transactionRepo.save(transaction);
    }

    @Override
    public void deleteATransaction(long id) {
     transactionRepo.deleteById(id);
    }

    @Override
    public Transaction updateATransaction(long id, Transaction transaction) {
     Transaction trans= getATransactionById(id);
     trans.setTransactionType(transaction.getTransactionType());
     trans.setTransactionDate(transaction.getTransactionDate());
     trans.setAccount(transaction.getAccount());
     trans.setAmount(transaction.getAmount());
     Transaction newTrans= transactionRepo.save(trans);
     return newTrans;
    }

    @Override
    public List<Transaction> findAllByAccount_Id(long id) {
        return transactionRepo.findAllByAccount_Id(id);
    }


    @Override
    public List<Transaction> getAllTransactionsByUserByAccount(long a, long b) {
        return transactionRepo.getAllTransactionsByUserByAccount(a,b);
    }


}
