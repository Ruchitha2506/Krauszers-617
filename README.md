# UI Interface Project

This repo contains a Vite + React + TypeScript frontend and an Express backend.

## Local dev

```bash
# root
npm i
cd backend && npm i && cd ..
cd frontend && npm i && cd ..

npm run start   # runs backend and frontend together
```

## Env vars

Create `frontend/.env` and `backend/.env` from `.env.example` values you define.

## Notes

- `node_modules/` is intentionally ignored — run `npm i` after cloning.
- Large assets are tracked with Git LFS (`.gitattributes`). Install LFS before committing:
  ```bash
  git lfs install
  ```
