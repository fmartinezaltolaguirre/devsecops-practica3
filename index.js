/**
 * =====================================================
 * Práctica 3 - DevSecOps
 * Aplicación básica Node.js
 * =====================================================
 * Este archivo se utiliza para demostrar el funcionamiento
 * del pipeline CI/CD configurado en GitHub Actions.
 *
 * El pipeline realiza las siguientes tareas:
 * - Instalación de dependencias
 * - Ejecución de pruebas
 * - Construcción de imagen Docker
 * - Escaneo de vulnerabilidades con Trivy
 * - Detección de credenciales con Gitleaks
 * =====================================================
 */

// Muestra un mensaje al ejecutar la aplicación
console.log("DevSecOps Práctica 3 - Node.js Application");

/**
 * -----------------------------------------------------
 * EJEMPLO DE CREDENCIAL EXPUESTA
 * -----------------------------------------------------
 * La siguiente línea simula una credencial filtrada para
 * comprobar el funcionamiento de Gitleaks.
 *
 * En un entorno real nunca deben almacenarse secretos,
 * contraseñas o claves API directamente en el código.
 *
 * Tras verificar que Gitleaks la detecta, la credencial
 * debe eliminarse y sustituirse por variables de entorno.
 * -----------------------------------------------------
 */

AWS_SECRET_ACCESS_KEY=123456789

/**
 * Ejemplo de utilización segura mediante variables de entorno
 */

// const awsSecret = process.env.AWS_SECRET_ACCESS_KEY;

/**
 * Mensaje final de ejecución
 */
console.log("Aplicación iniciada correctamente.");
