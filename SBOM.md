4. GESTIÓN DE DEPENDENCIAS Y SEGURIDAD DE LA CADENA DE SUMINISTRO (SBOM)
========================================================================

Para dar cumplimiento al OKR "Reducir librerías externas sin actualizar" y garantizar 
la seguridad y legalidad del software entregado (según normativa de licenciamiento), 
se ha elaborado el siguiente Software Bill of Materials (SBOM). 

Este inventario permite controlar la obsolescencia y asegurar que todas las licencias 
de terceros sean compatibles con el proyecto.

4.1. INVENTARIO DE COMPONENTES (BACKEND)
----------------------------------------
Microservicios: authorization-server y resource-server
Tecnología: Java / Spring Boot

* Spring Boot Starter Parent
  - Versión: 3.3.3
  - Licencia: Apache 2.0
  - Propósito: Gestión centralizada de dependencias y versiones.

* Spring Security OAuth2 Auth Server
  - Versión: 3.3.3
  - Licencia: Apache 2.0
  - Propósito: Servidor de autorización y emisión de tokens JWT.

* Spring Security OAuth2 Resource Server
  - Versión: 3.3.3
  - Licencia: Apache 2.0
  - Propósito: Protección de endpoints y validación de tokens.

* Spring Boot Starter Web
  - Versión: 3.3.3
  - Licencia: Apache 2.0
  - Propósito: Contenedor de servlets (Tomcat) y API REST.

* Spring Data JPA
  - Versión: 3.3.3
  - Licencia: Apache 2.0
  - Propósito: Capa de persistencia y ORM (Hibernate).

* MySQL Connector/J
  - Versión: 8.0.x
  - Licencia: GPL 2.0
  - Propósito: Conector JDBC para base de datos relacional.

* H2 Database Engine
  - Versión: 2.2.224
  - Licencia: MPL 2.0
  - Propósito: Base de datos en memoria para ejecución de tests (CI).

* Project Lombok
  - Versión: 1.18.30
  - Licencia: MIT
  - Propósito: Librería para reducción de código repetitivo.

* JaCoCo Maven Plugin
  - Versión: 0.8.12
  - Licencia: EPL 2.0
  - Propósito: Herramienta de análisis de cobertura de código.


4.2. INVENTARIO DE COMPONENTES (FRONTEND)
-----------------------------------------
Aplicación: ag-prueba-front
Tecnología: Angular / TypeScript

* Angular Core & Common
  - Versión: 16.2.0
  - Licencia: MIT
  - Propósito: Framework base para arquitectura SPA.

* Angular Router
  - Versión: 16.2.0
  - Licencia: MIT
  - Propósito: Gestión de enrutamiento y navegación del cliente.

* RxJS
  - Versión: 7.8.0
  - Licencia: Apache 2.0
  - Propósito: Programación reactiva y gestión de eventos asíncronos.

* TypeScript
  - Versión: 5.1.3
  - Licencia: Apache 2.0
  - Propósito: Superset de JavaScript para tipado estático.

* Zone.js
  - Versión: 0.13.0
  - Licencia: MIT
  - Propósito: Control de contextos de ejecución asíncronos.

* Bootstrap
  - Versión: 5.3.2
  - Licencia: MIT
  - Propósito: Framework de diseño y componentes UI responsivos.

* Karma / Jasmine
  - Versión: 6.4.0 / 5.1.0
  - Licencia: MIT
  - Propósito: Entorno de ejecución y framework de pruebas unitarias.
