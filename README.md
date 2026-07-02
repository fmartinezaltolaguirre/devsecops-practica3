# DevSecOps Práctica 3

## Descripción

Este proyecto forma parte de la **Práctica 3 del Módulo 4: Monitoreo, herramientas y estrategias avanzadas en DevOps**.

El objetivo es implementar un pipeline **CI/CD seguro (DevSecOps)** utilizando **GitHub Actions**, **Docker**, **Trivy** y **Gitleaks** para automatizar la construcción, validación y análisis de seguridad de una aplicación Node.js.

---

## Objetivos de la práctica

- Configurar un pipeline CI/CD con GitHub Actions.
- Construir automáticamente una aplicación Node.js.
- Ejecutar pruebas automatizadas.
- Crear una imagen Docker utilizando una imagen base minimizada.
- Analizar vulnerabilidades de la imagen mediante Trivy.
- Detectar credenciales y secretos expuestos mediante Gitleaks.
- Aplicar buenas prácticas de seguridad dentro del ciclo de desarrollo.

---

## Estructura del proyecto

```text
devsecops-practica3/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── Dockerfile
├── index.js
├── package.json
├── package-lock.json
└── README.md
