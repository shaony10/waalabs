package org.lotusbank.lab3.service;

import org.lotusbank.lab3.model.Employee;
import org.lotusbank.lab3.repository.EmployeeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeDAO employeeDAO;

    @Override
    public void addEmplyee(Employee employee) {
        employeeDAO.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return (List<Employee>) employeeDAO.findAll();
    }
}
