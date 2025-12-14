# LabFinal
Laboratorio Final de Katherine - Integración continue, API &amp; Performance testing

# CT Lab – Newman + Playwright CI

Este repositorio contiene un laboratorio de **automatización de pruebas** que combina:

* **Newman (Postman)** para pruebas de API
* **Playwright** para pruebas API y UI
* **GitHub Actions** para CI en Pull Requests

---

## 📁 Estructura del proyecto

```
ct-lab/
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ newman/
│  ├─ jsonplaceholder_collection.json
│  └─ env.json
├─ playwright/
│  ├─ tests/
│  │  ├─ api/
│  │  │  └─ jsonplaceholder.spec.ts
│  │  └─ ui/
│  │     ├─ saucedemo.spec.ts
│  │     ├─ demoqa.spec.ts
│  │     └─ automationpractice.spec.ts
│  ├─ playwright.config.ts
│  └─ fixtures/
├─ reports/
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## ⚙️ Requisitos

* Node.js **18 o 20** (recomendado)
* npm
* Git

Verificar versiones:

```bash
node -v
npm -v
git --version
```

---

## 📦 Instalación

Desde la raíz del proyecto:

```bash
npm install
```

Instalar navegadores de Playwright (opcional local, obligatorio en CI):

```bash
npx playwright install
```

---

## ▶️ Ejecución local de pruebas

### 🧪 Newman (Postman API tests)

```bash
npm run test:newman
```

Salida:

* Consola (CLI)
* `reports/newman-report.html`

---

### 🎭 Playwright (API + UI tests)

Ejecutar pruebas:

```bash
npm run test:playwright
```

Ejecutar con reporte HTML:

```bash
npm run test:playwright:report
```

Abrir reporte:

```text
reports/playwright-html/index.html
```

---

### 🔁 Ejecutar todo (como en CI)

```bash
npm run ci-tests
```

---

## 🤖 GitHub Actions (CI)

El workflow se encuentra en:

```text
.github/workflows/ci.yml
```

### ¿Cuándo se ejecuta?

* En **Pull Requests** hacia `main` o `master`

### ¿Qué hace?

1. Checkout del código
2. Setup Node.js
3. Instalación de dependencias (`npm ci`)
4. Instalación de navegadores Playwright
5. Ejecuta Newman
6. Ejecuta Playwright
7. Sube reportes HTML como **Artifacts**

---

## 📊 Reportes en CI

Después de que el workflow termine:

* Ir a **GitHub → Actions → workflow run**
* Descargar:

  * `playwright-report`
  * `newman-report`

---

## 🧠 Notas importantes

* Si alguna URL pública falla, puede ser reemplazada por otra demo
* Playwright corre en **headless** en CI
* Los reintentos están habilitados solo en CI

---

## 👥 Contribución

1. Crear branch desde `main`
2. Hacer cambios
3. Commit + push
4. Abrir Pull Request
5. Verificar que CI pase correctamente

---

✅ Listo. Con estos pasos cualquier colaborador puede ejecutar el laboratorio localmente o validar los tests en CI.
