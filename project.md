This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
app.js
config/db.js
controllers/authController.js
controllers/sessionController.js
controllers/tutoringController.js
controllers/userController.js
frontend/.editorconfig
frontend/.gitignore
frontend/.vscode/extensions.json
frontend/.vscode/launch.json
frontend/.vscode/tasks.json
frontend/angular.json
frontend/package.json
frontend/src/app/app.component.css
frontend/src/app/app.component.html
frontend/src/app/app.component.spec.ts
frontend/src/app/app.component.ts
frontend/src/app/app.module.ts
frontend/src/app/components/dashboard/dashboard.component.css
frontend/src/app/components/dashboard/dashboard.component.html
frontend/src/app/components/dashboard/dashboard.component.spec.ts
frontend/src/app/components/dashboard/dashboard.component.ts
frontend/src/app/components/directory/directory.component.css
frontend/src/app/components/directory/directory.component.html
frontend/src/app/components/directory/directory.component.ts
frontend/src/app/components/login/login.component.css
frontend/src/app/components/login/login.component.html
frontend/src/app/components/login/login.component.spec.ts
frontend/src/app/components/login/login.component.ts
frontend/src/app/components/register/register.component.css
frontend/src/app/components/register/register.component.html
frontend/src/app/components/register/register.component.spec.ts
frontend/src/app/components/register/register.component.ts
frontend/src/app/components/sessions/session-create/session-create.component.css
frontend/src/app/components/sessions/session-create/session-create.component.html
frontend/src/app/components/sessions/session-create/session-create.component.ts
frontend/src/app/components/sessions/session-list/session-list.component.css
frontend/src/app/components/sessions/session-list/session-list.component.html
frontend/src/app/components/sessions/session-list/session-list.component.ts
frontend/src/app/components/sessions/session-roster/session-roster.component.css
frontend/src/app/components/sessions/session-roster/session-roster.component.html
frontend/src/app/components/sessions/session-roster/session-roster.component.ts
frontend/src/app/components/tutoring/my-requests/my-requests.component.css
frontend/src/app/components/tutoring/my-requests/my-requests.component.html
frontend/src/app/components/tutoring/my-requests/my-requests.component.ts
frontend/src/app/components/tutoring/request-create/request-create.component.css
frontend/src/app/components/tutoring/request-create/request-create.component.html
frontend/src/app/components/tutoring/request-create/request-create.component.ts
frontend/src/app/components/tutoring/request-list/request-list.component.css
frontend/src/app/components/tutoring/request-list/request-list.component.html
frontend/src/app/components/tutoring/request-list/request-list.component.ts
frontend/src/app/guards/auth.guard.ts
frontend/src/app/guards/student.guard.ts
frontend/src/app/interceptors/auth.interceptor.ts
frontend/src/app/models/session.model.ts
frontend/src/app/models/tutoring-request.model.ts
frontend/src/app/models/user.model.ts
frontend/src/app/services/auth.service.spec.ts
frontend/src/app/services/auth.service.ts
frontend/src/app/services/session.service.ts
frontend/src/app/services/toast.service.ts
frontend/src/app/services/tutoring.service.ts
frontend/src/app/services/user.service.ts
frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.css
frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.html
frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
frontend/src/app/shared/components/empty-state/empty-state.component.css
frontend/src/app/shared/components/empty-state/empty-state.component.html
frontend/src/app/shared/components/empty-state/empty-state.component.ts
frontend/src/app/shared/components/loading-spinner/loading-spinner.component.css
frontend/src/app/shared/components/loading-spinner/loading-spinner.component.html
frontend/src/app/shared/components/loading-spinner/loading-spinner.component.ts
frontend/src/app/shared/components/toast/toast.component.css
frontend/src/app/shared/components/toast/toast.component.html
frontend/src/app/shared/components/toast/toast.component.ts
frontend/src/app/shared/shared.module.ts
frontend/src/environments/environment.prod.ts
frontend/src/environments/environment.ts
frontend/src/index.html
frontend/src/main.ts
frontend/src/styles.css
frontend/tsconfig.app.json
frontend/tsconfig.json
frontend/tsconfig.spec.json
frontend/vercel.json
get-refresh-token.js
list-users.js
LMS.postman_collection.json
middleware/auth.js
middleware/errorHandler.js
models/CreditTransaction.js
models/Session.js
models/TutoringRequest.js
models/User.js
nodemon.json
package.json
routes/authRoutes.js
routes/sessionRoutes.js
routes/tutoringRoutes.js
routes/userRoutes.js
seed.js
server.js
services/calendarService.js
services/schedulerService.js
services/sessionService.js
utils/AppError.js
utils/asyncHandler.js
utils/jwt.js
utils/password.js
```

# Files

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/
node_modules/
# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.*
!.env.example

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist
.output

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp directory
.temp

# Sveltekit cache directory
.svelte-kit/

# vitepress build output
**/.vitepress/dist

# vitepress cache directory
**/.vitepress/cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# Firebase cache directory
.firebase/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# pnpm
.pnpm-store

# yarn v3
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

# Vite files
vite.config.js.timestamp-*
vite.config.ts.timestamp-*
.vite/

repomix-output.md
.idea/
```

## File: app.js
```javascript
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const tutoringRoutes = require('./routes/tutoringRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

const allowedOrigin = process.env.CORS_ORIGIN || '*';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.get('/', (req, res) => res.json({ status: 'ok' })); // health check

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);
app.use('/tutoring-requests', tutoringRoutes);

app.use(errorHandler); // must be last

module.exports = app;
```

## File: config/db.js
```javascript
const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected');
}

module.exports = connectDB;
```

## File: controllers/authController.js
```javascript
const User = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/password');
const { signToken } = require('../utils/jwt');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

// POST /auth/register
const register = asyncHandler(async (req, res) => {
  const { name, email, password, isInstructor } = req.body;
  if (!name || !email || !password) throw new AppError('Missing required fields', 400);

  const passwordHash = await hashPassword(password);
  const user = await User.create({ name, email, passwordHash, isInstructor: !!isInstructor });
  // creditBalance defaults to 5 automatically (FR3.1)

  res.status(201).json({ token: signToken(user._id), user: { id: user._id, name, email } });
});

// POST /auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.passwordHash))) {
    throw new AppError('Invalid credentials', 401);
  }
  res.json({ token: signToken(user._id), user: { id: user._id, name: user.name, email } });
});

module.exports = { register, login };
```

## File: controllers/sessionController.js
```javascript
const Session = require('../models/Session');
const { createSessionWithCalendar } = require('../services/sessionService');
const { addAttendeeToEvent } = require('../services/calendarService');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

// POST /sessions — instructor only (FR1.1, FR2.1-2.2)
const createSession = asyncHandler(async (req, res) => {
  const { title, description, startTime, durationMinutes, capacity } = req.body;
  if (!title || !startTime || !durationMinutes || !capacity) {
    throw new AppError('Missing required fields', 400);
  }

  const session = await createSessionWithCalendar({
    type: 'LiveClass',
    title,
    description,
    startTime,
    durationMinutes,
    capacity,
    hostId: req.user._id,
    attendeeEmails: [req.user.email],
  });

  res.status(201).json(session);
});

// GET /sessions — list upcoming scheduled sessions (FR1.2)
const listSessions = asyncHandler(async (req, res) => {
  const sessions = await Session.find({ status: 'scheduled' }).sort({ startTime: 1 });
  res.json(sessions);
});

// POST /sessions/:id/book (FR1.3-1.5)
const bookSession = asyncHandler(async (req, res) => {
  const studentId = req.user._id;

  const updated = await Session.findOneAndUpdate(
      {
        _id: req.params.id,
        attendeeIds: { $ne: studentId },
        $expr: { $lt: [{ $size: '$attendeeIds' }, '$capacity'] },
      },
      { $push: { attendeeIds: studentId } },
      { new: true }
  );

  if (!updated) throw new AppError('Session is full or already booked', 409);

  if (updated.googleEventId) {
    try {
      await addAttendeeToEvent(updated.googleEventId, req.user.email);
    } catch (err) {
      console.error('Failed to add attendee to calendar event:', err.message);
    }
  }

  res.json(updated);
});

// GET /sessions/:id/roster — host only (FR1.6), now includes each
// attendee's role within the session so the UI can label them clearly.
const getRoster = asyncHandler(async (req, res) => {
  const session = await Session.findById(req.params.id).populate('attendeeIds', 'name email');
  if (!session) throw new AppError('Session not found', 404);
  if (String(session.hostId) !== String(req.user._id)) {
    throw new AppError('Only the host can view the roster', 403);
  }

  const hostRole = session.type === 'LiveClass' ? 'Instructor' : 'Peer Tutor';
  const attendeeRole = session.type === 'LiveClass' ? 'Student' : 'Learner';

  const roster = session.attendeeIds.map((attendee) => ({
    _id: attendee._id,
    name: attendee.name,
    email: attendee.email,
    role: String(attendee._id) === String(session.hostId) ? hostRole : attendeeRole,
  }));

  res.json(roster);
});

module.exports = { createSession, listSessions, bookSession, getRoster };
```

## File: controllers/tutoringController.js
```javascript
const TutoringRequest = require('../models/TutoringRequest');
const User = require('../models/User');
const { createSessionWithCalendar } = require('../services/sessionService');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

// Peer tutoring is student-only. Blocks instructor accounts at the API
// level, not just in the UI.
function blockInstructors(req) {
  if (req.user.isInstructor) {
    throw new AppError('Peer tutoring is only available to student accounts', 403);
  }
}

// POST /tutoring-requests (FR3.2, FR3.3)
const createRequest = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const { topic } = req.body;
  if (!topic) throw new AppError('Topic is required', 400);

  const learner = await User.findOne({ _id: req.user._id, creditBalance: { $gte: 1 } });
  if (!learner) throw new AppError('Insufficient credit balance', 400);

  try {
    const request = await TutoringRequest.create({ learnerId: req.user._id, topic });
    res.status(201).json(request);
  } catch (err) {
    if (err.code === 11000) {
      throw new AppError('You already have a pending tutoring request', 409);
    }
    throw err;
  }
});

// GET /tutoring-requests — open requests, excluding the caller's own
const listRequests = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const requests = await TutoringRequest.find({
    status: 'open',
    learnerId: { $ne: req.user._id },
  }).populate('learnerId', 'name email');
  res.json(requests);
});

// GET /tutoring-requests/mine
const listMine = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const requests = await TutoringRequest.find({
    $or: [{ learnerId: req.user._id }, { tutorId: req.user._id }],
  }).sort({ createdAt: -1 });
  res.json(requests);
});

// POST /tutoring-requests/:id/accept (FR3.4, FR3.5)
const acceptRequest = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const request = await TutoringRequest.findOne({ _id: req.params.id, status: 'open' })
      .populate('learnerId', 'name email');
  if (!request) throw new AppError('Request not available', 404);

  const tutor = req.user;
  const { startTime, durationMinutes } = req.body;
  if (!startTime || !durationMinutes) throw new AppError('startTime and durationMinutes are required', 400);

  const session = await createSessionWithCalendar({
    type: 'PeerTutoring',
    title: `Peer Tutoring: ${request.topic}`,
    description: `Tutoring session between ${tutor.name} and ${request.learnerId.name}`,
    startTime,
    durationMinutes,
    capacity: 2,
    hostId: tutor._id,
    attendeeEmails: [tutor.email, request.learnerId.email],
  });
  session.attendeeIds.push(request.learnerId._id);
  await session.save();

  request.tutorId = tutor._id;
  request.sessionId = session._id;
  request.status = 'accepted';
  await request.save();

  res.json(request);
});

// POST /tutoring-requests/:id/confirm (FR3.7-3.10)
const confirmRequest = asyncHandler(async (req, res) => {
  const request = await TutoringRequest.findById(req.params.id);
  if (!request) throw new AppError('Request not found', 404);

  const userId = String(req.user._id);
  const isLearner = String(request.learnerId) === userId;
  const isTutor = String(request.tutorId) === userId;
  if (!isLearner && !isTutor) throw new AppError('Not part of this session', 403);

  const flagField = isLearner ? 'learnerConfirmed' : 'tutorConfirmed';
  const updated = await TutoringRequest.findOneAndUpdate(
      { _id: request._id },
      { $set: { [flagField]: true } },
      { new: true }
  );

  if (updated.learnerConfirmed && updated.tutorConfirmed) {
    const result = await TutoringRequest.confirmAndTransfer(updated._id);
    return res.json(result);
  }

  res.json(updated);
});

module.exports = { createRequest, listRequests, listMine, acceptRequest, confirmRequest };
```

## File: controllers/userController.js
```javascript
const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');

// GET /users/me
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email, isInstructor, creditBalance } = req.user;
  res.json({ id: _id, name, email, isInstructor, creditBalance });
});

// GET /users (List all registered users) — creditBalance excluded, this
// endpoint backs the public directory and must never expose balances.
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}, '-passwordHash -creditBalance');
  res.json(users);
});

module.exports = { getMe, getAllUsers };
```

## File: frontend/.editorconfig
```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

## File: frontend/.gitignore
```
# See http://help.github.com/ignore-files/ for more about ignoring files.

# Compiled output
/dist
/tmp
/out-tsc
/bazel-out

# Node
node_modules/
npm-debug.log
yarn-error.log

# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings

# System files
.DS_Store
Thumbs.db
```

## File: frontend/.vscode/extensions.json
```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=827846
  "recommendations": ["angular.ng-template"]
}
```

## File: frontend/.vscode/launch.json
```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: start",
      "url": "http://localhost:4200/"
    },
    {
      "name": "ng test",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: test",
      "url": "http://localhost:9876/debug.html"
    }
  ]
}
```

## File: frontend/.vscode/tasks.json
```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?LinkId=733558
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "start",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "(.*?)"
          },
          "endsPattern": {
            "regexp": "bundle generation complete"
          }
        }
      }
    },
    {
      "type": "npm",
      "script": "test",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "(.*?)"
          },
          "endsPattern": {
            "regexp": "bundle generation complete"
          }
        }
      }
    }
  ]
}
```

## File: frontend/angular.json
```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "frontend": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/frontend",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "10kb",
                  "maximumError": "20kb"
                }
              ],
              "outputHashing": "all",
              "fileReplacements":
              [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "frontend:build:production"
            },
            "development": {
              "browserTarget": "frontend:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "frontend:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}
```

## File: frontend/package.json
```json
{
  "name": "frontend",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^16.2.0",
    "@angular/common": "^16.2.0",
    "@angular/compiler": "^16.2.0",
    "@angular/core": "^16.2.0",
    "@angular/forms": "^16.2.0",
    "@angular/platform-browser": "^16.2.0",
    "@angular/platform-browser-dynamic": "^16.2.0",
    "@angular/router": "^16.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.2.16",
    "@angular/cli": "^16.2.16",
    "@angular/compiler-cli": "^16.2.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.1.3"
  }
}
```

## File: frontend/src/app/app.component.css
```css
.app-shell {
  min-height: 100vh;
  position: relative;
  background: #F4F6FB;
}

.dash-bg {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
.dash-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.25;
}
.dash-orb-1 {
  width: 380px; height: 380px;
  background: #FF6B35;
  top: -100px; left: 20%;
}
.dash-orb-2 {
  width: 320px; height: 320px;
  background: #3B82F6;
  bottom: -80px; right: 10%;
}

/* ===== Sidebar ===== */
.sidebar {
  width: 240px;
  height: calc(100vh - 40px);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 20px;
  position: fixed;
  top: 20px; left: 20px;
  z-index: 100;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.03);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 4px 20px;
  border-bottom: 1px solid #F3F4F6;
  margin-bottom: 20px;
}
.logo-mark {
  width: 32px; height: 32px;
  border-radius: 9px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}
.logo-name { font-size: 16px; font-weight: 800; color: #111827; letter-spacing: -0.5px; }
.logo-name span { color: #FF6B35; }

.nav-section {
  font-size: 11px;
  font-weight: 700;
  color: #9CA3AF;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 0 8px;
  margin-bottom: 8px;
}
.nav-items { display: flex; flex-direction: column; gap: 4px; flex: 1; }
.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #4B5563;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.nav-link:hover { background: #F3F4F6; color: #111827; transform: translateX(3px); }
.nav-link.active {
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF;
  box-shadow: 0 4px 14px rgba(255, 107, 53, 0.3);
}
.ni { font-size: 15px; width: 18px; text-align: center; }
.icon-gold { color: #F59E0B; margin-right: 4px; }

.sidebar-bottom { border-top: 1px solid #F3F4F6; padding-top: 14px; margin-top: 10px; }
.sb-user {
  display: flex; align-items: center; gap: 10px;
  background: #F9FAFB;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid #F3F4F6;
}
.sb-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 800;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.25);
}
.sb-info { flex: 1; overflow: hidden; }
.sb-name {
  font-size: 13px; font-weight: 700; color: #111827;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.sb-sub { font-size: 11px; color: #6B7280; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
.sb-role { font-weight: 600; }
.sb-dot { opacity: 0.5; }
.sb-credit { font-weight: 700; color: #166534; }
.sb-logout {
  background: none; border: none; cursor: pointer;
  font-size: 15px; color: #9CA3AF;
  padding: 6px; border-radius: 8px;
  transition: all 0.15s ease;
}
.sb-logout:hover { color: #EF4444; background: #FEE2E2; }

/* ===== Main content ===== */
.app-main {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 32px 40px;
  margin-left: 280px;
}
.app-main--auth { margin-left: 0; padding: 0; }

/* ===== Mobile ===== */
.mobile-toggle {
  display: none;
  position: fixed;
  top: 16px; left: 16px;
  z-index: 200;
  width: 42px; height: 42px;
  border-radius: 12px;
  border: none;
  background: #111827;
  color: #fff;
  font-size: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
  cursor: pointer;
}
.sidebar-scrim {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  z-index: 90;
}

@media (max-width: 900px) {
  .mobile-toggle { display: flex; align-items: center; justify-content: center; }
  .sidebar {
    left: -280px;
    transition: left 0.25s ease;
    top: 0;
    height: 100vh;
    border-radius: 0;
  }
  .sidebar--open { left: 0; }
  .sidebar--open ~ .sidebar-scrim,
  .sidebar-scrim { display: block; }
  .app-main { margin-left: 0; padding: 80px 20px 24px; }
}
```

## File: frontend/src/app/app.component.html
```html
<div class="app-shell">
  <div class="dash-bg" *ngIf="authService.isLoggedIn()">
    <div class="dash-orb dash-orb-1"></div>
    <div class="dash-orb dash-orb-2"></div>
  </div>

  <ng-container *ngIf="authService.isLoggedIn(); else authLayout">
    <button class="mobile-toggle" (click)="menuOpen = !menuOpen">
      <i class="fa-solid" [class.fa-bars]="!menuOpen" [class.fa-xmark]="menuOpen"></i>
    </button>

    <aside class="sidebar" [class.sidebar--open]="menuOpen">
      <div class="logo">
        <div class="logo-mark"><i class="fa-solid fa-graduation-cap"></i></div>
        <span class="logo-name">LMS<span>Portal</span></span>
      </div>

      <p class="nav-section">Menu</p>
      <nav class="nav-items">
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-link" (click)="menuOpen = false">
          <i class="fa-solid fa-chart-pie ni"></i> Dashboard
        </a>
        <a routerLink="/sessions" routerLinkActive="active" class="nav-link" (click)="menuOpen = false">
          <i class="fa-solid fa-video ni"></i> Sessions
        </a>
        <ng-container *ngIf="currentUser && !currentUser.isInstructor">
          <a routerLink="/tutoring/new" routerLinkActive="active" class="nav-link" (click)="menuOpen = false">
            <i class="fa-solid fa-hand ni"></i> Request Tutoring
          </a>
          <a routerLink="/tutoring/open" routerLinkActive="active" class="nav-link" (click)="menuOpen = false">
            <i class="fa-solid fa-user-graduate ni"></i> Accept Requests
          </a>
          <a routerLink="/tutoring/mine" routerLinkActive="active" class="nav-link" (click)="menuOpen = false">
            <i class="fa-solid fa-list-check ni"></i> My Requests
          </a>
        </ng-container>
        <a routerLink="/directory" routerLinkActive="active" class="nav-link" (click)="menuOpen = false">
          <i class="fa-solid fa-address-book ni"></i> Directory
        </a>
      </nav>

      <div class="sidebar-bottom" *ngIf="currentUser">
        <div class="sb-user">
          <div class="sb-avatar">{{ getInitials(currentUser.name) }}</div>
          <div class="sb-info">
            <div class="sb-name">{{ currentUser.name }}</div>
            <div class="sb-sub">
              <span class="sb-role">{{ currentUser.isInstructor ? 'Instructor' : 'Student' }}</span>
              <ng-container *ngIf="!currentUser.isInstructor">
                <span class="sb-dot">&bull;</span>
                <span class="sb-credit"><i class="fa-solid fa-wallet icon-gold"></i> {{ currentUser.creditBalance }}</span>
              </ng-container>
            </div>
          </div>
          <button class="sb-logout" (click)="logout()" title="Logout">
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </aside>

    <div class="sidebar-scrim" *ngIf="menuOpen" (click)="menuOpen = false"></div>

    <main class="app-main">
      <router-outlet></router-outlet>
    </main>
  </ng-container>

  <ng-template #authLayout>
    <main class="app-main app-main--auth">
      <router-outlet></router-outlet>
    </main>
  </ng-template>

  <app-toast></app-toast>
</div>
```

## File: frontend/src/app/app.component.spec.ts
```typescript
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('frontend app is running!');
  });
});
```

## File: frontend/src/app/app.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LMS Application';
  menuOpen = false;
  currentUser: User | null = null;

  constructor(public authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.userService.getMe().subscribe({
        next: (u) => (this.currentUser = u),
        error: () => (this.currentUser = null)
      });
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  }

  logout(): void {
    this.authService.logout();
    this.currentUser = null;
    this.menuOpen = false;
  }
}
```

## File: frontend/src/app/app.module.ts
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { StudentGuard } from './guards/student.guard';
import { SessionListComponent } from './components/sessions/session-list/session-list.component';
import { SessionCreateComponent } from './components/sessions/session-create/session-create.component';
import { SessionRosterComponent } from './components/sessions/session-roster/session-roster.component';
import { RequestCreateComponent } from './components/tutoring/request-create/request-create.component';
import { RequestListComponent } from './components/tutoring/request-list/request-list.component';
import { MyRequestsComponent } from './components/tutoring/my-requests/my-requests.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'sessions', component: SessionListComponent, canActivate: [AuthGuard] },
  { path: 'sessions/new', component: SessionCreateComponent, canActivate: [AuthGuard] },
  { path: 'sessions/:id/roster', component: SessionRosterComponent, canActivate: [AuthGuard] },
  { path: 'tutoring/new', component: RequestCreateComponent, canActivate: [AuthGuard, StudentGuard] },
  { path: 'tutoring/open', component: RequestListComponent, canActivate: [AuthGuard, StudentGuard] },
  { path: 'tutoring/mine', component: MyRequestsComponent, canActivate: [AuthGuard, StudentGuard] },
  { path: 'directory', component: DirectoryComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SessionListComponent,
    SessionCreateComponent,
    SessionRosterComponent,
    RequestCreateComponent,
    RequestListComponent,
    MyRequestsComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## File: frontend/src/app/components/dashboard/dashboard.component.css
```css
.dash-page { max-width: 1100px; margin: 0 auto; }

/* ===== Hero ===== */
.hero-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 28px;
  padding: 24px 32px;
  margin-bottom: 32px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  animation: fadeInUp 0.4s ease both;
}
.topbar { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.greeting-label { font-size: 12px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px; }
.icon-sparkle { color: #F59E0B; }
.greeting-name { font-size: 30px; font-weight: 900; color: #111827; letter-spacing: -0.8px; line-height: 1.1; }
.greeting-name em {
  font-style: normal;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.greeting-sub { font-size: 14px; color: #6B7280; margin-top: 6px; }
.topbar-actions {
  display: flex; align-items: center; gap: 12px;
  background: #FFFFFF;
  padding: 6px 8px 6px 14px;
  border-radius: 50px;
  border: 1px solid #E5E7EB;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03);
}
.role-chip {
  padding: 6px 14px; border-radius: 50px; font-size: 13px; font-weight: 700;
  color: #374151; background: #F3F4F6; white-space: nowrap;
}
.role-chip.instructor { background: #EDE9FE; color: #6D28D9; }
.btn-action {
  padding: 9px 22px; border-radius: 50px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF; font-size: 13px; font-weight: 700; border: none;
  cursor: pointer; display: flex; align-items: center; gap: 6px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(255,107,53,0.3);
  white-space: nowrap;
}
.btn-action:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,107,53,0.45); }
.btn-action-dark { background: linear-gradient(135deg, #111827, #1F2937); box-shadow: 0 4px 14px rgba(17,24,39,0.25); }
.btn-icon { font-size: 14px; }

/* ===== Stats ===== */
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
.stat-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 22px 24px;
  display: flex; flex-direction: column; gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  animation: fadeInUp 0.5s ease both;
}
.stat-card.orange { border-left-color: #F97316; background: linear-gradient(135deg, rgba(255, 251, 245, 0.7), rgba(255, 247, 237, 0.8)); }
.stat-card.purple { border-left-color: #8B5CF6; background: linear-gradient(135deg, rgba(253, 251, 255, 0.7), rgba(245, 243, 255, 0.8)); }
.stat-card.green  { border-left-color: #10B981; background: linear-gradient(135deg, rgba(247, 253, 251, 0.7), rgba(236, 253, 245, 0.8)); }
.stat-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.stat-top { display: flex; align-items: center; justify-content: space-between; }
.stat-pill { font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; }
.orange-pill { background: #FFF7ED; color: #C2410C; }
.purple-pill { background: #F5F3FF; color: #6D28D9; }
.green-pill  { background: #ECFDF5; color: #047857; }
.stat-number { font-size: 42px; font-weight: 900; line-height: 1; letter-spacing: -1.5px; }
.stat-card.orange .stat-number { background: linear-gradient(135deg, #EA580C, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.stat-card.purple .stat-number { background: linear-gradient(135deg, #7C3AED, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.stat-card.green .stat-number  { background: linear-gradient(135deg, #059669, #10B981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.stat-label { font-size: 13px; font-weight: 600; color: #6B7280; }

/* ===== Content grid ===== */
.content-grid { display: grid; grid-template-columns: 1fr 300px; gap: 24px; align-items: start; }
.right-col { display: flex; flex-direction: column; gap: 20px; }
.section-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
.section-heading { font-size: 20px; font-weight: 900; color: #111827; letter-spacing: -0.5px; }
.section-count { font-size: 12px; font-weight: 800; padding: 3px 12px; border-radius: 50px; background: #111827; color: #FFFFFF; }

/* ===== Session preview cards ===== */
.sessions-grid { display: flex; flex-direction: column; gap: 14px; margin-bottom: 16px; }
.session-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 4px solid #3B82F6;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);
  animation: fadeInUp 0.45s ease both;
}
.session-card:hover { border-color: #93C5FD; box-shadow: 0 16px 40px rgba(59, 130, 246, 0.12); transform: translateY(-4px); }
.sc-inner { padding: 18px 20px; }
.sc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.type-chip { font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; background: #ECFDF5; color: #047857; }
.type-chip.peer { background: #FFF7ED; color: #C2410C; }
.avail { font-size: 12px; font-weight: 700; color: #3B82F6; }
.sc-title { font-size: 16px; font-weight: 800; color: #111827; margin-bottom: 8px; letter-spacing: -0.3px; }
.sc-meta { display: flex; gap: 14px; flex-wrap: wrap; font-size: 12px; font-weight: 600; color: #6B7280; }
.icon-sub { opacity: 0.7; margin-right: 4px; }

/* ===== Right column cards ===== */
.tip-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 18px 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);
}
.request-card {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 8px;
}
.req-title { font-size: 13px; font-weight: 700; color: #111827; }
.rc-sub { font-size: 12px; color: #6B7280; margin-top: 2px; }
.widget__stats { list-style: none; font-size: 13px; color: #4B5563; display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
.widget__link { font-size: 12px; font-weight: 700; color: #FF6B35; }
.widget__link:hover { text-decoration: underline; }

/* ===== Empty / skeleton ===== */
.empty-state {
  text-align: center; padding: 40px 20px;
  color: #9CA3AF; font-size: 14px; font-weight: 600;
  background: #FFFFFF; border-radius: 20px; border: 1px solid #E5E7EB;
  margin-bottom: 16px;
}
.icon-badge.lg { width: 56px; height: 56px; font-size: 22px; margin: 0 auto 10px; }
.skeleton-wrap { display: flex; flex-direction: column; gap: 14px; }
.skeleton-card {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 24px;
  display: flex; flex-direction: column; gap: 12px;
}
.skeleton-title, .skeleton-desc, .skeleton-meta {
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
.skeleton-title { height: 20px; width: 40%; }
.skeleton-desc { height: 14px; width: 80%; }
.skeleton-meta { height: 14px; width: 60%; }

/* ===== Logout ===== */
.dash-logout {
  margin-top: 24px;
  padding: 9px 18px;
  border-radius: 50px;
  border: 1px solid #E5E7EB;
  background: #FFFFFF;
  color: #6B7280;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.dash-logout:hover { border-color: #EF4444; color: #EF4444; background: #FEF2F2; }

.error-text { color: #e74c3c; margin-top: 12px; }

@media (max-width: 1024px) {
  .content-grid { grid-template-columns: 1fr; }
  .stats-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .stats-row { grid-template-columns: 1fr; }
  .greeting-name { font-size: 24px; }
  .hero-card { padding: 20px; }
}
```

## File: frontend/src/app/components/dashboard/dashboard.component.html
```html
<div class="dash-page">
  <div *ngIf="loading" class="skeleton-wrap">
    <div class="skeleton-card" *ngFor="let i of [1,2,3]">
      <div class="skeleton-title"></div>
      <div class="skeleton-desc"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>

  <ng-container *ngIf="!loading && userProfile">
    <div class="hero-card">
      <div class="topbar">
        <div class="topbar-left">
          <p class="greeting-label">Good day <i class="fa-solid fa-sparkles icon-sparkle"></i></p>
          <h1 class="greeting-name">Welcome, <em>{{ userProfile.name }}</em></h1>
          <p class="greeting-sub">Here's everything happening in your learning space.</p>
        </div>
        <div class="topbar-right-box">
          <div class="topbar-actions">
            <span class="role-chip" [class.instructor]="userProfile.isInstructor">
              <i [class]="userProfile.isInstructor ? 'fa-solid fa-graduation-cap' : 'fa-solid fa-book-open'"></i>
              {{ userProfile.isInstructor ? 'Instructor' : 'Student' }}
            </span>
            <a routerLink="/sessions" class="btn-action" [class.btn-action-dark]="userProfile.isInstructor">
              <i class="fa-solid fa-video btn-icon"></i> {{ userProfile.isInstructor ? 'Manage Sessions' : 'Browse Sessions' }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-row">
      <ng-container *ngIf="!userProfile.isInstructor">
        <div class="stat-card orange">
          <div class="stat-top">
            <div class="icon-badge amber"><i class="fa-solid fa-wallet"></i></div>
            <span class="stat-pill orange-pill">Credit Balance</span>
          </div>
          <div class="stat-number">{{ userProfile.creditBalance }}</div>
          <div class="stat-label">Available Credits</div>
        </div>
        <div class="stat-card purple">
          <div class="stat-top">
            <div class="icon-badge purple"><i class="fa-solid fa-calendar-days"></i></div>
            <span class="stat-pill purple-pill">Sessions</span>
          </div>
          <div class="stat-number">{{ upcomingSessions.length }}</div>
          <div class="stat-label">Upcoming for you</div>
        </div>
        <div class="stat-card green">
          <div class="stat-top">
            <div class="icon-badge emerald"><i class="fa-solid fa-handshake-angle"></i></div>
            <span class="stat-pill green-pill">Confirmations</span>
          </div>
          <div class="stat-number">{{ pendingConfirmations.length }}</div>
          <div class="stat-label">Awaiting your confirmation</div>
        </div>
      </ng-container>

      <ng-container *ngIf="userProfile.isInstructor">
        <div class="stat-card orange">
          <div class="stat-top">
            <div class="icon-badge amber"><i class="fa-solid fa-chalkboard-user"></i></div>
            <span class="stat-pill orange-pill">Hosted</span>
          </div>
          <div class="stat-number">{{ hostedSessionsCount }}</div>
          <div class="stat-label">Sessions you host</div>
        </div>
        <div class="stat-card purple">
          <div class="stat-top">
            <div class="icon-badge purple"><i class="fa-solid fa-calendar-days"></i></div>
            <span class="stat-pill purple-pill">Upcoming</span>
          </div>
          <div class="stat-number">{{ upcomingSessions.length }}</div>
          <div class="stat-label">Scheduled ahead</div>
        </div>
        <div class="stat-card green">
          <div class="stat-top">
            <div class="icon-badge emerald"><i class="fa-solid fa-users"></i></div>
            <span class="stat-pill green-pill">Bookings</span>
          </div>
          <div class="stat-number">{{ totalBookings }}</div>
          <div class="stat-label">Total attendees</div>
        </div>
      </ng-container>
    </div>

    <div class="content-grid">
      <section>
        <div class="section-top">
          <h2 class="section-heading">Upcoming Sessions</h2>
          <span class="section-count">{{ upcomingSessions.length }}</span>
        </div>

        <div *ngIf="upcomingSessions.length === 0" class="empty-state">
          <div class="icon-badge blue lg"><i class="fa-solid fa-inbox"></i></div>
          <p>No upcoming sessions yet.</p>
        </div>

        <div class="sessions-grid" *ngIf="upcomingSessions.length > 0">
          <div *ngFor="let s of upcomingSessions; let i = index"
               class="session-card"
               [style.animation-delay]="(i * 0.07) + 's'">
            <div class="sc-inner">
              <div class="sc-top">
                <span class="type-chip" [class.peer]="s.type === 'PeerTutoring'">
                  <i [class]="s.type === 'PeerTutoring' ? 'fa-solid fa-users-rectangle' : 'fa-solid fa-chalkboard-user'"></i>
                  {{ s.type === 'PeerTutoring' ? 'Peer Tutoring' : 'Live Class' }}
                </span>
                <span class="avail" *ngIf="isHostOf(s)">Hosting</span>
              </div>
              <h3 class="sc-title">{{ s.title }}</h3>
              <div class="sc-meta">
                <span><i class="fa-regular fa-clock icon-sub"></i> {{ s.startTime | date:'medium' }}</span>
                <span><i class="fa-solid fa-stopwatch icon-sub"></i> {{ s.durationMinutes }} min</span>
                <span><i class="fa-solid fa-users icon-sub"></i> {{ s.attendeeIds.length }}/{{ s.capacity }}</span>
              </div>
            </div>
          </div>
        </div>

        <a routerLink="/sessions" class="widget__link">View all sessions</a>
      </section>

      <div class="right-col" *ngIf="!userProfile.isInstructor">
        <section class="tip-card" *ngIf="pendingConfirmations.length > 0">
          <div class="section-top">
            <h2 class="section-heading">Pending Confirmations</h2>
          </div>
          <div class="request-card" *ngFor="let r of pendingConfirmations">
            <p class="req-title">{{ r.topic }}</p>
            <p class="rc-sub">You're acting as {{ roleInRequest(r) }}</p>
          </div>
          <a routerLink="/tutoring/mine" class="widget__link">Confirm now</a>
        </section>

        <section class="tip-card">
          <div class="section-top">
            <h2 class="section-heading">Tutoring Requests</h2>
          </div>
          <ul class="widget__stats">
            <li>Open: {{ tutoringStats.open }}</li>
            <li>Scheduled: {{ tutoringStats.accepted }}</li>
            <li>Completed: {{ tutoringStats.confirmed }}</li>
            <li>Expired: {{ tutoringStats.expired }}</li>
          </ul>
          <a routerLink="/tutoring/mine" class="widget__link">View my requests</a>
        </section>
      </div>
    </div>

    <button (click)="logout()" class="btn-cancel dash-logout">
      <i class="fa-solid fa-right-from-bracket"></i> Logout
    </button>
  </ng-container>

  <p *ngIf="errorMsg" class="error-text">{{ errorMsg }}</p>
</div>
```

## File: frontend/src/app/components/dashboard/dashboard.component.spec.ts
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## File: frontend/src/app/components/dashboard/dashboard.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';
import { TutoringService } from 'src/app/services/tutoring.service';
import { User } from 'src/app/models/user.model';
import { Session } from 'src/app/models/session.model';
import { TutoringRequest } from 'src/app/models/tutoring-request.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userProfile: User | null = null;
  loading = true;
  errorMsg = '';

  upcomingSessions: Session[] = [];
  hostedSessionsCount = 0;
  totalBookings = 0;

  tutoringStats = { open: 0, accepted: 0, confirmed: 0, expired: 0, failedTransfer: 0 };
  pendingConfirmations: TutoringRequest[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private sessionService: SessionService,
    private tutoringService: TutoringService
  ) {}

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile(): void {
    this.loading = true;
    this.userService.getMe().subscribe({
      next: (data) => {
        this.userProfile = data;
        this.loadWidgets();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Session expired or invalid token.';
        this.authService.logout();
      }
    });
  }

  private loadWidgets(): void {
    if (!this.userProfile) { this.loading = false; return; }

    const sessions$ = this.sessionService.list();

    if (this.userProfile.isInstructor) {
      sessions$.subscribe({
        next: (sessions) => {
          this.processSessions(sessions);
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
      return;
    }

    forkJoin({
      sessions: sessions$,
      requests: this.tutoringService.listMine()
    }).subscribe({
      next: ({ sessions, requests }) => {
        this.processSessions(sessions);
        this.processRequests(requests);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private processSessions(sessions: Session[]): void {
    const userId = this.userProfile!.id;
    const now = new Date();

    const mine = sessions.filter(s => s.hostId === userId || s.attendeeIds.includes(userId));
    this.upcomingSessions = mine
      .filter(s => new Date(s.startTime) > now)
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
      .slice(0, 5);

    const hosted = sessions.filter(s => s.hostId === userId);
    this.hostedSessionsCount = hosted.length;
    this.totalBookings = hosted.reduce((sum, s) => sum + s.attendeeIds.length, 0);
  }

  private processRequests(requests: TutoringRequest[]): void {
    this.tutoringStats = { open: 0, accepted: 0, confirmed: 0, expired: 0, failedTransfer: 0 };
    const userId = this.userProfile!.id;

    for (const r of requests) {
      if (r.status === 'open') this.tutoringStats.open++;
      else if (r.status === 'accepted') this.tutoringStats.accepted++;
      else if (r.status === 'confirmed') this.tutoringStats.confirmed++;
      else if (r.status === 'expired') this.tutoringStats.expired++;
      else if (r.status === 'failed_transfer') this.tutoringStats.failedTransfer++;
    }

    this.pendingConfirmations = requests.filter(r => {
      if (r.status !== 'accepted' || !r.confirmationDeadline) return false;
      const learnerId = typeof r.learnerId === 'object' ? r.learnerId._id : r.learnerId;
      const isLearner = learnerId === userId;
      const isTutor = r.tutorId === userId;
      if (isLearner) return !r.learnerConfirmed;
      if (isTutor) return !r.tutorConfirmed;
      return false;
    });
  }

  roleInRequest(request: TutoringRequest): string {
    if (!this.userProfile) return '';
    const learnerId = typeof request.learnerId === 'object' ? request.learnerId._id : request.learnerId;
    return learnerId === this.userProfile.id ? 'Learner' : 'Peer Tutor';
  }

  isHostOf(session: Session): boolean {
    return !!this.userProfile && session.hostId === this.userProfile.id;
  }

  logout(): void {
    this.authService.logout();
  }
}
```

## File: frontend/src/app/components/directory/directory.component.css
```css
.directory-page { max-width: 720px; margin: 0 auto; }

.page-header { margin-bottom: 24px; }
.page-title { font-size: 26px; font-weight: 900; color: #111827; letter-spacing: -0.6px; }
.page-sub { font-size: 14px; color: #6B7280; margin-top: 4px; }

.directory-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 8px 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  animation: fadeInUp 0.4s ease both;
}

.dir-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid #F3F4F6;
}
.dir-row:last-child { border-bottom: none; }
.dir-avatar {
  width: 42px; height: 42px; border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 800;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.25);
}
.dir-info { flex: 1; min-width: 0; }
.dir-name { font-size: 15px; font-weight: 700; color: #111827; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dir-email { font-size: 12px; color: #6B7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.role-badge {
  font-size: 11px; font-weight: 800;
  padding: 5px 14px; border-radius: 50px;
  text-transform: uppercase; letter-spacing: 0.5px;
  white-space: nowrap; flex-shrink: 0;
}
.role-badge--instructor { background: #EDE9FE; color: #6D28D9; }
.role-badge--student    { background: #EFF6FF; color: #2563EB; }

/* ===== Skeleton / empty ===== */
.skeleton-wrap { display: flex; flex-direction: column; }
.skeleton-row { display: flex; align-items: center; gap: 14px; padding: 16px 0; border-bottom: 1px solid #F3F4F6; }
.skeleton-row:last-child { border-bottom: none; }
.skeleton-avatar {
  width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
.skeleton-line { border-radius: 4px; background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%); background-size: 200% 100%; animation: shimmer 2s infinite linear; }
.skeleton-line.name { height: 14px; width: 40%; margin-bottom: 8px; }
.skeleton-line.email { height: 11px; width: 55%; }

.empty-state {
  text-align: center; padding: 48px 20px;
  color: #9CA3AF; font-size: 14px; font-weight: 600;
  background: #FFFFFF; border-radius: 20px; border: 1px solid #E5E7EB;
}
.icon-badge.lg { width: 56px; height: 56px; font-size: 22px; margin: 0 auto 10px; }

@media (max-width: 480px) {
  .dir-row { align-items: flex-start; }
  .role-badge { margin-top: 4px; }
}
```

## File: frontend/src/app/components/directory/directory.component.html
```html
<div class="directory-page">
  <div class="page-header">
    <h1 class="page-title">Directory</h1>
    <p class="page-sub">Everyone in your learning community.</p>
  </div>

  <div *ngIf="loading" class="directory-card">
    <div class="skeleton-wrap">
      <div class="skeleton-row" *ngFor="let i of [1,2,3,4]">
        <div class="skeleton-avatar"></div>
        <div style="flex: 1;">
          <div class="skeleton-line name"></div>
          <div class="skeleton-line email"></div>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="!loading && users.length === 0" class="empty-state">
    <div class="icon-badge blue lg"><i class="fa-solid fa-users-slash"></i></div>
    <p>No members found.</p>
  </div>

  <div class="directory-card" *ngIf="!loading && users.length > 0">
    <div class="dir-row" *ngFor="let user of users">
      <div class="dir-avatar">{{ getInitials(user.name) }}</div>
      <div class="dir-info">
        <div class="dir-name">{{ user.name }}</div>
        <div class="dir-email">{{ user.email }}</div>
      </div>
      <span class="role-badge" [ngClass]="user.isInstructor ? 'role-badge--instructor' : 'role-badge--student'">
        {{ user.isInstructor ? 'Instructor' : 'Student' }}
      </span>
    </div>
  </div>
</div>
```

## File: frontend/src/app/components/directory/directory.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(
    private userService: UserService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Could not load directory.');
      }
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  }
}
```

## File: frontend/src/app/components/login/login.component.css
```css
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0F172A;
  position: relative;
  overflow: hidden;
}
.auth-bg { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
.auth-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; animation: orbFloat 8s ease-in-out infinite alternate; }
.auth-orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, #FF6B35 0%, transparent 70%); top: -10%; left: -5%; animation-duration: 10s; }
.auth-orb-2 { width: 350px; height: 350px; background: radial-gradient(circle, #6D28D9 0%, transparent 70%); bottom: -10%; right: -5%; animation-duration: 12s; animation-delay: -4s; }
.auth-orb-3 { width: 250px; height: 250px; background: radial-gradient(circle, #3B82F6 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%); animation-duration: 14s; animation-delay: -7s; }
@keyframes orbFloat {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(30px, -20px) scale(1.05); }
  66%  { transform: translate(-20px, 15px) scale(0.95); }
  100% { transform: translate(10px, -10px) scale(1.02); }
}

.auth-card {
  position: relative; z-index: 1;
  width: 100%; max-width: 440px;
  padding: 40px 36px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  animation: cardEnter 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  margin: 16px;
}
@keyframes cardEnter { from { opacity: 0; transform: translateY(30px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }

.auth-brand { text-align: center; margin-bottom: 32px; }
.auth-logo {
  width: 60px; height: 60px; margin: 0 auto 18px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; color: #FFFFFF;
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35);
  animation: logoPulse 3s ease-in-out infinite;
}
@keyframes logoPulse { 0%, 100% { box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35); } 50% { box-shadow: 0 8px 32px rgba(255, 107, 53, 0.55); } }
.auth-card h1 { font-size: 28px; font-weight: 900; color: #FFFFFF; letter-spacing: -0.8px; margin-bottom: 6px; }
.auth-subtitle { font-size: 14px; color: rgba(255, 255, 255, 0.55); font-weight: 500; }

.auth-error {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #FCA5A5;
  font-size: 13px; font-weight: 600;
  padding: 12px 16px; border-radius: 14px;
  margin-bottom: 22px;
  display: flex; align-items: center; gap: 10px;
  animation: fadeInUp 0.3s ease;
}
.auth-error i { color: #F87171; font-size: 15px; flex-shrink: 0; }

.auth-form { display: flex; flex-direction: column; gap: 20px; }
.auth-field label { display: block; font-size: 13px; font-weight: 700; color: rgba(255, 255, 255, 0.7); margin-bottom: 8px; letter-spacing: 0.2px; }
.auth-input-wrap { position: relative; }
.auth-input-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: rgba(255, 255, 255, 0.3); font-size: 14px; transition: color 0.2s ease; pointer-events: none; }
.auth-input-wrap input {
  width: 100%; padding: 14px 16px 14px 46px;
  background: rgba(255, 255, 255, 0.06);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  font-size: 14px; font-family: inherit; color: #FFFFFF;
  outline: none;
  transition: all 0.25s ease;
  box-sizing: border-box;
}
.auth-input-wrap input::placeholder { color: rgba(255, 255, 255, 0.25); }
.auth-input-wrap input:focus { border-color: #FF6B35; background: rgba(255, 255, 255, 0.1); box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.15); }
.auth-input-wrap input:focus ~ .auth-input-icon, .auth-input-wrap:focus-within .auth-input-icon { color: #FF6B35; }

.auth-btn {
  width: 100%; padding: 15px; border: none; border-radius: 14px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF; font-size: 15px; font-weight: 800; font-family: inherit;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.35);
  display: flex; align-items: center; justify-content: center;
  min-height: 52px; margin-top: 4px;
}
.auth-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255, 107, 53, 0.5); }
.auth-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.auth-spinner {
  display: inline-block; width: 20px; height: 20px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF; border-radius: 50%;
  animation: spin 0.65s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.auth-footer { text-align: center; margin-top: 24px; font-size: 14px; color: rgba(255, 255, 255, 0.5); }
.auth-link { color: #FF6B35; font-weight: 700; transition: color 0.15s ease; }
.auth-link:hover { color: #FB923C; text-decoration: underline; }

@media (max-width: 480px) {
  .auth-card { padding: 32px 24px; }
  .auth-card h1 { font-size: 24px; }
  .auth-orb-1 { width: 250px; height: 250px; }
  .auth-orb-2 { width: 200px; height: 200px; }
  .auth-orb-3 { width: 150px; height: 150px; }
}
```

## File: frontend/src/app/components/login/login.component.html
```html
<div class="auth-page">
  <div class="auth-bg">
    <div class="auth-orb auth-orb-1"></div>
    <div class="auth-orb auth-orb-2"></div>
    <div class="auth-orb auth-orb-3"></div>
  </div>

  <div class="auth-card">
    <div class="auth-brand">
      <div class="auth-logo"><i class="fa-solid fa-graduation-cap"></i></div>
      <h1>Welcome Back</h1>
      <p class="auth-subtitle">Sign in to continue your learning journey</p>
    </div>

    <div class="auth-error" *ngIf="errorMessage">
      <i class="fa-solid fa-circle-exclamation"></i>
      {{ errorMessage }}
    </div>

    <form (ngSubmit)="loginUser()" class="auth-form">
      <div class="auth-field">
        <label for="login-email">Email Address</label>
        <div class="auth-input-wrap">
          <i class="fa-solid fa-envelope auth-input-icon"></i>
          <input id="login-email" type="email" [(ngModel)]="user.email" name="email" required
                 placeholder="you@example.com" autocomplete="email">
        </div>
      </div>

      <div class="auth-field">
        <label for="login-password">Password</label>
        <div class="auth-input-wrap">
          <i class="fa-solid fa-lock auth-input-icon"></i>
          <input id="login-password" type="password" [(ngModel)]="user.password" name="password" required
                 placeholder="Enter your password" autocomplete="current-password">
        </div>
      </div>

      <button type="submit" class="auth-btn" [disabled]="loading">
        <span *ngIf="!loading">Sign In</span>
        <span *ngIf="loading" class="auth-spinner"></span>
      </button>
    </form>

    <p class="auth-footer">
      Don't have an account?
      <a routerLink="/register" class="auth-link">Create one</a>
    </p>
  </div>
</div>
```

## File: frontend/src/app/components/login/login.component.spec.ts
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## File: frontend/src/app/components/login/login.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = { email: '', password: '' };
  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser(): void {
    if (!this.user.email || !this.user.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.errorMessage = '';
    this.loading = true;

    this.authService.login(this.user).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('Welcome back!');
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMessage = err.error?.error || 'Invalid credentials or login failed.';
      }
    });
  }
}
```

## File: frontend/src/app/components/register/register.component.css
```css
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0F172A;
  position: relative;
  overflow: hidden;
}
.auth-bg { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
.auth-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; animation: orbFloat 8s ease-in-out infinite alternate; }
.auth-orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, #FF6B35 0%, transparent 70%); top: -10%; left: -5%; animation-duration: 10s; }
.auth-orb-2 { width: 350px; height: 350px; background: radial-gradient(circle, #6D28D9 0%, transparent 70%); bottom: -10%; right: -5%; animation-duration: 12s; animation-delay: -4s; }
.auth-orb-3 { width: 250px; height: 250px; background: radial-gradient(circle, #3B82F6 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%); animation-duration: 14s; animation-delay: -7s; }
@keyframes orbFloat {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(30px, -20px) scale(1.05); }
  66%  { transform: translate(-20px, 15px) scale(0.95); }
  100% { transform: translate(10px, -10px) scale(1.02); }
}

.auth-card {
  position: relative; z-index: 1;
  width: 100%; max-width: 440px;
  padding: 40px 36px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  animation: cardEnter 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  margin: 16px;
}
@keyframes cardEnter { from { opacity: 0; transform: translateY(30px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }

.auth-brand { text-align: center; margin-bottom: 32px; }
.auth-logo {
  width: 60px; height: 60px; margin: 0 auto 18px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; color: #FFFFFF;
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35);
  animation: logoPulse 3s ease-in-out infinite;
}
@keyframes logoPulse { 0%, 100% { box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35); } 50% { box-shadow: 0 8px 32px rgba(255, 107, 53, 0.55); } }
.auth-card h1 { font-size: 28px; font-weight: 900; color: #FFFFFF; letter-spacing: -0.8px; margin-bottom: 6px; }
.auth-subtitle { font-size: 14px; color: rgba(255, 255, 255, 0.55); font-weight: 500; }

.auth-error {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #FCA5A5;
  font-size: 13px; font-weight: 600;
  padding: 12px 16px; border-radius: 14px;
  margin-bottom: 22px;
  display: flex; align-items: center; gap: 10px;
  animation: fadeInUp 0.3s ease;
}
.auth-error i { color: #F87171; font-size: 15px; flex-shrink: 0; }

.auth-form { display: flex; flex-direction: column; gap: 20px; }
.auth-field label { display: block; font-size: 13px; font-weight: 700; color: rgba(255, 255, 255, 0.7); margin-bottom: 8px; letter-spacing: 0.2px; }
.auth-input-wrap { position: relative; }
.auth-input-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: rgba(255, 255, 255, 0.3); font-size: 14px; transition: color 0.2s ease; pointer-events: none; }
.auth-input-wrap input {
  width: 100%; padding: 14px 16px 14px 46px;
  background: rgba(255, 255, 255, 0.06);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  font-size: 14px; font-family: inherit; color: #FFFFFF;
  outline: none;
  transition: all 0.25s ease;
  box-sizing: border-box;
}
.auth-input-wrap input::placeholder { color: rgba(255, 255, 255, 0.25); }
.auth-input-wrap input:focus { border-color: #FF6B35; background: rgba(255, 255, 255, 0.1); box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.15); }
.auth-input-wrap input:focus ~ .auth-input-icon, .auth-input-wrap:focus-within .auth-input-icon { color: #FF6B35; }

.auth-checkbox { display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 14px; color: rgba(255, 255, 255, 0.7); font-weight: 600; }
.auth-checkbox input[type="checkbox"] { width: 18px; height: 18px; accent-color: #FF6B35; cursor: pointer; }

.auth-btn {
  width: 100%; padding: 15px; border: none; border-radius: 14px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF; font-size: 15px; font-weight: 800; font-family: inherit;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.35);
  display: flex; align-items: center; justify-content: center;
  min-height: 52px; margin-top: 4px;
}
.auth-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255, 107, 53, 0.5); }
.auth-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.auth-spinner {
  display: inline-block; width: 20px; height: 20px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF; border-radius: 50%;
  animation: spin 0.65s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.auth-footer { text-align: center; margin-top: 24px; font-size: 14px; color: rgba(255, 255, 255, 0.5); }
.auth-link { color: #FF6B35; font-weight: 700; transition: color 0.15s ease; }
.auth-link:hover { color: #FB923C; text-decoration: underline; }

@media (max-width: 480px) {
  .auth-card { padding: 32px 24px; }
  .auth-card h1 { font-size: 24px; }
  .auth-orb-1 { width: 250px; height: 250px; }
  .auth-orb-2 { width: 200px; height: 200px; }
  .auth-orb-3 { width: 150px; height: 150px; }
}
```

## File: frontend/src/app/components/register/register.component.html
```html
<div class="auth-page">
  <div class="auth-bg">
    <div class="auth-orb auth-orb-1"></div>
    <div class="auth-orb auth-orb-2"></div>
    <div class="auth-orb auth-orb-3"></div>
  </div>

  <div class="auth-card">
    <div class="auth-brand">
      <div class="auth-logo"><i class="fa-solid fa-user-plus"></i></div>
      <h1>Create Account</h1>
      <p class="auth-subtitle">Join our learning community today</p>
    </div>

    <div class="auth-error" *ngIf="errorMessage">
      <i class="fa-solid fa-circle-exclamation"></i>
      {{ errorMessage }}
    </div>

    <form (ngSubmit)="registerUser()" class="auth-form">
      <div class="auth-field">
        <label for="reg-name">Full Name</label>
        <div class="auth-input-wrap">
          <i class="fa-solid fa-user auth-input-icon"></i>
          <input id="reg-name" type="text" [(ngModel)]="user.name" name="name" required
                 placeholder="John Doe" autocomplete="name">
        </div>
      </div>

      <div class="auth-field">
        <label for="reg-email">Email Address</label>
        <div class="auth-input-wrap">
          <i class="fa-solid fa-envelope auth-input-icon"></i>
          <input id="reg-email" type="email" [(ngModel)]="user.email" name="email" required
                 placeholder="you@example.com" autocomplete="email">
        </div>
      </div>

      <div class="auth-field">
        <label for="reg-password">Password</label>
        <div class="auth-input-wrap">
          <i class="fa-solid fa-lock auth-input-icon"></i>
          <input id="reg-password" type="password" [(ngModel)]="user.password" name="password" required
                 placeholder="Create a strong password" autocomplete="new-password">
        </div>
      </div>

      <div class="auth-field">
        <label class="auth-checkbox">
          <input type="checkbox" [(ngModel)]="user.isInstructor" name="isInstructor">
          <span><i class="fa-solid fa-chalkboard-user" style="margin-right:6px;opacity:0.7;"></i>Register as Instructor</span>
        </label>
      </div>

      <button type="submit" class="auth-btn" [disabled]="loading">
        <span *ngIf="!loading">Create Account</span>
        <span *ngIf="loading" class="auth-spinner"></span>
      </button>
    </form>

    <p class="auth-footer">
      Already have an account?
      <a routerLink="/login" class="auth-link">Sign in</a>
    </p>
  </div>
</div>
```

## File: frontend/src/app/components/register/register.component.spec.ts
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## File: frontend/src/app/components/register/register.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: false,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = { name: '', email: '', password: '', isInstructor: false };
  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  registerUser(): void {
    if (!this.user.name || !this.user.email || !this.user.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    this.errorMessage = '';
    this.loading = true;

    this.authService.register(this.user).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('Account created!');
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMessage = err.error?.error || 'Registration failed. Try a different email.';
      }
    });
  }
}
```

## File: frontend/src/app/components/sessions/session-create/session-create.component.css
```css
.form-page { max-width: 640px; margin: 0 auto; }

.page-header { margin-bottom: 24px; }
.page-title { font-size: 26px; font-weight: 900; color: #111827; letter-spacing: -0.6px; }
.page-sub { font-size: 14px; color: #6B7280; margin-top: 4px; }

.form-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 28px 32px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  animation: fadeInUp 0.4s ease both;
}

.form-error {
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #B91C1C;
  font-size: 13px;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-group { margin-bottom: 18px; }
.form-row.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-label { display: block; font-size: 13px; font-weight: 700; color: #374151; margin-bottom: 6px; }
.req { color: #EF4444; }

.form-input {
  width: 100%; padding: 12px 16px;
  border: 1.5px solid #E5E7EB; border-radius: 12px;
  font-size: 14px; font-family: inherit; color: #111827;
  background: #F9FAFB;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
}
.form-input:focus {
  border-color: #FF6B35; background: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(255,107,53,0.12);
}
.form-textarea { resize: vertical; min-height: 80px; }

.form-actions { margin-top: 8px; }
.btn-submit {
  padding: 13px 28px; border-radius: 50px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF; font-size: 14px; font-weight: 800; border: none;
  cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-width: 170px;
  transition: all 0.2s ease;
  box-shadow: 0 6px 20px rgba(255,107,53,0.3);
}
.btn-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.45); }
.btn-submit:disabled { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: none; }

.spinner-sm {
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.65s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 640px) {
  .form-card { padding: 22px 20px; }
  .form-row.two-col { grid-template-columns: 1fr; }
}
```

## File: frontend/src/app/components/sessions/session-create/session-create.component.html
```html
<div class="form-page">
  <div class="page-header">
    <h1 class="page-title">Create Session</h1>
    <p class="page-sub">Schedule a new live class for students to book.</p>
  </div>

  <div class="form-card">
    <div class="form-error" *ngIf="errorMessage">
      <i class="fa-solid fa-circle-exclamation"></i>
      {{ errorMessage }}
    </div>

    <form (ngSubmit)="submit()">
      <div class="form-group">
        <label class="form-label">Title <span class="req">*</span></label>
        <input class="form-input" type="text" [(ngModel)]="title" name="title" placeholder="e.g. Intro to Linear Algebra" required>
      </div>

      <div class="form-group">
        <label class="form-label">Description</label>
        <textarea class="form-input form-textarea" [(ngModel)]="description" name="description" rows="3" placeholder="What will this session cover?"></textarea>
      </div>

      <div class="form-group">
        <label class="form-label">Start Time <span class="req">*</span></label>
        <input class="form-input" type="datetime-local" [(ngModel)]="startTime" name="startTime" required>
      </div>

      <div class="form-row two-col">
        <div class="form-group">
          <label class="form-label">Duration, minutes, max 60 <span class="req">*</span></label>
          <input class="form-input" type="number" [(ngModel)]="durationMinutes" name="durationMinutes" min="1" max="60" required>
        </div>
        <div class="form-group">
          <label class="form-label">Capacity, max 100 <span class="req">*</span></label>
          <input class="form-input" type="number" [(ngModel)]="capacity" name="capacity" min="1" max="100" required>
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-submit" [disabled]="submitting">
          <span *ngIf="!submitting"><i class="fa-solid fa-calendar-plus"></i> Create Session</span>
          <span *ngIf="submitting" class="spinner-sm"></span>
        </button>
      </div>
    </form>
  </div>
</div>
```

## File: frontend/src/app/components/sessions/session-create/session-create.component.ts
```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  standalone: false,
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent {
  title = '';
  description = '';
  startTime = '';
  durationMinutes: number | null = null;
  capacity: number | null = null;
  submitting = false;
  errorMessage = '';

  constructor(
    private sessionService: SessionService,
    private toastService: ToastService,
    private router: Router
  ) {}

  submit(): void {
    if (!this.title || !this.startTime || !this.durationMinutes || !this.capacity) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }
    this.errorMessage = '';
    this.submitting = true;

    this.sessionService.create({
      title: this.title,
      description: this.description,
      startTime: this.startTime,
      durationMinutes: this.durationMinutes,
      capacity: this.capacity
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.toastService.success('Session created.');
        this.router.navigate(['/sessions']);
      },
      error: (err) => {
        this.submitting = false;
        this.errorMessage = err.error?.error || 'Could not create session.';
      }
    });
  }
}
```

## File: frontend/src/app/components/sessions/session-list/session-list.component.css
```css
.sessions-page { max-width: 1100px; margin: 0 auto; }

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
}
.page-title { font-size: 26px; font-weight: 900; color: #111827; letter-spacing: -0.6px; }
.page-sub { font-size: 14px; color: #6B7280; margin-top: 4px; }

.btn-primary {
  padding: 10px 22px;
  border-radius: 50px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(255,107,53,0.3);
  white-space: nowrap;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,107,53,0.45); }
.btn-primary:disabled { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: none; }

.btn-secondary {
  padding: 10px 20px;
  border-radius: 50px;
  background: #F3F4F6;
  color: #374151;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}
.btn-secondary:hover { background: #E5E7EB; }

/* ===== Skeleton loading ===== */
.skeleton-wrap { display: flex; flex-direction: column; gap: 14px; }
.skeleton-card {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 24px;
  display: flex; flex-direction: column; gap: 12px;
}
.skeleton-title, .skeleton-desc, .skeleton-meta {
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
.skeleton-title { height: 20px; width: 40%; }
.skeleton-desc { height: 14px; width: 80%; }
.skeleton-meta { height: 14px; width: 60%; }

/* ===== Empty state ===== */
.empty-state {
  text-align: center; padding: 48px 20px;
  color: #9CA3AF; font-size: 14px; font-weight: 600;
  background: #FFFFFF; border-radius: 20px; border: 1px solid #E5E7EB;
}
.icon-badge.lg { width: 56px; height: 56px; font-size: 22px; margin: 0 auto 10px; }

/* ===== Session card grid ===== */
.session-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
.session-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 4px solid #3B82F6;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);
  animation: fadeInUp 0.45s ease both;
}
.session-card.full { border-left-color: #EF4444; }
.session-card:hover { border-color: #93C5FD; box-shadow: 0 16px 40px rgba(59, 130, 246, 0.12); transform: translateY(-4px); }

.sc-inner { padding: 20px 22px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.sc-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }

.type-chip { font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; background: #ECFDF5; color: #047857; }
.type-chip.peer { background: #FFF7ED; color: #C2410C; }

.full-pill { font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; background: #FEF2F2; color: #B91C1C; }
.host-pill { font-size: 11px; font-weight: 700; color: #3B82F6; }

.sc-title { font-size: 17px; font-weight: 800; color: #111827; letter-spacing: -0.3px; }
.sc-desc { font-size: 13px; color: #6B7280; line-height: 1.5; }

.sc-meta { display: flex; gap: 14px; flex-wrap: wrap; font-size: 12px; font-weight: 600; color: #6B7280; }
.icon-sub { opacity: 0.7; margin-right: 4px; }

.sc-meet { font-size: 13px; padding-top: 4px; border-top: 1px solid #F3F4F6; margin-top: 2px; }
.sc-meet a { color: #2563EB; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; }
.sc-meet a:hover { text-decoration: underline; }
.sc-meet-pending { color: #9CA3AF; font-style: italic; }

.sc-actions {
  margin-top: auto;
  padding: 14px 22px;
  background: rgba(249, 250, 251, 0.7);
  border-top: 1px solid rgba(229, 231, 235, 0.6);
  display: flex;
  gap: 10px;
}
.sc-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #059669;
}

@media (max-width: 640px) {
  .session-grid { grid-template-columns: 1fr; }
  .page-header { flex-direction: column; align-items: flex-start; }
  .sc-actions { flex-direction: column; align-items: stretch; }
}
```

## File: frontend/src/app/components/sessions/session-list/session-list.component.html
```html
<div class="sessions-page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Sessions</h1>
      <p class="page-sub">
        {{ currentUser?.isInstructor ? 'Manage the live classes you host.' : 'Browse and book upcoming sessions.' }}
      </p>
    </div>
    <a *ngIf="currentUser?.isInstructor" routerLink="/sessions/new" class="btn-primary">
      <i class="fa-solid fa-plus"></i> Create Session
    </a>
  </div>

  <div *ngIf="loading" class="skeleton-wrap">
    <div class="skeleton-card" *ngFor="let i of [1,2,3]">
      <div class="skeleton-title"></div>
      <div class="skeleton-desc"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>

  <div *ngIf="!loading && visibleSessions.length === 0" class="empty-state">
    <div class="icon-badge blue lg"><i class="fa-solid fa-calendar-xmark"></i></div>
    <p>No upcoming sessions yet.</p>
  </div>

  <div class="session-grid" *ngIf="!loading && visibleSessions.length > 0">
    <div class="session-card" *ngFor="let session of visibleSessions; let i = index"
         [class.full]="session.isFull"
         [style.animation-delay]="(i * 0.06) + 's'">
      <div class="sc-inner">
        <div class="sc-top">
          <span class="type-chip" [class.peer]="session.type === 'PeerTutoring'">
            <i [class]="session.type === 'PeerTutoring' ? 'fa-solid fa-users-rectangle' : 'fa-solid fa-chalkboard-user'"></i>
            {{ session.type === 'PeerTutoring' ? 'Peer Tutoring' : 'Live Class' }}
          </span>
          <span *ngIf="session.isFull" class="full-pill">Full</span>
          <span *ngIf="!session.isFull && isHost(session)" class="host-pill">Hosting</span>
        </div>

        <h3 class="sc-title">{{ session.title }}</h3>
        <p class="sc-desc" *ngIf="session.description">{{ session.description }}</p>

        <div class="sc-meta">
          <span><i class="fa-regular fa-clock icon-sub"></i> {{ session.startTime | date:'medium' }}</span>
          <span><i class="fa-solid fa-stopwatch icon-sub"></i> {{ session.durationMinutes }} min</span>
          <span><i class="fa-solid fa-users icon-sub"></i> {{ session.attendeeIds.length }}/{{ session.capacity }}</span>
        </div>

        <p class="sc-meet" *ngIf="isHost(session) || isBooked(session)">
          <ng-container *ngIf="session.meetLink; else noMeet">
            <a [href]="session.meetLink" target="_blank">
              <i class="fa-brands fa-google"></i> Join Google Meet
            </a>
          </ng-container>
          <ng-template #noMeet>
            <span class="sc-meet-pending">Meeting link not available yet, check back shortly.</span>
          </ng-template>
        </p>
      </div>

      <div class="sc-actions">
        <button *ngIf="isHost(session)" class="btn-secondary" (click)="viewRoster(session)">
          <i class="fa-solid fa-list-ul"></i> View Roster
        </button>

        <button *ngIf="!isHost(session) && !isBooked(session) && !session.isFull"
                class="btn-primary"
                [disabled]="bookingId === session._id"
                (click)="book(session)">
          <i class="fa-solid fa-calendar-check"></i>
          {{ bookingId === session._id ? 'Booking...' : 'Book Session' }}
        </button>

        <span *ngIf="isBooked(session) && !isHost(session)" class="sc-status">
          <i class="fa-solid fa-circle-check"></i> You're booked
        </span>
      </div>
    </div>
  </div>
</div>
```

## File: frontend/src/app/components/sessions/session-list/session-list.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { Session } from 'src/app/models/session.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  standalone: false,
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: Session[] = [];
  loading = true;
  currentUser: User | null = null;
  bookingId: string | null = null;

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getMe().subscribe({
      next: (user) => (this.currentUser = user)
    });
    this.loadSessions();
  }

  loadSessions(): void {
    this.loading = true;
    this.sessionService.list().subscribe({
      next: (data) => {
        this.sessions = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Could not load sessions.');
      }
    });
  }

  // Instructors have no involvement in peer tutoring, so those sessions
  // are filtered out of their view entirely (not just hidden nav items).
  get visibleSessions(): Session[] {
    if (this.currentUser?.isInstructor) {
      return this.sessions.filter(s => s.type !== 'PeerTutoring');
    }
    return this.sessions;
  }

  isHost(session: Session): boolean {
    return !!this.currentUser && session.hostId === this.currentUser.id;
  }

  isBooked(session: Session): boolean {
    return !!this.currentUser && session.attendeeIds.includes(this.currentUser.id);
  }

  book(session: Session): void {
    this.bookingId = session._id;
    this.sessionService.book(session._id).subscribe({
      next: (updated) => {
        this.bookingId = null;
        this.sessions = this.sessions.map(s => s._id === updated._id ? updated : s);
        this.toastService.success('Booked! Check your email for the invite.');
      },
      error: (err) => {
        this.bookingId = null;
        const message = err.status === 409
          ? (err.error?.error || 'Session is full or already booked.')
          : 'Booking failed, please try again.';
        this.toastService.error(message);
        this.loadSessions();
      }
    });
  }

  viewRoster(session: Session): void {
    this.router.navigate(['/sessions', session._id, 'roster']);
  }
}
```

## File: frontend/src/app/components/sessions/session-roster/session-roster.component.css
```css
.roster-page { max-width: 720px; margin: 0 auto; }

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}
.page-title { font-size: 26px; font-weight: 900; color: #111827; letter-spacing: -0.6px; }
.page-sub { font-size: 14px; color: #6B7280; margin-top: 4px; }

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 50px;
  background: #F3F4F6;
  color: #374151;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.back-link:hover { background: #E5E7EB; }

/* ===== Card wrapper ===== */
.roster-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 8px 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  animation: fadeInUp 0.4s ease both;
}

/* ===== Roster rows ===== */
.roster-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid #F3F4F6;
}
.roster-row:last-child { border-bottom: none; }

.roster-avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 800;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.25);
}
.roster-info { flex: 1; min-width: 0; }
.roster-name {
  font-size: 15px; font-weight: 700; color: #111827;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.roster-email {
  font-size: 12px; color: #6B7280;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.role-badge {
  font-size: 11px;
  font-weight: 800;
  padding: 5px 14px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  flex-shrink: 0;
}
.role-badge--instructor { background: #EDE9FE; color: #6D28D9; }
.role-badge--student    { background: #EFF6FF; color: #2563EB; }
.role-badge--peer-tutor { background: #ECFDF5; color: #047857; }
.role-badge--learner    { background: #FFF7ED; color: #C2410C; }

/* ===== Skeleton loading ===== */
.skeleton-wrap { display: flex; flex-direction: column; gap: 0; }
.skeleton-row {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 0; border-bottom: 1px solid #F3F4F6;
}
.skeleton-row:last-child { border-bottom: none; }
.skeleton-avatar {
  width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
.skeleton-line {
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
.skeleton-line.name { height: 14px; width: 40%; margin-bottom: 8px; }
.skeleton-line.email { height: 11px; width: 55%; }

/* ===== Empty / error states ===== */
.empty-state {
  text-align: center; padding: 48px 20px;
  color: #9CA3AF; font-size: 14px; font-weight: 600;
  background: #FFFFFF; border-radius: 20px; border: 1px solid #E5E7EB;
}
.icon-badge.lg { width: 56px; height: 56px; font-size: 22px; margin: 0 auto 10px; }
.icon-badge.red { background: rgba(239, 68, 68, 0.12); color: #DC2626; }

@media (max-width: 480px) {
  .page-header { flex-direction: column; align-items: flex-start; }
  .roster-row { align-items: flex-start; }
  .role-badge { margin-top: 4px; }
}
```

## File: frontend/src/app/components/sessions/session-roster/session-roster.component.html
```html
<div class="roster-page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Session Roster</h1>
      <p class="page-sub">Everyone hosting or attending this session.</p>
    </div>
    <a routerLink="/sessions" class="back-link">
      <i class="fa-solid fa-arrow-left"></i> Back to Sessions
    </a>
  </div>

  <div *ngIf="loading" class="roster-card">
    <div class="skeleton-wrap">
      <div class="skeleton-row" *ngFor="let i of [1,2,3]">
        <div class="skeleton-avatar"></div>
        <div style="flex: 1;">
          <div class="skeleton-line name"></div>
          <div class="skeleton-line email"></div>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="!loading && forbidden" class="empty-state">
    <div class="icon-badge red lg"><i class="fa-solid fa-lock"></i></div>
    <p>Only the session host can view this roster.</p>
  </div>

  <div *ngIf="!loading && !forbidden && errorMessage" class="empty-state">
    <div class="icon-badge red lg"><i class="fa-solid fa-triangle-exclamation"></i></div>
    <p>{{ errorMessage }}</p>
  </div>

  <div *ngIf="!loading && !forbidden && !errorMessage && roster.length === 0" class="empty-state">
    <div class="icon-badge blue lg"><i class="fa-solid fa-user-slash"></i></div>
    <p>No one has booked this session yet.</p>
  </div>

  <div class="roster-card" *ngIf="!loading && !forbidden && !errorMessage && roster.length > 0">
    <div class="roster-row" *ngFor="let member of roster">
      <div class="roster-avatar">{{ getInitials(member.name) }}</div>
      <div class="roster-info">
        <div class="roster-name">{{ member.name }}</div>
        <div class="roster-email">{{ member.email }}</div>
      </div>
      <span class="role-badge" [ngClass]="roleClass(member.role)">{{ member.role }}</span>
    </div>
  </div>
</div>
```

## File: frontend/src/app/components/sessions/session-roster/session-roster.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService, RosterEntry } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-roster',
  templateUrl: './session-roster.component.html',
  standalone: false,
  styleUrls: ['./session-roster.component.css']
})
export class SessionRosterComponent implements OnInit {
  roster: RosterEntry[] = [];
  loading = true;
  forbidden = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private sessionService: SessionService) {}

  ngOnInit(): void {
    const sessionId = this.route.snapshot.paramMap.get('id');
    if (!sessionId) return;

    this.sessionService.getRoster(sessionId).subscribe({
      next: (data) => {
        this.roster = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 403) {
          this.forbidden = true;
        } else {
          this.errorMessage = 'Could not load roster.';
        }
      }
    });
  }

  roleClass(role: string): string {
    return 'role-badge--' + role.toLowerCase().replace(/\s+/g, '-');
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  }
}
```

## File: frontend/src/app/components/tutoring/my-requests/my-requests.component.css
```css
.requests-page { max-width: 780px; margin: 0 auto; }

.page-header { margin-bottom: 24px; }
.page-title { font-size: 26px; font-weight: 900; color: #111827; letter-spacing: -0.6px; }
.page-sub { font-size: 14px; color: #6B7280; margin-top: 4px; }

.request-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 18px 22px;
  margin-bottom: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
  animation: fadeInUp 0.4s ease both;
}
.request-card:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(0,0,0,0.07); }

.request-card__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
}
.request-card__title { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.request-card__title h3 { font-size: 16px; font-weight: 800; color: #111827; letter-spacing: -0.3px; }

.role-badge {
  font-size: 11px;
  font-weight: 800;
  padding: 5px 14px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}
.role-badge--learner    { background: #EFF6FF; color: #2563EB; }
.role-badge--peer-tutor { background: #ECFDF5; color: #047857; }

.request-card__status {
  font-size: 11px;
  font-weight: 800;
  padding: 5px 14px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}
.request-card__status--open            { background: #FFF7ED; color: #C2410C; }
.request-card__status--accepted        { background: #EFF6FF; color: #2563EB; }
.request-card__status--confirmed       { background: #ECFDF5; color: #047857; }
.request-card__status--expired         { background: #F3F4F6; color: #6B7280; }
.request-card__status--failed_transfer { background: #FEF2F2; color: #B91C1C; }

.request-card__meta { color: #9CA3AF; font-size: 12px; margin-top: 8px; }

.btn-confirm {
  margin-top: 14px;
  padding: 10px 22px; border-radius: 50px;
  background: linear-gradient(135deg, #10B981, #059669);
  color: #FFFFFF; font-size: 13px; font-weight: 700; border: none;
  cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(16,185,129,0.3);
}
.btn-confirm:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(16,185,129,0.45); }
.btn-confirm:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }

.spinner-sm {
  width: 13px; height: 13px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.65s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ===== Skeleton / empty ===== */
.skeleton-wrap { display: flex; flex-direction: column; gap: 14px; }
.skeleton-card {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 20px;
  display: flex; flex-direction: column; gap: 12px;
}
.skeleton-title, .skeleton-meta {
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
.skeleton-title { height: 18px; width: 40%; }
.skeleton-meta { height: 13px; width: 55%; }

.empty-state {
  text-align: center; padding: 48px 20px;
  color: #9CA3AF; font-size: 14px; font-weight: 600;
  background: #FFFFFF; border-radius: 20px; border: 1px solid #E5E7EB;
}
.icon-badge.lg { width: 56px; height: 56px; font-size: 22px; margin: 0 auto 10px; }

@media (max-width: 480px) {
  .request-card__row { flex-direction: column; align-items: flex-start; }
}
```

## File: frontend/src/app/components/tutoring/my-requests/my-requests.component.html
```html
<div class="requests-page">
  <div class="page-header">
    <h1 class="page-title">My Tutoring Requests</h1>
    <p class="page-sub">Requests you've made and sessions you've accepted to tutor.</p>
  </div>

  <div *ngIf="loading" class="skeleton-wrap">
    <div class="skeleton-card" *ngFor="let i of [1,2,3]">
      <div class="skeleton-title"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>

  <div *ngIf="!loading && requests.length === 0" class="empty-state">
    <div class="icon-badge purple lg"><i class="fa-solid fa-list-check"></i></div>
    <p>You haven't requested or accepted any tutoring sessions yet.</p>
  </div>

  <div class="request-card" *ngFor="let request of requests">
    <div class="request-card__row">
      <div class="request-card__title">
        <h3>{{ request.topic }}</h3>
        <span class="role-badge" [ngClass]="'role-badge--' + roleLabel(request).toLowerCase().split(' ').join('-')">
          {{ roleLabel(request) }}
        </span>
      </div>
      <span class="request-card__status" [ngClass]="'request-card__status--' + request.status">
        {{ statusLabel(request.status) }}
      </span>
    </div>
    <p class="request-card__meta">Created {{ request.createdAt | date:'medium' }}</p>

    <button *ngIf="canConfirm(request)"
            class="btn-confirm"
            [disabled]="confirmingId === request._id || hasUserConfirmed(request)"
            (click)="openConfirmDialog(request)">
      <span *ngIf="confirmingId === request._id" class="spinner-sm"></span>
      <i *ngIf="confirmingId !== request._id" class="fa-solid" [class.fa-check-double]="hasUserConfirmed(request)" [class.fa-circle-check]="!hasUserConfirmed(request)"></i>
      {{ confirmingId === request._id ? 'Confirming...' : (hasUserConfirmed(request) ? 'Session confirmed' : 'Confirm session happened') }}
    </button>
  </div>

  <app-confirm-dialog
    [open]="dialogOpen"
    title="Confirm this session?"
    message="This tells the other party the session took place. If both sides confirm, 1 credit transfers to the tutor."
    confirmLabel="Yes, confirm"
    (confirmed)="proceedConfirm()"
    (cancelled)="cancelConfirm()">
  </app-confirm-dialog>
</div>
```

## File: frontend/src/app/components/tutoring/my-requests/my-requests.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { TutoringService } from 'src/app/services/tutoring.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';
import { TutoringRequest, TutoringRequestStatus } from 'src/app/models/tutoring-request.model';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  requests: TutoringRequest[] = [];
  loading = true;
  confirmingId: string | null = null;
  currentUserId: string | null = null;

  dialogOpen = false;
  pendingRequestId: string | null = null;

  constructor(
    private tutoringService: TutoringService,
    private toastService: ToastService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getMe().subscribe({
      next: (user) => (this.currentUserId = user.id)
    });
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading = true;
    this.tutoringService.listMine().subscribe({
      next: (data) => {
        this.requests = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Could not load your requests.');
      }
    });
  }

  statusLabel(status: TutoringRequestStatus): string {
    const labels: Record<TutoringRequestStatus, string> = {
      open: 'Waiting for a tutor',
      accepted: 'Scheduled',
      confirmed: 'Completed',
      expired: 'Expired',
      failed_transfer: 'Completed (credit transfer failed)'
    };
    return labels[status];
  }

  // Identifies whether the logged-in user is the learner or the peer
  // tutor on this specific request, since one account can be either
  // depending on the request.
  roleLabel(request: TutoringRequest): string {
    if (!this.currentUserId) return '';
    const learnerId = typeof request.learnerId === 'object' ? request.learnerId._id : request.learnerId;
    return learnerId === this.currentUserId ? 'Learner' : 'Peer Tutor';
  }

  canConfirm(request: TutoringRequest): boolean {
    return request.status === 'accepted' && !!request.confirmationDeadline;
  }

  hasUserConfirmed(request: TutoringRequest): boolean {
    if (!this.currentUserId) return false;
    const learnerId = typeof request.learnerId === 'object' ? request.learnerId._id : request.learnerId;
    const isLearner = learnerId === this.currentUserId;
    const isTutor = request.tutorId === this.currentUserId;
    if (isLearner) return request.learnerConfirmed;
    if (isTutor) return request.tutorConfirmed;
    return false;
  }

  openConfirmDialog(request: TutoringRequest): void {
    this.pendingRequestId = request._id;
    this.dialogOpen = true;
  }

  cancelConfirm(): void {
    this.dialogOpen = false;
    this.pendingRequestId = null;
  }

  proceedConfirm(): void {
    if (!this.pendingRequestId) return;
    const requestId = this.pendingRequestId;
    this.dialogOpen = false;
    this.pendingRequestId = null;
    this.confirmingId = requestId;

    this.tutoringService.confirmRequest(requestId).subscribe({
      next: (result) => this.handleConfirmResult(result, requestId),
      error: () => {
        this.confirmingId = null;
        this.toastService.error('Could not confirm session, please try again.');
      }
    });
  }

  private handleConfirmResult(result: TutoringRequest | null, requestId: string): void {
    this.confirmingId = null;

    if (result === null) {
      const request = this.requests.find(r => r._id === requestId);
      if (request && this.currentUserId) {
        const learnerId = typeof request.learnerId === 'object' ? request.learnerId._id : request.learnerId;
        if (learnerId === this.currentUserId) {
          request.learnerConfirmed = true;
        } else if (request.tutorId === this.currentUserId) {
          request.tutorConfirmed = true;
        }
      }
      this.toastService.info('Confirmation recorded, waiting on the other party.');
      return;
    }

    if (result.status === 'failed_transfer') {
      this.toastService.error('Session confirmed, but the credit transfer failed (insufficient balance).');
    } else if (result.status === 'confirmed') {
      this.toastService.success('Session confirmed, credit transferred.');
    }

    this.loadRequests();
  }
}
```

## File: frontend/src/app/components/tutoring/request-create/request-create.component.css
```css
.form-page { max-width: 560px; margin: 0 auto; }

.page-header { margin-bottom: 24px; }
.page-title { font-size: 26px; font-weight: 900; color: #111827; letter-spacing: -0.6px; }
.page-sub { font-size: 14px; color: #6B7280; margin-top: 4px; }

.form-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 28px 32px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  animation: fadeInUp 0.4s ease both;
}

.form-error {
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #B91C1C;
  font-size: 13px;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-group { margin-bottom: 8px; }
.form-label { display: block; font-size: 13px; font-weight: 700; color: #374151; margin-bottom: 6px; }
.form-input {
  width: 100%; padding: 12px 16px;
  border: 1.5px solid #E5E7EB; border-radius: 12px;
  font-size: 14px; font-family: inherit; color: #111827;
  background: #F9FAFB;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
}
.form-input:focus {
  border-color: #FF6B35; background: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(255,107,53,0.12);
}

.form-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 12px 16px;
  background: #FFF7ED;
  border-radius: 14px;
  color: #C2410C;
  font-size: 13px;
  font-weight: 600;
}

.form-actions { margin-top: 18px; }
.btn-submit {
  padding: 13px 28px; border-radius: 50px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF; font-size: 14px; font-weight: 800; border: none;
  cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-width: 170px;
  transition: all 0.2s ease;
  box-shadow: 0 6px 20px rgba(255,107,53,0.3);
}
.btn-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.45); }
.btn-submit:disabled { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: none; }

.spinner-sm {
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.65s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 480px) { .form-card { padding: 22px 20px; } }
```

## File: frontend/src/app/components/tutoring/request-create/request-create.component.html
```html
<div class="form-page">
  <div class="page-header">
    <h1 class="page-title">Request Tutoring</h1>
    <p class="page-sub">Ask another student for help on a topic.</p>
  </div>

  <div class="form-card">
    <div class="form-error" *ngIf="errorMessage">
      <i class="fa-solid fa-circle-exclamation"></i>
      {{ errorMessage }}
    </div>

    <form (ngSubmit)="submit()">
      <div class="form-group">
        <label class="form-label">Topic <span style="color:#EF4444;">*</span></label>
        <input class="form-input" type="text" [(ngModel)]="topic" name="topic" placeholder="e.g. Linear Algebra" required>
      </div>

      <div class="form-hint">
        <i class="fa-solid fa-circle-info"></i>
        Costs 1 credit. You can only have one open request at a time.
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-submit" [disabled]="submitting">
          <span *ngIf="!submitting"><i class="fa-solid fa-hand"></i> Submit Request</span>
          <span *ngIf="submitting" class="spinner-sm"></span>
        </button>
      </div>
    </form>
  </div>
</div>
```

## File: frontend/src/app/components/tutoring/request-create/request-create.component.ts
```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TutoringService } from 'src/app/services/tutoring.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  standalone: false,
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  topic = '';
  submitting = false;
  errorMessage = '';

  constructor(
    private tutoringService: TutoringService,
    private toastService: ToastService,
    private router: Router
  ) {}

  submit(): void {
    if (!this.topic.trim()) {
      this.errorMessage = 'Please enter a topic.';
      return;
    }
    this.errorMessage = '';
    this.submitting = true;

    this.tutoringService.createRequest(this.topic.trim()).subscribe({
      next: () => {
        this.submitting = false;
        this.toastService.success('Tutoring request created.');
        this.router.navigate(['/tutoring/mine']);
      },
      error: (err) => {
        this.submitting = false;
        if (err.status === 409) {
          this.errorMessage = err.error?.error || 'You already have a pending tutoring request.';
        } else if (err.status === 400) {
          this.errorMessage = err.error?.error || 'Insufficient credit balance.';
        } else {
          this.errorMessage = 'Could not create request, please try again.';
        }
      }
    });
  }
}
```

## File: frontend/src/app/components/tutoring/request-list/request-list.component.css
```css
.requests-page { max-width: 780px; margin: 0 auto; }

.page-header { margin-bottom: 24px; }
.page-title { font-size: 26px; font-weight: 900; color: #111827; letter-spacing: -0.6px; }
.page-sub { font-size: 14px; color: #6B7280; margin-top: 4px; }

.request-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 4px solid #F97316;
  border-radius: 20px;
  padding: 20px 22px;
  margin-bottom: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
  animation: fadeInUp 0.4s ease both;
}
.request-card:hover { box-shadow: 0 16px 36px rgba(249, 115, 22, 0.1); transform: translateY(-3px); }

.rc-top { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.rc-icon {
  width: 38px; height: 38px; border-radius: 12px; flex-shrink: 0;
  background: rgba(245, 158, 11, 0.12); color: #D97706;
  display: flex; align-items: center; justify-content: center; font-size: 15px;
}
.rc-title { font-size: 17px; font-weight: 800; color: #111827; letter-spacing: -0.3px; }
.rc-meta { font-size: 13px; color: #6B7280; margin-bottom: 16px; }

.rc-form { display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-end; }
.rc-field { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 160px; }
.rc-field label { font-size: 12px; font-weight: 700; color: #374151; }
.rc-field input {
  padding: 10px 14px;
  border: 1.5px solid #E5E7EB; border-radius: 12px;
  font-size: 13px; font-family: inherit; color: #111827;
  background: #F9FAFB;
  outline: none;
  transition: all 0.2s ease;
}
.rc-field input:focus { border-color: #FF6B35; background: #FFFFFF; box-shadow: 0 0 0 4px rgba(255,107,53,0.12); }

.btn-accept {
  padding: 10px 22px; border-radius: 50px;
  background: linear-gradient(135deg, #FF6B35, #F97316);
  color: #FFFFFF; font-size: 13px; font-weight: 700; border: none;
  cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(255,107,53,0.3);
  white-space: nowrap;
}
.btn-accept:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,107,53,0.45); }
.btn-accept:disabled { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: none; }

/* ===== Skeleton / empty ===== */
.skeleton-wrap { display: flex; flex-direction: column; gap: 16px; }
.skeleton-card {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 22px;
  display: flex; flex-direction: column; gap: 12px;
}
.skeleton-title, .skeleton-meta {
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(229,231,235,0.6) 25%, rgba(243,244,246,0.8) 50%, rgba(229,231,235,0.6) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
.skeleton-title { height: 20px; width: 40%; }
.skeleton-meta { height: 14px; width: 60%; }

.empty-state {
  text-align: center; padding: 48px 20px;
  color: #9CA3AF; font-size: 14px; font-weight: 600;
  background: #FFFFFF; border-radius: 20px; border: 1px solid #E5E7EB;
}
.icon-badge.lg { width: 56px; height: 56px; font-size: 22px; margin: 0 auto 10px; }

@media (max-width: 480px) {
  .rc-form { flex-direction: column; align-items: stretch; }
  .rc-field { width: 100%; }
  .btn-accept { width: 100%; justify-content: center; }
}
```

## File: frontend/src/app/components/tutoring/request-list/request-list.component.html
```html
<div class="requests-page">
  <div class="page-header">
    <h1 class="page-title">Accept Requests</h1>
    <p class="page-sub">Open tutoring requests from other students.</p>
  </div>

  <div *ngIf="loading" class="skeleton-wrap">
    <div class="skeleton-card" *ngFor="let i of [1,2,3]">
      <div class="skeleton-title"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>

  <div *ngIf="!loading && requests.length === 0" class="empty-state">
    <div class="icon-badge amber lg"><i class="fa-solid fa-inbox"></i></div>
    <p>No open requests right now.</p>
  </div>

  <div class="request-card" *ngFor="let request of requests">
    <div class="rc-top">
      <div class="rc-icon"><i class="fa-solid fa-hand"></i></div>
      <span class="rc-title">{{ request.topic }}</span>
    </div>
    <p class="rc-meta">Requested by {{ learnerName(request) }}</p>

    <div class="rc-form">
      <div class="rc-field">
        <label>Start Time</label>
        <input type="datetime-local" [(ngModel)]="startTime[request._id]" name="startTime-{{request._id}}">
      </div>
      <div class="rc-field">
        <label>Duration, min</label>
        <input type="number" placeholder="e.g. 30" [(ngModel)]="durationMinutes[request._id]" name="duration-{{request._id}}" min="1" max="60">
      </div>
      <button class="btn-accept" [disabled]="acceptingId === request._id" (click)="accept(request)">
        <i class="fa-solid fa-check"></i>
        {{ acceptingId === request._id ? 'Accepting...' : 'Accept' }}
      </button>
    </div>
  </div>
</div>
```

## File: frontend/src/app/components/tutoring/request-list/request-list.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { TutoringService } from 'src/app/services/tutoring.service';
import { ToastService } from 'src/app/services/toast.service';
import { TutoringRequest } from 'src/app/models/tutoring-request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  standalone: false,
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: TutoringRequest[] = [];
  loading = true;
  acceptingId: string | null = null;

  startTime: { [id: string]: string } = {};
  durationMinutes: { [id: string]: number } = {};

  constructor(
    private tutoringService: TutoringService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading = true;
    this.tutoringService.listOpenRequests().subscribe({
      next: (data) => {
        this.requests = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Could not load open requests.');
      }
    });
  }

  learnerName(request: TutoringRequest): string {
    return typeof request.learnerId === 'object' ? request.learnerId.name : request.learnerId;
  }

  accept(request: TutoringRequest): void {
    const startTime = this.startTime[request._id];
    const durationMinutes = this.durationMinutes[request._id];

    if (!startTime || !durationMinutes) {
      this.toastService.error('Please pick a start time and duration first.');
      return;
    }

    this.acceptingId = request._id;
    this.tutoringService.acceptRequest(request._id, { startTime, durationMinutes }).subscribe({
      next: () => {
        this.acceptingId = null;
        this.toastService.success('Request accepted, session scheduled.');
        this.loadRequests();
      },
      error: (err) => {
        this.acceptingId = null;
        this.toastService.error(err.error?.error || 'Could not accept request.');
        this.loadRequests();
      }
    });
  }
}
```

## File: frontend/src/app/guards/auth.guard.ts
```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

## File: frontend/src/app/guards/student.guard.ts
```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.userService.getMe().pipe(
      map(user => {
        if (user.isInstructor) {
          this.router.navigate(['/dashboard']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
```

## File: frontend/src/app/interceptors/auth.interceptor.ts
```typescript
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    if (!token) {
      return next.handle(req);
    }
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next.handle(authReq);
  }
}
```

## File: frontend/src/app/models/session.model.ts
```typescript
export type SessionType = 'LiveClass' | 'PeerTutoring';
export type SessionStatus = 'scheduled' | 'completed';

export interface Session {
  _id: string;
  type: SessionType;
  title: string;
  description?: string;
  startTime: string;
  durationMinutes: number;
  capacity: number;
  hostId: string;
  attendeeIds: string[];
  googleEventId?: string;
  meetLink?: string;
  status: SessionStatus;
  isFull?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSessionPayload {
  title: string;
  description?: string;
  startTime: string;
  durationMinutes: number;
  capacity: number;
}
```

## File: frontend/src/app/models/tutoring-request.model.ts
```typescript
export type TutoringRequestStatus =
  | 'open' | 'accepted' | 'confirmed' | 'expired' | 'failed_transfer';

export interface TutoringRequest {
  _id: string;
  learnerId: string | { _id: string; name: string; email: string };
  topic: string;
  status: TutoringRequestStatus;
  tutorId?: string;
  sessionId?: string;
  learnerConfirmed: boolean;
  tutorConfirmed: boolean;
  confirmationDeadline?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AcceptRequestPayload {
  startTime: string;
  durationMinutes: number;
}
```

## File: frontend/src/app/models/user.model.ts
```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  isInstructor: boolean;
  creditBalance: number;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
```

## File: frontend/src/app/services/auth.service.spec.ts
```typescript
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```

## File: frontend/src/app/services/auth.service.ts
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/user.model';

const TOKEN_STORAGE_KEY = 'lms_token';
const USER_STORAGE_KEY = 'lms_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;
  private token: string | null = null;

  private currentUserSubject = new BehaviorSubject<AuthResponse['user'] | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // Rehydrate session from localStorage on app start, so a page refresh
    // (or a new tab) doesn't drop a still-valid login.
    const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (savedToken) {
      this.token = savedToken;
      if (savedUser) {
        try {
          this.currentUserSubject.next(JSON.parse(savedUser));
        } catch {
          // Corrupted value — drop it rather than crash the app.
          localStorage.removeItem(USER_STORAGE_KEY);
        }
      }
    }
  }

  register(user: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, user)
      .pipe(tap(res => this.setSession(res)));
  }

  login(user: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, user)
      .pipe(tap(res => this.setSession(res)));
  }

  getToken(): string | null {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.token = null;
    this.currentUserSubject.next(null);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  private setSession(res: AuthResponse): void {
    this.token = res.token;
    this.currentUserSubject.next(res.user);
    localStorage.setItem(TOKEN_STORAGE_KEY, res.token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(res.user));
  }
}
```

## File: frontend/src/app/services/session.service.ts
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionPayload, Session } from '../models/session.model';

export interface RosterEntry {
  _id: string;
  name: string;
  email: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class SessionService {
  private baseUrl = `${environment.apiUrl}/sessions`;

  constructor(private http: HttpClient) {}

  list(): Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl);
  }

  create(payload: CreateSessionPayload): Observable<Session> {
    return this.http.post<Session>(this.baseUrl, payload);
  }

  book(sessionId: string): Observable<Session> {
    return this.http.post<Session>(`${this.baseUrl}/${sessionId}/book`, {});
  }

  getRoster(sessionId: string): Observable<RosterEntry[]> {
    return this.http.get<RosterEntry[]>(`${this.baseUrl}/${sessionId}/roster`);
  }
}
```

## File: frontend/src/app/services/toast.service.ts
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();
  private nextId = 0;

  success(message: string): void { this.show(message, 'success'); }
  error(message: string): void { this.show(message, 'error'); }
  info(message: string): void { this.show(message, 'info'); }

  dismiss(id: number): void {
    this.toastsSubject.next(this.toastsSubject.value.filter(t => t.id !== id));
  }

  private show(message: string, type: Toast['type']): void {
    const toast: Toast = { id: this.nextId++, message, type };
    this.toastsSubject.next([...this.toastsSubject.value, toast]);
    setTimeout(() => this.dismiss(toast.id), 4000);
  }
}
```

## File: frontend/src/app/services/tutoring.service.ts
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcceptRequestPayload, TutoringRequest } from '../models/tutoring-request.model';

@Injectable({ providedIn: 'root' })
export class TutoringService {
  private baseUrl = `${environment.apiUrl}/tutoring-requests`;

  constructor(private http: HttpClient) {}

  listOpenRequests(): Observable<TutoringRequest[]> {
    return this.http.get<TutoringRequest[]>(this.baseUrl);
  }

  listMine(): Observable<TutoringRequest[]> {
    return this.http.get<TutoringRequest[]>(`${this.baseUrl}/mine`);
  }

  createRequest(topic: string): Observable<TutoringRequest> {
    return this.http.post<TutoringRequest>(this.baseUrl, { topic });
  }

  acceptRequest(requestId: string, data: AcceptRequestPayload): Observable<TutoringRequest> {
    return this.http.post<TutoringRequest>(`${this.baseUrl}/${requestId}/accept`, data);
  }

  confirmRequest(requestId: string): Observable<TutoringRequest | null> {
    return this.http.post<TutoringRequest | null>(`${this.baseUrl}/${requestId}/confirm`, {});
  }
}
```

## File: frontend/src/app/services/user.service.ts
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getMe(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
```

## File: frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.css
```css
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeInUp 0.2s ease;
  padding: 20px;
}
.dialog-box {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 28px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 25px 60px rgba(0,0,0,0.25);
  animation: fadeInUp 0.25s ease both;
}
.dialog-icon {
  width: 48px; height: 48px;
  border-radius: 14px;
  background: rgba(16, 185, 129, 0.12);
  color: #059669;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
}
.dialog-box h3 { font-size: 18px; font-weight: 900; color: #111827; letter-spacing: -0.3px; margin-bottom: 8px; }
.dialog-box p { font-size: 14px; color: #6B7280; line-height: 1.5; }
.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
}
.btn-cancel {
  padding: 10px 20px; border-radius: 50px;
  background: none; border: 1.5px solid #E5E7EB;
  color: #4B5563; font-size: 13px; font-weight: 700; cursor: pointer;
  transition: all 0.15s ease;
}
.btn-cancel:hover { border-color: #111827; color: #111827; }
.btn-confirm-action {
  padding: 10px 22px; border-radius: 50px;
  background: linear-gradient(135deg, #10B981, #059669);
  color: #FFFFFF; font-size: 13px; font-weight: 700; border: none; cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(16,185,129,0.3);
}
.btn-confirm-action:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(16,185,129,0.45); }
```

## File: frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.html
```html
<div class="dialog-overlay" *ngIf="open" (click)="onCancel()">
  <div class="dialog-box" (click)="$event.stopPropagation()">
    <div class="dialog-icon"><i class="fa-solid fa-circle-check"></i></div>
    <h3>{{ title }}</h3>
    <p *ngIf="message">{{ message }}</p>
    <div class="dialog-actions">
      <button class="btn-cancel" (click)="onCancel()">{{ cancelLabel }}</button>
      <button class="btn-confirm-action" (click)="onConfirm()">{{ confirmLabel }}</button>
    </div>
  </div>
</div>
```

## File: frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  standalone: false,
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  @Input() open = false;
  @Input() title = 'Are you sure?';
  @Input() message = '';
  @Input() confirmLabel = 'Confirm';
  @Input() cancelLabel = 'Cancel';

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  onConfirm(): void {
    this.confirmed.emit();
  }

  onCancel(): void {
    this.cancelled.emit();
  }
}
```

## File: frontend/src/app/shared/components/empty-state/empty-state.component.css
```css
.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #999;
  border: 1px dashed #ddd;
  border-radius: 8px;
}
```

## File: frontend/src/app/shared/components/empty-state/empty-state.component.html
```html
<div class="empty-state">
  <p>{{ message }}</p>
</div>
```

## File: frontend/src/app/shared/components/empty-state/empty-state.component.ts
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  standalone: false,
  styleUrls: ['./empty-state.component.css']
})
export class EmptyStateComponent {
  @Input() message = 'Nothing here yet.';
}
```

## File: frontend/src/app/shared/components/loading-spinner/loading-spinner.component.css
```css
.spinner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 0;
  color: #666;
}
.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #e0e0e0;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

## File: frontend/src/app/shared/components/loading-spinner/loading-spinner.component.html
```html
<div class="spinner-wrapper">
  <div class="spinner"></div>
  <p>{{ message }}</p>
</div>
```

## File: frontend/src/app/shared/components/loading-spinner/loading-spinner.component.ts
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  standalone: false,
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  @Input() message = 'Loading...';
}
```

## File: frontend/src/app/shared/components/toast/toast.component.css
```css
.toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 500;
  max-width: calc(100vw - 32px);
}
.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 14px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  animation: slideInRight 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;
  min-width: 240px;
  max-width: 400px;
}
.toast--success { background: #111827; }
.toast--error { background: #EF4444; }
.toast--info { background: #3B82F6; }
.toast-icon { font-size: 16px; }

@media (max-width: 480px) {
  .toast-container { left: 16px; right: 16px; top: 16px; }
  .toast { min-width: 0; max-width: none; }
}
```

## File: frontend/src/app/shared/components/toast/toast.component.html
```html
<div class="toast-container">
  <div *ngFor="let toast of toasts$ | async"
       class="toast toast--{{ toast.type }}"
       (click)="dismiss(toast.id)">
    <i class="fa-solid toast-icon"
       [class.fa-circle-check]="toast.type === 'success'"
       [class.fa-triangle-exclamation]="toast.type === 'error'"
       [class.fa-circle-info]="toast.type === 'info'"></i>
    {{ toast.message }}
  </div>
</div>
```

## File: frontend/src/app/shared/components/toast/toast.component.ts
```typescript
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Toast, ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  standalone: false,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toasts$: Observable<Toast[]> = this.toastService.toasts$;

  constructor(private toastService: ToastService) {}

  dismiss(id: number): void {
    this.toastService.dismiss(id);
  }
}
```

## File: frontend/src/app/shared/shared.module.ts
```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { ToastComponent } from './components/toast/toast.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    EmptyStateComponent,
    ToastComponent,
    ConfirmDialogComponent
  ],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    EmptyStateComponent,
    ToastComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule {}
```

## File: frontend/src/environments/environment.prod.ts
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://lms-production-a88f.up.railway.app'
};
```

## File: frontend/src/environments/environment.ts
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://lms-production-a88f.up.railway.app'
};
```

## File: frontend/src/index.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>LMS Portal - Learning Management System</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
<app-root></app-root>
</body>
</html>
```

## File: frontend/src/main.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

## File: frontend/src/styles.css
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  background: #F4F6FB;
  color: #0F172A;
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

a { text-decoration: none; color: inherit; }
button { font-family: inherit; }

/* ===== Shared keyframes, reused across pages ===== */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseRing {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(24px); }
  to { opacity: 1; transform: translateX(0); }
}

/* ===== Shared utility classes used across page components ===== */
.icon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  font-size: 1.15rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.icon-badge.amber { background: rgba(245, 158, 11, 0.12); color: #D97706; }
.icon-badge.purple { background: rgba(139, 92, 246, 0.12); color: #7C3AED; }
.icon-badge.emerald { background: rgba(16, 185, 129, 0.12); color: #059669; }
.icon-badge.blue { background: rgba(59, 130, 246, 0.12); color: #2563EB; }

.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10B981;
  animation: pulseRing 2s infinite;
  margin-right: 6px;
}
.pulse-dot.full { background-color: #EF4444; animation: none; }
```

## File: frontend/tsconfig.app.json
```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
```

## File: frontend/tsconfig.json
```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

## File: frontend/tsconfig.spec.json
```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

## File: frontend/vercel.json
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## File: get-refresh-token.js
```javascript
require('dotenv').config();
const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'urn:ietf:wg:oauth:2.0:oob'
);

const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/calendar.events'],
});

console.log('Open this URL, approve access, then paste the code below:\n', url);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Paste code here: ', async (code) => {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\nSave this refresh token in your .env:\n', tokens.refresh_token);
    rl.close();
});
```

## File: list-users.js
```javascript
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function listUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('\n--- Registered Accounts in Database ---\n');
    const users = await User.find({}, 'name email isInstructor creditBalance createdAt').sort({ createdAt: -1 });

    if (users.length === 0) {
      console.log('No users found in the database.');
    } else {
      console.table(users.map(u => ({
        ID: u._id.toString(),
        Name: u.name,
        Email: u.email,
        Role: u.isInstructor ? 'Instructor' : 'Student',
        Credits: u.creditBalance,
        Created: u.createdAt ? u.createdAt.toLocaleString() : 'N/A'
      })));
    }
  } catch (err) {
    console.error('Error fetching users:', err.message);
  } finally {
    await mongoose.disconnect();
  }
}

listUsers();
```

## File: LMS.postman_collection.json
```json
{
  "info": {
    "_postman_id": "7f563b62-64d8-4d29-a35f-6b6fbc788e44",
    "name": "LMS",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "52916896"
  },
  "item": [
    {
      "name": "Health check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseURL}}",
          "host": [
            "{{baseURL}}"
          ]
        }
      },
      "response": []
    },
    {
      "name": "register student",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "// {\r\n//     \"name\": \"Omar Mohamed\", \r\n//     \"email\": \"omaryousef3132@gmail.com\",\r\n//     \"password\": \"123456789\"\r\n// }\r\n\r\n{\r\n    \"name\": \"Ahmed Mohamed\", \r\n    \"email\": \"ahmedyousef3132@gmail.com\",\r\n    \"password\": \"123456789\"\r\n}\r\n\r\n",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/auth/register",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "auth",
            "register"
          ]
        }
      },
      "response": []
    },
    {
      "name": "register instructor",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"name\": \"Ali Mohamed\",\r\n    \"email\": \"AliMohamed@gmail.com\",\r\n    \"password\": \"123456789\",\r\n    \"isInstructor\": true\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/auth/register",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "auth",
            "register"
          ]
        }
      },
      "response": []
    },
    {
      "name": "login student",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.collectionVariables.set(\"tokenStudent\", pm.response.json().token);"
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"email\": \"omaryousef3132@gmail.com\",\r\n    \"password\": \"123456789\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/auth/login",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "auth",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "login instructor",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.collectionVariables.set(\"tokenInstructor\", pm.response.json().token);"
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"email\": \"AliMohamed@gmail.com\",\r\n    \"password\": \"123456789\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/auth/login",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "auth",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Get profile",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{baseURL}}/users/me",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "users",
            "me"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Create session",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.collectionVariables.set(\"sessionId\", pm.response.json()._id);"
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenInstructor}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"title\":\"Math\",\r\n    \"startTime\":\"2026-07-30T04:40:00Z\",\r\n    \"durationMinutes\":30,\r\n    \"capacity\": 3\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/sessions",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "sessions"
          ]
        }
      },
      "response": []
    },
    {
      "name": "List sessions logged as student",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{baseURL}}/sessions",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "sessions"
          ]
        }
      },
      "response": []
    },
    {
      "name": "List sessions logged as instructor",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{baseURL}}/sessions",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "sessions"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Book session",
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "POST",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent}}",
            "type": "text"
          },
          {
            "key": "",
            "value": "",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/sessions/{{sessionId}}/book",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "sessions",
            "{{sessionId}}",
            "book"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Roster",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenInstructor}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{baseURL}}/sessions/{{sessionId}}/roster",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "sessions",
            "{{sessionId}}",
            "roster"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Create tutoring request",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.collectionVariables.set(\"reqId\", pm.response.json()._id);"
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"topic\":\"Algebra\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/tutoring-requests",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "tutoring-requests"
          ]
        }
      },
      "response": []
    },
    {
      "name": "List tutoring requests",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent2}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{baseURL}}/tutoring-requests",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "tutoring-requests"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Accept request",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent2}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"startTime\":\"2026-08-01T09:00:00Z\",\r\n    \"durationMinutes\":30\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{baseURL}}/tutoring-requests/{{reqId}}/accept",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "tutoring-requests",
            "{{reqId}}",
            "accept"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Confirm",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{tokenStudent2}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{baseURL}}/tutoring-requests/{{reqId}}/confirm",
          "host": [
            "{{baseURL}}"
          ],
          "path": [
            "tutoring-requests",
            "{{reqId}}",
            "confirm"
          ]
        }
      },
      "response": []
    }
  ],
  "event": [
    {
      "listen": "prerequest",
      "script": {
        "type": "text/javascript",
        "packages": {},
        "requests": {},
        "exec": [
          ""
        ]
      }
    },
    {
      "listen": "test",
      "script": {
        "type": "text/javascript",
        "packages": {},
        "requests": {},
        "exec": [
          ""
        ]
      }
    }
  ],
  "variable": [
    {
      "key": "baseURL",
      "value": ""
    },
    {
      "key": "tokenStudent",
      "secret": true
    },
    {
      "key": "tokenInstructor",
      "secret": true
    },
    {
      "key": "token",
      "secret": true
    },
    {
      "key": "sessionId",
      "value": ""
    },
    {
      "key": "reqId",
      "value": ""
    },
    {
      "key": "tokenStudent2",
      "secret": true
    }
  ]
}
```

## File: middleware/auth.js
```javascript
const { verifyToken } = require('../utils/jwt');
const AppError = require('../utils/AppError');
const User = require('../models/User');

const requireAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) throw new AppError('Not authenticated', 401);

    const decoded = verifyToken(header.split(' ')[1]);
    const user = await User.findById(decoded.id);
    if (!user) throw new AppError('User no longer exists', 401);

    req.user = user; // available in every controller after this
    next();
  } catch {
    next(new AppError('Not authenticated', 401));
  }
};

const requireInstructor = (req, res, next) => {
  if (!req.user.isInstructor) return next(new AppError('Instructor access only', 403));
  next();
};

module.exports = { requireAuth, requireInstructor };
```

## File: middleware/errorHandler.js
```javascript
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  if (err.code === 11000) {
    return res.status(409).json({ error: 'Duplicate resource, action already exists' });
  }
  res.status(statusCode).json({ error: err.message || 'Server error' });
}

module.exports = errorHandler;
```

## File: models/CreditTransaction.js
```javascript
const mongoose = require('mongoose');

const creditTransactionSchema = new mongoose.Schema(
    {
      fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // the tutor, whose balance goes up
      },
      tutoringRequestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TutoringRequest',
        required: true, // traces the transfer back to the confirmation that authorized it
      },
      amount: {
        type: Number,
        default: 1,
        required: true,
      },
    },
    { timestamps: true } // createdAt doubles as "when this transfer was recorded"
);

// Supports a future "my transaction history" lookup for either side of a
// transfer without a full collection scan.
creditTransactionSchema.index({ fromUserId: 1, createdAt: -1 });
creditTransactionSchema.index({ toUserId: 1, createdAt: -1 });
creditTransactionSchema.index({ tutoringRequestId: 1 });

// This collection is insert-only, it's an audit trail. Block updates at the
// schema level instead of relying purely on developer discipline: any
// findOneAndUpdate/updateOne/updateMany call against this model throws
// instead of silently mutating a record that's supposed to be permanent.
function blockUpdates() {
  throw new Error('CreditTransaction records are insert-only and cannot be updated.');
}
creditTransactionSchema.pre('findOneAndUpdate', blockUpdates);
creditTransactionSchema.pre('updateOne', blockUpdates);
creditTransactionSchema.pre('updateMany', blockUpdates);

// The hooks above only catch query-style methods. A fetched document that
// gets mutated in memory and saved (`doc.amount = 999; await doc.save()`)
// bypasses all of them, since .save() runs through a separate middleware
// chain. This closes that gap: any save on an existing (non-new) document
// is rejected, only the initial insert is allowed through.
creditTransactionSchema.pre('save', function (next) {
  if (!this.isNew) {
    return next(new Error('CreditTransaction records are insert-only and cannot be updated.'));
  }
  next();
});

// Deletions would also undermine an audit trail, block those too.
creditTransactionSchema.pre(['deleteOne', 'deleteMany'], blockUpdates);

module.exports = mongoose.model('CreditTransaction', creditTransactionSchema);

/*
This collection is insert-only. Never update or delete an existing entry, it's
an audit trail for tracing a disputed transfer later, not a mutable record.
The pre-hooks above enforce this at the schema level as a safety net.

Write exactly one entry per confirmed session, right alongside the atomic
balance update in the same confirmation flow (FR3.9). In practice this is
handled by TutoringRequest.confirmAndTransfer(requestId), see TutoringRequest.js,
which performs the balance update and this insert together:

  const transferred = await User.findOneAndUpdate(
    { _id: learnerId, creditBalance: { $gte: 1 } },
    { $inc: { creditBalance: -1 } }
  );
  if (transferred) {
    await User.findOneAndUpdate({ _id: tutorId }, { $inc: { creditBalance: 1 } });
    await CreditTransaction.create({
      fromUserId: learnerId,
      toUserId: tutorId,
      tutoringRequestId: requestId,
      amount: 1,
    });
  } else {
    await TutoringRequest.updateOne({ _id: requestId }, { status: 'failed_transfer' });
    // no ledger entry in this case, nothing actually transferred
  }
*/
```

## File: models/Session.js
```javascript
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
    {
      type: {
        type: String,
        enum: ['LiveClass', 'PeerTutoring'],
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      // topic intentionally lives on TutoringRequest only, not here.
      // For PeerTutoring sessions, the linked TutoringRequest (via
      // TutoringRequest.sessionId) is the single source of truth for topic,
      // this avoids the two copies drifting apart. At session-creation time
      // (FR3.5), the tutoring request document is already in hand, so
      // title/description can be built directly from it without needing a
      // duplicate topic field here.
      startTime: {
        type: Date,
        required: true,
      },
      durationMinutes: {
        type: Number,
        required: true,
        min: 1,
        max: 60 //Google Meet's 60-minute free-tier cutoff
      },
      capacity: {
        type: Number,
        required: true,
        min: [1, 'Capacity must be at least 1'],
        // Pure sanity bound against bad input, not a scalability fix. At this
        // project's scale the attendeeIds array is nowhere near a real
        // document-size or array-growth concern.
        max: [100, 'Capacity cannot exceed 100'],
      },
      hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // the instructor for LiveClass sessions, or the tutor for PeerTutoring
        required: true,
      },
      attendeeIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: [],
      },
      // googleEventId links this document to the actual Google Calendar event.
      // Needed later to add attendees to an existing event (addAttendeeToEvent),
      // not just at creation time. Optional: a session can exist even if the
      // Calendar API call failed, per the fallback behavior. sparse+unique so
      // multiple sessions can each have no googleEventId, but no two sessions
      // can ever point at the same one.
      googleEventId: {
        type: String,
        unique: true,
        sparse: true,
      },
      meetLink: {
        type: String,
      },
      status: {
        type: String,
        enum: ['scheduled', 'completed'],
        default: 'scheduled',
      },
    },
    { timestamps: true }
);

// GET /sessions filters on status and orders/filters by startTime together
// (FR1.2, "upcoming open sessions"), so a compound index matches the actual
// query shape rather than only covering half of it.
sessionSchema.index({ status: 1, startTime: 1 });

// Convenience virtual, not persisted, just derived on read.
sessionSchema.virtual('isFull').get(function () {
  return this.attendeeIds.length >= this.capacity;
});

sessionSchema.set('toJSON', { virtuals: true });
sessionSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Session', sessionSchema);

/*
Reminder for the booking endpoint (FR1.3/FR1.4/FR1.5): never read attendeeIds,
check its length in code, then push and save. Use one atomic conditional update
that checks both "not already booked" and "capacity not exceeded" in the same
filter, e.g.:

  const updated = await Session.findOneAndUpdate(
    {
      _id: sessionId,
      attendeeIds: { $ne: studentId },       // not already booked (FR1.5)
      $expr: { $lt: [{ $size: '$attendeeIds' }, '$capacity'] }, // capacity check (FR1.4)
    },
    { $push: { attendeeIds: studentId } },
    { new: true }
  );
  if (!updated) {
    // either already booked or session is full, reject with the appropriate message
  }
*/
```

## File: models/TutoringRequest.js
```javascript
const mongoose = require('mongoose');

const tutoringRequestSchema = new mongoose.Schema(
    {
      learnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['open', 'accepted', 'confirmed', 'expired', 'failed_transfer'],
        default: 'open',
        required: true,
      },
      tutorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // set once a tutor accepts
      },
      sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session', // set once the 2-person session is created
      },
      learnerConfirmed: {
        type: Boolean,
        default: false,
      },
      tutorConfirmed: {
        type: Boolean,
        default: false,
      },
      confirmationDeadline: {
        type: Date,
      },
    },
    { timestamps: true }
);

// GET /tutoring-requests filters on status.
tutoringRequestSchema.index({ status: 1 });

// The one-open-request-per-learner rule (FR3.3/FR3.4) queries by learnerId + status
// together, so a compound index here matters more than a single-field one would.
tutoringRequestSchema.index({ learnerId: 1, status: 1 });

// Enforces FR3.3 at the database level: a learner can never have more than
// one request in an unresolved state ('open' or 'accepted') at once. This is
// a partial unique index, it only applies to documents matching the filter
// expression, so a learner can freely have many 'confirmed'/'expired'/
// 'failed_transfer' requests in their history, just never two unresolved
// ones at the same time. This closes the race condition that a plain
// check-then-create in application code can't fully prevent under
// concurrent requests.
tutoringRequestSchema.index(
  { learnerId: 1 },
  {
    unique: true,
    partialFilterExpression: { status: { $in: ['open', 'accepted'] } },
  }
);

// Encapsulates FR3.9: the status flip and the credit transfer must happen
// atomically together so a duplicate/retried confirm call can't trigger a
// second payout. Wrapped in a MongoDB transaction: without it, a crash or
// network blip between the learner's deduction and the tutor's credit could
// leave the ledger in a half-written state. This requires a replica-set
// deployment (Atlas provisions this by default, including the free tier) and
// will throw on a standalone local mongod.
tutoringRequestSchema.statics.confirmAndTransfer = async function (requestId) {
  const User = mongoose.model('User');
  const CreditTransaction = mongoose.model('CreditTransaction');

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updated = await this.findOneAndUpdate(
      {
        _id: requestId,
        status: { $ne: 'confirmed' },
        learnerConfirmed: true,
        tutorConfirmed: true,
      },
      { $set: { status: 'confirmed' } },
      { new: true, session }
    );

    if (!updated) {
      // not both confirmed yet, or already confirmed by a prior call.
      // Nothing was actually changed that needs rolling back, but abort
      // cleanly anyway to release the session properly.
      await session.abortTransaction();
      return null;
    }

    const transferred = await User.findOneAndUpdate(
      { _id: updated.learnerId, creditBalance: { $gte: 1 } },
      { $inc: { creditBalance: -1 } },
      { session }
    );

    if (!transferred) {
      // Balance dropped below 1 between confirmation and transfer. Abort the
      // transaction (undoes the status flip to 'confirmed' above), then
      // record the failure as a separate, ordinary write afterward.
      throw new Error('INSUFFICIENT_BALANCE');
    }

    await User.findOneAndUpdate(
      { _id: updated.tutorId },
      { $inc: { creditBalance: 1 } },
      { session }
    );

    await CreditTransaction.create(
      [
        {
          fromUserId: updated.learnerId,
          toUserId: updated.tutorId,
          tutoringRequestId: updated._id,
          amount: 1,
        },
      ],
      { session } // array + options form is required for .create() with a session
    );

    await session.commitTransaction();
    return updated;
  } catch (err) {
    await session.abortTransaction();

    if (err.message === 'INSUFFICIENT_BALANCE') {
      return this.findOneAndUpdate(
        { _id: requestId },
        { status: 'failed_transfer' },
        { new: true }
      );
    }
    throw err;
  } finally {
    await session.endSession();
  }
};

module.exports = mongoose.model('TutoringRequest', tutoringRequestSchema);

/*
Reminder 1, creating a request (FR3.2/FR3.3/FR3.4): check the learner's balance
before creating, and let the partial unique index above be the real enforcement
of "no second open/accepted request", not just an app-level pre-check:

  const learner = await User.findOne({ _id: learnerId, creditBalance: { $gte: 1 } });
  if (!learner) {
    // reject, insufficient balance
  }

  try {
    const request = await TutoringRequest.create({ learnerId, topic });
  } catch (err) {
    if (err.code === 11000) {
      // duplicate key on the partial unique index, learner already has an
      // open or accepted request, reject with that message
    } else {
      throw err;
    }
  }

Reminder 2, confirming a session (FR3.9): call the static instead of
duplicating the atomic flow inline:

  const result = await TutoringRequest.confirmAndTransfer(requestId);
  if (!result) {
    // not both parties confirmed yet, or this was a duplicate confirm call
  }
*/
```

## File: models/User.js
```javascript
const mongoose = require('mongoose');

// Simple, non-strict email format check. Not RFC 5322 compliant on purpose,
// just enough to catch obviously malformed input before it hits the database.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // enforces case insensitivity
        trim: true, //ignores leading and trailing spaces
        match: [EMAIL_REGEX, 'Please provide a valid email address'],
      },
      passwordHash: {
        type: String,
        required: true,
      },
      isInstructor: {
        type: Boolean,
        default: false,
      },
      creditBalance: {
        type: Number,
        default: 5,
        min: [0, 'Credit balance can never go negative'],
      },
    },
    { timestamps: true } // adds createdAt and updatedAt automatically
);

module.exports = mongoose.model('User', userSchema);

/*
Reminder for wherever creditBalance is changed: never do `const user = await User.findById(id); user.creditBalance -= 1; await user.save();`

Always use the atomic conditional form instead, e.g.:

  const updated = await User.findOneAndUpdate(
    { _id: userId, creditBalance: { $gte: 1 } },
    { $inc: { creditBalance: -1 } },
    { new: true }
  );
  if (!updated) {
    // balance was insufficient at the moment of the update, reject the operation
  }
*/
```

## File: nodemon.json
```json
{
  "watch": ["."],
  "ext": "js,mjs,cjs,json",
  "ignore": [
    "relevant files/**",
    "node_modules/**"
  ]
}
```

## File: package.json
```json
{
  "name": "lms-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "@angular/core": "^19.2.25",
    "@angular/forms": "^19.2.25",
    "@angular/router": "^19.2.25",
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "googleapis": "^140.0.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.0",
    "repomix": "^0.3.9"
  }
}
```

## File: routes/authRoutes.js
```javascript
const router = require('express').Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
```

## File: routes/sessionRoutes.js
```javascript
const router = require('express').Router();
const { createSession, listSessions, bookSession, getRoster } = require('../controllers/sessionController');
const { requireAuth, requireInstructor } = require('../middleware/auth');

router.post('/', requireAuth, requireInstructor, createSession);
router.get('/', requireAuth, listSessions);
router.post('/:id/book', requireAuth, bookSession);
router.get('/:id/roster', requireAuth, getRoster);

module.exports = router;
```

## File: routes/tutoringRoutes.js
```javascript
const router = require('express').Router();
const { createRequest, listRequests, listMine, acceptRequest, confirmRequest } = require('../controllers/tutoringController');
const { requireAuth } = require('../middleware/auth');

router.post('/', requireAuth, createRequest);
router.get('/', requireAuth, listRequests);
router.get('/mine', requireAuth, listMine);
router.post('/:id/accept', requireAuth, acceptRequest);
router.post('/:id/confirm', requireAuth, confirmRequest);

module.exports = router;
```

## File: routes/userRoutes.js
```javascript
const router = require('express').Router();
const { getMe, getAllUsers } = require('../controllers/userController');
const { requireAuth } = require('../middleware/auth');

router.get('/', getAllUsers);
router.get('/me', requireAuth, getMe);

module.exports = router;
```

## File: seed.js
```javascript
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const { hashPassword } = require('./utils/password');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({}); // clean slate each run

  const passwordHash = await hashPassword('password123');

  await User.create([
    { name: 'Instructor One', email: 'instructor@test.com', passwordHash, isInstructor: true },
    { name: 'Student One', email: 'student1@test.com', passwordHash },
    { name: 'Student Two', email: 'student2@test.com', passwordHash },
    { name: 'Student Three', email: 'student3@test.com', passwordHash },
  ]);

  console.log('Seeded 1 instructor + 3 students (password: password123)');
  await mongoose.disconnect();
}

seed();
```

## File: server.js
```javascript
require('./models/CreditTransaction');
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const { startScheduler } = require('./services/schedulerService');

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  startScheduler();
});
```

## File: services/calendarService.js
```javascript
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Creates a calendar event + auto-generated Meet link. Callers must wrap
// this in try/catch — a failure here must never block a session/booking save.
async function createSessionEvent({ title, description, startTime, durationMins, attendeeEmails }) {
  const endTime = new Date(new Date(startTime).getTime() + durationMins * 60000);

  const res = await calendar.events.insert({
    calendarId: 'primary',
    resource: {
      summary: title,
      description,
      start: { dateTime: new Date(startTime).toISOString() },
      end: { dateTime: endTime.toISOString() },
      attendees: attendeeEmails.map((email) => ({ email })),
      conferenceData: { createRequest: { requestId: `${Date.now()}-${Math.random()}` } },
    },
    conferenceDataVersion: 1, // required or no Meet link
    sendUpdates: 'all', // required or no invite emails
  });

  return { eventId: res.data.id, meetLink: res.data.hangoutLink };
}

// Adds one attendee to an existing event (e.g. a student booking a session).
async function addAttendeeToEvent(eventId, newAttendeeEmail) {
  const existing = await calendar.events.get({ calendarId: 'primary', eventId });
  const attendees = existing.data.attendees || [];
  attendees.push({ email: newAttendeeEmail });

  await calendar.events.patch({
    calendarId: 'primary',
    eventId,
    resource: { attendees },
    sendUpdates: 'all',
  });
}

module.exports = { createSessionEvent, addAttendeeToEvent };
```

## File: services/schedulerService.js
```javascript
const TutoringRequest = require('../models/TutoringRequest');
const Session = require('../models/Session');

const CONFIRMATION_WINDOW_HOURS = 48;
const CHECK_INTERVAL_MS = 5 * 60 * 1000; // every 5 minutes

// FR3.7/3.8: once the linked session's end time has passed, set a
// confirmationDeadline so the frontend knows to prompt both sides.
async function markEligibleForConfirmation() {
  const accepted = await TutoringRequest.find({ status: 'accepted', confirmationDeadline: null })
    .populate('sessionId');

  for (const request of accepted) {
    const session = request.sessionId;
    if (!session) continue;
    const endTime = new Date(session.startTime.getTime() + session.durationMinutes * 60000);
    if (new Date() > endTime) {
      request.confirmationDeadline = new Date(Date.now() + CONFIRMATION_WINDOW_HOURS * 60 * 60 * 1000);
      await request.save();
    }
  }
}

// FR3.10-adjacent: if the confirmation window passed without both sides
// confirming, mark expired. No balance change (nothing was ever deducted).
async function expireStaleRequests() {
  await TutoringRequest.updateMany(
    { status: 'accepted', confirmationDeadline: { $lt: new Date() } },
    { $set: { status: 'expired' } }
  );
}

function startScheduler() {
  setInterval(async () => {
    try {
      await markEligibleForConfirmation();
      await expireStaleRequests();
    } catch (err) {
      console.error('Scheduler error:', err.message);
    }
  }, CHECK_INTERVAL_MS);
}

module.exports = { startScheduler };
```

## File: services/sessionService.js
```javascript
const Session = require('../models/Session');
const { createSessionEvent } = require('./calendarService');

// Creates the Session document first (always succeeds independently), then
// best-effort attempts the calendar event. A calendar failure never blocks
// the session from existing — meetLink just stays empty (fallback shown on frontend).
async function createSessionWithCalendar({
  type, title, description, startTime, durationMinutes, capacity, hostId, attendeeEmails,
}) {
  const session = await Session.create({
    type, title, description, startTime, durationMinutes, capacity, hostId,
    attendeeIds: [hostId],
  });

  try {
    const { eventId, meetLink } = await createSessionEvent({
      title, description, startTime, durationMins: durationMinutes, attendeeEmails,
    });
    session.googleEventId = eventId;
    session.meetLink = meetLink;
    await session.save();
  } catch (err) {
    console.error('Calendar event creation failed:', err.message);
    // session already saved above, meetLink stays empty
  }

  return session;
}

module.exports = { createSessionWithCalendar };
```

## File: utils/AppError.js
```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
```

## File: utils/asyncHandler.js
```javascript
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
```

## File: utils/jwt.js
```javascript
const jwt = require('jsonwebtoken');

const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { signToken, verifyToken };
```

## File: utils/password.js
```javascript
const bcrypt = require('bcrypt');

const hashPassword = (plain) => bcrypt.hash(plain, 10);
const comparePassword = (plain, hash) => bcrypt.compare(plain, hash);

module.exports = { hashPassword, comparePassword };
```
