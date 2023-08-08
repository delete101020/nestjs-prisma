# NESTJS PROJECT WITH PRISMA ORM SETUP

## 1. Prerequirement

- Node.JS

- NPM

**Recommend:** Using Node.JS version with LTS

## 2. Step by step

### 2.1 Init new Nest.JS project

```powershell
npm install -g @nestjs/cli

nest new nestjs-prisma
```

### 2.2 Integrate Prisma

```powershell
npm install prisma --save-dev

npx prisma init
```

### 2.3 Integrate Prisma Merge - WIP

```powershell
npm i -D prisma-merge
```

### 2.4 Add shared modules - Prisma

```powershell
nest g mo prisma
nest g s prisma --no-spec
```

Move `prisma` folder to `shared` folder

### 2.5 Add feature modules

#### 2.5.1 Add project module

```powershell
nest g mo todo
nest g co todo --no-spec
nest g s todo --no-spec
```

Move `todo` folder to `modules` folder

#### 2.5.2 Add schema

- Add new model schema to prisma/schemas/<model_name>.prisma

- Re-generate base schema: `npm run prisma:generate`

- Generate migrations: `npm run prisma:migrate:dev`
