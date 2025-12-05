# Complete Neon Auth Implementation Guide

**A Production-Ready Authentication Setup for Next.js with Stack Auth & Neon Database**

This guide documents the complete Neon Auth implementation from the India Trade Analysis project - a step-by-step reference for setting up beautiful, functional authentication in your Next.js applications.

---

## Table of Contents

1. [Overview](#overview)
2. [What You'll Build](#what-youll-build)
3. [Prerequisites](#prerequisites)
4. [Step 1: Install Dependencies](#step-1-install-dependencies)
5. [Step 2: Environment Variables](#step-2-environment-variables)
6. [Step 3: Folder Structure](#step-3-folder-structure)
7. [Step 4: Stack Auth Configuration](#step-4-stack-auth-configuration)
8. [Step 5: Database Setup with Drizzle](#step-5-database-setup-with-drizzle)
9. [Step 6: Auth Handler Page](#step-6-auth-handler-page)
10. [Step 7: Root Layout Setup](#step-7-root-layout-setup)
11. [Step 8: Custom Auth Styling](#step-8-custom-auth-styling)
12. [Step 9: Build Auth Components](#step-9-build-auth-components)
13. [Step 10: Use Authentication](#step-10-use-authentication)
14. [Step 11: Testing & Verification](#step-11-testing--verification)
15. [Complete Code Reference](#complete-code-reference)
16. [Troubleshooting](#troubleshooting)

---

## Overview

### What is Neon Auth?

**Neon Auth** is a seamless authentication solution that combines:
- **Stack Auth** - Beautiful, pre-built authentication UI
- **Neon Database** - Serverless PostgreSQL with automatic user sync
- **Auto-Sync** - Users automatically appear in your database (no webhooks needed!)

### Key Benefits

 **Zero Webhook Setup** - Users sync automatically to your database
 **Beautiful UI** - Customizable, production-ready auth forms
 **Type-Safe** - Full TypeScript support with Drizzle ORM
 **Foreign Keys** - Link user data across tables with cascade deletes
 **Real-Time Sync** - User changes instantly reflected in database
 **Custom Styling** - Full control over auth page appearance

---

## What You'll Build

By the end of this guide, you'll have:

- = **Sign-up/Sign-in pages** with custom backgrounds and styling
- <� **Customized auth forms** with your brand colors
- =� **Database integration** with automatic user synchronization
- >� **Reusable components** for authentication state
- = **Protected routes** and user-specific features
- =� **User data persistence** in PostgreSQL

**Live Example Routes:**
- `/handler/sign-in` - Beautiful sign-in page
- `/handler/sign-up` - Registration page with custom theme
- `/dashboard` - Protected dashboard (auto-redirects if not logged in)

---

## Prerequisites

Before starting, ensure you have:

-  Node.js 18+ installed
-  A Neon account ([https://neon.tech](https://neon.tech))
-  Next.js 16+ project with App Router
-  Basic knowledge of TypeScript and React

---

## Step 1: Install Dependencies

### 1.1 Install Required Packages

```bash
npm install @stackframe/stack @neondatabase/serverless drizzle-orm server-only
```

**Package Breakdown:**
- `@stackframe/stack` - Stack Auth SDK for authentication UI and logic
- `@neondatabase/serverless` - Neon's serverless PostgreSQL driver
- `drizzle-orm` - Type-safe ORM for database operations
- `server-only` - Ensures server-side code doesn't leak to client

### 1.2 Install Dev Dependencies

```bash
npm install -D drizzle-kit
```

**What it does:**
- `drizzle-kit` - CLI tool for database migrations and schema management

### 1.3 Verify Installation

```bash
npm list @stackframe/stack @neondatabase/serverless drizzle-orm
```

You should see all three packages listed with their versions.

---

## Step 2: Environment Variables

### 2.1 Get Your Neon Auth Keys

1. Go to [Neon Console](https://console.neon.tech)
2. Select your project
3. Click **"Auth"** in the sidebar
4. Click **"Enable Neon Auth"** (if not already enabled)
5. Copy the three environment variables shown

### 2.2 Create `.env` File

Create a `.env` file in your project root:

```env
# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=3a167f52-74c0-4948-bc87-af2d06c836f0
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_dc3jsptsd5br2chn32qh8f59dh7vvw01j8aw56ph0vrq0
STACK_SECRET_SERVER_KEY=ssk_9668smr9nczd1gyfa9h5sb2cj31c913h9y3ade4s6mkwr

# Database owner connection string
DATABASE_URL=postgresql://neondb_owner:npg_CB2IGtM1sgjJ@ep-delicate-king-ahk0jgwk-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require

# Optional: Gemini API (if using AI features)
GEMINI_API_KEY=your_gemini_api_key_here
```

**Environment Variable Breakdown:**

| Variable | Purpose | Where Used |
|----------|---------|------------|
| `NEXT_PUBLIC_STACK_PROJECT_ID` | Identifies your Stack Auth project | Client & Server |
| `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY` | Public key for client-side auth | Client-side only |
| `STACK_SECRET_SERVER_KEY` | Secret key for server operations | Server-side only |
| `DATABASE_URL` | PostgreSQL connection string | Database queries |

### 2.3 Add to `.gitignore`

**IMPORTANT:** Never commit your `.env` file!

```gitignore
# Environment variables
.env
.env.local
.env*.local
```

---

## Step 3: Folder Structure

### 3.1 Create Required Directories

Create the following folder structure:

```
your-project/
