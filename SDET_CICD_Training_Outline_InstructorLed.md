# SDET CI/CD Training — Course Outline
**Stratpoint Technologies | SDET QA Initiative**
**Stack: Playwright (Python/TS) | Platform: GitHub Actions | POC: saucedemo.com**

---

## Overview

| | |
|---|---|
| **Target Participants** | 7 SDETs — mixed Playwright, Selenium, Katalon background |
| **Duration** | 2 Days (Day 1: Concepts + Setup / Day 2: Integration + POC) |
| **Format** | Instructor-Led with Hands-on Labs |
| **Sandbox** | GitHub Actions (free, no infra dependency) |
| **POC Target** | saucedemo.com |

---

## Terminal Objective

By end of training, each SDET can independently integrate their existing Playwright test suite into a GitHub Actions pipeline that triggers on code push, enforces quality gates (test failure, code quality, security vulnerabilities), and publishes a test report.

---

## Day 1 — CI/CD Fundamentals + Pipeline Setup

### Module 1 — From Local to Pipeline (45 min)
*Concept + Discussion*
- Why running tests locally is not enough
- What a CI/CD pipeline actually does — mapped to their current workflow
- How their existing Playwright tests fit into a pipeline
- Key terms: trigger, job, step, runner, artifact, environment

**Discussion:** Walk through their previous Azure pipeline experience on OmniX — what did it do, where did tests fit in?

---

### Module 2 — GitHub Actions Fundamentals (60 min)
*Concept + Demo*
- GitHub Actions structure: workflow → job → step
- Triggers: push, pull_request, manual dispatch
- Runners: GitHub-hosted vs self-hosted
- Reading and writing a basic `.github/workflows/` YAML file
- Environment variables and secrets

**Lab 1:** Fork the training repo → create a basic Hello World workflow → trigger it on push

---

### Module 3 — Running Playwright Tests in GitHub Actions (75 min)
*Hands-on Lab*
- Setting up Node.js / Python environment in the pipeline
- Installing Playwright dependencies in CI
- Running the test suite headlessly
- Handling environment-specific configs (base URL, credentials via secrets)

**Lab 2:** Take an existing Playwright script → wire it into a GitHub Actions workflow → verify it runs in CI

---

### Module 4 — Quality Gates (75 min)
*Concept + Configuration*
- What a quality gate is and why it matters
- Failing the pipeline on test failure — how GitHub Actions handles exit codes
- Defining thresholds: what should block a merge?
- Branch protection rules + required status checks

**Code Quality Gate — SonarCloud**
- What SonarCloud checks: code smells, duplications, coverage thresholds
- Setting up SonarCloud free account + connecting to GitHub repo
- Adding the SonarCloud scan step to the workflow
- Configuring a quality gate that fails on new issues

**Security Gate — Trivy (filesystem scan)**
- What Trivy checks: known vulnerabilities in `requirements.txt` and `package.json`
- No containers needed — Trivy scans dependency files directly
- Configuring severity threshold: block on CRITICAL and HIGH only
- Reading a Trivy scan report

**Full Quality Gate Summary**

| Gate | Tool | Blocks Pipeline? |
|---|---|---|
| Test failure | Playwright | Yes |
| Code quality | SonarCloud | Yes (configurable) |
| Dependency vulnerabilities | Trivy (fs scan) | Yes — CRITICAL/HIGH |

**Lab 3:** Add SonarCloud + Trivy steps to the workflow → intentionally introduce a vulnerability → confirm pipeline blocks

---

## Day 2 — Reporting + POC

### Module 5 — Test Reporting in the Pipeline (60 min)
*Hands-on Lab*
- Why test results need to be visible — not just pass/fail
- Playwright's built-in reporters: HTML, JUnit, JSON
- Publishing reports as GitHub Actions artifacts
- (Optional) Integrating with Allure or ReportPortal

**Lab 4:** Configure Playwright HTML reporter → publish report as pipeline artifact → download and review

---

### Module 6 — Multi-Framework Awareness (30 min)
*Discussion + Demo*
- How the same pipeline concepts apply to their other tools:
  - Selenium Java → Maven/Gradle + JUnit reporter
  - Katalon → Katalon CLI in pipeline
- They won't build these today — awareness only so they can replicate independently

---

### Module 7 — POC: saucedemo.com (120 min)
*Full Hands-on Build*

**Objective:** Build a working pipeline end-to-end as a team against saucedemo.com — a stable, purpose-built test site with predictable login, product, and checkout flows.

**Suggested Test Scenarios:**
1. Successful login with valid credentials
2. Failed login with invalid credentials
3. Add item to cart and verify cart count
4. Complete checkout flow end-to-end
5. Verify product sort order (A→Z)

**Steps:**
1. Write assigned Playwright test scenario against saucedemo.com (1–2 per participant)
2. Push to a shared GitHub repo
3. Configure GitHub Actions workflow to run on push to main
4. Set quality gate — pipeline fails if any test fails
5. Publish HTML test report as artifact
6. Demo: break a test intentionally → confirm pipeline blocks

**Output:** Each participant leaves with a working GitHub repo + pipeline they built themselves.

---

### Module 8 — Closing + Next Steps (30 min)
- Retrospective: what clicked, what needs more practice
- How to apply this on their actual project
- Recommended next topics: parallel test execution, test environments, scheduled runs, notifications (Slack/email on failure)
- Q&A

---

## Pre-Training Requirements

**Participants must have before Day 1:**
- GitHub account (personal or Stratpoint org)
- VS Code installed
- Node.js 18+ and/or Python 3.10+ installed
- Playwright installed and a basic test script ready to use
- Git basics — clone, commit, push

**Trainer must prepare:**
- Training GitHub repo (template with starter Playwright project)
- GitHub Actions sandbox confirmed working
- saucedemo.com URLs scoped for test scenarios
- Secrets configured in the training repo (base URL, any auth tokens)

---

## Suggested Participant Assignments for POC

| Participant | Tool Strength | POC Role |
|---|---|---|
| Armando Navarro | Playwright Python/TS | Team lead for POC, pipeline config |
| Rogi Tan | Playwright Python/TS | Test script author |
| Fredierick Uy | Playwright Python/TS | Test script author |
| Justin Vergara | Playwright Java | Pipeline YAML + quality gate |
| John Vince Magtubo | Katalon / Selenium | Test script author + Katalon awareness demo |
| Jan Bryle Dionisio | Selenium / Playwright | Reporting setup |
| Jashley Fontanilla | Selenium / Playwright | Reporting setup + artifact publish |
