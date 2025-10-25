@echo off
echo ===================================
echo    Birthday Website for Valeria
echo ===================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
echo.
echo The website will open at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
call npm run dev
