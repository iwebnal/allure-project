package com.example.allureproject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Arrays;
import java.util.List;

@Entity
public class Report {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    private Long id;
    private String projectName;
    private Integer passedValue;
    private Integer brokenValue;
    private Integer failedValue;
    private Integer skippedValue;
    private boolean newFailValue;
    private boolean flakyValue;

    protected Report() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public Integer getPassedValue() {
        return passedValue;
    }

    public void setPassedValue(Integer passedValue) {
        this.passedValue = passedValue;
    }

    public Integer getBrokenValue() {
        return brokenValue;
    }

    public void setBrokenValue(Integer brokenValue) {
        this.brokenValue = brokenValue;
    }

    public Integer getFailedValue() {
        return failedValue;
    }

    public void setFailedValue(Integer failedValue) {
        this.failedValue = failedValue;
    }

    public Integer getSkippedValue() {
        return skippedValue;
    }

    public void setSkippedValue(Integer skippedValue) {
        this.skippedValue = skippedValue;
    }

    public boolean isNewFailValue() {
        return newFailValue;
    }

    public void setNewFailValue(boolean newFailValue) {
        this.newFailValue = newFailValue;
    }

    public boolean isFlakyValue() {
        return flakyValue;
    }

    public void setFlakyValue(boolean flakyValue) {
        this.flakyValue = flakyValue;
    }

    public Report(String projectName, Integer passedValue, Integer brokenValue, Integer failedValue,
                  Integer skippedValue, boolean newFailValue, boolean flakyValue) {
        this.projectName = projectName;
        this.passedValue = passedValue;
        this.brokenValue = brokenValue;
        this.failedValue = failedValue;
        this.skippedValue = skippedValue;
        this.newFailValue = newFailValue;
        this.flakyValue = flakyValue;
    }

    public List<Object> getData() {
        return Arrays.asList(getId(),getProjectName(), getPassedValue(), getBrokenValue(),
                getFailedValue(), getSkippedValue(), isNewFailValue(), isFlakyValue());
    }
}
