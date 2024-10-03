package org.lotusbank.lab3.service;

import org.lotusbank.lab3.model.onetomanybi.Employee;

import java.util.List;


public interface EmployeeService {
    public void addEmplyee(Employee employee);

    public List<Employee> getAllEmployees();
}
