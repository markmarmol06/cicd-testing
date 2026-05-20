# SDET CI/CD Training — Course Outline
**Stratpoint Technologies | SDET QA Initiative**
**Stack: Playwright (Python/TS) | Platform: GitHub Actions | POC: saucedemo.com**

---

## Overview

| | |
|---|---|
| **Target Participants** | 7 SDETs — mixed Playwright, Selenium, Katalon background |
| **Format** | Self-Paced, Online |
| **Estimated Duration** | 8–10 hours total (learner controls pace) |
| **LMS** | Moodle |
| **Required Tool** | GitHub Account + Browser (GitHub Codespaces for labs) |
| **POC Target** | saucedemo.com |

---

## Terminal Objective

By end of training, each SDET can independently integrate their existing Playwright test suite into a GitHub Actions pipeline that triggers on code push, enforces quality gates (test failure, code quality, security vulnerabilities), and publishes a test report.

---

## Module Structure

Each module follows this format:
> **Concept Reading → Demo Walkthrough → Guided Lab → Knowledge Check**

---

### Module 0 — Getting Started (15 min)
- What this training covers and why it matters
- How to navigate the course on Moodle
- Setting up your GitHub Codespace from the training repo
- Overview of saucedemo.com as the practice target

---

### Module 1 — From Local to Pipeline (30 min)
*Why running tests locally is not enough*
- What a CI/CD pipeline does — mapped to their current local workflow
- Where automated tests fit in the pipeline
- Key terms: trigger, job, step, runner, artifact, environment

**Knowledge Check:** 5-item multiple choice quiz

---

### Module 2 — GitHub Actions Fundamentals (45 min)
*Understanding the platform*
- GitHub Actions structure: workflow → job → step
- Triggers: push, pull_request, manual dispatch
- Runners: GitHub-hosted vs self-hosted
- Reading a basic `.github/workflows/` YAML file

**Lab:** Fork the training repo → read the starter workflow → answer guided questions about its structure

**Knowledge Check:** 5-item quiz

---

### Module 3 — Writing Your First Workflow (45 min)
*Hands-on pipeline creation*
- Creating a workflow YAML from scratch
- Setting up the runner environment (Node.js / Python)
- Installing dependencies in CI
- Triggering the workflow on push

**Lab:** Write a workflow that installs Playwright dependencies and runs a sample test in Codespaces

**Knowledge Check:** 5-item quiz

---

### Module 4 — Running Playwright Tests in CI (60 min)
*Wiring your test suite into the pipeline*
- Running Playwright headlessly in GitHub Actions
- Handling base URLs and credentials via GitHub Secrets
- Reading pipeline logs to diagnose failures
- Common CI-specific issues and how to fix them

**Lab:** Take the provided Playwright test script → integrate into the pipeline → verify it runs in CI

**Knowledge Check:** 5-item quiz

---

### Module 5 — Quality Gates (60 min)
*Making the pipeline enforce quality*
- What a quality gate is and how it works
- How GitHub Actions handles test failures (exit codes)
- Configuring branch protection rules and required status checks
- Defining what should block a merge

**Code Quality Gate — SonarCloud**
- What SonarCloud checks: code smells, duplications, coverage thresholds
- Setting up a free SonarCloud account and connecting it to your GitHub repo
- Adding the SonarCloud scan step to your workflow YAML
- Configuring a quality gate that fails on new issues

**Security Gate — Trivy (filesystem scan)**
- What Trivy scans: known CVEs in `requirements.txt` and `package.json`
- No containers needed — runs directly against repo files
- Setting severity threshold: block pipeline on CRITICAL and HIGH findings
- Reading and interpreting a Trivy scan report

**Full Quality Gate Summary**

| Gate | Tool | Blocks Pipeline? |
|---|---|---|
| Test failure | Playwright | Yes |
| Code quality | SonarCloud | Yes (configurable) |
| Dependency vulnerabilities | Trivy (fs scan) | Yes — CRITICAL/HIGH |

**Lab:** Add SonarCloud + Trivy to the workflow → break a test AND introduce a bad dependency → confirm both gates block

**Knowledge Check:** 5-item quiz

---

### Module 6 — Test Reporting (45 min)
*Making results visible in the pipeline*
- Playwright's built-in reporters: HTML, JUnit, JSON
- Publishing reports as GitHub Actions artifacts
- Downloading and reading a pipeline test report

**Lab:** Configure Playwright HTML reporter → publish as artifact → download and review the report

**Knowledge Check:** 5-item quiz

---

### Module 7 — Multi-Framework Awareness (30 min)
*Applying the same concepts to other tools*
- How pipeline integration works for Selenium Java (Maven + JUnit reporter)
- How it works for Katalon (Katalon CLI)
- No hands-on — concept and reference only so participants can replicate independently

**Knowledge Check:** 5-item quiz

---

### Module 8 — POC: End-to-End Pipeline Build (90 min)
*Individual capstone project*

**Objective:** Build a complete working pipeline independently against saucedemo.com.

**Assigned Scenarios (one per participant):**
1. Successful login with valid credentials
2. Failed login with invalid credentials
3. Add item to cart and verify cart count
4. Complete checkout flow end-to-end
5. Verify product sort order (A→Z)
6. Logout flow verification
7. Product detail page verification

**Deliverables per participant:**
- GitHub repo link with working Playwright test
- GitHub Actions workflow file
- Screenshot of passing pipeline run
- Screenshot of published HTML test report

**Submission:** Via Moodle assignment upload

---

### Module 9 — Reflection and Next Steps (15 min)
- What to do next: parallel test execution, scheduled runs, Slack/email notifications on failure
- How to apply this on your actual project
- End-of-course feedback form

---

## Pre-Training Requirement

- GitHub account (personal or Stratpoint org)
- That's it

---

## Participant POC Assignments

| Participant | Assigned Scenario |
|---|---|
| Armando Navarro | Complete checkout flow end-to-end |
| Rogi Tan | Successful login with valid credentials |
| Fredierick Uy | Failed login with invalid credentials |
| Justin Vergara | Add item to cart and verify cart count |
| John Vince Magtubo | Product sort order (A→Z) |
| Jan Bryle Dionisio | Logout flow verification |
| Jashley Fontanilla | Product detail page verification |
